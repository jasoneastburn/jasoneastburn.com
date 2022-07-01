import { Asset } from 'contentful';

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: Asset;
  keywords: string[];
}