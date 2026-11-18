import nodemailer from 'nodemailer';

export function createMailer() {
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const isConfigured = Boolean(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    Number.isInteger(smtpPort) &&
    smtpPort > 0 &&
    smtpPort <= 65535,
  );

  if (!isConfigured) return null;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return {
    sender: process.env.SMTP_USER,
    sendMail: (message) => transport.sendMail(message),
  };
}
