import { z } from 'zod';

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine(
    (value) =>
      !value ||
      value.length === 0 ||
      z.string().url().safeParse(value).success,
    { message: '有効なURLを https:// から入力してください' },
  );

const optionalPhone = z
  .string()
  .trim()
  .optional()
  .refine(
    (value) =>
      !value ||
      value.length === 0 ||
      /^[0-9+\-()\s]{6,}$/.test(value),
    { message: '電話番号の形式が正しくありません' },
  );

export const sendMailSchema = z
  .object({
    lastName: z.string().trim().min(1, '姓を入力してください'),
    firstName: z.string().trim().min(1, '名を入力してください'),
    lastNameKana: z.string().trim().min(1, 'フリガナ(性)を入力してください'),
    firstNameKana: z.string().trim().min(1, 'フリガナ(名)を入力してください'),
    company: z.string().trim().max(120).optional(),
    email: z.string().email('有効なメールアドレスを入力してください'),
    confirmEmail: z.string().email('有効なメールアドレスを入力してください'),
    phone: optionalPhone,
    websiteUrl: optionalUrl,
    serviceType: z.string().min(1, 'ご希望の内容を選択してください'),
    budget: z.string().min(1, 'ご予算を選択してください'),
    schedule: z.string().min(1, 'ご希望の納期を選択してください'),
    message: z.string().min(5, 'お問い合わせ内容を5文字以上入力してください'),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: '確認用メールアドレスがメールアドレスと一致しません',
    path: ['confirmEmail'],
  });
