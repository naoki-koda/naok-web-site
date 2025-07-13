'use client';

import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
      <div className="text-7xl mb-6">🚧</div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">ただいま準備中です</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        このページは現在準備中です。<br />
        公開まで今しばらくお待ちください。
      </p>
      <Link
        href="/"
        className="inline-block rounded-md bg-sky-500 px-6 py-2 text-white hover:bg-sky-600 transition"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
