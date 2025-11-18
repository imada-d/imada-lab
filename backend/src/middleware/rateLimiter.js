import rateLimit from 'express-rate-limit';

// お問い合わせフォーム用のレート制限
// 同一IPから1時間に3回まで
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1時間
  max: 3, // 最大3回
  message: {
    success: false,
    error: 'お問い合わせの送信回数が上限に達しました。しばらく時間をおいてから再度お試しください。'
  },
  standardHeaders: true,
  legacyHeaders: false,
});
