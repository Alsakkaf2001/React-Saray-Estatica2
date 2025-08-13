-- Extensions
create extension if not exists pgcrypto;

-- Categories
create table if not exists public.blog_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  icon text,
  color text
);

insert into public.blog_categories (name, slug, description, icon, color) values
  ('Hair Care','hair-care','Hair health, transplantation and care tips','✂️','bg-blue-100 text-blue-800'),
  ('Dental Health','dental-health','Dental care and oral health','🦷','bg-green-100 text-green-800'),
  ('Cosmetic Surgery','cosmetic-surgery','Cosmetic procedures and trends','✨','bg-purple-100 text-purple-800'),
  ('Health & Wellness','health-wellness','General health and wellness','💊','bg-pink-100 text-pink-800'),
  ('Patient Stories','patient-stories','Real patient experiences','📖','bg-yellow-100 text-yellow-800')
on conflict (slug) do nothing;

-- Posts
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content_md text,
  image_url text,
  category text not null default 'health-wellness',
  tags text[] default '{}',
  featured boolean default false,
  views int default 0,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes
create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists blog_posts_status_idx on public.blog_posts(status);
create index if not exists blog_posts_category_idx on public.blog_posts(category);
create index if not exists blog_posts_published_at_idx on public.blog_posts(published_at);

-- RLS
alter table public.blog_posts enable row level security;

-- Drop and recreate policies (IF NOT EXISTS not supported for policies)
drop policy if exists "Public read published" on public.blog_posts;
create policy "Public read published"
  on public.blog_posts
  for select
  using (status = 'published');

drop policy if exists "Auth manage posts" on public.blog_posts;
create policy "Auth manage posts"
  on public.blog_posts
  for all
  to authenticated
  using (true)
  with check (true);

-- Storage (do in UI)
-- Create bucket: blog-images
-- Policies: public READ, authenticated WRITE

-- Optional: Authors table (future)
-- create table if not exists public.blog_authors (
--   id uuid primary key default gen_random_uuid(),
--   name text not null,
--   title text,
--   bio text,
--   avatar_url text,
--   social_links jsonb
-- );

