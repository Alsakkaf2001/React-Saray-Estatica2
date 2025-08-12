import type { BlogPost, BlogCategory, BlogAuthor } from '../types';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_AUTHORS } from './constants';

// Blog utility functions
export const getAllBlogPosts = (): BlogPost[] => {
  return BLOG_POSTS.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getFeaturedPosts = (): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.featured).slice(0, 3);
};

export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => post.category === categorySlug);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(post => post.slug === slug);
};

export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return BLOG_CATEGORIES.find(category => category.slug === slug);
};

export const getAuthorById = (authorId: string): BlogAuthor | undefined => {
  return BLOG_AUTHORS.find(author => author.id === authorId);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  const relatedPosts = BLOG_POSTS.filter(post => {
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

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return BLOG_POSTS.filter(post => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery)
    );
  });
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
  // In a real application, this would make an API call to increment views
  // For now, this is a placeholder function
  console.log(`Incrementing views for post: ${postId}`);
};

export const getPopularPosts = (limit: number = 5): BlogPost[] => {
  return BLOG_POSTS
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return BLOG_POSTS
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getAllCategories = (): BlogCategory[] => {
  // Add post count to categories
  return BLOG_CATEGORIES.map(category => ({
    ...category,
    postCount: BLOG_POSTS.filter(post => post.category === category.id).length
  }));
};

export const getAllTags = (): string[] => {
  const allTags = BLOG_POSTS.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return BLOG_POSTS.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};