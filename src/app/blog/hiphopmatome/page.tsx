import RakutenAffiliateAd, { rakutenAds } from "@/app/blog/RakutenAffiliateAd";
import { kosugiMaru } from "@/app/ui/fonts";
import type { Metadata } from "next";

const artists = [
  {
    rank: 1,
    name: "YZERR",
    reading: "ワイザー",
    catchphrase: "川崎の現実を、仲間と巨大な物語へ変えたリーダー",
    background:
      "川崎市川崎区出身。双子の兄T-PablowらとBAD HOPを結成し、地元での体験や仲間との関係を音楽へ変えてきました。厳しい少年期を隠さずに語りながら、楽曲制作だけでなく企画やグループ運営でも中心を担った存在です。BAD HOPは独立した活動から規模を広げ、2024年2月19日の東京ドーム公演をもって解散しました。",
    style:
      "低く落ち着いた声と、成功までの道筋を具体的に描くリリックが特徴です。個人の武勇伝だけでなく、仲間、地元、家族、ビジネスまでを一つのストーリーとして聴かせるため、BAD HOPの背景を知るほど言葉の重みが増します。",
    songs: [
      {
        title: "Kawasaki Drift / BAD HOP",
        note: "メンバーそれぞれの個性と川崎という原点が一度に分かる代表曲。",
        youtubeUrl: "https://www.youtube.com/watch?v=I4t8Fuk-SCQ",
      },
      {
        title: "Life Style / BAD HOP",
        note: "彼らが手にした生活と、そこへ至る価値観を象徴する一曲。",
      },
      {
        title: "Back Stage feat. Tiji Jojo / YZERR",
        note: "表舞台の裏側にある関係性や心境を、メロディアスに味わえる曲。",
      },
    ],
    color: "from-amber-400 to-orange-600",
  },
  {
    rank: 2,
    name: "GADORO",
    reading: "ガドロ",
    catchphrase: "敗北も貧しさも隠さず、言葉の力へ変えるラッパー",
    background:
      "宮崎県児湯郡高鍋町出身。MCバトルで経験を重ね、KING OF KINGS 2016 GRAND CHAMPIONSHIPと翌2017大会を連覇して全国的な評価を確立しました。2017年のアルバム「四畳半」でメジャーデビュー。華やかな成功だけでなく、売れない時期や自信のなさ、家族への思いまで作品に刻んでいます。",
    style:
      "情景が浮かぶ細かな描写、言葉遊び、感情の起伏が魅力です。自分を大きく見せるよりも、弱さや泥臭さをさらけ出して聴き手の生活へ接続するタイプ。バトルで磨いた鋭さと、アルバムで見せる人間味の両方を楽しめます。",
    songs: [
      {
        title: "クズ",
        note: "欠点や後悔を正面から言葉にする、GADOROの原点が伝わる代表曲。",
        youtubeUrl: "https://www.youtube.com/watch?v=8OU9dbFjsT0",
      },
      {
        title: "カタツムリ",
        note: "歩みが遅くても前へ進む姿を描き、長い下積みと重なる一曲。",
      },
      {
        title: "ここにいよう",
        note: "身近な人や居場所への思いがにじむ、温度のある楽曲。",
      },
    ],
    color: "from-emerald-500 to-teal-700",
  },
  {
    rank: 3,
    name: "Tohji",
    reading: "トージ",
    catchphrase: "クラウドラップとレイヴ感覚を日本の若者文化へ接続",
    background:
      "1996年にロンドンで生まれ、幼少期に日本へ移住。2017年の「ラップスタア誕生！」でファイナリストとなり注目を集めました。gummyboyとのMall Boyzでも活動し、ミックステープ「angel」や「T-mix」などを通じて、国内外のアーティストと交わる独自のポジションを築いています。",
    style:
      "声を楽器のように加工するボーカル、浮遊感のあるトラック、レイヴやクラブの高揚感が特徴です。従来の日本語ラップらしい言葉の密度より、音色、反復、空間全体で感情を作る音楽。海外のクラウドラップやハイパーポップが好きな人にも入りやすい存在です。",
    songs: [
      {
        title: "Higher",
        note: "Tohjiの浮遊感とアンセミックな強さをつかみやすい入口。",
        youtubeUrl: "https://www.youtube.com/watch?v=L5dhhdhO4Yw",
      },
      {
        title: "Super Ocean Man",
        note: "開放感のあるサウンドと独特の言葉選びを体感できる人気曲。",
      },
      {
        title: "Twilight Zone feat. Bladee",
        note: "海外シーンとの距離の近さと、境界のない音楽性が表れた一曲。",
      },
    ],
    color: "from-fuchsia-500 to-violet-700",
  },
];

const sources = [
  {
    label: "BAD HOP公式YouTube",
    href: "https://www.youtube.com/@BADHOP_official",
  },
  {
    label: "GADORO公式サイト",
    href: "https://gadoro.jp/",
  },
  {
    label: "KING OF KINGS公式サイト",
    href: "https://www.kingofkings.jp/",
  },
  {
    label: "Tohji - Dazedインタビュー",
    href: "https://www.dazeddigital.com/music/article/56267/1/tohji-interview-t-mix-album-japanese-rap",
  },
];

export const metadata: Metadata = {
  title:
    "ADHDとヒップホップは相性がいい？集中のスイッチになる日本人ラッパー3選",
  description:
    "ADHD傾向のある人が集中のスイッチを入れたいときに聴きたい日本人ヒップホッパーを紹介。1位YZERR、2位GADORO、3位Tohjiの背景、音楽性、代表曲をまとめました。",
};

export default function HipHopMatomePage() {
  return (
    <main className="bg-[linear-gradient(180deg,#fff7ed_0%,#fef3c7_32%,#f8fafc_70%)]">
      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[32px] border border-amber-200 bg-white/90 p-7 text-slate-950 shadow-2xl shadow-amber-200/50 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            ADHD × Hip-Hop
          </p>
          <h1
            className={`mt-5 text-3xl leading-tight font-bold sm:text-5xl ${kosugiMaru.className}`}
          >
            ADHD気質に刺さる
            <br />
            おすすめヒップホッパー3選
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            ADHDの診断や治療の話ではなく、集中のスイッチを入れたいときの音楽ガイドです。
            ヒップホップの強いビート、短いフレーズの反復、感情を一気に持ち上げる言葉は、
            気が散りやすい時間にもリズムを作ってくれます。
            ここでは、作業前・移動中・気分を切り替えたい瞬間に相性がいい3人を選びました。
          </p>

          <aside aria-label="おすすめ商品のPR">
            <RakutenAffiliateAd ad={rakutenAds[0]} />
          </aside>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {artists.map((artist) => (
              <a
                key={artist.name}
                href={`#rank-${artist.rank}`}
                className="rounded-2xl border border-amber-100 bg-amber-50/80 p-4 transition hover:bg-amber-100"
              >
                <span className="text-xs font-semibold text-amber-700">
                  RANK {artist.rank}
                </span>
                <span className="mt-1 block text-xl font-bold">
                  {artist.name}
                </span>
                <span className="text-sm text-slate-600">{artist.reading}</span>
              </a>
            ))}
          </div>
        </header>

        <aside aria-label="おすすめ商品のPR">
          <RakutenAffiliateAd ad={rakutenAds[5]} />
        </aside>

        <section className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-300/30 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">
            Selection
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">
            この3人を選んだ理由
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            3人は同じ日本語ヒップホップでも、魅力の中心が異なります。
            YZERRは仲間と地元を背負う物語、GADOROは弱さまで武器にする言葉、
            Tohjiはジャンルの境界を越える音響感覚が強みです。
            順番に聴けば、日本のヒップホップが持つ幅広さを短時間で体感できます。
          </p>
        </section>

        <div className="mt-10 space-y-10">
          {artists.map((artist, index) => (
            <section
              id={`rank-${artist.rank}`}
              key={artist.name}
              className="scroll-mt-8 overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-300/30"
            >
              <div
                className={`bg-gradient-to-r ${artist.color} px-6 py-7 text-white sm:px-9`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                  Rank {artist.rank}
                </p>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  {artist.name}
                  <span className="ml-3 text-base font-medium text-white/80">
                    {artist.reading}
                  </span>
                </h2>
                <p className="mt-3 text-base font-semibold text-white/90">
                  {artist.catchphrase}
                </p>
              </div>

              <div className="p-6 sm:p-9">
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">背景</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {artist.background}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">音楽性</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {artist.style}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-slate-950">
                    最初に聴きたい3曲
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {artist.songs.map((song, songIndex) => (
                      <div
                        key={song.title}
                        className="flex gap-4 rounded-2xl bg-slate-50 p-4"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white">
                          {songIndex + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-950">
                            {song.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {song.note}
                          </p>
                          {"youtubeUrl" in song && (
                            <a
                              href={song.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-red-700"
                            >
                              YouTubeで聴く
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="border-t border-slate-100 px-4">
                  <RakutenAffiliateAd ad={rakutenAds[index + 1]} />
                </div>
              )}
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[32px] bg-slate-950 p-6 text-white sm:p-9">
          <h2 className="text-2xl font-bold">迷ったときの選び方</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="font-bold text-amber-400">YZERRがおすすめ</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                仲間、地元、成功までのストーリーを重視して聴きたい人。
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="font-bold text-emerald-400">GADOROがおすすめ</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                歌詞の巧さや、弱さをさらけ出す人間味に心を動かされる人。
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="font-bold text-fuchsia-400">Tohjiがおすすめ</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                クラブ、クラウドラップ、海外の新しいサウンドが好きな人。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 sm:p-9">
          <h2 className="text-xl font-bold text-slate-950">参考資料</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-700 underline underline-offset-4"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            楽曲名や経歴は公開情報をもとに整理しています。配信状況や所属情報は変更される場合があります。
          </p>
        </section>
      </article>
    </main>
  );
}
