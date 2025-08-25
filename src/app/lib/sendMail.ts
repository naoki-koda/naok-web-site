'use server'

import nodemailer from 'nodemailer';
import { redirect } from 'next/navigation';
import { sendMailSchema } from './sendMailSchema';

export type State = {
  errors?: {
    lastName?: string[];
    firstName?: string[];
    message?: string[];
  };
  message?: string | null;
}


export async function sendMail(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = sendMailSchema.safeParse({
    lastName: formData.get('lastName')?.toString() || '',
    firstName: formData.get('firstName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    confirmEmail: formData.get('confirmEmail')?.toString() || '',
    message: formData.get('message')?.toString() || '',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: null,
    };
  }

  const { lastName, firstName, email, message } = validatedFields.data;

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
  【読み仮名】${lastName} ${firstName}
  【メール】${email}
  【メッセージ】
  ${message}
        `,
    });
    return { message: 'redirect' };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return { message: 'failed' };
  }
}

