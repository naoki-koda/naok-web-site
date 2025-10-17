'use client';

import { sendMail, State } from '@/app/lib/sendMail';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

type FieldName = keyof NonNullable<State['errors']>;

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(sendMail, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message === 'redirect') {
      router.push('/done');
    } else if (state.message === 'failed') {
      router.push('/failed');
    }
  }, [state.message, router]);

  const renderError = (field: FieldName) =>
    state.errors?.[field]?.map((error) => (
      <p className="mt-2 text-sm text-rose-500" key={error}>
        {error}
      </p>
    ));

  return (
    <form
      action={formAction}
      className="group relative isolate overflow-hidden rounded-3xl border border-slate-200/60 bg-white/95 p-8 shadow-xl shadow-slate-900/10 backdrop-blur md:p-12 dark:border-white/10 dark:bg-slate-900/90"
    >
      {/* <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl transition-all duration-700 group-hover:translate-x-4 group-hover:-translate-y-2" /> */}
      {/* <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-orange-400/25 blur-3xl transition-all duration-700 group-hover:-translate-x-4 group-hover:translate-y-2" /> */}

      <div className="relative space-y-10">
        <header className="space-y-4 text-teal-950 dark:text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
            CONTACT FORM
          </span>
          <h2 className="text-2xl font-semibold md:text-3xl">
            ホームページ制作のご相談内容をお聞かせください
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            現状の課題や実現したいゴール、ご予算の目安など、わかる範囲で構いません。具体的なヒアリングを通じて最適なプランをご提案します。
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="lastName"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>お名前（姓）</span>
              <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="例）山田"
              required
              defaultValue={state.values?.lastName ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="lastName-error"
            />
            <div id="lastName-error" aria-live="polite" aria-atomic="true">
              {renderError('lastName')}
            </div>
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>お名前（名）</span>
              <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="例）太郎"
              required
              defaultValue={state.values?.firstName ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="firstName-error"
            />
            <div id="firstName-error" aria-live="polite" aria-atomic="true">
              {renderError('firstName')}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastNameKana"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>フリガナ（セイ）</span>
              <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <input
              id="lastNameKana"
              name="lastNameKana"
              type="text"
              placeholder="例）ヤマダ"
              required
              defaultValue={state.values?.lastNameKana ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm uppercase tracking-[0.2em] shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="lastNameKana-error"
            />
            <div id="lastNameKana-error" aria-live="polite" aria-atomic="true">
              {renderError('lastNameKana')}
            </div>
          </div>
          <div>
            <label
              htmlFor="firstNameKana"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>フリガナ（メイ）</span>
              <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <input
              id="firstNameKana"
              name="firstNameKana"
              type="text"
              placeholder="例）タロウ"
              required
              defaultValue={state.values?.firstNameKana ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm uppercase tracking-[0.2em] shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="firstNameKana-error"
            />
            <div id="firstNameKana-error" aria-live="polite" aria-atomic="true">
              {renderError('firstNameKana')}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>会社名・屋号</span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">任意</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="例）株式会NAO.K"
              defaultValue={state.values?.company ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="company-error"
            />
            <div id="company-error" aria-live="polite" aria-atomic="true">
              {renderError('company')}
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <span>電話番号</span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">任意</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="例）090-1234-5678"
              defaultValue={state.values?.phone ?? ''}
              className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="phone-error"
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              {renderError('phone')}
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <span>メールアドレス</span>
            <span className="text-xs font-semibold text-rose-500">必須</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            defaultValue={state.values?.email ?? ''}
            className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
            aria-describedby="email-error"
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {renderError('email')}
          </div>
        </div>

        <div>
          <label
            htmlFor="confirmEmail"
            className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <span>確認用メールアドレス</span>
            <span className="text-xs font-semibold text-rose-500">必須</span>
          </label>
          <input
            id="confirmEmail"
            name="confirmEmail"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            defaultValue={state.values?.confirmEmail ?? ''}
            className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
            aria-describedby="confirmEmail-error"
          />
          <div id="confirmEmail-error" aria-live="polite" aria-atomic="true">
            {renderError('confirmEmail')}
          </div>
        </div>

        <div>
          <label
            htmlFor="websiteUrl"
            className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <span>現状サイトURL</span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">任意</span>
          </label>
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            placeholder="https://www.example.com"
            defaultValue={state.values?.websiteUrl ?? ''}
            className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
            aria-describedby="websiteUrl-error"
          />
          <div id="websiteUrl-error" aria-live="polite" aria-atomic="true">
            {renderError('websiteUrl')}
          </div>
        </div>

        <fieldset className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100">
              ご希望の内容 <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <select
              name="serviceType"
              defaultValue={state.values?.serviceType ?? ''}
              required
              className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="serviceType-error"
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="新規ホームページ制作">新規ホームページ制作</option>
              <option value="サイトリニューアル">サイトリニューアル</option>
              <option value="キャンペーン・LP制作">キャンペーン・LP制作</option>
              <option value="ECサイト構築">ECサイト構築</option>
              <option value="運用・保守相談">運用・保守相談</option>
              <option value="その他">その他</option>
            </select>
            <div id="serviceType-error" aria-live="polite" aria-atomic="true">
              {renderError('serviceType')}
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100">
              ご予算の目安 <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <select
              name="budget"
              defaultValue={state.values?.budget ?? ''}
              required
              className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="budget-error"
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="〜30万円">〜30万円</option>
              <option value="30〜60万円">30〜60万円</option>
              <option value="60〜100万円">60〜100万円</option>
              <option value="100万円以上">100万円以上</option>
              <option value="未定・相談したい">未定・相談したい</option>
            </select>
            <div id="budget-error" aria-live="polite" aria-atomic="true">
              {renderError('budget')}
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-100">
              ご希望の納期 <span className="text-xs font-semibold text-rose-500">必須</span>
            </label>
            <select
              name="schedule"
              defaultValue={state.values?.schedule ?? ''}
              required
              className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
              aria-describedby="schedule-error"
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="1ヶ月以内">1ヶ月以内</option>
              <option value="2〜3ヶ月">2〜3ヶ月</option>
              <option value="4ヶ月以上">4ヶ月以上</option>
              <option value="相談して決めたい">相談して決めたい</option>
            </select>
            <div id="schedule-error" aria-live="polite" aria-atomic="true">
              {renderError('schedule')}
            </div>
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="message"
            className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-100"
          >
            <span>お問い合わせ内容</span>
            <span className="text-xs font-semibold text-rose-500">必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="例）新しいサービスの立ち上げに伴いホームページを制作したい。競合との差別化、リード獲得に強いLPも併せて相談したいです。"
            required
            defaultValue={state.values?.message ?? ''}
            className="mt-2 w-full rounded-3xl border border-slate-200/80 bg-white px-4 py-4 text-sm leading-relaxed shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300/60 dark:border-white/10 dark:bg-slate-950/70"
            aria-describedby="message-error"
          />
          <div id="message-error" aria-live="polite" aria-atomic="true">
            {renderError('message')}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-50/80 px-4 py-4 text-xs text-slate-500 dark:bg-slate-800/50 dark:text-slate-300 md:px-6 md:py-5">
          入力いただいた情報は、お問い合わせの対応以外の目的では利用いたしません。送信前にプライバシーポリシーをご確認ください。
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            送信後、1営業日以内にメールでご連絡いたします。
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-300 hover:brightness-105 dark:shadow-none"
          >
            無料で相談する
          </button>
        </div>
      </div>
    </form>
  );
}
