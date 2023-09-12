import { config } from '@/config';
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail', 'Outlook'
  auth: {
    user: config.nodemailer.email,
    pass: config.nodemailer.password,
  },
});

export const sendEmail = async (subject: string, html: string, replyTo: string, from?: string) => {
  const mailOptions = {
    from: from ?? config.nodemailer.email,
    to: config.nodemailer.email,
    subject,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
