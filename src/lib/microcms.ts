import { createClient } from "microcms-js-sdk";

export type BlogCategory = {
  id: string;
  name: string;
  slug?: string;
};

export type Blog = {
  id: string;
  title: string;
  body: string;
  eyecatch?: { url: string; width: number; height: number };
  publishedAt?: string;
  category?: BlogCategory | string;
  createdAt: string;
  updatedAt: string;
};
export const microcms = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});
