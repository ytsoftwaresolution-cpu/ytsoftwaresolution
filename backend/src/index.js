import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const RESEND_FROM = process.env.RESEND_FROM || '';
const CONTACT_TO = process.env.CONTACT_TO || '';
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const canSendEmail = Boolean(resend && RESEND_FROM && CONTACT_TO);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/messages', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: 'Name, email, and message are required' });
  }
  if (!canSendEmail) {
    return res
      .status(500)
      .json({ success: false, error: 'Email service not configured' });
  }

  try {
    const mailSubject = subject || 'New Contact Form Submission';
    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `;
    await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: mailSubject,
      html
    });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.post('/api/enroll', async (req, res) => {
  const { name, email, phone, category, course, message } = req.body || {};
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and phone are required'
    });
  }
  if (!canSendEmail) {
    return res
      .status(500)
      .json({ success: false, error: 'Email service not configured' });
  }

  try {
    const html = `
      <h2>New Enrollment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Category:</strong> ${category || 'General Inquiry'}</p>
      <p><strong>Course:</strong> ${course || 'All Courses'}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message || '').replace(/\n/g, '<br/>')}</p>
    `;
    await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_TO,
      reply_to: email,
      subject: 'New Course Enrollment',
      html
    });
    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
