/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.naok-webstudio.jp', // サイトのURLに変更
  generateRobotsTxt: true,                  // robots.txt も同時に生成する
  changefreq: 'daily',                       // 更新頻度（全ページ共通）
  priority: 0.7,                             // 優先度（全ページ共通）
  sitemapSize: 5000,                         // ページが多い場合の分割数
  // exclude: ['/secret-page'],             // インデックスさせたくないページ
};
