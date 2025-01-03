-- Drop existing RLS policies for items table
DROP POLICY IF EXISTS "Enable read access for all users" ON items;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON items;
DROP POLICY IF EXISTS "Enable update for admins" ON items;

-- Create new RLS policies
-- Allow anyone to read approved items
CREATE POLICY "Enable read access for all users" ON items
    FOR SELECT USING (status = 'approved');

-- Allow anyone to insert items (no auth required)
CREATE POLICY "Enable insert for all users" ON items
    FOR INSERT WITH CHECK (true);

-- Allow admins to update any item
CREATE POLICY "Enable update for admins" ON items
    FOR UPDATE USING (
        auth.uid() IN (
            SELECT id FROM profiles WHERE role = 'admin'
        )
    );
