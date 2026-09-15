export type Language = 'en' | 'te' | 'hi';

export interface TranslationDictionary {
  brandName: string;
  tagline: string;
  subTagline: string;
  nav: {
    home: string;
    howItWorks: string;
    liveSimulator: string;
    forDonors: string;
    forNgos: string;
    forVolunteers: string;
    impact: string;
    coverage: string;
    dashboards: string;
    signIn: string;
    register: string;
    signOut: string;
    donateFoodCta: string;
    myDashboard: string;
    exploreDashboardsTitle: string;
    exploreDashboardsDesc: string;
    launchDashboard: string;
    activeStatus: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    ctaDonate: string;
    ctaWorkflow: string;
    ctaVolunteer: string;
  };
  stats: {
    foodRescued: string;
    mealsServed: string;
    co2Avoided: string;
    activeDonors: string;
    verifiedNgos: string;
    volunteers: string;
    citiesCovered: string;
  };
  workflow: {
    badge: string;
    title: string;
    subtitle: string;
    autoRunBtn: string;
    simulatingBtn: string;
    nextStepBtn: string;
    resetBtn: string;
    stageActive: string;
    step1: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      field1Label: string;
      field1Val: string;
      field2Label: string;
      field2Val: string;
      field3Label: string;
      field3Val: string;
    };
    step2: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      field1Label: string;
      field1Val: string;
      field2Label: string;
      field2Val: string;
      field3Label: string;
      field3Val: string;
    };
    step3: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      topMatchLabel: string;
      matchScoreLabel: string;
      breakdownText: string;
    };
    step4: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      lockTitle: string;
      lockDesc: string;
    };
    step5: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      field1Label: string;
      field1Val: string;
      field2Label: string;
      field2Val: string;
      field3Label: string;
      field3Val: string;
    };
    step6: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      field1Label: string;
      field1Val: string;
      field2Label: string;
      field2Val: string;
    };
    step7: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      field1Label: string;
      field1Val: string;
      field2Label: string;
      field2Val: string;
    };
    step8: {
      stepName: string;
      subtitle: string;
      actor: string;
      badge: string;
      heading: string;
      desc: string;
      card1Title: string;
      card1Val: string;
      card1Sub: string;
      card2Title: string;
      card2Val: string;
      card2Sub: string;
      card3Title: string;
      card3Val: string;
      card3Sub: string;
      card4Title: string;
      card4Val: string;
      card4Sub: string;
    };
  };
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    hotels: {
      title: string;
      desc: string;
      p1: string;
      p2: string;
      p3: string;
    };
    ngos: {
      title: string;
      desc: string;
      p1: string;
      p2: string;
      p3: string;
    };
    volunteers: {
      title: string;
      desc: string;
      p1: string;
      p2: string;
      p3: string;
    };
    csr: {
      title: string;
      desc: string;
      p1: string;
      p2: string;
      p3: string;
    };
  };
  coverage: {
    badge: string;
    title: string;
    subtitle: string;
    stateHQ: string;
    verifiedNgosLabel: string;
    commercialDonorsLabel: string;
    mealsLabel: string;
    regionalOps: string;
    centralDesc: string;
    totalRescued: string;
    mealsNourished: string;
    operationalDistricts: string;
  };
  testimonials: {
    badge: string;
    title: string;
    t1Quote: string;
    t1Author: string;
    t1Role: string;
    t2Quote: string;
    t2Author: string;
    t2Role: string;
    t3Quote: string;
    t3Author: string;
    t3Role: string;
  };
  cta: {
    badge: string;
    title: string;
    desc: string;
    btnDonate: string;
    btnNgo: string;
  };
  footer: {
    desc: string;
    certs: string;
    activeHubsTitle: string;
    rolePortalsTitle: string;
    helplineTitle: string;
    hqAddress: string;
    tollFreeLabel: string;
    rights: string;
  };
  dashboard: {
    moduleWorkspaces: string;
    switchRoleBtn: string;
    signOutBtn: string;
    searchPlaceholder: string;
    notificationsTitle: string;
    newBadge: string;
    workspaceSuffix: string;
    overviewTab: string;
  };
  auth: {
    signInTitle: string;
    signInSubtitle: string;
    registerTitle: string;
    registerSubtitle: string;
    emailOrPhoneLabel: string;
    emailOrPhonePlaceholder: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    forgotPasswordLink: string;
    signInButton: string;
    authenticating: string;
    instantDemoTitle: string;
    instantDemoSubtitle: string;
    registerCtaPrompt: string;
    registerCtaLink: string;
    stakeholderCategory: string;
    organizationNameLabel: string;
    organizationNamePlaceholder: string;
    contactPersonLabel: string;
    contactPersonPlaceholder: string;
    contactEmailLabel: string;
    contactEmailPlaceholder: string;
    contactPhoneLabel: string;
    contactPhonePlaceholder: string;
    cityLabel: string;
    stateLabel: string;
    fssaiDarpanLabel: string;
    fssaiDarpanPlaceholder: string;
    registerButton: string;
    alreadyRegisteredPrompt: string;
    alreadyRegisteredLink: string;
    resetPasswordTitle: string;
    resetPasswordSubtitle: string;
    resetInputPlaceholder: string;
    sendResetOtpButton: string;
    resetSentMessage: string;
    returnToSignIn: string;
    backToSignIn: string;
  };
  roles: {
    SUPER_ADMIN: string;
    REGIONAL_ADMIN: string;
    DISTRICT_ADMIN: string;
    DONOR: string;
    RESTAURANT: string;
    HOTEL: string;
    NGO: string;
    VOLUNTEER: string;
    DELIVERY_PARTNER: string;
    BENEFICIARY: string;
    CORPORATE_CSR: string;
    GOVERNMENT_AUTHORITY: string;
    ANALYST: string;
    FOOD_SAFETY_OFFICER: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brandName: 'FoodRescue',
    tagline: 'Save Food • Feed People • Build a Sustainable Future',
    subTagline: 'Indian Enterprise Surplus Food Rescue & Social Distribution Ecosystem',
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      liveSimulator: 'Live Simulator',
      forDonors: 'For Donors',
      forNgos: 'For NGOs',
      forVolunteers: 'For Volunteers',
      impact: 'ESG Impact',
      coverage: 'India Coverage',
      dashboards: '12 Dashboards',
      signIn: 'Sign In',
      register: 'Register',
      signOut: 'Sign Out',
      donateFoodCta: 'Rescue Food Now',
      myDashboard: 'My Dashboard',
      exploreDashboardsTitle: 'Explore All 12 Authenticated Dashboards',
      exploreDashboardsDesc: 'Select any persona to immediately sign in and experience their specialized operational workflows, widgets, and tools.',
      launchDashboard: 'Launch Dashboard →',
      activeStatus: 'Active'
    },
    hero: {
      badge: 'FSSAI Certified Food Rescue Network Across India',
      headline: 'Good Food Should',
      headlineHighlight: 'Never Go to Waste',
      subheadline:
        'FoodRescue connects surplus food from restaurants, hotels, convention halls, supermarkets, and catering kitchens with verified NGOs, shelters, and communities across Andhra Pradesh, Telangana, Karnataka, and all of India.',
      ctaDonate: 'Donate Surplus Food',
      ctaWorkflow: 'Live Rescue Simulator',
      ctaVolunteer: 'Join as Volunteer'
    },
    stats: {
      foodRescued: 'Kg Food Rescued',
      mealsServed: 'Nutritious Meals Served',
      co2Avoided: 'Kg CO₂ Diverted',
      activeDonors: 'Commercial Donors',
      verifiedNgos: 'Verified NGOs & Shelters',
      volunteers: 'Active Volunteers',
      citiesCovered: 'Active Indian Hubs'
    },
    workflow: {
      badge: 'Interactive Enterprise Workflow Simulator',
      title: 'Watch Surplus Turn into Warm Smiles',
      subtitle: 'Experience the exact 8-stage operational journey from the FoodRescue reference architecture. Click through each checkpoint or run the live simulation.',
      autoRunBtn: 'Auto-Run 8-Step Rescue',
      simulatingBtn: 'Simulating Workflow...',
      nextStepBtn: 'Next Step',
      resetBtn: 'Reset Simulator',
      stageActive: 'STAGE ACTIVE',
      step1: {
        stepName: 'Food Donor',
        subtitle: 'Surplus Declared',
        actor: 'Hotel Banquet Manager',
        badge: 'Step 1 • Food Surplus Declaration',
        heading: 'Commercial Donor Listing — Annapurna Heritage Grand',
        desc: 'The banquet kitchen logs surplus from an Andhra wedding reception in Vijayawada. Temperature-controlled holding initiated.',
        field1Label: 'FOOD BATCH',
        field1Val: 'Royal Andhra Wedding Bhojanam (Hot Meals)',
        field2Label: 'QUANTITY / MEALS',
        field2Val: '85 kg (210 Meals)',
        field3Label: 'PICKUP LOCATION',
        field3Val: 'MG Road, Labbipet, Vijayawada'
      },
      step2: {
        stepName: 'Food Safety',
        subtitle: 'FSSAI Hygiene Check',
        actor: 'Food Inspector / Sensor',
        badge: 'Step 2 • Food Safety & FSSAI Verification',
        heading: 'FSSAI Hygiene & Temperature Inspection Passed',
        desc: 'Food Safety Officer conducts digital organoleptic and thermal probe test. All parameters certified safe.',
        field1Label: 'RECORDED TEMPERATURE',
        field1Val: '68.5°C (Safe Hot-Hold > 65°C)',
        field2Label: 'HYGIENE SCORE',
        field2Val: '9.4 / 10.0 (FSSAI Certified)',
        field3Label: 'SAFETY STATUS',
        field3Val: 'CERTIFIED FOR CONSUMPTION'
      },
      step3: {
        stepName: 'AI Matching',
        subtitle: 'Proximity & Capacity Match',
        actor: 'FoodRescue AI Algorithm',
        badge: 'Step 3 • AI Matching Engine (Proximity & Capacity)',
        heading: 'Smart Matching Algorithm Recommends Best-Fit NGO',
        desc: 'Evaluating distance (2.8 km), dietary preference (Pure Veg), shelter meal capacity (500 meals/day), and urgent need.',
        topMatchLabel: 'Top Match: Sneha Seva Society Food Bank',
        matchScoreLabel: 'Match Score: 94.8%',
        breakdownText: 'Proximity Score: 98% (2.8 km away) • Capacity Fit: 100% • Dietary Compatibility: 100% • NGO Compliance Rating: 99%'
      },
      step4: {
        stepName: 'Allocation',
        subtitle: 'NGO Match Accepted',
        actor: 'Verified NGO Partner',
        badge: 'Step 4 • NGO Allocation & Confirmation',
        heading: 'Allocation Confirmed by Sneha Seva Food Bank',
        desc: 'Sister Mary Theresa confirms acceptance for distribution at Balala Sadan Orphanage and Vrudhula Senior Home.',
        lockTitle: 'Instant Allocation Lock Triggered',
        lockDesc: 'Batch reserved exclusively. Dispatching field rescue volunteer.'
      },
      step5: {
        stepName: 'Logistics',
        subtitle: 'Fleet / Volunteer Dispatched',
        actor: 'Electric Insulated Van',
        badge: 'Step 5 • Fleet & Volunteer Dispatch',
        heading: 'Volunteer Dispatched — Suresh Reddy (Seva Hero #12)',
        desc: 'Assigned electric delivery vehicle AP 16 TZ 8421. Optimized routing avoids MG Road rush-hour congestion.',
        field1Label: 'VEHICLE TYPE',
        field1Val: 'Electric Insulated Food Van',
        field2Label: 'ESTIMATED PICKUP ETA',
        field2Val: '14 Minutes',
        field3Label: 'SECURE PICKUP OTP',
        field3Val: '849201'
      },
      step6: {
        stepName: 'Custody Handover',
        subtitle: 'Dual OTP Handshake',
        actor: 'Distribution Center',
        badge: 'Step 6 • Pickup & Transit Verification',
        heading: 'Custody Handshake Verified via Dual OTP',
        desc: 'Donor verified volunteer using OTP 849201. Food secured in thermal boxes and moving to destination.',
        field1Label: 'TRANSIT STATUS',
        field1Val: 'In Transit (Thermal Sealed)',
        field2Label: 'DESTINATION VERIFICATION OTP',
        field2Val: '315792'
      },
      step7: {
        stepName: 'Beneficiaries',
        subtitle: 'Hot Meals Distributed',
        actor: 'Orphanages & Shelters',
        badge: 'Step 7 • Beneficiary Distribution & Meal Handover',
        heading: 'Hot Meals Distributed at Balala Sadan Orphanage Home',
        desc: '120 children and 90 resident seniors served fresh, hygienic dinner within 1 hour of surplus declaration.',
        field1Label: 'MEALS SERVED',
        field1Val: '210 Satisfied Portions',
        field2Label: 'BENEFICIARY FEEDBACK',
        field2Val: '★★★★★ 5.0 / 5.0 (Delicious & Warm)'
      },
      step8: {
        stepName: 'ESG Impact',
        subtitle: 'CO₂ Avoided & Tax Receipts',
        actor: 'Platform Impact Engine',
        badge: 'Step 8 • ESG Impact & Tax Exemption Audit Completed',
        heading: 'Mission Accomplished • Measurable Social & Environmental Impact',
        desc: 'Surplus successfully diverted from Andhra landfills. Carbon offset recorded and Section 80G tax receipt issued.',
        card1Title: 'FOOD RESCUED',
        card1Val: '85 kg',
        card1Sub: '210 Meals Fed',
        card2Title: 'CO₂ EMISSIONS AVOIDED',
        card2Val: '212.5 kg',
        card2Sub: 'Diverted from Landfills',
        card3Title: 'WATER FOOTPRINT SAVED',
        card3Val: '34,000 L',
        card3Sub: 'Agricultural Water',
        card4Title: 'TAX CERTIFICATE',
        card4Val: 'SEC-80G / CSR',
        card4Sub: 'Generated & Signed'
      }
    },
    pillars: {
      badge: 'Multi-Stakeholder Collaboration',
      title: 'Built for Every Pillar of the Food Ecosystem',
      subtitle: 'Custom operational dashboards and automated workflows for hotels, food banks, volunteers, and civil authorities.',
      hotels: {
        title: 'Hotels & Caterers',
        desc: 'Effortlessly list large-scale buffet surplus with verified temperature tags. Receive instantaneous Section 80G tax exemption receipts.',
        p1: '✓ Zero kitchen waste footprint',
        p2: '✓ FSSAI Good Samaritan protection',
        p3: '✓ Scheduled daily evening pickups'
      },
      ngos: {
        title: 'NGOs & Food Banks',
        desc: 'Directly receive high-grade surplus matched to your shelter head count and dietary requirements with zero supply bottlenecks.',
        p1: '✓ Automated AI proximity allocation',
        p2: '✓ Digital beneficiary tracking',
        p3: '✓ Cold-chain transport access'
      },
      volunteers: {
        title: 'Seva Volunteer Heroes',
        desc: 'Join an active fleet of local changemakers. Complete flexible rescue missions nearby with GPS navigation and earn recognized badges.',
        p1: '✓ Turn-by-turn routing with OTPs',
        p2: '✓ Flexible 30-minute missions',
        p3: '✓ Verified community seva hours'
      },
      csr: {
        title: 'Corporate CSR & ESG',
        desc: 'Sponsor electric refrigerated food rescue vans, cold hubs, and malnutrition eradication programs aligned with Schedule VII.',
        p1: '✓ SEBI BRSR compliant analytics',
        p2: '✓ Verified carbon & water offsets',
        p3: '✓ Transparent grant tracking'
      }
    },
    coverage: {
      badge: 'National Zero-Hunger Footprint',
      title: 'Serving Communities Across Indian States',
      subtitle: 'Connecting high-density food generation nodes with civil society food banks and vulnerable communities across districts.',
      stateHQ: 'Regional HQ',
      verifiedNgosLabel: 'Verified NGOs',
      commercialDonorsLabel: 'Commercial Donors',
      mealsLabel: 'Meals Nourished',
      regionalOps: 'Regional State Operations',
      centralDesc: 'Central coordination operates with continuous FSSAI cold-chain inspection, fleet dispatch, and automated hunger routing.',
      totalRescued: 'TOTAL FOOD RESCUED',
      mealsNourished: 'MEALS NOURISHED',
      operationalDistricts: 'Operational Districts'
    },
    testimonials: {
      badge: 'Voices of Impact',
      title: 'Real Change Across Indian Communities',
      t1Quote: 'Before FoodRescue, wedding banquets at Annapurna Grand meant agonizing over pristine excess food. Today, within 20 minutes of posting, an electric van collects the thermal boxes, feeding 160 children at Balala Sadan.',
      t1Author: 'Ramesh Chowdary',
      t1Role: 'Banquet Director, Annapurna Heritage Grand, Vijayawada',
      t2Quote: 'The strict FSSAI temperature verification gives our shelter total confidence. We receive hot, nutritious meals on time every evening, significantly cutting our monthly kitchen ration expenses.',
      t2Author: 'Sister Mary Theresa',
      t2Role: 'Sneha Seva Society Food Bank, NTR District',
      t3Quote: 'As a college student in Vijayawada, doing 2 rescue pickups each weekend on my electric scooter gives me immense satisfaction. The app makes navigation and OTP verification totally frictionless.',
      t3Author: 'Suresh Reddy',
      t3Role: 'Food Rescue Volunteer Hero (Level 3 Seva Warrior)'
    },
    cta: {
      badge: 'Turn Surplus Into Hope',
      title: 'Ready to Build a Zero-Hunger, Zero-Waste India?',
      desc: 'Whether you run a commercial kitchen, lead a registered charitable trust, or want to volunteer in your city, join the FoodRescue national network today.',
      btnDonate: 'Donate Surplus Food',
      btnNgo: 'Register as NGO / Shelter'
    },
    footer: {
      desc: "India's premier enterprise surplus food rescue platform connecting generous donors with verified feeding centers.",
      certs: 'FSSAI Safe Surplus Certified • Section 80G Tax Compliant',
      activeHubsTitle: 'Active State Hubs',
      rolePortalsTitle: 'Role Portals',
      helplineTitle: 'Helpline & Emergency',
      hqAddress: 'MG Road, Labbipet, Vijayawada - 520010',
      tollFreeLabel: 'National Zero-Hunger Toll Free: 1800-425-FOOD (3663)',
      rights: '© 2026 FoodRescue Enterprise India. All Rights Reserved.'
    },
    dashboard: {
      moduleWorkspaces: 'MODULE WORKSPACES',
      switchRoleBtn: 'Switch Role (12 Available)',
      signOutBtn: 'SIGN OUT',
      searchPlaceholder: 'Search records...',
      notificationsTitle: 'Notifications',
      newBadge: '2 New',
      workspaceSuffix: 'Workspace',
      overviewTab: 'Overview'
    },
    auth: {
      signInTitle: 'Enterprise Sign In',
      signInSubtitle: 'Access your authenticated operational role dashboard',
      registerTitle: 'Join the Food Rescue Ecosystem',
      registerSubtitle: 'Register as a commercial food donor, verified NGO partner, or volunteer hero',
      emailOrPhoneLabel: 'Email ID or Indian Mobile (+91)',
      emailOrPhonePlaceholder: 'e.g. superadmin@foodrescue.org.in or +91 98480 11221',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter password',
      forgotPasswordLink: 'Forgot Password?',
      signInButton: 'Sign In to Dashboard',
      authenticating: 'Authenticating...',
      instantDemoTitle: 'Instant Demo Access',
      instantDemoSubtitle: 'One-Click Login as Any Stakeholder:',
      registerCtaPrompt: 'New organization or donor?',
      registerCtaLink: 'Register Your Kitchen or NGO',
      stakeholderCategory: 'Stakeholder Category *',
      organizationNameLabel: 'Organization / Establishment Name *',
      organizationNamePlaceholder: 'e.g. Annapurna Grand Banquets or Sneha Seva Society',
      contactPersonLabel: 'Contact Person Name *',
      contactPersonPlaceholder: 'e.g. Ramesh Chowdary',
      contactEmailLabel: 'Official Email ID *',
      contactEmailPlaceholder: 'e.g. admin@annapurnagrand.in',
      contactPhoneLabel: 'Indian Mobile (+91) *',
      contactPhonePlaceholder: '+91 98480 11221',
      cityLabel: 'City / Hub Location *',
      stateLabel: 'State *',
      fssaiDarpanLabel: 'FSSAI License No. / NGO Darpan ID *',
      fssaiDarpanPlaceholder: 'e.g. 10121008000412 or AP/2018/0192834',
      registerButton: 'Submit Registration for Verification',
      alreadyRegisteredPrompt: 'Already registered?',
      alreadyRegisteredLink: 'Sign In to Existing Account',
      resetPasswordTitle: 'Reset Password',
      resetPasswordSubtitle: 'Enter your registered email or Indian mobile number to receive a secure OTP reset link.',
      resetInputPlaceholder: 'Email ID or Mobile Number',
      sendResetOtpButton: 'Send Secure Reset OTP',
      resetSentMessage: 'Reset OTP sent successfully!',
      returnToSignIn: 'Return to Sign In',
      backToSignIn: 'Back to Sign In'
    },
    roles: {
      SUPER_ADMIN: 'Super Administrator',
      REGIONAL_ADMIN: 'Regional State Director',
      DISTRICT_ADMIN: 'District Operations Lead',
      DONOR: 'Community Food Donor',
      RESTAURANT: 'Restaurant Surplus Manager',
      HOTEL: 'Hotel & Banquet Operations',
      NGO: 'NGO & Food Bank Partner',
      VOLUNTEER: 'Food Rescue Volunteer Hero',
      DELIVERY_PARTNER: 'Logistics Fleet Driver',
      BENEFICIARY: 'Community Shelter Manager',
      CORPORATE_CSR: 'Corporate CSR & ESG Lead',
      GOVERNMENT_AUTHORITY: 'Civil Supplies & Food Safety Dept',
      ANALYST: 'Sustainability & ESG Analyst',
      FOOD_SAFETY_OFFICER: 'FSSAI Food Inspector'
    }
  },
  te: {
    brandName: 'ఫుడ్ రెస్క్యూ (FoodRescue)',
    tagline: 'ఆహారాన్ని ఆదా చేయండి • ఆకలి తీర్చండి • సుస్థిర భవిష్యత్తును నిర్మించండి',
    subTagline: 'భారతీయ ఎంటర్‌ప్రైజ్ మిగులు ఆహార రక్షణ & పంపిణీ వేదిక',
    nav: {
      home: 'ముఖచిత్రం',
      howItWorks: 'ఇది ఎలా పనిచేస్తుంది',
      liveSimulator: 'లైవ్ సిమ్యులేటర్',
      forDonors: 'దాతల కోసం',
      forNgos: 'ఎన్జీవోల కోసం',
      forVolunteers: 'వాలంటీర్ల కోసం',
      impact: 'సామాజిక ప్రభావం',
      coverage: 'భారత కవరేజ్',
      dashboards: '12 డాష్‌బోర్డులు',
      signIn: 'లాగిన్',
      register: 'రిజిస్టర్',
      signOut: 'లాగ్ అవుట్',
      donateFoodCta: 'ఆహార దానం చేయండి',
      myDashboard: 'నా డాష్‌బోర్డ్',
      exploreDashboardsTitle: 'అన్ని 12 అధికారిక డాష్‌బోర్డులను చూడండి',
      exploreDashboardsDesc: 'ప్రత్యేక ఆపరేషన్లను అనుభవించడానికి ఏదైనా పాత్రను ఎంచుకుని తక్షణమే లాగిన్ అవ్వండి.',
      launchDashboard: 'డాష్‌బోర్డ్ తెరవండి →',
      activeStatus: 'యాక్టివ్'
    },
    hero: {
      badge: 'FSSAI గుర్తింపు పొందిన భారతీయ ఆహార రక్షణ వ్యవస్థ',
      headline: 'మంచి ఆహారం ఎప్పుడూ',
      headlineHighlight: 'వృధా కాకూడదు',
      subheadline:
        'విజయవాడ, హైదరాబాద్, బెంగళూరు, చెన్నై మరియు భారతదేశం అంతటా హోటళ్ళు, రెస్టారెంట్లు, ఫంక్షన్ హాళ్ల నుండి మిగులు ఆహారాన్ని అవసరమైన అనాథాశ్రమాలు మరియు పేద ప్రజలకు ఫుడ్‌రెస్క్యూ సురక్షితంగా అందజేస్తుంది.',
      ctaDonate: 'మిగులు ఆహారాన్ని దానం చేయండి',
      ctaWorkflow: 'లైవ్ రెస్క్యూ సిమ్యులేటర్',
      ctaVolunteer: 'వాలంటీర్‌గా చేరండి'
    },
    stats: {
      foodRescued: 'రక్షించిన ఆహారం (కిలోలు)',
      mealsServed: 'అందించిన పౌష్టిక భోజనాలు',
      co2Avoided: 'తగ్గించిన కార్బన్ (కిలోలు)',
      activeDonors: 'రిజిస్టర్డ్ ఆహార దాతలు',
      verifiedNgos: 'ధృవీకరించిన NGOలు & ఆశ్రమాలు',
      volunteers: 'యాక్టివ్ సేవా వాలంటీర్లు',
      citiesCovered: 'కవర్ చేసిన నగర కేంద్రాలు'
    },
    workflow: {
      badge: 'ఇంటరాక్టివ్ ఎంటర్‌ప్రైజ్ రెస్క్యూ సిమ్యులేటర్',
      title: 'మిగులు ఆహారం చిరునవ్వులుగా మారే అద్భుతం',
      subtitle: 'ఫుడ్‌రెస్క్యూ రిఫరెన్స్ ఆర్కిటెక్చర్ ప్రకారం మొత్తం 8 దశల ప్రత్యక్ష కార్యచరణను ఇక్కడ పరీక్షించండి.',
      autoRunBtn: '8 దశల ఆటో-రన్ సిమ్యులేషన్',
      simulatingBtn: 'ప్రక్రియ నడుస్తోంది...',
      nextStepBtn: 'తదుపరి దశ',
      resetBtn: 'రీసెట్ చేయండి',
      stageActive: 'ప్రస్తుత దశ నడుస్తోంది',
      step1: {
        stepName: 'ఆహార దాత',
        subtitle: 'మిగులు ఆహార నమోదు',
        actor: 'హోటల్ బ్యాంక్వెట్ మేనేజర్',
        badge: 'దశ 1 • మిగులు ఆహార నమోదు',
        heading: 'కమర్షియల్ దాత వివరాలు — అన్నపూర్ణ హెరిటేజ్ గ్రాండ్',
        desc: 'విజయవాడలో జరిగిన వివాహ విందు నుండి తాజా మిగులు ఆహార సమాచారాన్ని కిచెన్ నమోదు చేసింది.',
        field1Label: 'ఆహార రకం',
        field1Val: 'ఆంధ్రా వివాహ విందు భోజనం (వేడి భోజనాలు)',
        field2Label: 'పరిమాణం / భోజనాలు',
        field2Val: '85 కిలోలు (210 భోజనాలు)',
        field3Label: 'సేకరణ ప్రదేశం',
        field3Val: 'ఎం.జి. రోడ్, లబ్బీపేట, విజయవాడ'
      },
      step2: {
        stepName: 'ఆహార భద్రత',
        subtitle: 'FSSAI నాణ్యతా పరిశీలన',
        actor: 'ఆహార తనిఖీ అధికారి',
        badge: 'దశ 2 • FSSAI భద్రతా ధృవీకరణ',
        heading: 'FSSAI ఆహార భద్రతా మరియు ఉష్ణోగ్రతా తనిఖీ పూర్తయింది',
        desc: 'ఆహార భద్రతా అధికారి డాక్టర్ ఆనంద్ కుమార్ ఉష్ణోగ్రత మరియు స్వచ్ఛతను పరీక్షించి అనుమతి ఇచ్చారు.',
        field1Label: 'రికార్డ్ చేసిన ఉష్ణోగ్రత',
        field1Val: '68.5°C (సురక్షితమైన వేడి > 65°C)',
        field2Label: 'పరిశుభ్రతా స్కోర్',
        field2Val: '9.4 / 10.0 (FSSAI సర్టిఫైడ్)',
        field3Label: 'భద్రతా స్థితి',
        field3Val: 'వినియోగానికి పూర్తిగా సురక్షితం'
      },
      step3: {
        stepName: 'AI మ్యాచింగ్',
        subtitle: 'దూరం & సామర్థ్య విశ్లేషణ',
        actor: 'ఫుడ్‌రెస్క్యూ AI అల్గారిథమ్',
        badge: 'దశ 3 • AI స్మార్ట్ మ్యాచింగ్ ఇంజిన్',
        heading: 'దగ్గరలోని అనువైన NGO ను సిఫార్సు చేసిన AI వ్యవస్థ',
        desc: 'దూరం (2.8 కి.మీ), శాకాహార రకం, ఆశ్రమం నిల్వ సామర్థ్యం మరియు ఆవశ్యకతను అంచనా వేసింది.',
        topMatchLabel: 'ఉత్తమ సరిపోలిక: స్నేహ సేవా సొసైటీ ఫుడ్ బ్యాంక్',
        matchScoreLabel: 'మ్యాచింగ్ స్కోర్: 94.8%',
        breakdownText: 'సమీపత: 98% (2.8 కి.మీ) • సామర్థ్యం: 100% • శాకాహార సరిపోలిక: 100% • రేటింగ్: 99%'
      },
      step4: {
        stepName: 'కేటాయింపు',
        subtitle: 'NGO ఆమోదం',
        actor: 'ధృవీకరించిన NGO పార్టనర్',
        badge: 'దశ 4 • NGO ఆహార కేటాయింపు & నిర్ధారణ',
        heading: 'స్నేహ సేవా ఫుడ్ బ్యాంక్ ద్వారా కేటాయింపు ఖరారు',
        desc: 'బాలల సదన్ అనాథాశ్రమం మరియు వృద్ధాశ్రమానికి ఈ భోజనాన్ని అందించడానికి సిస్టర్ మేరీ థెరిసా అంగీకరించారు.',
        lockTitle: 'తక్షణ కేటాయింపు లాక్ చేయబడింది',
        lockDesc: 'ఈ ఆహార బ్యాచ్ ప్రత్యేకంగా కేటాయించబడింది. రవాణా వాలంటీర్‌ను పంపిస్తున్నారు.'
      },
      step5: {
        stepName: 'రవాణా',
        subtitle: 'వాహనం & వాలంటీర్ కేటాయింపు',
        actor: 'ఎలక్ట్రిక్ ఇన్సులేటెడ్ వ్యాన్',
        badge: 'దశ 5 • వాహన మరియు వాలంటీర్ నియామకం',
        heading: 'వాలంటీర్ బయలుదేరారు — సురేష్ రెడ్డి (సేవా హీరో)',
        desc: 'ఎలక్ట్రిక్ వ్యాన్ AP 16 TZ 8421 కేటాయించబడింది. ఎం.జి. రోడ్డు రద్దీని తప్పించే ఆప్టిమైజ్డ్ రూట్.',
        field1Label: 'వాహనం రకం',
        field1Val: 'ఎలక్ట్రిక్ ఇన్సులేటెడ్ ఫుడ్ వ్యాన్',
        field2Label: 'అంచనా సమయం (ETA)',
        field2Val: '14 నిమిషాలు',
        field3Label: 'రహస్య సేకరణ OTP',
        field3Val: '849201'
      },
      step6: {
        stepName: 'ఆహార సేకరణ',
        subtitle: 'రెండు వైపుల OTP వెరిఫికేషన్',
        actor: 'పంపిణీ కేంద్రం',
        badge: 'దశ 6 • ఆహార సేకరణ ధృవీకరణ',
        heading: 'సురక్షిత OTP ద్వారా ఆహార బదిలీ పూర్తయింది',
        desc: 'దాత 849201 OTP తో వాలంటీర్‌ను ధృవీకరించారు. ఆహారం థర్మల్ బాక్సులలో గమ్యానికి బయలుదేరింది.',
        field1Label: 'ప్రయాణ స్థితి',
        field1Val: 'మార్గంలో ఉంది (సీల్డ్ కంటైనర్లు)',
        field2Label: 'చేరవేత ధృవీకరణ OTP',
        field2Val: '315792'
      },
      step7: {
        stepName: 'లబ్ధిదారులు',
        subtitle: 'వేడి భోజనాల పంపిణీ',
        actor: 'అనాథాశ్రమాలు & ఆశ్రమాలు',
        badge: 'దశ 7 • ఆశ్రమ లబ్ధిదారులకు భోజన పంపిణీ',
        heading: 'బాలల సదన్ అనాథాశ్రమంలో వేడి భోజనాలు పంపిణీ చేయబడ్డాయి',
        desc: '120 మంది పిల్లలు మరియు 90 మంది వృద్ధులకు తాజా, పరిశుభ్రమైన రాత్రి భోజనం గౌరవప్రదంగా వడ్డించారు.',
        field1Label: 'అందించిన భోజనాలు',
        field1Val: '210 సంతృప్తికరమైన భోజనాలు',
        field2Label: 'లబ్ధిదారుల అభిప్రాయం',
        field2Val: '★★★★★ 5.0 / 5.0 (చాలా రుచిగా మరియు వేడిగా ఉంది)'
      },
      step8: {
        stepName: 'సామాజిక ప్రభావం',
        subtitle: 'కార్బన్ తగ్గింపు & 80G సర్టిఫికెట్',
        actor: 'ప్లాట్‌ఫారమ్ ఇంపాక్ట్ ఇంజిన్',
        badge: 'దశ 8 • పర్యావరణ ప్రభావం మరియు ఆడిట్ రికార్డ్',
        heading: 'లక్ష్యం పూర్తయింది • కొలవదగిన సామాజిక మరియు పర్యావరణ ప్రభావం',
        desc: 'ఆహార వ్యర్థాలు విజయవాడ డంపింగ్ యార్డుకు చేరకుండా రక్షించబడ్డాయి. అన్నపూర్ణ గ్రాండ్‌కు 80G పన్ను మినహాయింపు సర్టిఫికెట్ జారీ.',
        card1Title: 'రక్షించిన ఆహారం',
        card1Val: '85 కిలోలు',
        card1Sub: '210 మందికి భోజనం',
        card2Title: 'తగ్గించిన కార్బన్ (CO₂)',
        card2Val: '212.5 కిలోలు',
        card2Sub: 'భూమి కాలుష్యం నివారణ',
        card3Title: 'ఆదా చేసిన సాగునీరు',
        card3Val: '34,000 లీటర్లు',
        card3Sub: 'వ్యవసాయ నీటి పొదుపు',
        card4Title: 'పన్ను సర్టిఫికెట్',
        card4Val: 'SEC-80G / CSR',
        card4Sub: 'డిజిటల్‌గా జారీ చేయబడింది'
      }
    },
    pillars: {
      badge: 'భాగస్వామ్య సమన్వయం',
      title: 'ఆహార వ్యవస్థలోని ప్రతి స్తంభానికి అనుకూలంగా రూపొందించబడింది',
      subtitle: 'హోటళ్లు, ఫుడ్ బ్యాంకులు, స్వచ్ఛంద సేవకులు మరియు ప్రభుత్వ అధికారుల కోసం ప్రత్యేక డాష్‌బోర్డులు.',
      hotels: {
        title: 'హోటళ్లు & క్యాటరర్లు',
        desc: 'పెద్ద ఎత్తున మిగిలిన విందు భోజనాలను సులభంగా నమోదు చేయండి. తక్షణ సెక్షన్ 80G ఆదాయపు పన్ను మినహాయింపు పత్రాలను పొందండి.',
        p1: '✓ కిచెన్ ఆహార వృధా జీరో స్థాయికి తగ్గింపు',
        p2: '✓ FSSAI చట్టబద్ధ రక్షణ',
        p3: '✓ ప్రతి రోజూ రాత్రి నిర్ణీత సమయానికి సేకరణ'
      },
      ngos: {
        title: 'NGOలు & ఫుడ్ బ్యాంకులు',
        desc: 'మీ ఆశ్రమ అవసరాలు మరియు వ్యక్తుల సంఖ్యకు తగినట్లుగా పరిశుభ్రమైన పౌష్టికాహారాన్ని నేరుగా పొందండి.',
        p1: '✓ ఆటోమేటెడ్ AI సమీప కేటాయింపు',
        p2: '✓ డిజిటల్ లబ్ధిదారుల నిర్వహణ',
        p3: '✓ సురక్షిత కోల్డ్-చైన్ రవాణా'
      },
      volunteers: {
        title: 'సేవా వాలంటీర్ వీరులు',
        desc: 'మీ నగరంలో ఆకలిని నిర్మూలించే యువ సేవకుల బృందంలో చేరండి. GPS సహాయంతో ఆహారాన్ని రక్షించి గౌరవ బ్యాడ్జీలు పొందండి.',
        p1: '✓ OTP ఆధారిత స్పష్టమైన రూట్ మ్యాప్',
        p2: '✓ కేవలం 30 నిమిషాల సమయ కేటాయింపు',
        p3: '✓ గుర్తించదగిన కమ్యూనిటీ సేవా సమయం'
      },
      csr: {
        title: 'కార్పొరేట్ CSR & ESG',
        desc: 'ఎలక్ట్రిక్ ఆహార రవాణా వాహనాలు మరియు పోషకాహార లోప నిర్మూలన ప్రాజెక్టులకు షెడ్యూల్ VII నిధులు సమకూర్చండి.',
        p1: '✓ SEBI BRSR నిబంధనలకు అనుగుణమైన రిపోర్ట్స్',
        p2: '✓ ధృవీకరించిన కార్బన్ మరియు జల ఆదా వివరాలు',
        p3: '✓ పారదర్శక నిధుల వినియోగం'
      }
    },
    coverage: {
      badge: 'జాతీయ ఆకలి నిర్మూలన నెట్‌వర్క్',
      title: 'భారతీయ రాష్ట్రాలలో విస్తరించిన సేవలు',
      subtitle: 'ఆహార వ్యర్థాలు అధికంగా ఉత్పన్నమయ్యే ప్రాంతాల నుండి పేదలకు ఆహారాన్ని చేరవేసే సమీకృత నెట్‌వర్క్.',
      stateHQ: 'ప్రాంతీయ ప్రధాన కార్యాలయం',
      verifiedNgosLabel: 'ధృవీకరించిన NGOలు',
      commercialDonorsLabel: 'కమర్షియల్ దాతలు',
      mealsLabel: 'అందించిన భోజనాలు',
      regionalOps: 'ప్రాంతీయ రాష్ట్ర ఆపరేషన్లు',
      centralDesc: 'FSSAI తనిఖీలు, వాహన సమన్వయం మరియు అత్యవసర ఆకలి నివారణతో నిరంతరం పనిచేస్తోంది.',
      totalRescued: 'మొత్తం రక్షించిన ఆహారం',
      mealsNourished: 'అందించిన భోజనాలు',
      operationalDistricts: 'కార్యాచరణ జిల్లాలు'
    },
    testimonials: {
      badge: 'ప్రజల అనుభవాలు',
      title: 'భారతీయ సమాజంలో కనిపిస్తున్న నిజమైన మార్పు',
      t1Quote: 'ఫుడ్‌రెస్క్యూ రాకముందు అన్నపూర్ణ గ్రాండ్‌లో వివాహాల తర్వాత మిగిలిన పరిశుభ్రమైన ఆహారాన్ని చూసి బాధపడేవాళ్లం. ఇప్పుడు పోస్ట్ చేసిన 20 నిమిషాల్లోనే ఎలక్ట్రిక్ వ్యాన్ వచ్చి తీసుకెళ్లి 160 మంది అనాథ పిల్లల ఆకలి తీరుస్తోంది.',
      t1Author: 'రమేష్ చౌదరి',
      t1Role: 'బ్యాంక్వెట్ డైరెక్టర్, అన్నపూర్ణ హెరిటేజ్ గ్రాండ్, విజయవాడ',
      t2Quote: 'FSSAI ఉష్ణోగ్రతా తనిఖీ మా ఆశ్రమానికి ఎంతో నమ్మకాన్ని ఇస్తుంది. ప్రతిరోజూ వేడివేడిగా, శుభ్రమైన భోజనం సమయానికి చేరుతుంది. దీనివల్ల మా నెలవారీ కిచెన్ ఖర్చులు గణనీయంగా తగ్గాయి.',
      t2Author: 'సిస్టర్ మేరీ థెరిసా',
      t2Role: 'స్నేహ సేవా సొసైటీ ఫుడ్ బ్యాంక్, NTR జిల్లా',
      t3Quote: 'విజయవాడలో ఇంజనీరింగ్ చదువుతూ, వీకెండ్స్‌లో నా ఎలక్ట్రిక్ స్కూటర్‌పై రెండు సేకరణలు చేయడం ఎంతో తృప్తినిస్తుంది. యాప్‌లో OTP వెరిఫికేషన్ మరియు రూట్ చూపించడం చాలా సులువు.',
      t3Author: 'సురేష్ రెడ్డి',
      t3Role: 'ఫుడ్ రెస్క్యూ వాలంటీర్ వీరుడు (లెవల్ 3 సేవా వారియర్)'
    },
    cta: {
      badge: 'మిగులును ఆశగా మార్చండి',
      title: 'ఆకలి లేని, ఆహార వృధా లేని భారతదేశాన్ని నిర్మిద్దాం!',
      desc: 'మీరు రెస్టారెంట్ లేదా హోటల్ నిర్వహిస్తున్నా, స్వచ్ఛంద సంస్థ నడుపుతున్నా, లేదా మీ నగరంలో వాలంటీర్‌గా సేవ చేయాలనుకున్నా వెంటనే చేరండి.',
      btnDonate: 'ఆహార దానం చేయండి',
      btnNgo: 'NGO / ఆశ్రమంగా చేరండి'
    },
    footer: {
      desc: 'భారతదేశంలో మిగులు ఆహారాన్ని అవసరమైన వారికి చేర్చే అతిపెద్ద సామాజిక వేదిక.',
      certs: 'FSSAI గుర్తింపు పొందినది • సెక్షన్ 80G పన్ను మినహాయింపు చెల్లుబాటు',
      activeHubsTitle: 'ప్రధాన రాష్ట్ర కేంద్రాలు',
      rolePortalsTitle: 'ప్రత్యేక పోర్టల్స్',
      helplineTitle: 'హెల్ప్‌లైన్ & అత్యవసర సంప్రదింపులు',
      hqAddress: 'ఎం.జి. రోడ్, లబ్బీపేట, విజయవాడ - 520010',
      tollFreeLabel: 'జాతీయ ఉచిత హెల్ప్‌లైన్: 1800-425-FOOD (3663)',
      rights: '© 2026 ఫుడ్‌రెస్క్యూ ఇండియా. సర్వ హక్కులు ప్రత్యేకించబడినవి.'
    },
    dashboard: {
      moduleWorkspaces: 'మాడ్యూల్ వర్క్‌స్పేస్‌లు',
      switchRoleBtn: 'పాత్రను మార్చండి (12 అందుబాటులో ఉన్నాయి)',
      signOutBtn: 'లాగ్ అవుట్',
      searchPlaceholder: 'శోధించండి...',
      notificationsTitle: 'నోటిఫికేషన్లు',
      newBadge: '2 కొత్తవి',
      workspaceSuffix: 'వర్క్‌స్పేస్',
      overviewTab: 'సమీక్ష'
    },
    auth: {
      signInTitle: 'ఎంటర్‌ప్రైజ్ సైన్ ఇన్',
      signInSubtitle: 'మీ అధికారిక కార్యాచరణ పాత్ర డాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి',
      registerTitle: 'ఆహార రక్షణ వ్యవస్థలో చేరండి',
      registerSubtitle: 'వాణిజ్య ఆహార దాతగా, ధృవీకరించబడిన NGOగా లేదా సేవా వాలంటీర్‌గా నమోదు చేసుకోండి',
      emailOrPhoneLabel: 'ఈమెయిల్ ఐడీ లేదా మొబైల్ నంబర్ (+91)',
      emailOrPhonePlaceholder: 'ఉదా: superadmin@foodrescue.org.in లేదా +91 98480 11221',
      passwordLabel: 'పాస్‌వర్డ్',
      passwordPlaceholder: 'పాస్‌వర్డ్ నమోదు చేయండి',
      forgotPasswordLink: 'పాస్‌వర్డ్ మర్చిపోయారా?',
      signInButton: 'డాష్‌బోర్డ్‌లోకి ప్రవేశించండి',
      authenticating: 'ధృవీకరిస్తోంది...',
      instantDemoTitle: 'తక్షణ డెమో యాక్సెస్',
      instantDemoSubtitle: 'ఒకే క్లిక్‌తో ఏ పాత్రలోనైనా లాగిన్ అవ్వండి:',
      registerCtaPrompt: 'కొత్త సంస్థ లేదా దాతనా?',
      registerCtaLink: 'మీ వంటశాల లేదా NGOని నమోదు చేయండి',
      stakeholderCategory: 'భాగస్వామ్య విభాగం *',
      organizationNameLabel: 'సంస్థ / హోటల్ పేరు *',
      organizationNamePlaceholder: 'ఉదా: అన్నపూర్ణ గ్రాండ్ బ్యాంక్వెట్స్ లేదా స్నేహ సేవా సొసైటీ',
      contactPersonLabel: 'సంప్రదింపు వ్యక్తి పేరు *',
      contactPersonPlaceholder: 'ఉదా: రమేష్ చౌదరి',
      contactEmailLabel: 'అధికారిక ఈమెయిల్ *',
      contactEmailPlaceholder: 'ఉదా: admin@annapurnagrand.in',
      contactPhoneLabel: 'మొబైల్ నంబర్ (+91) *',
      contactPhonePlaceholder: '+91 98480 11221',
      cityLabel: 'నగరం / కేంద్రం *',
      stateLabel: 'రాష్ట్రం *',
      fssaiDarpanLabel: 'FSSAI లైసెన్స్ లేదా NGO దర్పణ్ ఐడీ *',
      fssaiDarpanPlaceholder: 'ఉదా: 10121008000412 లేదా AP/2018/0192834',
      registerButton: 'పరిశీలన కోసం నమోదును సమర్పించండి',
      alreadyRegisteredPrompt: 'ఇప్పటికే ఖాతా ఉందా?',
      alreadyRegisteredLink: 'ఖాతాలోకి సైన్ ఇన్ అవ్వండి',
      resetPasswordTitle: 'పాస్‌వర్డ్ రీసెట్ చేయండి',
      resetPasswordSubtitle: 'సురక్షిత OTP లింక్ కోసం మీ రిజిస్టర్డ్ ఈమెయిల్ లేదా మొబైల్ నంబర్ నమోదు చేయండి.',
      resetInputPlaceholder: 'ఈమెయిల్ ఐడీ లేదా మొబైల్ నంబర్',
      sendResetOtpButton: 'OTP పంపించండి',
      resetSentMessage: 'OTP విజయవంతంగా పంపబడింది!',
      returnToSignIn: 'సైన్ ఇన్ పేజీకి తిరిగి వెళ్లండి',
      backToSignIn: 'తిరిగి సైన్ ఇన్'
    },
    roles: {
      SUPER_ADMIN: 'జాతీయ సూపర్ అడ్మినిస్ట్రేటర్',
      REGIONAL_ADMIN: 'రాష్ట్ర రీజినల్ డైరెక్టర్',
      DISTRICT_ADMIN: 'జిల్లా ఆపరేషన్స్ లీడ్',
      DONOR: 'ఆహార దాత',
      RESTAURANT: 'రెస్టారెంట్ మేనేజర్',
      HOTEL: 'హోటల్ & బ్యాంక్వెట్ నిర్వాహకుడు',
      NGO: 'NGO ఫుడ్ బ్యాంక్ పార్టనర్',
      VOLUNTEER: 'సేవా వాలంటీర్ వీరుడు',
      DELIVERY_PARTNER: 'రవాణా డ్రైవర్',
      BENEFICIARY: 'కమ్యూనిటీ ఆశ్రమ మేనేజర్',
      CORPORATE_CSR: 'కార్పొరేట్ CSR & ESG లీడ్',
      GOVERNMENT_AUTHORITY: 'పౌర సరఫరాలు & ఆహార భద్రతా అధికారి',
      ANALYST: 'సుస్థిరత మరియు పరిశోధనా నిపుణుడు',
      FOOD_SAFETY_OFFICER: 'FSSAI ఆహార తనిఖీ అధికారి'
    }
  },
  hi: {
    brandName: 'फूडरेस्क्यू (FoodRescue)',
    tagline: 'अन्न बचाएं • भूख मिटाएं • सतत भविष्य बनाएं',
    subTagline: 'भारतीय उद्यम अधिशेष भोजन बचाव एवं वितरण प्रणाली',
    nav: {
      home: 'होम',
      howItWorks: 'कार्यप्रणाली',
      liveSimulator: 'लाइव सिम्युलेटर',
      forDonors: 'दाताओं के लिए',
      forNgos: 'एनजीओ के लिए',
      forVolunteers: 'स्वयंसेवकों के लिए',
      impact: 'पर्यावरणीय प्रभाव',
      coverage: 'भारत कवरेज',
      dashboards: '12 डैशबोर्ड्स',
      signIn: 'साइन इन',
      register: 'पंजीकरण',
      signOut: 'साइन आउट',
      donateFoodCta: 'भोजन दान करें',
      myDashboard: 'मेरा डैशबोर्ड',
      exploreDashboardsTitle: 'सभी 12 प्रमाणित डैशबोर्ड देखें',
      exploreDashboardsDesc: 'विशेष परिचालन वर्कफ़्लो और टूल्स का अनुभव करने के लिए किसी भी भूमिका का चयन करें।',
      launchDashboard: 'डैशबोर्ड खोलें →',
      activeStatus: 'सक्रिय'
    },
    hero: {
      badge: 'FSSAI प्रमाणित राष्ट्रीय खाद्य बचाव नेटवर्क',
      headline: 'स्वादिष्ट भोजन कभी',
      headlineHighlight: 'बर्बाद नहीं होना चाहिए',
      subheadline:
        'फूडरेस्क्यू भारत भर के होटलों, रेस्तरां, बैंक्वेट हॉलों और कैटरर्स से बचे हुए ताजे भोजन को प्रमाणित एनजीओ, अनाथालयों और आश्रयों तक सुरक्षित रूप से पहुंचाता है।',
      ctaDonate: 'अधिशेष भोजन दान करें',
      ctaWorkflow: 'लाइव बचाव सिम्युलेटर',
      ctaVolunteer: 'स्वयंसेवक बनें'
    },
    stats: {
      foodRescued: 'किग्रा भोजन बचाया',
      mealsServed: 'परोसा गया पौष्टिक भोजन',
      co2Avoided: 'किग्रा कार्बन उत्सर्जन रोका',
      activeDonors: 'सक्रिय खाद्य दाता',
      verifiedNgos: 'सत्यापित एनजीओ एवं आश्रय',
      volunteers: 'सक्रिय स्वयंसेवक',
      citiesCovered: 'सक्रिय भारतीय शहर'
    },
    workflow: {
      badge: 'इंटरएक्टिव एंटरप्राइज वर्कफ़्लो सिम्युलेटर',
      title: 'बचे हुए भोजन को मुस्कान में बदलते देखें',
      subtitle: 'फूडरेस्क्यू संदर्भ आर्किटेक्चर की पूरी 8 चरणों की परिचालन यात्रा का वास्तविक अनुभव लें।',
      autoRunBtn: '8 चरणों का ऑटो-रन सिमुलेशन',
      simulatingBtn: 'सिमुलेशन जारी है...',
      nextStepBtn: 'अगला चरण',
      resetBtn: 'रीसेट करें',
      stageActive: 'वर्तमान चरण सक्रिय',
      step1: {
        stepName: 'भोजन दाता',
        subtitle: 'अधिशेष भोजन प्रविष्टि',
        actor: 'होटल बैंक्वेट प्रबंधक',
        badge: 'चरण 1 • अधिशेष भोजन प्रविष्टि',
        heading: 'वाणिज्यिक भोजन प्रविष्टि — अन्नपूर्णा हेरिटेज ग्रैंड',
        desc: 'विजयवाड़ा में शादी के रिसेप्शन से बचे हुए भोजन की जानकारी दर्ज की गई। तापमान-नियंत्रित भंडारण शुरू।',
        field1Label: 'भोजन का प्रकार',
        field1Val: 'शाही आंध्र विवाह भोज (गर्म भोजन)',
        field2Label: 'मात्रा / भोजन',
        field2Val: '85 किग्रा (210 थाली)',
        field3Label: 'संग्रह स्थान',
        field3Val: 'एम.जी. रोड, लब्बीपेट, विजयवाड़ा'
      },
      step2: {
        stepName: 'खाद्य सुरक्षा',
        subtitle: 'FSSAI स्वच्छता जांच',
        actor: 'खाद्य सुरक्षा निरीक्षक',
        badge: 'चरण 2 • FSSAI सुरक्षा एवं स्वच्छता जांच',
        heading: 'FSSAI स्वच्छता एवं तापमान निरीक्षण सफल',
        desc: 'खाद्य सुरक्षा अधिकारी ने डिजिटल तापमान और संवेदी परीक्षण करके भोजन को प्रमाणित किया।',
        field1Label: 'दर्ज तापमान',
        field1Val: '68.5°C (सुरक्षित गर्म तापमान > 65°C)',
        field2Label: 'स्वच्छता स्कोर',
        field2Val: '9.4 / 10.0 (FSSAI प्रमाणित)',
        field3Label: 'सुरक्षा स्थिति',
        field3Val: 'उपभोग के लिए पूरी तरह सुरक्षित'
      },
      step3: {
        stepName: 'AI मिलान',
        subtitle: 'दूरी एवं क्षमता मिलान',
        actor: 'फूडरेस्क्यू AI एल्गोरिदम',
        badge: 'चरण 3 • AI स्मार्ट मिलान इंजन',
        heading: 'स्मार्ट मिलान एल्गोरिदम ने निकटतम सक्षम एनजीओ का चयन किया',
        desc: 'दूरी (2.8 किमी), शाकाहारी भोजन, आश्रय की भोजन क्षमता और तत्काल आवश्यकता का विश्लेषण।',
        topMatchLabel: 'सर्वश्रेष्ठ मिलान: स्नेहा सेवा सोसाइटी फूड बैंक',
        matchScoreLabel: 'मिलान स्कोर: 94.8%',
        breakdownText: 'समीपता: 98% (2.8 किमी) • क्षमता: 100% • शाकाहारी अनुकूलता: 100% • अनुपालन: 99%'
      },
      step4: {
        stepName: 'आवंटन',
        subtitle: 'एनजीओ द्वारा स्वीकृति',
        actor: 'सत्यापित एनजीओ साथी',
        badge: 'चरण 4 • एनजीओ को आवंटन एवं पुष्टि',
        heading: 'स्नेहा सेवा फूड बैंक द्वारा स्वीकृति की पुष्टि',
        desc: 'सिस्टर मैरी थेरेसा ने बालला सदन अनाथालय और वृद्धाश्रम में वितरण के लिए स्वीकृति दी।',
        lockTitle: 'तत्काल आवंटन लॉक सक्रिय',
        lockDesc: 'भोजन बैच आरक्षित कर दिया गया है। स्वयंसेवक को रवाना किया जा रहा है।'
      },
      step5: {
        stepName: 'रसद एवं वाहन',
        subtitle: 'वाहन एवं स्वयंसेवक रवानगी',
        actor: 'इलेक्ट्रिक इंसुलेटेड वैन',
        badge: 'चरण 5 • वाहन एवं स्वयंसेवक रवानगी',
        heading: 'स्वयंसेवक रवाना — सुरेश रेड्डी (सेवा हीरो #12)',
        desc: 'इलेक्ट्रिक वैन AP 16 TZ 8421 आवंटित। एमजी रोड के ट्रैफिक से बचने के लिए अनुकूलित मार्ग।',
        field1Label: 'वाहन का प्रकार',
        field1Val: 'इलेक्ट्रिक इंसुलेटेड फूड वैन',
        field2Label: 'अनुमानित समय (ETA)',
        field2Val: '14 मिनट',
        field3Label: 'सुरक्षित पिकअप OTP',
        field3Val: '849201'
      },
      step6: {
        stepName: 'सुरक्षित संग्रह',
        subtitle: 'दोतरफा OTP सत्यापन',
        actor: 'वितरण केंद्र',
        badge: 'चरण 6 • पिकअप एवं पारगमन सत्यापन',
        heading: 'सुरक्षित OTP कोड द्वारा भोजन हस्तांतरण सत्यापित',
        desc: 'दाता ने OTP 849201 से स्वयंसेवक को सत्यापित किया। भोजन सुरक्षित बक्सों में गंतव्य की ओर रवाना।',
        field1Label: 'पारगमन स्थिति',
        field1Val: 'मार्ग में है (थर्मल सील बंद)',
        field2Label: 'वितरण सत्यापन OTP',
        field2Val: '315792'
      },
      step7: {
        stepName: 'लाभार्थी',
        subtitle: 'गर्म भोजन का वितरण',
        actor: 'अनाथालय एवं आश्रय',
        badge: 'चरण 7 • आश्रय लाभार्थियों को भोजन वितरण',
        heading: 'बालला सदन अनाथालय में गर्म भोजन का सम्मानपूर्वक वितरण',
        desc: '120 बच्चों और 90 वरिष्ठ नागरिकों को भोजन घोषणा के 1 घंटे के भीतर ताजा, स्वादिष्ट रात का खाना मिला।',
        field1Label: 'परोसा गया भोजन',
        field1Val: '210 संतुष्ट थालियां',
        field2Label: 'लाभार्थियों की प्रतिक्रिया',
        field2Val: '★★★★★ 5.0 / 5.0 (बहुत स्वादिष्ट एवं गर्म)'
      },
      step8: {
        stepName: 'ESG प्रभाव',
        subtitle: 'कार्बन बचत एवं कर प्रमाणपत्र',
        actor: 'प्रभाव विश्लेषक इंजन',
        badge: 'चरण 8 • पर्यावरणीय प्रभाव एवं 80G ऑडिट संपन्न',
        heading: 'मिशन सफल • मापने योग्य सामाजिक एवं पर्यावरणीय प्रभाव',
        desc: 'भोजन को लैंडफिल में जाने से बचाया गया। कार्बन बचत दर्ज और अन्नपूर्णा ग्रैंड को 80G कर छूट प्रमाणपत्र जारी।',
        card1Title: 'बचाया गया भोजन',
        card1Val: '85 किग्रा',
        card1Sub: '210 लोगों को भोजन',
        card2Title: 'रोका गया कार्बन (CO₂)',
        card2Val: '212.5 किग्रा',
        card2Sub: 'कचरा डिपो से बचाव',
        card3Title: 'बचाया गया पानी',
        card3Val: '34,000 लीटर',
        card3Sub: 'कृषि जल संरक्षण',
        card4Title: 'कर प्रमाणपत्र',
        card4Val: 'SEC-80G / CSR',
        card4Sub: 'डिजिटल रूप से जारी'
      }
    },
    pillars: {
      badge: 'बहु-हितधारक सहयोग',
      title: 'खाद्य पारिस्थितिकी तंत्र के हर स्तंभ के लिए समर्पित',
      subtitle: 'होटलों, फूड बैंकों, स्वयंसेवकों और नागरिक अधिकारियों के लिए विशेष रूप से डिज़ाइन किए गए डैशबोर्ड।',
      hotels: {
        title: 'होटल एवं कैटरर्स',
        desc: 'बड़े पैमाने पर बचे हुए स्वादिष्ट विंदु भोजन को आसानी से पंजीकृत करें। तत्काल धारा 80G आयकर छूट प्रमाणपत्र प्राप्त करें।',
        p1: '✓ रसोई में शून्य खाद्य अपशिष्ट',
        p2: '✓ FSSAI गुड सेमेरिटन कानूनी संरक्षण',
        p3: '✓ प्रतिदिन शाम को समय पर स्वचालित पिकअप'
      },
      ngos: {
        title: 'एनजीओ एवं फूड बैंक',
        desc: 'अपने आश्रय की क्षमता और भोजन की प्राथमिकता के अनुसार सीधे सुरक्षित और पौष्टिक भोजन प्राप्त करें।',
        p1: '✓ स्वचालित AI निकटता आवंटन',
        p2: '✓ डिजिटल लाभार्थी रिकॉर्ड प्रबंधन',
        p3: '✓ कोल्ड-चेन सुरक्षित परिवहन'
      },
      volunteers: {
        title: 'खाद्य बचाव स्वयंसेवक नायक',
        desc: 'अपने शहर में भूख मिटाने वाले सेवा वीरों के नेटवर्क से जुड़ें। GPS नेविगेशन से आसानी से भोजन पहुंचाएं और पदक जीतें।',
        p1: '✓ OTP आधारित स्पष्ट डिजिटल मार्ग',
        p2: '✓ केवल 30 मिनट का लचीला मिशन',
        p3: '✓ प्रमाणित सामुदायिक सेवा घंटे'
      },
      csr: {
        title: 'कॉर्पोरेट CSR एवं ESG',
        desc: 'इलेक्ट्रिक रेफ्रिजरेटेड वैन, कोल्ड स्टोरेज हब और कुपोषण उन्मूलन कार्यक्रमों को अनुसूची VII के तहत प्रायोजित करें।',
        p1: '✓ SEBI BRSR मानकों के अनुरूप रिपोर्ट',
        p2: '✓ प्रमाणित कार्बन और जल पदचिह्न बचत',
        p3: '✓ पारदर्शी अनुदान ट्रैकिंग'
      }
    },
    coverage: {
      badge: 'राष्ट्रीय शून्य-भूख नेटवर्क',
      title: 'भारतीय राज्यों में सेवारत समुदाय',
      subtitle: 'अधिशेष भोजन उत्पन्न करने वाले केंद्रों को नागरिक समाज और जरूरतमंद बस्तियों से जोड़ने वाली एकीकृत प्रणाली।',
      stateHQ: 'क्षेत्रीय मुख्यालय',
      verifiedNgosLabel: 'सत्यापित एनजीओ',
      commercialDonorsLabel: 'वाणिज्यिक दाता',
      mealsLabel: 'परोसा गया भोजन',
      regionalOps: 'क्षेत्रीय राज्य संचालन',
      centralDesc: 'FSSAI तापमान जांच, त्वरित वाहन रवानगी और स्वचालित आपातकालीन भूख राहत प्रणाली द्वारा संचालित।',
      totalRescued: 'कुल बचाया गया भोजन',
      mealsNourished: 'परोसा गया पौष्टिक भोजन',
      operationalDistricts: 'सक्रिय परिचालन जिले'
    },
    testimonials: {
      badge: 'जन समुदाय की आवाज',
      title: 'भारतीय बस्तियों में दिख रहा वास्तविक बदलाव',
      t1Quote: 'फूडरेस्क्यू से पहले शादी के बैंक्वेट में बचे हुए ताजे भोजन को देखकर दिल दुखता था। आज पोस्ट करने के 20 मिनट के भीतर इलेक्ट्रिक वैन आकर भोजन ले जाती है और बालला सदन के 160 अनाथ बच्चों को ताजा भोजन मिलता है।',
      t1Author: 'रमेश चौधरी',
      t1Role: 'बैंक्वेट निदेशक, अन्नपूर्णा हेरिटेज ग्रैंड, विजयवाड़ा',
      t2Quote: 'FSSAI की सख्त तापमान जांच से हमारे आश्रय को पूरा भरोसा रहता है। रोज शाम को गरमा-गरम, पौष्टिक भोजन समय पर पहुंचता है, जिससे हमारे आश्रम का मासिक राशन खर्च काफी कम हो गया है।',
      t2Author: 'सिस्टर मैरी थेरेसा',
      t2Role: 'स्नेहा सेवा सोसाइटी फूड बैंक, एनटीआर जिला',
      t3Quote: 'विजयवाड़ा में कॉलेज का छात्र होने के नाते सप्ताहांत में अपने इलेक्ट्रिक स्कूटर पर 2 पिकअप पूरा करना मुझे बहुत संतुष्टि देता है। ऐप में OTP सत्यापन और रास्ता देखना बहुत आसान है।',
      t3Author: 'सुरेश रेड्डी',
      t3Role: 'खाद्य बचाव स्वयंसेवक नायक (लेवल 3 सेवा योद्धा)'
    },
    cta: {
      badge: 'अधिशेष को उम्मीद में बदलें',
      title: 'भूख-मुक्त, कचरा-मुक्त भारत के निर्माण में जुड़ें!',
      desc: 'चाहे आप होटल या रेस्तरां चलाते हों, एनजीओ संचालित करते हों, या अपने शहर में स्वयंसेवा करना चाहते हों, आज ही राष्ट्रीय नेटवर्क से जुड़ें।',
      btnDonate: 'भोजन दान करें',
      btnNgo: 'एनजीओ / आश्रय के रूप में जुड़ें'
    },
    footer: {
      desc: 'भारत का अग्रणी सामाजिक मंच जो अतिरिक्त भोजन को जरूरतमंदों तक सम्मानपूर्वक पहुंचाता है।',
      certs: 'FSSAI प्रमाणित सुरक्षित भोजन • धारा 80G आयकर छूट मान्य',
      activeHubsTitle: 'सक्रिय राज्य केंद्र',
      rolePortalsTitle: 'विशिष्ट पोर्टल',
      helplineTitle: 'हेल्पलाइन एवं आपातकालीन सहायता',
      hqAddress: 'एम.जी. रोड, लब्बीपेट, विजयवाड़ा - 520010',
      tollFreeLabel: 'राष्ट्रीय निःशुल्क हेल्पलाइन: 1800-425-FOOD (3663)',
      rights: '© 2026 फूडरेस्क्यू इंडिया। सर्वाधिकार सुरक्षित।'
    },
    dashboard: {
      moduleWorkspaces: 'मॉड्यूल कार्यक्षेत्र',
      switchRoleBtn: 'भूमिका बदलें (12 उपलब्ध)',
      signOutBtn: 'साइन आउट',
      searchPlaceholder: 'रिकॉर्ड खोजें...',
      notificationsTitle: 'सूचनाएं',
      newBadge: '2 नई',
      workspaceSuffix: 'कार्यक्षेत्र',
      overviewTab: 'अवलोकन'
    },
    auth: {
      signInTitle: 'एंटरप्राइज साइन इन',
      signInSubtitle: 'अपने अधिकृत परिचालन रोल डैशबोर्ड में प्रवेश करें',
      registerTitle: 'खाद्य बचाव प्रणाली से जुड़ें',
      registerSubtitle: 'व्यावसायिक भोजन दाता, सत्यापित एनजीओ या स्वयंसेवक के रूप में पंजीकरण करें',
      emailOrPhoneLabel: 'ईमेल आईडी या मोबाइल नंबर (+91)',
      emailOrPhonePlaceholder: 'उदा: superadmin@foodrescue.org.in या +91 98480 11221',
      passwordLabel: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड दर्ज करें',
      forgotPasswordLink: 'पासवर्ड भूल गए?',
      signInButton: 'डैशबोर्ड में साइन इन करें',
      authenticating: 'प्रमाणीकरण हो रहा है...',
      instantDemoTitle: 'त्वरित डेमो पहुंच',
      instantDemoSubtitle: 'एक क्लिक में किसी भी हितधारक के रूप में लॉगिन करें:',
      registerCtaPrompt: 'नया संगठन या भोजन दाता?',
      registerCtaLink: 'अपनी रसोई या एनजीओ पंजीकृत करें',
      stakeholderCategory: 'हितधारक श्रेणी *',
      organizationNameLabel: 'संगठन / प्रतिष्ठान का नाम *',
      organizationNamePlaceholder: 'उदा: अन्नपूर्णा ग्रैंड बैंक्वेट्स या स्नेह सेवा सोसाइटी',
      contactPersonLabel: 'संपर्क व्यक्ति का नाम *',
      contactPersonPlaceholder: 'उदा: रमेश चौधरी',
      contactEmailLabel: 'आधिकारिक ईमेल *',
      contactEmailPlaceholder: 'उदा: admin@annapurnagrand.in',
      contactPhoneLabel: 'मोबाइल नंबर (+91) *',
      contactPhonePlaceholder: '+91 98480 11221',
      cityLabel: 'शहर / केंद्र *',
      stateLabel: 'राज्य *',
      fssaiDarpanLabel: 'FSSAI लाइसेंस नं. / एनजीओ दर्पण आईडी *',
      fssaiDarpanPlaceholder: 'उदा: 10121008000412 या AP/2018/0192834',
      registerButton: 'सत्यापन हेतु पंजीकरण जमा करें',
      alreadyRegisteredPrompt: 'पहले से पंजीकृत हैं?',
      alreadyRegisteredLink: 'मौजूदा खाते में साइन इन करें',
      resetPasswordTitle: 'पासवर्ड रीसेट करें',
      resetPasswordSubtitle: 'सुरक्षित ओटीपी रीसेट लिंक प्राप्त करने के लिए पंजीकृत ईमेल या मोबाइल दर्ज करें।',
      resetInputPlaceholder: 'ईमेल आईडी या मोबाइल नंबर',
      sendResetOtpButton: 'सुरक्षित रीसेट ओटीपी भेजें',
      resetSentMessage: 'ओटीपी सफलतापूर्वक भेजा गया!',
      returnToSignIn: 'साइन इन पर वापस जाएं',
      backToSignIn: 'साइन इन पर वापस'
    },
    roles: {
      SUPER_ADMIN: 'राष्ट्रीय सुपर एडमिनिस्ट्रेटर',
      REGIONAL_ADMIN: 'क्षेत्रीय राज्य निदेशक',
      DISTRICT_ADMIN: 'जिला परिचालन प्रमुख',
      DONOR: 'भोजन दाता',
      RESTAURANT: 'रेस्तरां प्रबंधक',
      HOTEL: 'होटल एवं बैंक्वेट संचालक',
      NGO: 'एनजीओ खाद्य बैंक साथी',
      VOLUNTEER: 'खाद्य बचाव स्वयंसेवक नायक',
      DELIVERY_PARTNER: 'रसद वाहन चालक',
      BENEFICIARY: 'सामुदायिक आश्रय प्रबंधक',
      CORPORATE_CSR: 'कॉर्पोरेट सीएसआर प्रमुख',
      GOVERNMENT_AUTHORITY: 'नागरिक आपूर्ति एवं खाद्य सुरक्षा विभाग',
      ANALYST: 'स्थिरता एवं अनुसंधान विश्लेषक',
      FOOD_SAFETY_OFFICER: 'FSSAI खाद्य सुरक्षा निरीक्षक'
    }
  }
};
