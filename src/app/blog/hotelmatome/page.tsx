import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type RankingItem = {
  rank: number;
  brand: string;
  name: string;
  summary: string;
  reservation: string[];
  points: string[];
  showcase?: {
    image: string;
    alt: string;
    bullets: string[];
  };
};

type Message = {
  id: number;
  role: 'user' | 'advisor';
  name: string;
  text: string;
};

type RakutenAd = {
  href: string;
  buttonHref: string;
  imageSrc: string;
  title: string;
  price: string;
};

const selectionCriteria = [
  {
    title: '予約体験の快適さ',
    detail: '公式アプリやWebでの検索・決済・モバイルチェックインなど、旅前のストレスを減らせるか。',
  },
  {
    title: 'ポイント付与率と使いやすさ',
    detail: '宿泊金額に対する還元率、クレジットカード連携、無料宿泊への交換のしやすさを重視。',
  },
];

const messages: Message[] = [
  {
    id: 1,
    role: 'user',
    name: 'ご相談者',
    text: '出張や旅行が多いので、どのホテルブランドでポイントを貯めるべきか迷っています……。',
  },
  {
    id: 2,
    role: 'advisor',
    name: 'アドバイザー',
    text: 'アプリの使いやすさとポイント還元のバランスで選ぶのが近道です。予約の手軽さも旅の満足度に直結しますよ。',
  },
  {
    id: 3,
    role: 'user',
    name: 'ご相談者',
    text: 'OTAやカードの特典も含めると情報が散らばっていて、比較しづらいんですよね。',
  },
  {
    id: 4,
    role: 'advisor',
    name: 'アドバイザー',
    text: 'この記事では、外資・国内チェーンをまとめてランキング化しました。まずは1位のマリオットから順番に見ていきましょう。',
  },
];

const ranking: RankingItem[] = [
  {
    rank: 1,
    brand: 'Marriott Bonvoy',
    name: 'マリオット',
    summary:
      '世界8,000軒超のホテルを横断できるMarriott Bonvoyアプリは、検索→予約→決済→チャット→モバイルキーまで一気通貫で完結。Bonvoyアメリカン・エキスプレスカードとの連携で、日常決済からも爆発的にポイントが貯まります。',
    reservation: [
      'モバイルチェックイン／チェックアウト、モバイルキー、スタッフとのチャットをアプリで完結',
      'Bonvoyアプリ上でアップグレードやレイトチェックアウトのリクエストが可能',
    ],
    points: [
      '1米ドルにつき10ポイント（ラグジュアリー含む多くのブランド）＋ステータスで25〜75%のボーナス',
      'Marriott Bonvoy アメックスで100円=3ポイント／カード継続で15泊分の宿泊実績付与',
    ],
    showcase: {
      image: '/mariottapp.jpg',
      alt: 'Marriott Bonvoyアプリのスクリーンショット',
      bullets: [
        'アプリ全体が日本語対応でUIも直感的',
        'マップに料金と位置が同時表示され、旅程が立てやすい',
        'マップから気になるホテルをタップすると即予約画面へ遷移',
        '予約詳細からワンタップでマップへ戻れ、候補比較がスムーズ',
      ],
    },
  },
  {
    rank: 2,
    brand: 'Hilton Honors',
    name: 'ヒルトン',
    summary:
      'Hilton Honorsアプリは「客室指定」「デジタルキー」「チームメンバーとのチャット」など非接触機能が充実。ポイントは10ポイント/米ドルが基本で、ダブルポイントキャンペーンも頻繁に実施されます。',
    reservation: [
      'アプリからフロア平面図を見ながら客室を指定できる',
      'ウォレット搭載のデジタルキーでフロントをスキップ、家族分のキー共有も可能',
    ],
    points: [
      '1米ドル=10ポイント（トゥルー by Hiltonなど一部ブランドは5ポイント）',
      'シルバー以上で15〜100%のボーナス。ヒルトン・オナーズアメックスで決済ポイント＋ゴールド特典',
    ],
    showcase: {
      image: '/hiltonapp.jpg',
      alt: 'Hilton Honorsアプリの画面',
      bullets: [
        'インターフェースは英語中心で日本語非対応なのが惜しい',
        'スマホアプリで客室選択・デジタルキーが使えるため、非対面チェックインがスムーズ',
      ],
    },
  },
  {
    rank: 3,
    brand: 'Seibu Prince Club',
    name: 'プリンスホテル',
    summary:
      '西武プリンスクラブアプリは宿泊予約に加え、西武鉄道・スポーツ・レジャー施設のチケット購入ともポイントを共通化。国内外のプリンスホテル／ザ・プリンスギャラリーを同じIDで管理できるのが強みです。',
    reservation: [
      'アプリで宿泊・レストラン・ゴルフを一括予約、会員専用料金を即時表示',
      'デジタル会員証でチェックイン、館内のキャッシュレス決済もポイント加算',
    ],
    points: [
      '110円（税込）ごとに1ポイント。1ポイント=1円で利用でき、ダイヤモンド会員は＋7%のボーナス',
      '西武線定期やプリンスカード決済でもポイントが貯まるため日常利用との相性が良い',
    ],
  },
  {
    rank: 4,
    brand: 'MGH Rewards Club',
    name: '三井ガーデンホテル',
    summary:
      'MGH Rewards Clubアプリは、三井ガーデン／sequence／ザ セレスティンといったMGH系列を横断管理。アプリ限定プランや事前チェックイン機能が使いやすく、比較的手軽にステータスが上がるのも魅力です。',
    reservation: [
      'アプリで最安値保証プランを提示、QRコードでスピーディーにチェックイン',
      '宿泊レシートや請求書をアプリで閲覧できるため出張精算が簡単',
    ],
    points: [
      '宿泊料金の5%をポイント還元（100円=5pt）。1pt=1円相当で宿泊代に充当',
      '利用回数に応じて7〜9%まで還元率アップ、アプリ限定で即時ポイント利用可能',
    ],
  },
  {
    rank: 5,
    brand: 'APAポイント',
    name: 'アパホテル',
    summary:
      '「アパ直」アプリは検索スピードと事前チェックイン機能が秀逸。ホテル到着時はQRコードをかざすだけで鍵を受け取り、アプリで領収書も取得できます。ポイントはアプリ・公式サイト経由なら常時10%還元。全国700店以上で使えるのが圧倒的です。',
    reservation: [
      '現在地から最安値ホテルを瞬時に検索、キャッシュレス決済でチェックイン時間を短縮',
      'アプリ上で部屋番号・暗証番号を確認できるスマートパス発行に対応',
    ],
    points: [
      'アパ直（公式アプリ／Web）からの予約は宿泊料金の10%をポイント還元＋即時利用可',
      '会員ランクが上がるとボーナスポイントやレイトチェックアウト特典が追加',
    ],
  },
  {
    rank: 6,
    brand: 'Toyoko Inn Club',
    name: '東横イン',
    summary:
      '東横INNアプリと公式サイトはシンプルで軽く、ビジネス客が数分で予約を完了できる導線が好評。クラブカード（アプリ会員証対応）を持てば、宿泊のたびにポイントが貯まり、10ポイントで1泊無料というわかりやすい仕組みです。',
    reservation: [
      'アプリで周辺ホテルの空室・料金を一発比較し、24時間いつでも即予約',
      'アプリ会員証を提示するだけでチェックインが完了、連泊時は部屋番号が固定されやすい',
    ],
    points: [
      '泊数ポイント制（1泊=1ポイント）。10ポイントでシングル1泊無料',
      '平日5%／休日20%の割引がある会員料金に加え、キャッシュレス決済でさらに1ポイント付与',
    ],
  },
  {
    rank: 7,
    brand: 'Hoshino Resorts',
    name: '星野リゾート',
    summary:
      '星野リゾートはホテル運営に特化する方針で、スマホアプリはなくWeb予約中心。OMOブランドに導入されたOMOメンバーシップでは直営サイト予約でポイントが付与されますが、ハイエンドの「星のや」には適用されないのが惜しいポイントです。一方で、システムの自社開発化を行いITコストを抑えて現場サービスに投資するスタンスが徹底されています。',
    reservation: [
      '公式Webでブランド横断のプラン検索が可能。滞在前アンケートで体験プログラムを提案',
      'OMOブランドではOMOベースのチェックインカウンターやアクティビティ予約がスムーズ',
    ],
    points: [
      'OMOメンバーシップは宿泊料金の約5%相当がポイント還元。ただし星のや・リゾナーレは対象外',
      'ポイントはOMOアクティビティやグッズ購入に充当可能で、現地での使い切りもしやすい',
    ],
  },
];

const dataSources = [
  { name: 'Marriott Bonvoy – Earn Points', url: 'https://www.marriott.com/loyalty/earn/hotels.mi' },
  { name: 'Hilton Honors Program', url: 'https://www.hilton.com/en/hilton-honors/' },
  { name: 'World of Hyatt – Ways to Earn', url: 'https://world.hyatt.com/content/gp/en/rewards/earn-points.html' },
  { name: 'Seibu Prince Club', url: 'https://club.seibu-prince.com/' },
  { name: 'MGH Rewards Club', url: 'https://www.gardenhotels.co.jp/mgh-rewards/' },
  { name: 'アパ直（APA公式サイト）', url: 'https://www.apahotel.com/' },
  { name: '東横INNクラブカード', url: 'https://www.toyoko-inn.com/card/' },
  { name: '星野リゾート公式サイト', url: 'https://www.hoshinoresorts.com/' },
];

const rakutenLogo = 'https://static.affiliate.rakuten.co.jp/makelink/rl.svg';

const rakutenAds: RakutenAd[] = [
  {
    href: 'https://hb.afl.rakuten.co.jp/ichiba/53f50baf.f71f19bc.53f50bb0.2ab5d8e8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdecori%2Fy-342%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    buttonHref: 'https://hb.afl.rakuten.co.jp/ichiba/53f50baf.f71f19bc.53f50bb0.2ab5d8e8/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fdecori%2Fy-342%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==',
    imageSrc: 'https://hbb.afl.rakuten.co.jp/hgb/53f50baf.f71f19bc.53f50bb0.2ab5d8e8/?me_id=1431235&item_id=10000319&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fdecori%2Fcabinet%2F12282578%2Fimgrc0114070921.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    title: '＼ 総合ランキング2日連続第1位獲得／ご好評につき予約販売特価 65％OFFクーポン継続配布中！NISHIZARC 保冷剤 ステンレス保冷剤 長時間 強力保冷 小型 クーラーボックス 繰り返し使える 冷蔵 冷凍対応 熱中症対策 急速冷却 アイスパック お弁当 釣り キャンプ BBQ',
    price: '価格：2,880円～（税込、送料無料)',
  },
  {
    href: 'https://hb.afl.rakuten.co.jp/ichiba/53f50f12.3f8b536f.53f50f13.7cfce3c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ft-interior%2Fqrt01%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    buttonHref: 'https://hb.afl.rakuten.co.jp/ichiba/53f50f12.3f8b536f.53f50f13.7cfce3c7/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ft-interior%2Fqrt01%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==',
    imageSrc: 'https://hbb.afl.rakuten.co.jp/hgb/53f50f12.3f8b536f.53f50f13.7cfce3c7/?me_id=1411961&item_id=10000236&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Ft-interior%2Fcabinet%2Fitem%2Fusual%2Fqrt01_bp1.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    title: '[レビュー特典有り] NERUS 正規品 とろとろケット 洗える 掛け布団 布団 タオルケット ブランケット 肌掛け布団 肌布団 くしゅくしゅケット とろーり とろける とろとろ ケット 夏 夏用 夏布団 冷感 夏掛け布団 夏用布団 QRT01',
    price: '価格：2,980円～（税込、送料無料)',
  },
  {
    href: 'https://hb.afl.rakuten.co.jp/ichiba/53f53b65.9a931d00.53f53b66.2cde603a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpmone%2F4520260411843%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    buttonHref: 'https://hb.afl.rakuten.co.jp/ichiba/53f53b65.9a931d00.53f53b66.2cde603a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpmone%2F4520260411843%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==',
    imageSrc: 'https://hbb.afl.rakuten.co.jp/hgb/53f53b65.9a931d00.53f53b66.2cde603a/?me_id=1240930&item_id=10031565&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fpmone%2Fcabinet%2F4520260411843.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    title: '【TVで話題】【すぐ飲める粉末タイプ】『簡単 ひし茶 30包』ヒシエキス 菱エキス　 AGE終末糖化物質 お湯で溶かす分包タイプ',
    price: '価格：2,480円（税込、送料無料)',
  },
  {
    href: 'https://hb.afl.rakuten.co.jp/ichiba/53f54426.19437ef1.53f54427.16fa0e77/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnippon-shinyaku-shop%2F4510e%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D',
    buttonHref: 'https://hb.afl.rakuten.co.jp/ichiba/53f54426.19437ef1.53f54427.16fa0e77/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fnippon-shinyaku-shop%2F4510e%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==',
    imageSrc: 'https://hbb.afl.rakuten.co.jp/hgb/53f54426.19437ef1.53f54427.16fa0e77/?me_id=1340863&item_id=10000215&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fnippon-shinyaku-shop%2Fcabinet%2Fcf%2F11096597%2F4510e_260414.jpg%3F_ex%3D240x240&s=240x240&t=picttext',
    title: 'プロテイン ホエイプロテイン ウィンゾーン パーフェクトチョイス 1kg 日本新薬 WPC タンパク質 BCAA EAA ビタミン ミネラル 選べる風味 WINZONE シェイカーありなし 男性 女性 男女兼用 筋トレ 置き換え ダイエット 美容',
    price: '価格：5,380円～（税込、送料無料)',
  },
];

function RakutenAffiliateAd({ ad }: { ad: RakutenAd }) {
  const priceNotice =
    '[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]';

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-[504px] overflow-hidden rounded-xl border border-[#95a5a6] bg-white p-[5px] text-center">
        <div className="flex flex-col sm:flex-row">
          <div className="mx-auto w-full max-w-[240px] shrink-0">
            <a href={ad.href} target="_blank" rel="nofollow sponsored noopener" className="break-words">
              <img
                src={ad.imageSrc}
                width={240}
                height={240}
                alt={priceNotice}
                title={priceNotice}
                className="m-0.5 h-auto w-full"
              />
            </a>
          </div>
          <div className="w-full sm:w-[248px]">
            <p className="m-0 break-words px-1.5 py-0.5 text-left text-xs leading-[1.4em] text-slate-900">
              <a
                href={ad.href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="break-words text-inherit underline-offset-2 hover:underline"
              >
                {ad.title}
              </a>
              <br />
              <span>{ad.price}</span> <span className="text-[#BBB]">(2026/5/19時点)</span>
            </p>
            <div className="m-2.5 flex items-center justify-between gap-2">
              <a href={ad.href} target="_blank" rel="nofollow sponsored noopener" className="min-w-0 break-words">
                <img src={rakutenLogo} alt="Rakuten" className="h-auto max-h-[27px] w-auto" />
              </a>
              <a
                href={ad.buttonHref}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="h-[27px] w-[41%] min-w-[128px] rounded-2xl bg-[#bf0000] px-3 text-center text-xs font-medium leading-[27px] text-white"
              >
                楽天で購入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-gradient-to-b from-rose-50 via-white to-slate-50">
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="rounded-[32px] bg-white/90 p-10 shadow-xl shadow-rose-100 ring-1 ring-rose-100">
          <h1 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          【{currentYear}年版】<br className="hidden sm:block" />
          国内ホテル<br/>おすすめ8選！<br />
          <span className="text-blue-600">会員になるべきホテルブランドの<br/>予約ポイントシステム</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
              旅行のたびにホテルを変える楽しさもありますが、ロイヤリティプログラムを活用するとアップグレードや無料宿泊などの特典が加速します。ここでは
              <span className="font-semibold text-rose-600"> 予約体験 </span>
              と<span className="font-semibold text-rose-600"> ポイント還元</span>の2軸で国内外の大手チェーンを比較しました。
          </p>
          <div className="mt-4 text-sm text-gray-500">
          最終更新: 2025年11月
          </div>
        </header>

        <section className="mt-12 rounded-[32px] border border-rose-100/80 bg-white/95 p-8 shadow-lg shadow-rose-100">
          <h2 className="text-2xl font-bold text-slate-900">結論：まず押さえておくべきブランド</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            公式アプリの使いやすさ・ポイントの貯まりやすさの双方で高評価だったのは以下の順番でした。Marriott BonvoyとHilton
            Honorsはアプリ機能・還元率ともに頭一つ抜けており、国内チェーンではプリンスホテルと三井ガーデンホテルがバランス良く高評価です。
          </p>
          <ol className="mt-5 space-y-2 text-sm font-semibold text-slate-800">
            <li>1位：マリオット（Marriott International）</li>
            <li>2位：ヒルトン（Hilton Hotels & Resorts）</li>
            <li>3位：プリンスホテル（Prince Hotels）</li>
            <li>4位：三井ガーデンホテル（Mitsui Garden Hotel）</li>
            <li>5位：アパホテル</li>
            <li>6位：東横イン</li>
            <li>7位：星野リゾート</li>
          </ol>
        </section>

        <section className="mt-12 rounded-[32px] border border-slate-100 bg-white/95 p-6 shadow-lg shadow-slate-100">
          <h3 className="text-xl font-semibold text-slate-900">アドバイザーとのやり取り</h3>
          <div className="mt-6 space-y-4">
            {messages.map((msg) => {
              const isAdvisor = msg.role === 'advisor';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isAdvisor ? 'justify-start' : 'justify-end'}`}
                >
                  {isAdvisor && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                      A
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      isAdvisor ? 'bg-white text-slate-900 border border-slate-100' : 'bg-emerald-500 text-white'
                    }`}
                  >
                    <p className="mb-1 text-[11px] font-semibold opacity-70">{msg.name}</p>
                    <p>{msg.text}</p>
                  </div>
                  {!isAdvisor && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                      Q
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <RakutenAffiliateAd ad={rakutenAds[3]} />

        <section className="mt-14 space-y-10">
          {ranking.map((hotel, idx) => (
            <React.Fragment key={hotel.rank}>
                <article
                key={hotel.rank}
                className="rounded-[32px] border border-slate-100 bg-white/95 p-8 shadow-lg shadow-slate-100"
                >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                    <span className="inline-flex items-center rounded-full bg-rose-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-rose-600">
                        Ranking #{hotel.rank}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold text-slate-900">
                        {hotel.brand} <span className="text-base font-semibold text-slate-500">({hotel.name})</span>
                    </h2>
                    </div>
                    <div className="text-sm font-semibold text-slate-500">予約体験 × ポイント還元で評価</div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{hotel.summary}</p>
                <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reservation UX</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                        {hotel.reservation.map((point) => (
                        <li key={point}>{point}</li>
                        ))}
                    </ul>
                    </div>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Point Program</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                    {hotel.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                    </ul>
                </div>
                </div>
                {hotel.showcase && (
                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
                    <div className="shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 md:w-1/2">
                    <Image
                        src={hotel.showcase.image}
                        alt={hotel.showcase.alt}
                        width={560}
                        height={360}
                        className="h-auto w-full rounded-xl object-cover"
                    />
                    </div>
                    <div className="flex-1 space-y-3 text-sm leading-relaxed text-slate-700">
                    {hotel.showcase.bullets.map((point) => (
                        <p key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                        {point}
                        </p>
                    ))}
                    </div>
                </div>
                )}
            </article>
            {idx === 1 && (
              <RakutenAffiliateAd ad={rakutenAds[0]} />
            )}
            {idx === 3 && (
              <RakutenAffiliateAd ad={rakutenAds[1]} />
            )}
            {idx === 5 && (
              <RakutenAffiliateAd ad={rakutenAds[2]} />
            )}
          </React.Fragment>
          ))}
        </section>
        <section className="mt-16 rounded-[32px] bg-slate-900 p-8 text-slate-100">
          <h3 className="text-2xl font-semibold">選び方のヒント</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {['出張が多いなら全国展開＆泊数ポイント制（東横INN・アパ）', '海外旅行派は外資チェーンでモバイルキーとアップグレードを重視', '国内旅メインなら国内チェーンのアプリ限定プラン・交通系ポイント連携がお得'].map((tip) => (
              <div key={tip} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                <p className="text-sm leading-relaxed text-slate-100">{tip}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-300">
            直販アプリ経由の予約は、OTAよりも柔軟なキャンセルポリシーやレイトチェックアウト特典がつくケースが多いので、ポイント還元と合わせて比較検討するのがおすすめです。
          </p>
        </section>

        <section className="mt-16 rounded-[32px] bg-white/95 p-8 shadow-lg shadow-slate-100">
          <h3 className="text-xl font-semibold text-slate-900">参考情報</h3>
          <p className="mt-2 text-sm text-slate-600">公式サイトとロイヤリティプログラムの公開情報をもとに整理しました。</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {dataSources.map((source) => (
              <li key={source.url}>
                <Link
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-rose-800"
                >
                  <span>{source.name}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
