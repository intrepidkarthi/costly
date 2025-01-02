-- Drop existing tables and functions
DROP TRIGGER IF EXISTS update_items_updated_at ON items;
DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;
DROP TRIGGER IF EXISTS update_countries_updated_at ON countries;
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS countries;

-- Reset Supabase auth schema
DELETE FROM auth.users WHERE email = 'admin@costly.in';

-- Run schema.sql to recreate tables
\i schema.sql

-- Run seed.sql to populate data
\i seed.sql
