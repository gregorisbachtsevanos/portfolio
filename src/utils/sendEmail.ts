import config from '@/config';
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail', 'Outlook'
  auth: {
    user: config.nodemailerEmail,
    pass: config.nodemailerPassword,
  },
});

export const sendEmail = async (subject: string, html: string, replyTo: string, from?: string) => {
  const mailOptions = {
    from: from ?? config.nodemailerEmail,
    to: config.nodemailerEmail,
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
