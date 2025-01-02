BEGIN;

-- Insert luxury categories
INSERT INTO categories (name, description) VALUES
('Luxury Cars', 'High-end automobiles and supercars from India'),
('Fine Watches', 'Luxury timepieces and collectible watches'),
('Fine Dining', 'Premium restaurants and culinary experiences in India'),
('Luxury Hotels', 'Five-star hotels and premium resorts in India'),
('Designer Fashion', 'High-end Indian fashion brands and couture'),
('Premium Real Estate', 'Luxury homes and premium properties in India'),
('Fine Jewelry', 'Premium Indian jewelry and precious stones'),
('Art & Collectibles', 'Fine art and valuable Indian collectibles'),
('Private Jets', 'Private aviation and luxury aircraft services'),
('Luxury Yachts', 'Premium boats and marine vessels'),
('Antiques', 'Rare and valuable historical items from India')
ON CONFLICT (name) DO NOTHING;

-- Insert country
INSERT INTO countries (name, code) VALUES
('India', 'IN')
ON CONFLICT (code) DO NOTHING;

-- Create admin user and profile
DO $$
DECLARE
    v_admin_id UUID;
    v_admin_email TEXT;
BEGIN
    -- Set admin details
    v_admin_id := 'a96eb5c7-e34d-4b95-a38c-b0aa96f156f2';
    v_admin_email := 'admin@costly.in';
    
    -- First, clean up any existing data
    DELETE FROM items WHERE submitted_by = v_admin_id;
    DELETE FROM profiles WHERE id = v_admin_id;
    DELETE FROM auth.users WHERE id = v_admin_id;

    -- Create admin user in auth.users
    INSERT INTO auth.users (
        id,
        email,
        encrypted_password,
        email_confirmed_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        role
    ) VALUES (
        v_admin_id,
        v_admin_email,
        crypt('admin123', gen_salt('bf')),
        now(),
        '{"provider":"email","providers":["email"]}',
        '{"full_name":"Admin User"}',
        now(),
        now(),
        'authenticated'
    );

    -- Create admin profile
    INSERT INTO profiles (id, email, full_name, role)
    VALUES (v_admin_id, v_admin_email, 'Admin User', 'admin');

    -- Insert sample items
    INSERT INTO items (name, description, category_id, country_id, price, currency, image_url, submitted_by, status) VALUES
    ('Rolls-Royce Phantom VIII', 'The epitome of luxury motoring in India, featuring a 6.75L V12 engine, handcrafted interior with Indian-inspired motifs, and extended wheelbase for maximum comfort', 
     (SELECT id FROM categories WHERE name = 'Luxury Cars'),
     (SELECT id FROM countries WHERE name = 'India'),
     95000000, 'INR',
     'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Sabyasachi Heritage Jewelry', 'Exquisite diamond and emerald necklace from the Heritage Collection, featuring rare Golconda diamonds',
     (SELECT id FROM categories WHERE name = 'Fine Jewelry'),
     (SELECT id FROM countries WHERE name = 'India'),
     25000000, 'INR',
     'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('The Taj Mahal Palace Royal Suite', 'The most luxurious suite in Mumbai with a private butler, featuring antique artworks and panoramic Arabian Sea views',
     (SELECT id FROM categories WHERE name = 'Luxury Hotels'),
     (SELECT id FROM countries WHERE name = 'India'),
     1200000, 'INR',
     'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Worli Sea Face Penthouse', 'Ultra-luxury 12,000 sq ft penthouse with 360° views of Mumbai skyline and Arabian Sea, featuring private infinity pool',
     (SELECT id FROM categories WHERE name = 'Premium Real Estate'),
     (SELECT id FROM countries WHERE name = 'India'),
     750000000, 'INR',
     'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2629&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Patek Philippe Grand Complications', 'Limited edition timepiece with perpetual calendar and minute repeater, crafted exclusively for the Indian market',
     (SELECT id FROM categories WHERE name = 'Fine Watches'),
     (SELECT id FROM countries WHERE name = 'India'),
     85000000, 'INR',
     'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Bombardier Global 7500', 'Ultra-long-range business jet with custom Indian luxury interior, featuring master suite and dining area',
     (SELECT id FROM categories WHERE name = 'Private Jets'),
     (SELECT id FROM countries WHERE name = 'India'),
     450000000, 'INR',
     'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Cartier Maharaja Collection', 'One-of-a-kind necklace inspired by Indian royalty, featuring rare pink diamonds and Burmese rubies',
     (SELECT id FROM categories WHERE name = 'Fine Jewelry'),
     (SELECT id FROM countries WHERE name = 'India'),
     155000000, 'INR',
     'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Bentley Flying Spur Mulliner', 'Custom-built luxury sedan with hand-stitched leather interior and mother-of-pearl inlays',
     (SELECT id FROM categories WHERE name = 'Luxury Cars'),
     (SELECT id FROM countries WHERE name = 'India'),
     72000000, 'INR',
     'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('The Oberoi Udaivilas Palace Suite', 'Private luxury suite with dedicated butler service and private pool overlooking Lake Pichola',
     (SELECT id FROM categories WHERE name = 'Luxury Hotels'),
     (SELECT id FROM countries WHERE name = 'India'),
     850000, 'INR',
     'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Audemars Piguet Royal Oak', 'Special edition timepiece with traditional Indian motifs and diamond-set bezel',
     (SELECT id FROM categories WHERE name = 'Fine Watches'),
     (SELECT id FROM countries WHERE name = 'India'),
     42000000, 'INR',
     'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2659&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Antilia Penthouse', 'The pinnacle of luxury living in Mumbai, featuring a 50-seat theater and vertical gardens',
     (SELECT id FROM categories WHERE name = 'Premium Real Estate'),
     (SELECT id FROM countries WHERE name = 'India'),
     2000000000, 'INR',
     'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Van Cleef & Arpels Mughal Garden', 'Exceptional necklace inspired by the Mughal gardens, featuring Colombian emeralds',
     (SELECT id FROM categories WHERE name = 'Fine Jewelry'),
     (SELECT id FROM countries WHERE name = 'India'),
     180000000, 'INR',
     'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Gulfstream G700 Custom', 'Ultra-luxury private jet with custom Indian-inspired interior and master bedroom',
     (SELECT id FROM categories WHERE name = 'Private Jets'),
     (SELECT id FROM countries WHERE name = 'India'),
     520000000, 'INR',
     'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Lamborghini Urus Pearl Capsule', 'Limited edition SUV with custom pearl finish and diamond-stitched alcantara interior',
     (SELECT id FROM categories WHERE name = 'Luxury Cars'),
     (SELECT id FROM countries WHERE name = 'India'),
     48000000, 'INR',
     'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Rambagh Palace Maharaja Suite', 'Historic royal suite with period furniture and private garden',
     (SELECT id FROM categories WHERE name = 'Luxury Hotels'),
     (SELECT id FROM countries WHERE name = 'India'),
     950000, 'INR',
     'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Hermès Birkin Himalaya', 'Ultra-rare crocodile leather bag with white gold and diamond hardware',
     (SELECT id FROM categories WHERE name = 'Designer Fashion'),
     (SELECT id FROM countries WHERE name = 'India'),
     32000000, 'INR',
     'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Vacheron Constantin Traditionnelle', 'Bespoke timepiece with hand-painted Indian miniature dial',
     (SELECT id FROM categories WHERE name = 'Fine Watches'),
     (SELECT id FROM countries WHERE name = 'India'),
     28000000, 'INR',
     'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Masque Mumbai Chef's Experience', 'Exclusive 16-course tasting menu showcasing indigenous Indian ingredients with wine pairing',
     (SELECT id FROM categories WHERE name = 'Fine Dining'),
     (SELECT id FROM countries WHERE name = 'India'),
     45000, 'INR',
     'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Indian Accent Private Dining', 'Private dining room experience with personalized menu by Chef Manish Mehrotra',
     (SELECT id FROM categories WHERE name = 'Fine Dining'),
     (SELECT id FROM countries WHERE name = 'India'),
     85000, 'INR',
     'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Ziya by Vineet Bhatia', 'Two Michelin star chef's exclusive tasting menu with vintage champagne pairing',
     (SELECT id FROM categories WHERE name = 'Fine Dining'),
     (SELECT id FROM countries WHERE name = 'India'),
     55000, 'INR',
     'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Raja Ravi Varma Original', 'Rare original oil painting from the legendary Indian artist's personal collection',
     (SELECT id FROM categories WHERE name = 'Art & Collectibles'),
     (SELECT id FROM countries WHERE name = 'India'),
     250000000, 'INR',
     'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Mughal Miniature Collection', 'Set of 12 rare Mughal miniature paintings from the 17th century',
     (SELECT id FROM categories WHERE name = 'Art & Collectibles'),
     (SELECT id FROM countries WHERE name = 'India'),
     180000000, 'INR',
     'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Ancient Sanskrit Manuscripts', 'Collection of preserved Sanskrit texts on palm leaves from 12th century',
     (SELECT id FROM categories WHERE name = 'Art & Collectibles'),
     (SELECT id FROM countries WHERE name = 'India'),
     95000000, 'INR',
     'https://images.unsplash.com/photo-1583329650747-f10e0427f7f7?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Ferretti 920 Custom', 'Custom-built luxury yacht with Indian-inspired interiors and infinity pool',
     (SELECT id FROM categories WHERE name = 'Luxury Yachts'),
     (SELECT id FROM countries WHERE name = 'India'),
     420000000, 'INR',
     'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Azimut Grande 35M', 'Luxury yacht with 5 cabins and customized Indian art collection',
     (SELECT id FROM categories WHERE name = 'Luxury Yachts'),
     (SELECT id FROM countries WHERE name = 'India'),
     380000000, 'INR',
     'https://images.unsplash.com/photo-1567899381973-c49a8d59c2b2?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Princess Y85 Motor Yacht', 'Bespoke motor yacht with maharaja suite and panoramic sky lounge',
     (SELECT id FROM categories WHERE name = 'Luxury Yachts'),
     (SELECT id FROM countries WHERE name = 'India'),
     320000000, 'INR',
     'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('18th Century Mughal Throne', 'Authentic royal throne with gold inlay and precious gems',
     (SELECT id FROM categories WHERE name = 'Antiques'),
     (SELECT id FROM countries WHERE name = 'India'),
     850000000, 'INR',
     'https://images.unsplash.com/photo-1584075796873-04c793056d67?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Ancient Temple Artifacts', 'Collection of 15th-century bronze sculptures from South Indian temples',
     (SELECT id FROM categories WHERE name = 'Antiques'),
     (SELECT id FROM countries WHERE name = 'India'),
     280000000, 'INR',
     'https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Royal Peacock Throne Replica', 'Museum-quality replica of the famous Mughal Peacock Throne',
     (SELECT id FROM categories WHERE name = 'Antiques'),
     (SELECT id FROM countries WHERE name = 'India'),
     420000000, 'INR',
     'https://images.unsplash.com/photo-1569587112025-0d460e81a126?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('McLaren 750S Spider', 'Limited edition supercar with custom Indian art-inspired livery',
     (SELECT id FROM categories WHERE name = 'Luxury Cars'),
     (SELECT id FROM countries WHERE name = 'India'),
     58000000, 'INR',
     'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Aston Martin DBS', 'Handcrafted grand tourer with bespoke interior by Indian artisans',
     (SELECT id FROM categories WHERE name = 'Luxury Cars'),
     (SELECT id FROM countries WHERE name = 'India'),
     51000000, 'INR',
     'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('The Leela Palace Royal Villa', 'Exclusive villa with private pool and dedicated royal butler',
     (SELECT id FROM categories WHERE name = 'Luxury Hotels'),
     (SELECT id FROM countries WHERE name = 'India'),
     1100000, 'INR',
     'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Sabyasachi Haute Couture', 'One-of-a-kind bridal ensemble with rare Basra pearls',
     (SELECT id FROM categories WHERE name = 'Designer Fashion'),
     (SELECT id FROM countries WHERE name = 'India'),
     4200000, 'INR',
     'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Richard Mille RM 56-02', 'Sapphire crystal case watch with hand-painted Indian motifs',
     (SELECT id FROM categories WHERE name = 'Fine Watches'),
     (SELECT id FROM countries WHERE name = 'India'),
     155000000, 'INR',
     'https://images.unsplash.com/photo-1639078674158-e9f91e294469?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Bvlgari Lumina Collection', 'High jewelry set featuring rare Kashmir sapphires',
     (SELECT id FROM categories WHERE name = 'Fine Jewelry'),
     (SELECT id FROM countries WHERE name = 'India'),
     220000000, 'INR',
     'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2670&auto=format&fit=crop',
     v_admin_id,
     'approved'),

    ('Cessna Citation Longitude', 'Super-midsize business jet with custom Indian luxury interior',
     (SELECT id FROM categories WHERE name = 'Private Jets'),
     (SELECT id FROM countries WHERE name = 'India'),
     380000000, 'INR',
     'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2574&auto=format&fit=crop',
     v_admin_id,
     'approved');
END $$;

COMMIT;
