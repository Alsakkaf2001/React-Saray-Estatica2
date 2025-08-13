import type { BlogPost } from '../types';
import { fetchPosts, fetchPostBySlug as fetchPostBySlugApi, fetchCategories, incrementViews as incrementViewsApi } from './blogApi';
import { mapDbPostToBlogPost } from './transformers';

// Blog utility functions
// Deprecated local fallback removed; always use async functions backed by DB

export const getAllBlogPostsAsync = async (): Promise<BlogPost[]> => {
  try {
    const dbPosts = await fetchPosts('published');
    return dbPosts.map(mapDbPostToBlogPost).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  } catch {
    return [];
  }
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  try {
    const posts = await fetchPosts('published');
    return posts.map(mapDbPostToBlogPost).filter(p => p.featured).slice(0, 3);
  } catch {
    return [];
  }
};

export const getPostsByCategory = async (categorySlug: string): Promise<BlogPost[]> => {
  try {
    const posts = await fetchPosts('published');
    return posts.map(mapDbPostToBlogPost).filter(post => post.category === categorySlug);
  } catch {
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const dbPost = await fetchPostBySlugApi(slug);
    return dbPost ? mapDbPostToBlogPost(dbPost) : null;
  } catch {
    return null;
  }
};

export const getPostBySlugAsync = async (slug: string): Promise<BlogPost | null> => {
  try {
    const dbPost = await fetchPostBySlugApi(slug);
    return dbPost ? mapDbPostToBlogPost(dbPost) : null;
  } catch {
    return null;
  }
};

export const getCategoryBySlug = async (slug: string) => {
  try {
    const categories = await fetchCategories();
    return categories.find(c => c.slug === slug) || undefined;
  } catch {
    return undefined;
  }
};

// Authors are not yet in DB; return undefined for now
export const getAuthorById = (_authorId: string) => undefined;

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  // This function expects already-hydrated posts; it should be fed by caller
  // Keeping logic here for when a list of posts is available
  const all: BlogPost[] = [];
  const relatedPosts = all.filter(post => {
    if (post.id === currentPost.id) return false;
    
    // Check if posts share the same category
    if (post.category === currentPost.category) return true;
    
    // Check if posts share common tags
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return commonTags.length > 0;
  });

  // Sort by relevance (category match first, then by common tags)
  relatedPosts.sort((a, b) => {
    const aIsCategory = a.category === currentPost.category;
    const bIsCategory = b.category === currentPost.category;
    
    if (aIsCategory && !bIsCategory) return -1;
    if (!aIsCategory && bIsCategory) return 1;
    
    const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
    const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
    
    return bCommonTags - aCommonTags;
  });

  return relatedPosts.slice(0, limit);
};

export const searchPosts = (query: string, posts: BlogPost[]): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return posts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing dashes
};

export const incrementPostViews = (postId: string): void => {
  // best-effort async call; ignore failures
  void incrementViewsApi(postId);
};

export const getPopularPosts = async (limit: number = 5): Promise<BlogPost[]> => {
  try {
    const posts = await fetchPosts('published');
    return posts.map(mapDbPostToBlogPost)
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, limit);
  } catch {
    return [];
  }
};

export const getRecentPosts = async (limit: number = 5): Promise<BlogPost[]> => {
  try {
    const posts = await fetchPosts('published');
    return posts.map(mapDbPostToBlogPost)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, limit);
  } catch {
    return [];
  }
};

export const getAllCategories = async (): Promise<Array<{ id?: string; name: string; slug: string; postCount?: number }>> => {
  try {
    const categories = await fetchCategories();
    // Post counts would require an aggregate query; skip for now
    return categories.map(c => ({ ...c, postCount: undefined }));
  } catch {
    return [];
  }
};

export const getAllTags = async (): Promise<string[]> => {
  try {
    const posts = await fetchPosts('published');
    const allTags = posts.flatMap(p => (p as any).tags || [] as string[]);
    return [...new Set(allTags)].sort();
  } catch {
    return [];
  }
};

export const getPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  try {
    const posts = await fetchPosts('published');
    return posts.map(mapDbPostToBlogPost).filter(post => 
      post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
    );
  } catch {
    return [];
  }
};