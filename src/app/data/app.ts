export interface AppData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: 'Business' | 'Pronunciation' | 'General' | 'Shadowing';
  priceMonthly: number;
  priceAnnualMonthlyCalc: number; // 年割時の月額換算
  trialDays: number;
  rating: number;
  affiliateLink: string;
  features: string[];
  pros: string[];
  cons: string[];
  logoUrl: string;
  asp: string;
}

export const apps: AppData[] = [
  {
    id: 'speak',
    name: 'Speak (スピーク)',
    tagline: 'AI先生と本気で話す英会話アプリ',
    description:
      'ネイティブAIとのロールプレイで発話量を最大化。文法フィードバックもリアルタイムに返ってくるので、短時間で会話力を底上げできます。',
    bestFor: 'General',
    priceMonthly: 3300,
    priceAnnualMonthlyCalc: 2750,
    trialDays: 7,
    rating: 4.9,
    affiliateLink: 'https://speak.com/jp?ref=your_id',
    features: ['AIロールプレイ', '文法即時矯正', '1000以上のトピック'],
    pros: ['人間相手より緊張しない', '発話量が圧倒的に多い', 'フィードバックが精密'],
    cons: ['フリートークは中級者以上向け', '自律的に学習する必要がある'],
    logoUrl: '/images/speak.png',
    asp: 'Direct/Referral',
  },
  {
    id: 'spiful',
    name: 'Spiful (スピフル)',
    tagline: 'ビジネス英語の瞬発力を鍛える',
    description: 'ビジネスシーンに特化した口頭英作文とシャドーイングで、会議で「使える」英語を習得。',
    bestFor: 'Shadowing',
    priceMonthly: 5478,
    priceAnnualMonthlyCalc: 3831,
    trialDays: 7,
    rating: 4.7,
    affiliateLink: 'https://afb.jp/...',
    features: ['ビジネスライティング', 'プロシャドーイング', 'ディクテーション'],
    pros: ['仕事で即戦力になるフレーズ', '理論に基づいた学習メソッド'],
    cons: ['地味なトレーニングが多い', 'エンタメ要素は少ない'],
    logoUrl: '/images/spiful.png',
    asp: 'afb',
  },
  {
    id: 'elsa',
    name: 'ELSA Speak',
    tagline: '発音矯正の世界標準アプリ',
    description: 'AIがあなたの発音を音素レベルで分析。ネイティブ度を数値化してゲーム感覚で改善。',
    bestFor: 'Pronunciation',
    priceMonthly: 900,
    priceAnnualMonthlyCalc: 700,
    trialDays: 0, // フリープランあり
    rating: 4.5,
    affiliateLink: 'https://elsaspeak.com/...',
    features: ['発音スコア化', 'AI会話', 'デイリーレッスン'],
    pros: ['発音矯正に特化している', '無料版でも機能が豊富'],
    cons: ['機能が多すぎて迷う', '会話の文脈練習はSpeakに劣る'],
    logoUrl: '/images/elsa.png',
    asp: 'Direct',
  },
  // 他のアプリデータもここに追加
];
