
'use server'

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';

export type State = {
  errors?: {
    email?: string[];
    message?: string[];
  };
  message?: string | null;
}


export async function sendMail(prevState: State, formData: FormData): Promise<State> {
  const lastName = formData.get('lastName')?.toString() || '';
  const firstName = formData.get('firstName')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // バリデーション例（必要に応じて）
  const errors: State["errors"] = {};
  if (!email.includes('@')) {
    errors.email = ['有効なメールアドレスを入力してください。'];
  }
  if (!message || message.length < 5) {
    errors.message = ['メッセージを5文字以上入力してください。'];
  }

  if (Object.keys(errors).length > 0) {
    return { errors, message: null };
  }

  try {
    // メール送信設定
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // または 'SMTP' サーバー設定
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const fullName = `${lastName} ${firstName}`.trim();

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER!, // 管理者宛て
      subject: 'お問い合わせフォームより',
      text: `
  【お名前】${fullName}
  【メール】${email}
  【メッセージ】
  ${message}
        `,
    });
    return { message: 'redirect' };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { message: 'メールの送信中にエラーが発生しました。' };
  }
}

