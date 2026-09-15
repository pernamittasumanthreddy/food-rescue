-- ======================================================================
-- FOODRESCUE ENTERPRISE RELATIONAL SCHEMA (PostgreSQL 16)
-- Complete National Surplus Food Rescue & Social Distribution Architecture
-- ======================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ----------------------------------------------------------------------
-- 1. SECURITY, USERS, ROLES & PERMISSIONS
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS roles (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL, -- ADMIN, DONOR, RECIPIENT, LOGISTICS, OVERSIGHT
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS permissions (
    id VARCHAR(100) PRIMARY KEY,
    module VARCHAR(50) NOT NULL,
    action VARCHAR(50) NOT NULL, -- CREATE, READ, UPDATE, DELETE, APPROVE, DISPATCH
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS role_permissions (
    role_id VARCHAR(50) REFERENCES roles(id) ON DELETE CASCADE,
    permission_id VARCHAR(100) REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL, -- +91XXXXXXXXXX
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id VARCHAR(50) REFERENCES roles(id),
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    address_line TEXT,
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_secret VARCHAR(100),
    preferred_language VARCHAR(10) DEFAULT 'en', -- en, te, hi
    last_login_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    device_type VARCHAR(50),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    role_id VARCHAR(50),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(100) NOT NULL,
    resource_id VARCHAR(100),
    details JSONB,
    ip_address VARCHAR(45),
    status VARCHAR(20) DEFAULT 'SUCCESS', -- SUCCESS, FAILURE, REJECTED
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------
-- 2. ORGANIZATIONS (Donors, NGOs, Corporates, Authorities)
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    org_type VARCHAR(50) NOT NULL, -- RESTAURANT, HOTEL, SUPERMARKET, CATERER, NGO, CORPORATE, GOVERNMENT_DEPT
    legal_identifier VARCHAR(100), -- GSTIN, CIN, NGO Darpan ID
    fssai_license_number VARCHAR(50),
    contact_person_id UUID REFERENCES users(id),
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address_line TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    verification_status VARCHAR(50) DEFAULT 'PENDING', -- PENDING, VERIFIED, SUSPENDED
    daily_surplus_capacity_kg DECIMAL(10, 2) DEFAULT 0.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ngo_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    darpan_registration_id VARCHAR(100) UNIQUE,
    fcra_number VARCHAR(100),
    section_80g_registered BOOLEAN DEFAULT TRUE,
    operational_capacity_meals_per_day INT DEFAULT 500,
    cold_storage_available BOOLEAN DEFAULT FALSE,
    vehicle_fleet_size INT DEFAULT 0,
    target_beneficiary_types TEXT[], -- CHILDREN, ELDERLY, HOMELESS, MIGRANT_WORKERS, DISASTER_RELIEF
    compliance_score DECIMAL(5, 2) DEFAULT 95.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------
-- 3. FOOD ITEMS, BATCHES & SAFETY INSPECTIONS
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS food_categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    is_perishable BOOLEAN DEFAULT TRUE,
    recommended_storage_temp_celsius DECIMAL(4, 1),
    shelf_life_hours_standard INT NOT NULL
);

CREATE TABLE IF NOT EXISTS food_batches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donor_org_id UUID REFERENCES organizations(id),
    category_id VARCHAR(50) REFERENCES food_categories(id),
    item_name VARCHAR(255) NOT NULL,
    dietary_type VARCHAR(20) NOT NULL, -- VEG, NON_VEG, JAIN, VEGAN
    quantity_kg DECIMAL(10, 2) NOT NULL,
    approximate_meals_count INT NOT NULL,
    preparation_timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    safe_consumption_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    storage_temp_celsius DECIMAL(4, 1),
    packaging_condition VARCHAR(50) NOT NULL, -- SEALED_CONTAINERS, THERMAL_BOXES, CATERING_PANS
    allergen_tags TEXT[], -- DAIRY, NUTS, GLUTEN, SOY, NONE
    fssai_declarations JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS food_safety_inspections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    food_batch_id UUID REFERENCES food_batches(id) ON DELETE CASCADE,
    inspector_id UUID REFERENCES users(id),
    visual_inspection_passed BOOLEAN NOT NULL,
    smell_and_texture_passed BOOLEAN NOT NULL,
    temperature_verified_celsius DECIMAL(4, 1) NOT NULL,
    fssai_compliance_flag BOOLEAN NOT NULL,
    hygiene_score DECIMAL(4, 2) NOT NULL, -- 0.00 to 10.00
    inspection_status VARCHAR(50) NOT NULL, -- CERTIFIED_SAFE, CONDITIONAL, REJECTED
    rejection_reasons TEXT[],
    inspector_notes TEXT,
    inspected_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------
-- 4. DONATIONS & SMART MATCHING ENGINE
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donor_org_id UUID REFERENCES organizations(id),
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'POSTED', -- POSTED, INSPECTED, MATCHED, DISPATCHED, IN_TRANSIT, DELIVERED, DISTRIBUTED, CANCELLED
    priority_level VARCHAR(20) DEFAULT 'STANDARD', -- CRITICAL_EXPIRY, HIGH, STANDARD
    pickup_address TEXT NOT NULL,
    pickup_city VARCHAR(100) NOT NULL,
    pickup_district VARCHAR(100) NOT NULL,
    pickup_state VARCHAR(100) NOT NULL,
    pickup_pincode VARCHAR(10) NOT NULL,
    pickup_latitude DECIMAL(10, 7),
    pickup_longitude DECIMAL(10, 7),
    available_from TIMESTAMP WITH TIME ZONE NOT NULL,
    pickup_deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    special_transport_notes TEXT,
    total_quantity_kg DECIMAL(10, 2) NOT NULL,
    total_meals_equivalent INT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS donation_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_id UUID REFERENCES donations(id) ON DELETE CASCADE,
    food_batch_id UUID REFERENCES food_batches(id)
);

CREATE TABLE IF NOT EXISTS donation_matching_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_id UUID REFERENCES donations(id) ON DELETE CASCADE,
    matched_ngo_id UUID REFERENCES organizations(id),
    match_score DECIMAL(5, 2) NOT NULL, -- e.g., 94.50%
    distance_km DECIMAL(6, 2) NOT NULL,
    algorithm_breakdown JSONB NOT NULL, -- weights and sub-scores
    matched_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    acceptance_status VARCHAR(50) DEFAULT 'OFFERED' -- OFFERED, ACCEPTED, DECLINED, TIMED_OUT
);

-- ----------------------------------------------------------------------
-- 5. LOGISTICS, FLEET & VOLUNTEER DISPATCH
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS vehicles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    registration_number VARCHAR(50) UNIQUE NOT NULL, -- AP 16 XX 1234
    vehicle_type VARCHAR(50) NOT NULL, -- ELECTRIC_VAN, INSULATED_TRUCK, THREE_WHEELER, TWO_WHEELER
    capacity_kg DECIMAL(10, 2) NOT NULL,
    has_cold_storage BOOLEAN DEFAULT FALSE,
    driver_user_id UUID REFERENCES users(id),
    current_latitude DECIMAL(10, 7),
    current_longitude DECIMAL(10, 7),
    is_available BOOLEAN DEFAULT TRUE,
    fitness_certificate_valid_till DATE
);

CREATE TABLE IF NOT EXISTS volunteer_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    has_vehicle BOOLEAN DEFAULT FALSE,
    vehicle_type VARCHAR(50),
    preferred_rescue_radius_km DECIMAL(4, 1) DEFAULT 10.0,
    total_rescues_completed INT DEFAULT 0,
    total_volunteer_hours DECIMAL(8, 2) DEFAULT 0.0,
    reliability_rating DECIMAL(3, 2) DEFAULT 5.0,
    badge_level VARCHAR(50) DEFAULT 'SEVA_WARRIOR', -- SEVA_WARRIOR, PRADHAN_SEVAK, FOOD_HERO
    emergency_contact_phone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS dispatch_trips (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_id UUID REFERENCES donations(id),
    assigned_volunteer_id UUID REFERENCES users(id),
    assigned_vehicle_id UUID REFERENCES vehicles(id),
    pickup_otp VARCHAR(6) NOT NULL,
    delivery_otp VARCHAR(6) NOT NULL,
    status VARCHAR(50) DEFAULT 'ASSIGNED', -- ASSIGNED, EN_ROUTE_PICKUP, PICKED_UP, EN_ROUTE_DROP, DELIVERED, FAILED
    pickup_actual_at TIMESTAMP WITH TIME ZONE,
    delivery_actual_at TIMESTAMP WITH TIME ZONE,
    distance_travelled_km DECIMAL(6, 2),
    carbon_emissions_offset_kg DECIMAL(10, 2),
    route_waypoints JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------
-- 6. BENEFICIARY & COMMUNITY DISTRIBUTION
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS beneficiary_communities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    community_name VARCHAR(255) NOT NULL,
    community_type VARCHAR(100) NOT NULL, -- ORPHANAGE, OLD_AGE_HOME, SLUM_CLUSTER, MIGRANT_SETTLEMENT, RURAL_FEEDING_CENTER
    managing_ngo_id UUID REFERENCES organizations(id),
    head_count_verified INT NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    contact_person VARCHAR(100) NOT NULL,
    contact_phone VARCHAR(20) NOT NULL,
    dietary_preferences VARCHAR(50) DEFAULT 'ANY'
);

CREATE TABLE IF NOT EXISTS food_distributions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_id UUID REFERENCES donations(id),
    ngo_id UUID REFERENCES organizations(id),
    community_id UUID REFERENCES beneficiary_communities(id),
    meals_distributed INT NOT NULL,
    distribution_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    beneficiary_feedback_rating INT CHECK (beneficiary_feedback_rating BETWEEN 1 AND 5),
    photo_proof_url TEXT,
    verified_by_officer_id UUID REFERENCES users(id)
);

-- ----------------------------------------------------------------------
-- 7. CSR, FINANCE & IMPACT ANALYTICS
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS csr_campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    corporate_org_id UUID REFERENCES organizations(id),
    title VARCHAR(255) NOT NULL,
    allocated_funds_inr DECIMAL(12, 2) NOT NULL,
    target_meals_rescued INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    schedule_vii_category VARCHAR(100) DEFAULT 'ERADICATING_HUNGER_AND_MALNUTRITION',
    tax_exemption_80g_certificate_ref VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS impact_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_id UUID REFERENCES donations(id),
    date DATE NOT NULL,
    state VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    food_saved_kg DECIMAL(10, 2) NOT NULL,
    meals_served INT NOT NULL,
    co2_emissions_avoided_kg DECIMAL(10, 2) NOT NULL, -- Standard: 2.5 kg CO2 per 1 kg food waste diverted
    water_footprint_saved_liters DECIMAL(12, 2) NOT NULL,
    landfill_space_saved_m3 DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------
-- 8. COMMUNICATIONS & SYSTEM NOTIFICATIONS
-- ----------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    notification_type VARCHAR(50) NOT NULL, -- DONATION_ALERT, PICKUP_REMINDER, SAFETY_APPROVAL, MATCH_FOUND, SYSTEM
    channel VARCHAR(20) DEFAULT 'IN_APP', -- IN_APP, SMS, EMAIL, PUSH
    is_read BOOLEAN DEFAULT FALSE,
    action_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create essential performance indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role_id);
CREATE INDEX IF NOT EXISTS idx_donations_status ON donations(status);
CREATE INDEX IF NOT EXISTS idx_donations_location ON donations(pickup_state, pickup_district, pickup_city);
CREATE INDEX IF NOT EXISTS idx_organizations_type ON organizations(org_type);
CREATE INDEX IF NOT EXISTS idx_audit_logs_timestamp ON audit_logs(created_at);
