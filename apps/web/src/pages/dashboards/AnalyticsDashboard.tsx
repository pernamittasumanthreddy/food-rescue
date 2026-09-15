import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { BarChart3, TrendingUp, Leaf, Droplets, Globe2, Download } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('kpis');

  const sidebarItems = [
    { id: 'kpis', label: 'National KPIs', icon: <BarChart3 size={18} /> },
    { id: 'carbon', label: 'Carbon & Water Footprint', icon: <Leaf size={18} /> },
    { id: 'predictive', label: 'Predictive Surplus AI', icon: <TrendingUp size={18} /> }
  ];

  const trends = [
    { day: 'Monday', kg: 2850, meals: 7125, co2: 7125 },
    { day: 'Tuesday', kg: 3100, meals: 7750, co2: 7750 },
    { day: 'Wednesday', kg: 3450, meals: 8625, co2: 8625 },
    { day: 'Thursday', kg: 3900, meals: 9750, co2: 9750 },
    { day: 'Friday', kg: 4600, meals: 11500, co2: 11500 },
    { day: 'Saturday', kg: 5800, meals: 14500, co2: 14500 },
    { day: 'Sunday', kg: 6400, meals: 16000, co2: 16000 }
  ];

  return (
    <DashboardLayout
      roleTitle="Sustainability & ESG Analyst"
      roleBadge="ESG RESEARCH CELL"
      roleId="ANALYST"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>AVOIDED CO₂ EMISSIONS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>4,61,412 kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>2.5 kg CO₂e / kg Food Waste Saved</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>EMBEDDED WATER SAVED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>7.38 Crore L</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Agricultural water preserved</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>LANDFILL VOLUME DIVERTED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>553.7 m³</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Zero methane gas generation</div>
        </div>
      </div>

      {activeTab === 'kpis' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Weekly Surplus Rescue Volume Trend (India)</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Peak surplus observed Friday - Sunday due to banquet wedding events</p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Exporting ESG Spreadsheet...')}>
              <Download size={14} /> Export ESG Spreadsheet
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '0.6rem 0.5rem' }}>Day of Week</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Rescued Food (kg)</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Portions Nourished</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>CO₂ Emissions Prevented (kg)</th>
              </tr>
            </thead>
            <tbody>
              {trends.map((t) => (
                <tr key={t.day} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.7rem 0.5rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{t.day}</td>
                  <td style={{ padding: '0.7rem 0.5rem', fontWeight: 600 }}>{t.kg.toLocaleString()} kg</td>
                  <td style={{ padding: '0.7rem 0.5rem', color: 'var(--color-primary)' }}>{t.meals.toLocaleString()}</td>
                  <td style={{ padding: '0.7rem 0.5rem', color: 'var(--color-terracotta)', fontWeight: 700 }}>{t.co2.toLocaleString()} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'carbon' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            National Carbon & Embedded Water Footprint Ledger
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Calculated according to IPCC guidelines and FAO Food Loss and Waste protocol.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>METHANE GAS AVOIDED</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>18.4 Tonnes CH₄</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Landfill decomposition prevented</div>
            </div>
            <div style={{ padding: '1rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>ARABLE LAND FOOTPRINT</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>142 Hectares</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Equivalent crop acreage preserved</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'predictive' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            AI Predictive Surplus Forecasting (Next 7 Days)
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Trained on historic wedding season auspicious muhurtham dates and banquet bookings.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Friday - Sunday Surge Prediction (Vijayawada & Guntur)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Expected Surplus: ~12,400 kg (31,000 Portions) • 42 Weddings registered</div>
              </div>
              <span className="badge badge-green">FLEET PRE-ALLOCATED</span>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
