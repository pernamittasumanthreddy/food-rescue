import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { Award, FileText, TrendingUp, Users, Download, IndianRupee } from 'lucide-react';

export const CorporateCsrDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('campaigns');

  const sidebarItems = [
    { id: 'campaigns', label: 'CSR Grants & Funds', icon: <IndianRupee size={18} /> },
    { id: 'scheduleVII', label: 'Schedule VII Audits', icon: <FileText size={18} /> },
    { id: 'esg', label: 'ESG Carbon Offsets', icon: <TrendingUp size={18} /> },
    { id: 'volunteering', label: 'Employee Volunteerism', icon: <Users size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Corporate CSR & ESG Lead"
      roleBadge="GODAVARI GREEN CSR WING"
      roleId="CORPORATE_CSR"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CSR FUNDS DISBURSED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>₹45,00,000</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Cold storage & electric vans funded</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>MEALS SPONSORED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>1,12,500</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Schedule VII Malnutrition Eradication</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CORPORATE ESG RANKING</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>Top 1%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>SEBI BRSR Compliant Reporting</div>
        </div>
      </div>

      {activeTab === 'campaigns' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
                Schedule VII Project: Krishna District Zero Hunger Initiative
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Corporate Social Responsibility grant under Section 135 of the Companies Act, 2013
              </p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }} onClick={() => alert('Downloading BRSR ESG Report...')}>
              <Download size={14} /> Download BRSR Report
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>TAX EXEMPTION</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>
                80G Valid Certificate
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Ref: AAATG1289RF20241</div>
            </div>
            <div style={{ padding: '1rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>ELECTRIC VANS SPONSORED</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                4 Zero-Emission Vans
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Vijayawada & Guntur Hubs</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scheduleVII' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Companies Act 2013 — Schedule VII Audit Trail</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Statutory compliance for Item (i): Eradicating hunger, poverty and malnutrition.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => alert('Exporting statutory compliance dossier...')}>
              Export MCA Dossier
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>FY 2025-26 Food Infrastructure Grant (#CSR-8812)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Amount: ₹25,00,000 • NGO Partner: Sneha Seva Society • Audited by KPMG</div>
              </div>
              <span className="badge badge-green">AUDIT CLEARED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'esg' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            ESG Carbon Offset Metrics & SEBI BRSR Core Disclosures
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Audited Scope 3 supply chain food loss reduction carbon credits.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>SCOPE 3 CARBON AVOIDED</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>281.2 Tonnes CO₂e</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Gold Standard Methodology</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>BRSR CORE COMPLIANCE</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>100% Pass</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Assurance level: Reasonable</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'volunteering' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Employee Corporate Volunteerism Tracker</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Godavari staff engagement in weekend community feeding and packing drives.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Creating new corporate volunteer chapter...')}>
              + Launch Drive
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>EMPLOYEE VOLUNTEERS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>164 Staff</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>1,240 Total Hours Logged</div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
