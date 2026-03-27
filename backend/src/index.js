import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '0', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_FROM = process.env.SMTP_FROM || '';
const CONTACT_TO = process.env.CONTACT_TO || '';
const SMTP_SECURE = (process.env.SMTP_SECURE || '').toLowerCase() === 'true';

const canSendEmail = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && SMTP_FROM);
const mailer = canSendEmail
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE || SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    })
  : null;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
  }
  if (!mailer || !CONTACT_TO) {
    return res.status(500).json({ success: false, error: 'Email service not configured' });
  }

  try {
    const subject = 'New Contact Form Submission';
    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `;
    await mailer.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      html
    });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
