-- Orders table for Maya Academy
-- Run this once in the Supabase SQL Editor (Project > SQL Editor > New query).

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  customer_name text not null,
  contact text not null,
  plan text not null check (plan in ('1-year', '18-month')),
  status text not null default 'pending'
    check (status in ('pending', 'paid', 'delivered', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_status_idx on public.orders (status);
create index if not exists orders_order_number_idx on public.orders (order_number);

-- Lock the table down from anon/public access. The app only ever talks
-- to this table through the server-side secret key, which bypasses RLS,
-- so no policies need to be added here.
alter table public.orders enable row level security;
