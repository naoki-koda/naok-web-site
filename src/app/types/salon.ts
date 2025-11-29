// types/salon.ts
export interface Salon {
  id: string;
  rank?: number;
  name: string;
  area?: string;
  type?: string;
  price?: number;
  priceNote?: string;
  features: string[];
  recommendFor?: string[];
  description: string;
  link?: string;
  image?: string;
  isPr?: boolean;
  slug?: string;
  mainImage?: string;
  rating?: number;
  reviewCount?: number;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  access?: string;
  officialUrl?: string;
  reserveUrl?: string;
}
