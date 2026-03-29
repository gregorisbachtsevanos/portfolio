import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().trim().min(2).max(120),
	email: z.string().trim().email().max(200),
	message: z.string().trim().min(10).max(5000),
});

const boolFromEnv = (value: string | undefined, fallback: boolean) => {
	if (!value) {
		return fallback;
	}

	return value.toLowerCase() === "true";
};

const toEmailAddress = (value: string | undefined) => {
	if (!value) {
		return "";
	}

	const match = value.match(/<([^>]+)>/);
	return (match?.[1] ?? value).trim();
};

export async function POST(request: Request) {
	const payload = await request.json().catch(() => null);
	const parsed = contactSchema.safeParse(payload);

	if (!parsed.success) {
		return NextResponse.json(
			{ message: "Please complete all fields with valid values." },
			{ status: 400 },
		);
	}

	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT ?? "587");
	const user = process.env.SMTP_USER?.trim();
	const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
	const toEmail = toEmailAddress(process.env.CONTACT_TO_EMAIL);
	const fromEmail = toEmailAddress(process.env.CONTACT_FROM_EMAIL ?? user);
	const secure = boolFromEnv(process.env.SMTP_SECURE, port === 465);

	if (
		!host ||
		!user ||
		!pass ||
		!toEmail ||
		!fromEmail ||
		Number.isNaN(port)
	) {
		return NextResponse.json(
			{ message: "Email service is not configured on the server." },
			{ status: 500 },
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			host,
			port,
			secure,
			auth: {
				user,
				pass,
			},
		});

		await transporter.verify();

		const { name, email, message } = parsed.data;

		await transporter.sendMail({
			from: `Portfolio Contact <${fromEmail}>`,
			to: toEmail,
			replyTo: email,
			subject: `New portfolio contact from ${name}`,
			text: [
				"You received a new message from your portfolio contact form.",
				"",
				`Name: ${name}`,
				`Email: ${email}`,
				"",
				"Message:",
				message,
			].join("\n"),
		});

		return NextResponse.json({ message: "Message sent successfully." });
	} catch (error) {
		console.error("Contact email send failed", error);

		const debugMessage =
			process.env.NODE_ENV === "development" && error instanceof Error
				? `SMTP error: ${error.message}`
				: "Unable to send your message right now. Please try again.";

		return NextResponse.json(
			{
				message: debugMessage,
			},
			{ status: 502 },
		);
	}
}
