-- ======================================================================
-- FOODRESCUE MASTER SEED DATA (INDIAN REGIONAL CONTEXT)
-- ======================================================================

-- 1. ROLES
INSERT INTO roles (id, name, category, description) VALUES
('SUPER_ADMIN', 'National Super Administrator', 'ADMIN', 'Full nationwide access to all systems, audits, and configurations'),
('REGIONAL_ADMIN', 'Regional / State Administrator', 'ADMIN', 'State-level oversight across Andhra Pradesh, Telangana, Karnataka, etc.'),
('DISTRICT_ADMIN', 'District Operations Officer', 'ADMIN', 'District-level coordination (e.g. Krishna, NTR, Hyderabad, Guntur)'),
('DONOR', 'General Food Donor', 'DONOR', 'Individual or small event donors donating surplus meals'),
('RESTAURANT', 'Restaurant Surplus Manager', 'DONOR', 'Commercial restaurants donating daily surplus kitchen batches'),
('HOTEL', 'Hotel & Banquet Operations', 'DONOR', 'Large star hotels and convention centres with bulk event surplus'),
('NGO', 'NGO & Food Bank Partner', 'RECIPIENT', 'Verified charitable organizations distributing meals to vulnerable groups'),
('VOLUNTEER', 'Rescue Volunteer Hero', 'LOGISTICS', 'Field volunteers performing hyper-local food collections and drop-offs'),
('DELIVERY_PARTNER', 'Logistics Fleet Driver', 'LOGISTICS', 'Professional commercial drivers handling insulated temperature-controlled vans'),
('BENEFICIARY', 'Community Shelter Manager', 'RECIPIENT', 'Shelter homes, orphanages, and community feeding centres'),
('CORPORATE_CSR', 'Corporate CSR & ESG Lead', 'OVERSIGHT', 'Corporate partners funding cold chains and monitoring Schedule VII ESG impact'),
('GOVERNMENT_AUTHORITY', 'Food Safety & Civil Supplies Officer', 'OVERSIGHT', 'Government regulators monitoring hunger indices and food safety compliance'),
('ANALYST', 'ESG & Sustainability Analyst', 'OVERSIGHT', 'Data analysts tracking carbon footprint reduction and waste metrics'),
('FOOD_SAFETY_OFFICER', 'FSSAI Certified Food Inspector', 'OVERSIGHT', 'Inspects and approves food hygiene, temperature, and shelf life')
ON CONFLICT (id) DO NOTHING;

-- 2. FOOD CATEGORIES
INSERT INTO food_categories (id, name, is_perishable, recommended_storage_temp_celsius, shelf_life_hours_standard) VALUES
('COOKED_MEALS', 'Hot Cooked Rice & Curries (Bhojanam)', TRUE, 65.0, 6),
('BAKERY_SNACKS', 'Bakery Items, Breads & Rotis', FALSE, 22.0, 24),
('RAW_PRODUCE', 'Fresh Vegetables & Fruits (Sabzi/Phal)', TRUE, 10.0, 48),
('PACKAGED_FOODS', 'Packaged Dry Provisions & Grains', FALSE, 25.0, 720),
('DAIRY_SWEETS', 'Dairy Products & Traditional Sweets', TRUE, 4.0, 12)
ON CONFLICT (id) DO NOTHING;

-- 3. ORGANIZATIONS (Indian Master Data)
INSERT INTO organizations (id, name, org_type, legal_identifier, fssai_license_number, phone, email, address_line, city, district, state, pincode, latitude, longitude, verification_status, daily_surplus_capacity_kg) VALUES
('a0000000-0000-0000-0000-000000000001', 'Annapurna Heritage Grand', 'HOTEL', '37AABCU9603R1ZM', '10123004000128', '+918662478899', 'banquets@annapurnagrand.in', 'MG Road, Labbipet', 'Vijayawada', 'NTR District', 'Andhra Pradesh', '520010', 16.5062, 80.6480, 'VERIFIED', 150.0),
('a0000000-0000-0000-0000-000000000002', 'Bawarchi Spice Kitchen', 'RESTAURANT', '36AAACB1234D1ZV', '10221008000944', '+914027634567', 'manager@bawarchikitchen.org', 'RTC X Roads, Musheerabad', 'Hyderabad', 'Hyderabad', 'Telangana', '500020', 17.4065, 78.4983, 'VERIFIED', 80.0),
('a0000000-0000-0000-0000-000000000003', 'Sneha Seva Society Food Bank', 'NGO', 'AP/2018/0192834', '20120005000311', '+918662589001', 'contact@snehaseva.org.in', 'Beside Siddhartha College, Moghalrajpuram', 'Vijayawada', 'NTR District', 'Andhra Pradesh', '520010', 16.5020, 80.6550, 'VERIFIED', 400.0),
('a0000000-0000-0000-0000-000000000004', 'Hyderabad Robin Rescue Chapter', 'NGO', 'TS/2019/0238491', '20221003000592', '+919848022338', 'hyderabad@robinrescue.org', 'Madhapur, Hitec City', 'Hyderabad', 'Rangareddy', 'Telangana', '500081', 17.4483, 78.3915, 'VERIFIED', 600.0),
('a0000000-0000-0000-0000-000000000005', 'Godavari Green Ventures CSR', 'CORPORATE', 'L24230AP2010PLC069812', NULL, '+918666699881', 'csr@godavarigreen.com', 'Auto Nagar Industrial Area', 'Vijayawada', 'Krishna', 'Andhra Pradesh', '520007', 16.4950, 80.6800, 'VERIFIED', 0.0),
('a0000000-0000-0000-0000-000000000006', 'Andhra Pradesh Food Safety & Civil Supplies', 'GOVERNMENT_DEPT', 'GOV-AP-CS-2024', NULL, '+918662499100', 'commissioner@apfoodsafety.gov.in', 'Collectorate Complex, Bandar Road', 'Vijayawada', 'NTR District', 'Andhra Pradesh', '520002', 16.5150, 80.6320, 'VERIFIED', 0.0)
ON CONFLICT (id) DO NOTHING;

-- 4. USERS (Realistic Demo Accounts with Indian Personas)
-- Password hash corresponds to: "RescueFood@2026"
INSERT INTO users (id, email, phone, password_hash, first_name, last_name, role_id, state, district, city, pincode, address_line, is_active, is_verified, preferred_language) VALUES
('u0000000-0000-0000-0000-000000000001', 'superadmin@foodrescue.org.in', '+919848011221', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Kalyan', 'Varma', 'SUPER_ADMIN', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520010', 'FoodRescue Apex Operations Centre', TRUE, TRUE, 'en'),
('u0000000-0000-0000-0000-000000000002', 'regional.ap@foodrescue.org.in', '+919848022332', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Lakshmi', 'Prasanna', 'REGIONAL_ADMIN', 'Andhra Pradesh', 'Krishna', 'Vijayawada', '520002', 'Regional Coordination Secretariat', TRUE, TRUE, 'te'),
('u0000000-0000-0000-0000-000000000003', 'donor.annapurna@gmail.com', '+918662478899', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Ramesh', 'Chowdary', 'HOTEL', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520010', 'Annapurna Grand, MG Road', TRUE, TRUE, 'te'),
('u0000000-0000-0000-0000-000000000004', 'ngo.snehaseva@gmail.com', '+918662589001', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Sister Mary', 'Theresa', 'NGO', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520010', 'Sneha Seva Society, Moghalrajpuram', TRUE, TRUE, 'en'),
('u0000000-0000-0000-0000-000000000005', 'volunteer.suresh@gmail.com', '+919949012345', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Suresh', 'Reddy', 'VOLUNTEER', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520008', 'Patamata Lanka', TRUE, TRUE, 'te'),
('u0000000-0000-0000-0000-000000000006', 'driver.venkat@foodrescue.org.in', '+919876543210', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Venkateswara', 'Rao', 'DELIVERY_PARTNER', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520012', 'Bhavanipuram Depot', TRUE, TRUE, 'te'),
('u0000000-0000-0000-0000-000000000007', 'fssai.officer@apgov.in', '+919440188220', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Dr. Anand', 'Kumar', 'FOOD_SAFETY_OFFICER', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520002', 'Food Safety Inspection Directorate', TRUE, TRUE, 'hi'),
('u0000000-0000-0000-0000-000000000008', 'csr.lead@godavari.com', '+919988776655', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Pooja', 'Sharma', 'CORPORATE_CSR', 'Andhra Pradesh', 'Krishna', 'Vijayawada', '520007', 'Godavari Green CSR Wing', TRUE, TRUE, 'en'),
('u0000000-0000-0000-0000-000000000009', 'shelter.manager@vjaorphanage.org', '+918662431122', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Padmavati', 'Devi', 'BENEFICIARY', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520003', 'Balala Sadan Orphanage, Satyanarayanapuram', TRUE, TRUE, 'te'),
('u0000000-0000-0000-0000-000000000010', 'gov.collector@ap.gov.in', '+918662451000', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'S. Chandrasekhar', 'IAS', 'GOVERNMENT_AUTHORITY', 'Andhra Pradesh', 'NTR District', 'Vijayawada', '520002', 'District Collectorate Secretariat', TRUE, TRUE, 'en'),
('u0000000-0000-0000-0000-000000000011', 'esg.analyst@foodrescue.org.in', '+919811223344', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Divya', 'Nair', 'ANALYST', 'Karnataka', 'Bengaluru Urban', 'Bengaluru', '560001', 'Sustainability Research Cell', TRUE, TRUE, 'en'),
('u0000000-0000-0000-0000-000000000012', 'restaurant.bawarchi@gmail.com', '+914027634567', '$2a$12$e8Fj1O/2i8p0aG27nC4/uOqOQhS0YJ76Uq0h4n0k80aC9L/9zDk4W', 'Mohammed', 'Ibrahim', 'RESTAURANT', 'Telangana', 'Hyderabad', 'Hyderabad', '500020', 'Bawarchi Spice Kitchen, Musheerabad', TRUE, TRUE, 'hi')
ON CONFLICT (id) DO NOTHING;

-- 5. BENEFICIARY COMMUNITIES
INSERT INTO beneficiary_communities (id, community_name, community_type, managing_ngo_id, head_count_verified, city, district, state, contact_person, contact_phone, dietary_preferences) VALUES
('b0000000-0000-0000-0000-000000000001', 'Balala Sadan Orphanage Home', 'ORPHANAGE', 'a0000000-0000-0000-0000-000000000003', 120, 'Vijayawada', 'NTR District', 'Andhra Pradesh', 'Padmavati Devi', '+918662431122', 'VEG'),
('b0000000-0000-0000-0000-000000000002', 'Vrudhula Ashrayam Senior Home', 'OLD_AGE_HOME', 'a0000000-0000-0000-0000-000000000003', 75, 'Vijayawada', 'NTR District', 'Andhra Pradesh', 'Narayana Swamy', '+918662490033', 'VEG'),
('b0000000-0000-0000-0000-000000000003', 'Krishna Riverbank Migrant Worker Settlement', 'MIGRANT_SETTLEMENT', 'a0000000-0000-0000-0000-000000000003', 350, 'Vijayawada', 'Krishna', 'Andhra Pradesh', 'Subba Rao', '+919848033445', 'ANY')
ON CONFLICT (id) DO NOTHING;

-- 6. VEHICLES
INSERT INTO vehicles (id, registration_number, vehicle_type, capacity_kg, has_cold_storage, driver_user_id, current_latitude, current_longitude, is_available) VALUES
('v0000000-0000-0000-0000-000000000001', 'AP 16 TZ 8421', 'ELECTRIC_VAN', 500.0, TRUE, 'u0000000-0000-0000-0000-000000000006', 16.5060, 80.6475, TRUE),
('v0000000-0000-0000-0000-000000000002', 'TS 09 UA 1904', 'INSULATED_TRUCK', 1200.0, TRUE, NULL, 17.4480, 78.3910, TRUE)
ON CONFLICT (id) DO NOTHING;

-- 7. INITIAL IMPACT SUMMARY RECORDS (Realistic Indian Metrics)
INSERT INTO impact_records (id, donation_id, date, state, district, food_saved_kg, meals_served, co2_emissions_avoided_kg, water_footprint_saved_liters, landfill_space_saved_m3) VALUES
('i0000000-0000-0000-0000-000000000001', NULL, CURRENT_DATE - INTERVAL '1 day', 'Andhra Pradesh', 'NTR District', 12450.0, 31125, 31125.0, 4980000.0, 37.35),
('i0000000-0000-0000-0000-000000000002', NULL, CURRENT_DATE - INTERVAL '2 days', 'Telangana', 'Hyderabad', 18900.0, 47250, 47250.0, 7560000.0, 56.70),
('i0000000-0000-0000-0000-000000000003', NULL, CURRENT_DATE - INTERVAL '3 days', 'Karnataka', 'Bengaluru Urban', 24100.0, 60250, 60250.0, 9640000.0, 72.30)
ON CONFLICT (id) DO NOTHING;
