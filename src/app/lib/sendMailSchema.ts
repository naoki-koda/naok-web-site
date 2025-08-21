import { z } from 'zod';

export const sendMailSchema = z.object({
  lastName: z.string().min(1, '姓を入力してください'),
  firstName: z.string().min(1, '名を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  confirmEmail: z.string().email('有効なメールアドレスを入力してください'),
  message: z.string().min(5, 'メッセージを5文字以上入力してください'),
}).refine((data) => data.email === data.confirmEmail, {
  message: '確認用メールアドレスがメールアドレスと一致しません',
  path: ['confirmEmail'],
});
