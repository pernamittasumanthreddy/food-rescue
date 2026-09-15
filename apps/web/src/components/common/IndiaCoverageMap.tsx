import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.js';
import { MapPin, Building } from 'lucide-react';

interface StateHub {
  id: string;
  name: string;
  regionalHQ: string;
  districtsCovered: string[];
  activeNgos: number;
  activeDonors: number;
  foodRescuedKg: number;
  mealsServed: number;
  status: string;
}

export const IndiaCoverageMap: React.FC = () => {
  const { t, language } = useLanguage();
  const cov = t.coverage;

  const stateNames: Record<string, Record<string, string>> = {
    ap: { en: 'Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్', hi: 'आंध्र प्रदेश' },
    ts: { en: 'Telangana', te: 'తెలంగాణ', hi: 'तेलंगाना' },
    ka: { en: 'Karnataka', te: 'కర్ణాటక', hi: 'कर्नाटक' },
    tn: { en: 'Tamil Nadu', te: 'తమిళనాడు', hi: 'तमिलनाडु' },
    mh: { en: 'Maharashtra', te: 'మహారాష్ట్ర', hi: 'महाराष्ट्र' },
    dl: { en: 'Delhi NCR', te: 'ఢిల్లీ ఎన్‌సీఆర్', hi: 'दिल्ली एनसीआर' }
  };

  const hubs: StateHub[] = [
    {
      id: 'ap',
      name: stateNames.ap[language] || 'Andhra Pradesh',
      regionalHQ: 'Vijayawada (Apex Coordination)',
      districtsCovered: ['NTR District', 'Krishna', 'Guntur', 'Visakhapatnam', 'Tirupati', 'Kakinada'],
      activeNgos: 28,
      activeDonors: 145,
      foodRescuedKg: 64200,
      mealsServed: 160500,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    },
    {
      id: 'ts',
      name: stateNames.ts[language] || 'Telangana',
      regionalHQ: 'Hyderabad (Deccan Metro Hub)',
      districtsCovered: ['Hyderabad', 'Rangareddy', 'Medchal-Malkajgiri', 'Warangal', 'Nizamabad'],
      activeNgos: 24,
      activeDonors: 130,
      foodRescuedKg: 58900,
      mealsServed: 147250,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    },
    {
      id: 'ka',
      name: stateNames.ka[language] || 'Karnataka',
      regionalHQ: 'Bengaluru (Tech Corridor Hub)',
      districtsCovered: ['Bengaluru Urban', 'Bengaluru Rural', 'Mysuru', 'Mangaluru', 'Hubballi'],
      activeNgos: 19,
      activeDonors: 92,
      foodRescuedKg: 38400,
      mealsServed: 96000,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    },
    {
      id: 'tn',
      name: stateNames.tn[language] || 'Tamil Nadu',
      regionalHQ: 'Chennai (Coastal Corridor Hub)',
      districtsCovered: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
      activeNgos: 15,
      activeDonors: 78,
      foodRescuedKg: 29800,
      mealsServed: 74500,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    },
    {
      id: 'mh',
      name: stateNames.mh[language] || 'Maharashtra',
      regionalHQ: 'Mumbai / Pune (Western Zone Hub)',
      districtsCovered: ['Mumbai City', 'Mumbai Suburban', 'Pune', 'Thane', 'Nagpur'],
      activeNgos: 22,
      activeDonors: 110,
      foodRescuedKg: 42100,
      mealsServed: 105250,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    },
    {
      id: 'dl',
      name: stateNames.dl[language] || 'Delhi NCR',
      regionalHQ: 'New Delhi (Northern Apex Hub)',
      districtsCovered: ['Central Delhi', 'South Delhi', 'Noida', 'Gurugram', 'Ghaziabad'],
      activeNgos: 16,
      activeDonors: 85,
      foodRescuedKg: 31200,
      mealsServed: 78000,
      status: language === 'te' ? 'కార్యాచరణలో ఉంది' : language === 'hi' ? 'सक्रिय परिचालन' : 'OPERATIONAL'
    }
  ];

  const [selectedHub, setSelectedHub] = useState<StateHub>(hubs[0]);

  return (
    <section id="coverage" style={{ padding: '4rem 1.5rem', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-green" style={{ marginBottom: '0.6rem' }}>
            {cov.badge}
          </div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)' }}>
            {cov.title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            {cov.subtitle}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* State Hub Selector Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {hubs.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <div
                  key={hub.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`Select hub ${hub.name}`}
                  onClick={() => setSelectedHub(hub)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedHub(hub);
                    }
                  }}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                    backgroundColor: isSelected ? 'var(--color-cream-card)' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={18} color="var(--color-primary)" />
                      <span>{hub.name}</span>
                    </div>
                    <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                      {hub.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    {cov.stateHQ}: {hub.regionalHQ}
                  </div>
                  <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                    <span>{hub.activeNgos} {cov.verifiedNgosLabel}</span>
                    <span>{hub.activeDonors} {cov.commercialDonorsLabel}</span>
                    <span style={{ color: 'var(--color-primary)' }}>{hub.mealsServed.toLocaleString()} {cov.mealsLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Regional Inspection & Detail Hub Display */}
          <div
            className="eco-card eco-card-cream"
            style={{
              padding: '2rem',
              border: '2px solid var(--color-primary)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-saffron" style={{ marginBottom: '0.4rem' }}>
                  {cov.regionalOps}
                </span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)' }}>
                  {selectedHub.name}
                </h3>
              </div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Building size={24} color="var(--color-primary)" />
              </div>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {cov.centralDesc}
            </div>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{cov.totalRescued}</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                  {selectedHub.foodRescuedKg.toLocaleString()} kg
                </div>
              </div>
              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{cov.mealsNourished}</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.2rem' }}>
                  {selectedHub.mealsServed.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Districts Covered Badges */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>
                {cov.operationalDistricts} ({selectedHub.name}):
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedHub.districtsCovered.map((district) => (
                  <span
                    key={`${selectedHub.id}-${district}`}
                    style={{
                      padding: '0.35rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--color-text-main)'
                    }}
                  >
                    📍 {district}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
