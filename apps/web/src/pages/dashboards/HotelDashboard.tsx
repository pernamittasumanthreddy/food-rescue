import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { Building2, Calendar, ShieldCheck, Download, Truck, Plus } from 'lucide-react';

export const HotelDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('banquets');

  const sidebarItems = [
    { id: 'banquets', label: 'Banquet Surplus Scheduling', icon: <Building2 size={18} /> },
    { id: 'calendar', label: 'Event Hall Calendar', icon: <Calendar size={18} /> },
    { id: 'coldchain', label: 'Cold-Chain Requests', icon: <Truck size={18} /> },
    { id: 'compliance', label: 'FSSAI Safety Records', icon: <ShieldCheck size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Hotel & Banquet Operations"
      roleBadge="STAR HOTEL BANQUETS"
      roleId="HOTEL"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>BANQUET SURPLUS RESCUED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>14,280 kg</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Diverted from Annapurna Grand</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>BANQUET MEALS SERVED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>35,700</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Across NTR & Krishna Districts</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CSR TAX CERTIFICATES ISSUED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>₹16,06,500</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Section 80G Compliant</div>
        </div>
      </div>

      {activeTab === 'banquets' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
                Banquet Event Surplus Dispatch Queue
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Pre-declare wedding and conference buffet surplus for zero-wait pickup
              </p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }} onClick={() => alert('Banquet event surplus registration modal opened.')}>
              <Plus size={15} /> Log New Event Surplus
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-cream-card)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-primary-dark)' }}>
                    Grand Banquet Hall 2 • Wedding Reception Surplus
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    160 Meals • Pure Vegetarian Andhra Bhojanam • Ready for Dispatch
                  </div>
                </div>
                <span className="badge badge-green">VERIFIED SAFE & READY</span>
              </div>

              <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                <span>Assigned Electric Van: <strong>AP 16 TZ 8421</strong></span>
                <span>Pickup OTP: <strong style={{ color: 'var(--color-primary)', letterSpacing: '0.1em' }}>849201</strong></span>
                <span style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>Allocated: Sneha Seva Society</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Event Hall Calendar & Pre-Planned Surplus</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Scheduled marriage receptions, corporate symposiums & catering pickups.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => alert('Adding new booked event')}>
              + Add Event
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Tomorrow • Tech Mahindra Annual Leadership Summit</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Hall 1 • Expected Surplus: ~80 Meals • Pickup Window: 03:30 PM</div>
              </div>
              <span className="badge badge-saffron">PRE-SCHEDULED</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>This Saturday • Dr. Rao Family Wedding Reception</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Main Grand Lawn • Expected Surplus: ~250 Meals • Pickup Window: 10:30 PM</div>
              </div>
              <span className="badge badge-green">FLEET ASSIGNED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'coldchain' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Cold-Chain Logistics & Thermal Storage Requests
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Request insulated refrigerated vans for perishable dairy desserts and cold buffet items.
          </p>

          <div style={{ padding: '1.2rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Active Request: Insulated Chilled Carrier (&lt;4°C)</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>For 35 kg Milk Sweets & Kheer • Cold-Chain Van AP 16 TY 2291 Dispatched</div>
              </div>
              <span className="badge badge-green">ARRIVING IN 15 MINS</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'compliance' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            FSSAI Commercial Food Safety Certifications & Audits
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Audit records for Annapurna Grand Banquet Kitchen. FSSAI License: #10120006000189.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Quarterly FSSAI Hygiene Audit (Q3 2026)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Score: 98/100 • Grade: A+ (Golden Kitchen Rating)</div>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: '0.78rem' }} onClick={() => alert('Certificate downloaded.')}>Download Certificate</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
