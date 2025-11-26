import type { AppData } from '@/app/data/app';

export default function JsonLd({ apps }: { apps: AppData[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: apps.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: app.name,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'iOS, Android',
        offers: {
          '@type': 'Offer',
          price: app.priceMonthly,
          priceCurrency: 'JPY',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: app.rating,
          reviewCount: 100, // 仮の値。実際はAPI等で取得が望ましい
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
