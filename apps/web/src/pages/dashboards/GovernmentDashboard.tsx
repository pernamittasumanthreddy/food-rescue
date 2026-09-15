import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { Shield, Map, FileCheck, Landmark, Download } from 'lucide-react';

export const GovernmentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('security');

  const sidebarItems = [
    { id: 'security', label: 'Food Security Index', icon: <Landmark size={18} /> },
    { id: 'heatmaps', label: 'District Hunger Maps', icon: <Map size={18} /> },
    { id: 'compliance', label: 'Civil Supplies Audits', icon: <FileCheck size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Civil Supplies & Food Safety Authority"
      roleBadge="IAS DISTRICT COLLECTORATE"
      roleId="GOVERNMENT_AUTHORITY"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DISTRICT FOOD VULNERABILITY INDEX</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>Low (2.1)</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Improved by 34% via FoodRescue</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>MUNICIPAL WASTE AVOIDED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>64.2 Tonnes</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Vijayawada Municipal Corporation</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>FSSAI LAB INSPECTION PASS RATE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>99.2%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Zero food-borne incidents recorded</div>
        </div>
      </div>

      {activeTab === 'security' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
                NTR District Civil Supplies & Emergency Feeding Coordination
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Collectorate Secretariat, Bandar Road, Vijayawada
              </p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Downloading District Gazette Report...')}>
              <Download size={14} /> Download District Gazette Report
            </button>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
            Real-time integration between <strong>FoodRescue AI Engine</strong> and the <strong>Department of Civil Supplies</strong> guarantees that all major banquet centers, temples, and marriage halls channel safe surplus to designated civic food banks before expiry.
          </p>
        </div>
      )}

      {activeTab === 'heatmaps' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            District Vulnerability & Hunger Concentration Maps
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Ward-level GIS monitoring of vulnerable pockets across Vijayawada Urban & Rural mandals.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--color-cream-card)' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Ward 14 (Krishna Riverbank Settlement)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Vulnerability: Moderate • Daily Meal Support: 420 Portions Delivered</div>
              </div>
              <span className="badge badge-green">STABILIZED</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--color-cream-card)' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Ward 28 (Autonagar Transit Labor Colony)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Vulnerability: Low • Daily Meal Support: 310 Portions Delivered</div>
              </div>
              <span className="badge badge-green">STABILIZED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'compliance' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Civil Supplies Department Statutory Inspection Audits
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Monthly verification of fair price distribution shops and surplus food rescue compliance.
          </p>

          <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--color-primary)', background: 'var(--color-cream-card)' }}>
            <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)' }}>District Inspection Certificate (AP-CS-2026-NTR)</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
              All 14 registered NGO community kitchens certified 100% compliant with FSSAI regulations and NFSA (National Food Security Act) guidelines.
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
