'use server'

import nodemailer from 'nodemailer';
import { sendMailSchema } from './sendMailSchema';

export type State = {
  errors?: {
    lastName?: string[];
    firstName?: string[];
    lastNameKana?: string[];
    firstNameKana?: string[];
    company?: string[];
    email?: string[];
    confirmEmail?: string[];
    phone?: string[];
    websiteUrl?: string[];
    serviceType?: string[];
    budget?: string[];
    schedule?: string[];
    message?: string[];
  };
  values?: {
    lastName?: string;
    lastNameKana?: string;
    firstName?: string;
    firstNameKana?: string;
    company?: string;
    email?: string;
    confirmEmail?: string;
    phone?: string;
    websiteUrl?: string;
    serviceType?: string;
    budget?: string;
    schedule?: string;
    message?: string;
  };
  message?: string | null;
};


export async function sendMail(_prevState: State, formData: FormData): Promise<State> {
  const validatedFields = sendMailSchema.safeParse({
    lastName: formData.get('lastName')?.toString() || '',
    firstName: formData.get('firstName')?.toString() || '',
    lastNameKana: formData.get('lastNameKana')?.toString() || '',
    firstNameKana: formData.get('firstNameKana')?.toString() || '',
    company: formData.get('company')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    confirmEmail: formData.get('confirmEmail')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    websiteUrl: formData.get('websiteUrl')?.toString() || '',
    serviceType: formData.get('serviceType')?.toString() || '',
    budget: formData.get('budget')?.toString() || '',
    schedule: formData.get('schedule')?.toString() || '',
    message: formData.get('message')?.toString() || '',
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      values: {
        lastName: formData.get('lastName')?.toString(),
        lastNameKana: formData.get('lastNameKana')?.toString(),
        firstName: formData.get('firstName')?.toString(),
        firstNameKana: formData.get('firstNameKana')?.toString(),
        company: formData.get('company')?.toString(),
        email: formData.get('email')?.toString(),
        confirmEmail: formData.get('confirmEmail')?.toString(),
        phone: formData.get('phone')?.toString(),
        websiteUrl: formData.get('websiteUrl')?.toString(),
        serviceType: formData.get('serviceType')?.toString(),
        budget: formData.get('budget')?.toString(),
        schedule: formData.get('schedule')?.toString(),
        message: formData.get('message')?.toString(),
      },
      message: null,
    };
  }

  const {
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    company,
    email,
    phone,
    websiteUrl,
    serviceType,
    budget,
    schedule,
    message,
  } = validatedFields.data;

  try {
    const formatField = (value?: string) =>
      value && value.trim().length > 0 ? value.trim() : '（未入力）';

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
  【読み仮名】${lastNameKana} ${firstNameKana}
  【会社名】${formatField(company)}
  【メール】${email}
  【電話番号】${formatField(phone)}
  【現状サイトURL】${formatField(websiteUrl)}
  【依頼内容】${serviceType}
  【想定予算】${budget}
  【希望納期】${schedule}
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
