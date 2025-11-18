// メールアドレスのバリデーション
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// お問い合わせフォームのバリデーション
export const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  // お名前のバリデーション
  if (!name || name.trim().length === 0) {
    errors.name = 'お名前を入力してください';
  }

  // メールアドレスのバリデーション
  if (!email || email.trim().length === 0) {
    errors.email = 'メールアドレスを入力してください';
  } else if (!isValidEmail(email)) {
    errors.email = '有効なメールアドレスを入力してください';
  }

  // 件名のバリデーション
  if (!subject || subject.trim().length === 0) {
    errors.subject = '件名を入力してください';
  }

  // お問い合わせ内容のバリデーション
  if (!message || message.trim().length === 0) {
    errors.message = 'お問い合わせ内容を入力してください';
  } else if (message.trim().length < 10) {
    errors.message = 'お問い合わせ内容は10文字以上入力してください';
  }

  // エラーがある場合
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'バリデーションエラー',
      errors
    });
  }

  next();
};
