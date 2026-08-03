-- PHASE 20 DATABASE FOUNDATION
-- Run only after the Supabase project has been created and reviewed.

create table if not exists profiles (
  id uuid primary key,
  role text not null default 'member' check (role in ('member','coach','admin')),
  full_name text,
  membership_name text,
  created_at timestamptz not null default now()
);

create table if not exists programmes (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null,
  title text not null,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists progress_entries (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null,
  metric text not null,
  value numeric,
  note text,
  recorded_at timestamptz not null default now()
);

create table if not exists check_ins (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null,
  energy int check (energy between 1 and 10),
  sleep int check (sleep between 1 and 10),
  readiness int check (readiness between 1 and 10),
  notes text,
  created_at timestamptz not null default now()
);

-- Row Level Security policies must be enabled and tested before real use.
