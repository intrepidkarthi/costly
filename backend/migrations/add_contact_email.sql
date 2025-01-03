-- Add contact_email column to items table
ALTER TABLE items
ADD COLUMN contact_email VARCHAR(255);

-- Make submitted_by column optional since we're removing auth requirement
ALTER TABLE items
ALTER COLUMN submitted_by DROP NOT NULL;
