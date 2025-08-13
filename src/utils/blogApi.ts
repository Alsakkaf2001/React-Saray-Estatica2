import type { BlogPost } from '../types';
import { supabase } from '../lib/supabase';

export async function fetchPosts(status: 'published' | 'draft' | 'all' = 'published'): Promise<BlogPost[]> {
  let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
  if (status !== 'all') query = query.eq('status', status);
  const { data, error } = await query;
  if (error) throw error;
  return (data as any[]) as BlogPost[];
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  if (error) throw error;
  return (data as any) as BlogPost;
}

export async function createPost(post: Partial<BlogPost>): Promise<string> {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single();
  if (error) throw error;
  return (data as any).id as string;
}

export async function updatePost(id: string, post: Partial<BlogPost>): Promise<void> {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', id);
  if (error) throw error;
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) throw error;
}

export async function uploadImage(file: File): Promise<string> {
  const fileName = `${Date.now()}-${file.name}`;
  const { error } = await supabase.storage.from('blog-images').upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) throw error;
  const { data: publicUrl } = supabase.storage.from('blog-images').getPublicUrl(fileName);
  return publicUrl.publicUrl;
}

export async function fetchCategories(): Promise<Array<{ id?: string; name: string; slug: string }>> {
  // Try DB categories
  const { data, error } = await supabase.from('blog_categories').select('id,name,slug');
  if (error) throw error;
  return (data as any[]).map((c) => ({ id: c.id, name: c.name, slug: c.slug }));
}

