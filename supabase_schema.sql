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
  ('Dental Treatments','dental','Dental care and oral health treatments','🦷','bg-green-100 text-green-800'),
  ('Nose & Face Aesthetics','nose-face-aesthetics','Facial and nose cosmetic procedures','✨','bg-purple-100 text-purple-800'),
  ('Body Aesthetics','body-aesthetics','Body contouring and aesthetic procedures','💪','bg-blue-100 text-blue-800'),
  ('Hair Restoration','hair-restoration','Hair transplantation and restoration','✂️','bg-indigo-100 text-indigo-800'),
  ('Weight-Loss Treatments','weight-loss','Obesity treatment and weight management','⚖️','bg-orange-100 text-orange-800')
on conflict (slug) do nothing;

-- Posts
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content_md text,
  image_url text,
  category text not null default 'dental',
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

-- Customer Contact Information
create table if not exists public.customer_contacts (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone_whatsapp text not null,
  email text not null,
  country text not null,
  treatment text not null,
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- Indexes for customer contacts
create index if not exists customer_contacts_submitted_at_idx on public.customer_contacts(submitted_at);
create index if not exists customer_contacts_email_idx on public.customer_contacts(email);
create index if not exists customer_contacts_treatment_idx on public.customer_contacts(treatment);

-- RLS
alter table public.blog_posts enable row level security;
alter table public.customer_contacts enable row level security;

-- Drop and recreate policies (IF NOT EXISTS not supported for policies)
drop policy if exists "Public read published" on public.blog_posts;
create policy "Public read published"
  on public.blog_posts
  for select
  using (status = 'published');

-- Customer contacts policies
drop policy if exists "Public insert customer contacts" on public.customer_contacts;
create policy "Public insert customer contacts"
  on public.customer_contacts
  for insert
  with check (true);

-- Allow public read access for now (you can restrict this later if needed)
drop policy if exists "Public read customer contacts" on public.customer_contacts;
create policy "Public read customer contacts"
  on public.customer_contacts
  for select
  using (true);

-- Admin read policy (for when you implement proper authentication)
drop policy if exists "Admin read customer contacts" on public.customer_contacts;
create policy "Admin read customer contacts"
  on public.customer_contacts
  for select
  using (auth.role() = 'authenticated');

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

