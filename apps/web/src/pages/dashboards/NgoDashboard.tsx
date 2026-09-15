import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { HeartHandshake, CheckCircle2, Users, MapPin, AlertCircle, ArrowDownToLine } from 'lucide-react';

export const NgoDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('incoming');

  const sidebarItems = [
    { id: 'incoming', label: 'Incoming Allocations', icon: <HeartHandshake size={18} />, badge: '1 Batch' },
    { id: 'beneficiaries', label: 'Beneficiary Shelters', icon: <Users size={18} /> },
    { id: 'requests', label: 'Urgent Meal Requests', icon: <AlertCircle size={18} /> },
    { id: 'history', label: 'Distribution Proofs', icon: <CheckCircle2 size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="NGO & Food Bank Partner"
      roleBadge="VERIFIED NGO FOOD BANK"
      roleId="NGO"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DAILY FEEDING CAPACITY</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>500 Meals/Day</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Darpan ID: AP/2018/0192834</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>SHELTERS SUPPORTED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>3 Centers</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Orphanage, Senior Home, Riverbank Camp</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>MEALS DISTRIBUTED THIS WEEK</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>3,140 Portions</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>100% Beneficiary Verification</div>
        </div>
      </div>

      {activeTab === 'incoming' && (
        <div className="eco-card">
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
              AI Matched Surplus Food Awaiting Handover — Sneha Seva Society
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Moghalrajpuram Hub, Vijayawada • Real-time allocation notification
            </p>
          </div>

          <div style={{ border: '2px solid var(--color-primary)', borderRadius: 'var(--radius-md)', padding: '1.25rem', backgroundColor: 'var(--color-cream-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span className="badge badge-saffron" style={{ marginBottom: '0.3rem' }}>
                  Match Score: 94.8% (Proximity 2.8 km)
                </span>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>
                  Annapurna Grand Banquet Surplus (160 Meals)
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  Hot Andhra Meals in Insulated Thermal Box • FSSAI Certified Safe (Score 9.4/10)
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <button
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem' }}
                  onClick={() => alert('Delivery OTP 315792 ready for handover receipt.')}
                >
                  Confirm Receipt & Distribute
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Assigned Volunteer: </span>
                <strong>Suresh Reddy</strong>
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Arrival Status: </span>
                <strong style={{ color: 'var(--color-secondary)' }}>En Route (8 mins away)</strong>
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Target Beneficiary: </span>
                <strong>Balala Sadan Orphanage</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'beneficiaries' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Verified Beneficiary Shelters & Homes</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Connected orphanages, senior shelters, and community soup kitchens.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Add shelter modal opened.')}>
              + Add Partner Shelter
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Balala Sadan Orphanage Home</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Satyanarayanapuram • 120 Children Residents • Meal Need: Dinner 07:30 PM</div>
              </div>
              <span className="badge badge-green">VERIFIED & ACTIVE</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Vrudhula Ashrayam Senior Center</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Bhavanipuram • 85 Senior Citizens • Special Dietary: Low Sodium / Veg</div>
              </div>
              <span className="badge badge-green">VERIFIED & ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Urgent Hunger & Meal Aid Demands</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Broadcast meal deficits to AI matching engine for prioritized surplus routing.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Emergency food requirement broadcasted to local donors.')}>
              + Raise Urgent Demand
            </button>
          </div>

          <div style={{ padding: '1rem', border: '1px solid var(--color-accent)', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Riverbank Relief Camp #3 (Flood Resettlement)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Demand: 200 Meals • Priority: High • ETA Needed: By 08:00 PM</div>
              </div>
              <span className="badge badge-saffron">AI ROUTING ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Digital Proof of Meal Distribution & Signatures
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Auditable geotagged photographs and digital beneficiary receipts.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>DON-AP-2026-881 Handover at Senior Home</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>90 Meals Verified • Recipient: K. Sundaram (Warden) • OTP 621904</div>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: '0.78rem' }} onClick={() => alert('Viewing distribution proof...')}>View Geotag Photo</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
