-- Supabase schema: run these in the SQL editor

-- 1) Todos table (simple demo)
create table if not exists todos (
  id serial primary key,
  name text not null,
  completed boolean default false,
  inserted_at timestamptz default now()
);

-- Example data
insert into todos (name, completed) values ('Welcome to Tremora', false);
insert into todos (name, completed) values ('Try signing in', false);

-- 2) Products table
create table if not exists products (
  id serial primary key,
  name text not null,
  description text,
  price numeric(10,2),
  image_url text,
  inserted_at timestamptz default now()
);

-- Example products
insert into products (name, description, price, image_url) values
('Tremora Headset', 'Next-gen immersive headset', 499.99, '/placeholder.svg'),
('Tremora Glasses', 'Smart eyewear with style', 199.99, '/placeholder.svg');

-- 3) (Optional) Users table for demo profile data
create table if not exists app_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  created_at timestamptz default now()
);
