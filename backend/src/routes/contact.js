import express from 'express';
import { Resend } from 'resend';
import { contactLimiter } from '../middleware/rateLimiter.js';
import { validateContactForm } from '../middleware/validator.js';
import { saveContact, getAllContacts, markAsRead } from '../utils/storage.js';

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// お問い合わせ送信エンドポイント
router.post('/contact', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // データを保存
    const savedContact = await saveContact({ name, email, subject, message });

    // Resend APIキーが設定されている場合のみメール送信
    if (process.env.RESEND_API_KEY) {
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
        // メール送信に失敗してもデータは保存されているので、警告のみ
        console.warn('Email sending failed, but contact data was saved');
      }
    } else {
      console.log('RESEND_API_KEY not set, skipping email send');
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

// お問い合わせ一覧取得エンドポイント（管理画面用）
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Failed to get contacts:', error);
    res.status(500).json({
      success: false,
      error: 'データの取得に失敗しました'
    });
  }
});

// お問い合わせを既読にするエンドポイント
router.patch('/contacts/:id/read', async (req, res) => {
  try {
    const contactId = parseInt(req.params.id);
    const contact = await markAsRead(contactId);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'お問い合わせが見つかりません'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Failed to mark as read:', error);
    res.status(500).json({
      success: false,
      error: '更新に失敗しました'
    });
  }
});

export default router;
