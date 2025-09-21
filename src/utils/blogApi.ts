import type { BlogPost } from '../types';
import { supabase } from '../lib/supabase';

export async function fetchPosts(status: 'published' | 'draft' | 'all' = 'published'): Promise<BlogPost[]> {
  let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
  if (status !== 'all') query = query.eq('status', status);
  const { data, error } = await query;
  if (error) throw error;
  return (data as unknown[]) as BlogPost[];
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  if (error) throw error;
  return (data as unknown) as BlogPost;
}

export async function createPost(post: Partial<BlogPost>): Promise<string> {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single();
  if (error) throw error;
  return (data as { id: string }).id;
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

export async function fetchCategories(): Promise<Array<{ id?: string; name: string; slug: string; icon?: string; color?: string }>> {
  // Try DB categories
  const { data, error } = await supabase.from('blog_categories').select('id,name,slug,icon,color');
  if (error) throw error;
  return (data as unknown[]).map((c: any) => ({ id: c.id, name: c.name, slug: c.slug, icon: c.icon, color: c.color }));
}

export async function incrementViews(postId: string): Promise<void> {
  // Use Postgres atomic increment
  const { error } = await supabase
    .from('blog_posts')
    .update({ views: (supabase as unknown as { rpc?: unknown }).rpc ? undefined : undefined })
    .eq('id', postId);
  if (error) {
    // Fallback: use RPC if available
    try {
      // If a RPC is defined (optional), ignore if not
      const anySb = supabase as unknown as { rpc?: (name: string, params: unknown) => Promise<unknown> };
      if (anySb.rpc) {
        await anySb.rpc('increment_post_views', { post_id: postId });
      }
    } catch {
      // swallow; views are non-critical
    }
  }
}

// Customer Contact API functions
export interface CustomerContact {
  id: string;
  full_name: string;
  phone_whatsapp: string;
  email: string;
  country: string;
  treatment: string;
  submitted_at: string;
  created_at: string;
}

export async function submitCustomerContact(data: {
  fullName: string;
  phoneWhatsapp: string;
  email: string;
  country: string;
  treatment: string;
}): Promise<void> {
  console.log("=== FORM SUBMISSION DEBUG ===");
  console.log("Attempting to save to database:", data);
  console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
  console.log("Supabase Key exists:", !!import.meta.env.VITE_SUPABASE_ANON_KEY);
  
  try {
    const { data: result, error } = await supabase
      .from('customer_contacts')
      .insert([{
        full_name: data.fullName,
        phone_whatsapp: data.phoneWhatsapp,
        email: data.email,
        country: data.country,
        treatment: data.treatment
      }])
      .select();
      
    if (error) {
      console.error("❌ Database error:", error);
      console.error("Error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw error;
    }
    
    console.log("✅ Successfully saved to database:", result);
    console.log("=== END DEBUG ===");
  } catch (err) {
    console.error("❌ Exception caught:", err);
    console.log("=== END DEBUG ===");
    throw err;
  }
}

// Test function to verify database connection
export async function testDatabaseConnection(): Promise<boolean> {
  console.log("=== TESTING DATABASE CONNECTION ===");
  try {
    const { error } = await supabase
      .from('customer_contacts')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error("❌ Database connection test failed:", error);
      return false;
    }
    
    console.log("✅ Database connection test successful");
    return true;
  } catch (err) {
    console.error("❌ Database connection test exception:", err);
    return false;
  }
}

export async function fetchCustomerContacts(
  startDate?: string,
  endDate?: string
): Promise<CustomerContact[]> {
  console.log("Fetching customer contacts from database...");
  
  let query = supabase
    .from('customer_contacts')
    .select('*')
    .order('submitted_at', { ascending: false });

  if (startDate && endDate) {
    query = query
      .gte('submitted_at', startDate)
      .lte('submitted_at', endDate);
  }

  const { data, error } = await query;
  
  if (error) {
    console.error("Error fetching customer contacts:", error);
    throw error;
  }
  
  console.log("Successfully fetched customer contacts:", data);
  return data || [];
}

