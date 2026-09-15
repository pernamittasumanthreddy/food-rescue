# FoodRescue — Enterprise Architecture Document

## 1. Executive Summary
FoodRescue is an Indian national enterprise surplus food rescue platform. The platform connects surplus food generators (restaurants, hotels, caterers, supermarkets, corporate cafeterias) with recipients (NGOs, community kitchens, shelter homes, disaster relief camps) using food safety verification, smart AI matching, cold-chain/fleet logistics, and measurable ESG impact reporting.

## 2. Architectural Paradigm
- **Monolith-First with Clean Domain Boundaries**: Designed as a modular monolith in TypeScript/Node.js, with decoupled bounded contexts (Auth, Donor, FoodSafety, AIMatching, Logistics, NGO, Beneficiary, Finance, Analytics).
- **Zero-Blue Indian Eco-Social Aesthetic**: The user experience rejects standard corporate blue palettes in favor of Indian environmental tones: Forest Green (`#126B4F`), Emerald (`#2E8B57`), Saffron (`#F4A340`), Warm Orange (`#F28C28`), and Cream (`#FFF8EC`).
- **High-Assurance Food Safety**: Embedded FSSAI regulatory compliance, cold-chain temperature thresholds, and inspector verification checkpoints.
- **Multilingual Support**: First-class support for English, Telugu (`తెలుగు`), and Hindi (`हिन्दी`) across all UI layers, forms, error dialogs, and notifications.

## 3. End-to-End Workflow Pipeline
```
[Donor Creates Surplus Batch]
             │
             ▼
[FSSAI Food Safety & Quality Inspection]
             │
             ▼
[AI Smart Matching Engine (Distance + Capacity + Urgency)]
             │
             ▼
[NGO / Shelter Allocation Confirmation]
             │
             ▼
[Volunteer & Fleet Logistics Dispatch (OTP Handshake)]
             │
             ▼
[Safe Transport & Real-Time Tracking]
             │
             ▼
[Beneficiary Distribution & Verified Delivery]
             │
             ▼
[ESG Impact & Audit Logging (CO2, Water, Meals)]
```

## 4. Bounded Contexts & Services
1. **Core & Security**: Authentication, Session Management, RBAC (14+ roles), Immutable Audit Log.
2. **Food Service**: Category management, perishability calculations, batching, and allergen tracking.
3. **Food Safety Service**: FSSAI inspection parameters, temperature compliance, sensory checks, approval workflows.
4. **AI Matching Service**: Multi-factor ranking algorithm considering distance, NGO daily meal capacity, dietary alignment, and food shelf-life urgency.
5. **Logistics & Fleet Service**: Dispatch scheduling, route waypoint optimization, driver assignments, OTP-verified custody transfer.
6. **NGO & Community Service**: NGO verification (Darpan ID), beneficiary community records, distribution logs.
7. **CSR & Finance Service**: 80G tax exemption certificates, Corporate Schedule VII project grants, fund tracking.
8. **ESG & Analytics Service**: Real-time conversion of rescued kilograms into meals served ($1\text{ kg} \approx 2.5\text{ meals}$), avoided carbon ($2.5\text{ kg CO}_2\text{e}$ per kg food), and water conservation.
