import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole =
  | 'SUPER_ADMIN'
  | 'REGIONAL_ADMIN'
  | 'DISTRICT_ADMIN'
  | 'DONOR'
  | 'RESTAURANT'
  | 'HOTEL'
  | 'NGO'
  | 'VOLUNTEER'
  | 'DELIVERY_PARTNER'
  | 'BENEFICIARY'
  | 'CORPORATE_CSR'
  | 'GOVERNMENT_AUTHORITY'
  | 'ANALYST'
  | 'FOOD_SAFETY_OFFICER';

export interface AuthUser {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  state: string;
  district: string;
  city: string;
  pincode: string;
  organizationName?: string;
}

export interface DemoAccount {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  phone: string;
  city: string;
  state: string;
  dashboardPath: string;
  description: string;
}

export const getRoleDashboardPath = (role?: UserRole | string): string => {
  if (!role) return '/dashboard/donor';
  switch (role) {
    case 'SUPER_ADMIN':
      return '/dashboard/super-admin';
    case 'REGIONAL_ADMIN':
    case 'DISTRICT_ADMIN':
      return '/dashboard/regional-admin';
    case 'DONOR':
      return '/dashboard/donor';
    case 'RESTAURANT':
      return '/dashboard/restaurant';
    case 'HOTEL':
      return '/dashboard/hotel';
    case 'NGO':
      return '/dashboard/ngo';
    case 'VOLUNTEER':
      return '/dashboard/volunteer';
    case 'DELIVERY_PARTNER':
      return '/dashboard/delivery-partner';
    case 'BENEFICIARY':
      return '/dashboard/beneficiary';
    case 'CORPORATE_CSR':
      return '/dashboard/corporate-csr';
    case 'GOVERNMENT_AUTHORITY':
      return '/dashboard/government';
    case 'ANALYST':
      return '/dashboard/analytics';
    case 'FOOD_SAFETY_OFFICER':
      return '/dashboard/safety-officer';
    default:
      return `/dashboard/${role.toLowerCase().replace(/_/g, '-')}`;
  }
};

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    id: 'user-admin-1',
    name: 'Kalyan Varma (Apex Director)',
    role: 'SUPER_ADMIN',
    email: 'superadmin@foodrescue.org.in',
    phone: '+91 98480 11221',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/super-admin',
    description: 'National control, audit logs, system health & NGO verifications'
  },
  {
    id: 'user-regadmin-1',
    name: 'Lakshmi Prasanna (Regional Lead)',
    role: 'REGIONAL_ADMIN',
    email: 'regional.ap@foodrescue.org.in',
    phone: '+91 98480 22332',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/regional-admin',
    description: 'Statewide hunger mapping, district operations & dispute management'
  },
  {
    id: 'user-hotel-1',
    name: 'Ramesh Chowdary (Banquet Head)',
    role: 'HOTEL',
    email: 'hotel.annapurna@annapurnagrand.in',
    phone: '+91 86624 78899',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/hotel',
    description: 'Bulk event surplus scheduling, thermal holding & FSSAI declaration'
  },
  {
    id: 'user-rest-1',
    name: 'Mohammed Ibrahim (Kitchen Lead)',
    role: 'RESTAURANT',
    email: 'restaurant.bawarchi@gmail.com',
    phone: '+91 40276 34567',
    city: 'Hyderabad',
    state: 'Telangana',
    dashboardPath: '/dashboard/restaurant',
    description: 'Daily surplus posting, kitchen prep logging & food safety'
  },
  {
    id: 'user-donor-1',
    name: 'Kiran Prasad (Household / Community)',
    role: 'DONOR',
    email: 'donor.kiran@gmail.com',
    phone: '+91 98481 23456',
    city: 'Guntur',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/donor',
    description: 'Family/Event food donation wizard, pickup tracking & certificates'
  },
  {
    id: 'user-safety-1',
    name: 'Dr. Anand Kumar (FSSAI Inspector)',
    role: 'FOOD_SAFETY_OFFICER',
    email: 'fssai.officer@apgov.in',
    phone: '+91 94401 88220',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/safety-officer',
    description: 'Temperature verification, sensory inspection & safety clearance'
  },
  {
    id: 'user-ngo-1',
    name: 'Sister Mary Theresa (Food Bank Directress)',
    role: 'NGO',
    email: 'ngo.snehaseva@gmail.com',
    phone: '+91 86625 89001',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/ngo',
    description: 'Incoming surplus match review, meal acceptance & community dispatch'
  },
  {
    id: 'user-vol-1',
    name: 'Suresh Reddy (Seva Volunteer Hero)',
    role: 'VOLUNTEER',
    email: 'volunteer.suresh@gmail.com',
    phone: '+91 99490 12345',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/volunteer',
    description: 'Field food rescue tasks, turn-by-turn navigation & OTP handshake'
  },
  {
    id: 'user-driver-1',
    name: 'Venkateswara Rao (Fleet Driver)',
    role: 'DELIVERY_PARTNER',
    email: 'driver.venkat@foodrescue.org.in',
    phone: '+91 98765 43210',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/delivery-partner',
    description: 'Electric insulated van dispatch, route optimization & digital proof'
  },
  {
    id: 'user-shelter-1',
    name: 'Padmavati Devi (Orphanage Sadan Manager)',
    role: 'BENEFICIARY',
    email: 'shelter.padmavati@vjaorphanage.org',
    phone: '+91 86624 31122',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/beneficiary',
    description: 'Meal demand logging, ration tracking & beneficiary dignity feedback'
  },
  {
    id: 'user-csr-1',
    name: 'Pooja Sharma (Corporate ESG Lead)',
    role: 'CORPORATE_CSR',
    email: 'csr.lead@godavari.com',
    phone: '+91 99887 76655',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/corporate-csr',
    description: 'Schedule VII compliance, cold chain grant funding & 80G tax metrics'
  },
  {
    id: 'user-gov-1',
    name: 'S. Chandrasekhar IAS (District Collector)',
    role: 'GOVERNMENT_AUTHORITY',
    email: 'gov.collector@ap.gov.in',
    phone: '+91 86624 51000',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    dashboardPath: '/dashboard/government',
    description: 'Regional food security index, civil supplies monitoring & audit'
  },
  {
    id: 'user-analyst-1',
    name: 'Divya Nair (ESG Sustainability Analyst)',
    role: 'ANALYST',
    email: 'esg.analyst@foodrescue.org.in',
    phone: '+91 98112 23344',
    city: 'Bengaluru',
    state: 'Karnataka',
    dashboardPath: '/dashboard/analytics',
    description: 'Predictive surplus forecasting, CO2 reduction & waste analytics'
  }
];

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loginAsDemo: (account: DemoAccount) => string;
  loginWithCredentials: (emailOrPhone: string) => Promise<string>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('foodrescue_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    try {
      return localStorage.getItem('foodrescue_token');
    } catch {
      return null;
    }
  });

  const loginAsDemo = (account: DemoAccount): string => {
    const authUser: AuthUser = {
      id: account.id,
      email: account.email,
      phone: account.phone,
      firstName: account.name.split(' ')[0],
      lastName: account.name.split(' ')[1] || '',
      role: account.role,
      state: account.state,
      district: 'District Hub',
      city: account.city,
      pincode: '520010'
    };

    const mockToken = `demo-token-${account.role}-${Date.now()}`;
    setUser(authUser);
    setToken(mockToken);
    localStorage.setItem('foodrescue_user', JSON.stringify(authUser));
    localStorage.setItem('foodrescue_token', mockToken);

    return account.dashboardPath;
  };

  const loginWithCredentials = async (emailOrPhone: string): Promise<string> => {
    const matchedDemo = DEMO_ACCOUNTS.find(
      (a) =>
        a.email.toLowerCase() === emailOrPhone.toLowerCase() ||
        a.phone.replace(/\D/g, '') === emailOrPhone.replace(/\D/g, '')
    );

    if (matchedDemo) {
      return loginAsDemo(matchedDemo);
    }

    // Generic fallback user
    const defaultUser: AuthUser = {
      id: `user-${Date.now()}`,
      email: emailOrPhone,
      phone: '+91 98765 00000',
      firstName: 'Rescue',
      lastName: 'Partner',
      role: 'DONOR',
      state: 'Andhra Pradesh',
      district: 'Krishna',
      city: 'Vijayawada',
      pincode: '520010'
    };

    const genToken = `token-${Date.now()}`;
    setUser(defaultUser);
    setToken(genToken);
    localStorage.setItem('foodrescue_user', JSON.stringify(defaultUser));
    localStorage.setItem('foodrescue_token', genToken);
    return '/dashboard/donor';
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('foodrescue_user');
    localStorage.removeItem('foodrescue_token');
    sessionStorage.clear();
    // Redirect to login
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        loginAsDemo,
        loginWithCredentials,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
