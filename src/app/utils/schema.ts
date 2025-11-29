// utils/schema.ts
import type { Salon } from '@/app/types/salon';

export function generateItemListSchema(salons: Salon[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: salons.map((salon, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BeautySalon', // より具体的なLocalBusinessのサブタイプ
        name: salon.name,
        image: salon.mainImage ?? salon.image,
        url: salon.officialUrl ?? salon.link ?? `https://yourdomain.com/nagoya/personal-color/${salon.slug ?? salon.id}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: salon.address?.streetAddress ?? '',
          addressLocality: salon.address?.addressLocality ?? '',
          addressRegion: salon.address?.addressRegion ?? '愛知県',
          postalCode: salon.address?.postalCode ?? '',
          addressCountry: 'JP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: salon.geo?.latitude ?? 0,
          longitude: salon.geo?.longitude ?? 0,
        },
        priceRange: salon.priceRange
          ? `¥${salon.priceRange.min.toLocaleString()} - ¥${salon.priceRange.max.toLocaleString()}`
          : salon.price
          ? `¥${salon.price.toLocaleString()}`
          : undefined,
        description: salon.description,
      },
    })),
  };
}
