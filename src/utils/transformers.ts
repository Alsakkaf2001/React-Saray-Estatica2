import type { BlogPost } from '../types';

type DbPost = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content_md?: string;
  content?: string;
  image_url?: string;
  image?: string;
  author?: string;
  published_at?: string;
  publishDate?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  views?: number;
};

export function mapDbPostToBlogPost(db: DbPost): BlogPost {
  const content = db.content_md || db.content || '';
  const image = db.image_url || db.image || '';
  const publishDate = db.published_at || db.publishDate || new Date().toISOString();
  const readTime = calculateReadingTime(content);
  return {
    id: db.id || db.slug || cryptoId(),
    title: db.title || 'Untitled',
    slug: db.slug || '',
    excerpt: db.excerpt || '',
    content,
    image,
    author: db.author || 'admin',
    publishDate,
    readTime,
    category: db.category || 'health-wellness',
    tags: Array.isArray(db.tags) ? db.tags : [],
    featured: Boolean(db.featured),
    views: typeof db.views === 'number' ? db.views : 0,
  };
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content ? content.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}

function cryptoId(): string {
  try {
    // Guarded runtime access; if crypto or randomUUID missing fall back
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`);
  } catch {
    return `${Date.now()}`;
  }
}

