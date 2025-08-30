
'use client'

import { sendMail, State } from '@/app/lib/sendMail';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendMail, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message === 'redirect') {
      router.push('/done');
    } else if (state.message === 'failed') {
      router.push("/failed");
    }
  }, [state.message, router]);
  return (
    <form action={formAction}>
      <div className="rounded-xl bg-gray-100 mx-4 my-4 p-4 md-p-6 dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lastName" className="md-1 block text-sm font-medium">
              性
            </label>
            <div className="relative mt-1 rounded-md">
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="例)山田"
                className="peer w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                defaultValue={state.values?.lastName ?? ''}
              >
              </input>
              <div id="lastName-error" aria-live="polite" aria-atomic="true">
                {state.errors?.lastName &&
                  state.errors.lastName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="firstName" className="md-1 block text-sm font-medium">
              名
            </label>
            <div className="relative mt-1 rounded-md">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="例）太郎"
                className="peer w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                defaultValue={state.values?.firstName ?? ''}
              />
              <div id="firstName-error" aria-live="polite" aria-atomic="true">
                {state.errors?.firstName &&
                  state.errors.firstName.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="lastNameKana" className="md-1 block text-sm font-medium">
              フリガナ(性)
            </label>
            <div className="relative mt-1 rounded-md">
              <input
                id="lastNameKana"
                type="text"
                name="lastNameKana"
                placeholder="例)ヤマダ"
                className="peer w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                defaultValue={state.values?.lastNameKana ?? ''}
              >
              </input>
            </div>
          </div>
          <div>
            <label htmlFor="firstNameKana" className="md-1 block text-sm font-medium">
              フリガナ(名)
            </label>
            <div className="relative mt-1 rounded-md">
              <input
                type="text"
                id="firstNameKana"
                name="firstNameKana"
                placeholder="例）タロウ"
                className="w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                defaultValue={state.values?.firstNameKana ?? ''}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium">
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            defaultValue={state.values?.email ?? ''}
            className="peer w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          </input>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium">
            確認用メールアドレス
          </label>
          <input
            id="confirmEmail"
            type="email"
            name="confirmEmail"
            placeholder="you@example.com"
            defaultValue={state.values?.confirmEmail ?? ''}
            required
            className="peer w-full rounded-md border border-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          </input>
          <div id="confirmEmail-error" aria-live="polite" aria-atomic="true">
            {state.errors?.confirmEmail &&
              state.errors.confirmEmail.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="作成したいWEBサイトの事業、打ち合わせ希望日などお気軽にお書きください。"
            className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={state.values?.message ?? ''}
            required
          >
          </textarea>

        </div>
        <div className="flex justify-center items-center">
          <button className="rounded-md mt-4 bg-orange-400 px-6 py-2 text-white text-base hover:bg-gray-700 transition-colors">
            送信
          </button>
        </div>

      </div>
    </form >

  )
}
