import express from 'express';
import { Resend } from 'resend';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { validateContactForm } from '../middleware/validator.js';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// お問い合わせ送信エンドポイント
router.post('/contact', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Resend APIでメール送信
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@imada-lab.com',
      to: process.env.EMAIL_TO || 'contact@imada-lab.com',
      subject: `[imada-lab お問い合わせ] ${subject}`,
      html: `
        <h2>お問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <h3>お問い合わせ内容:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</small></p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        success: false,
        error: 'メール送信に失敗しました'
      });
    }

    res.json({
      success: true,
      message: 'お問い合わせを送信しました'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'エラーが発生しました'
    });
  }
});

export default router;
