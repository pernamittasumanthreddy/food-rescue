# FoodRescue — Database Design & Schema Specification

## 1. Database Principles
- **Engine**: PostgreSQL 16+ with UUID v4 primary keys and pgcrypto support.
- **Normalization**: 3NF normalized schema across 50+ domain tables.
- **Integrity**: Strict foreign key constraints with cascade/set null rules where appropriate, check constraints for positive quantities and ratings.
- **Indian Regulatory Fields**: FSSAI license numbers (14-digit), NGO Darpan IDs, GSTINs (15-character), PAN references, Indian PIN codes (6-digit), and state/district hierarchies.

## 2. Core Entity Relationship Summary
- `users`: Core identity table with role-based routing and multi-language preferences.
- `roles` & `permissions`: Granular RBAC supporting 14 distinct roles from SUPER_ADMIN to FOOD_SAFETY_OFFICER.
- `audit_logs`: Immutable security and transactional trail.
- `organizations`: Multi-tenant entities covering Donors (Hotels, Restaurants), NGOs, Corporates, and Government Departments.
- `food_batches`: Perishable surplus batches with preparation time, expiry deadline, storage temperature, packaging, and allergens.
- `food_safety_inspections`: Mandatory safety evaluation records with hygiene score and FSSAI clearance.
- `donations`: High-level rescue requests grouping batches with pickup coordinates and status.
- `donation_matching_records`: AI matching logs with algorithmic scoring breakdown.
- `dispatch_trips`: Volunteer and fleet vehicle tracking with pickup/delivery OTPs.
- `beneficiary_communities`: Orphanages, old-age homes, and migrant settlements receiving food.
- `food_distributions`: Verified final meal handover events with beneficiary ratings.
- `csr_campaigns`: Corporate funding pools aligned with Indian CSR Schedule VII.
- `impact_records`: ESG impact tracking ($CO_2$, water, meals, landfill space).

## 3. Data Dictionary
For full SQL DDL, see [schema.sql](file:///c:/Users/pawan%20kalyan/OneDrive/Desktop/foodrescue/database/schema.sql).
