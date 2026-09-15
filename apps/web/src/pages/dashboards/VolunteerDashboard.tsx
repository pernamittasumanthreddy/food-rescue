import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { MapPin, CheckSquare, Award, Clock, Navigation, CheckCircle } from 'lucide-react';

export const VolunteerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('missions');
  const [otpInput, setOtpInput] = useState('');
  const [pickupConfirmed, setPickupConfirmed] = useState(false);

  const sidebarItems = [
    { id: 'missions', label: 'Active Missions', icon: <Navigation size={18} />, badge: '1 Active' },
    { id: 'history', label: 'Completed Rescues', icon: <CheckSquare size={18} /> },
    { id: 'rewards', label: 'Seva Badges & Hours', icon: <Award size={18} /> }
  ];

  const handleVerifyPickup = () => {
    if (otpInput.trim() === '849201') {
      setPickupConfirmed(true);
    } else {
      alert('Enter demo OTP: 849201 to verify pickup.');
    }
  };

  return (
    <DashboardLayout
      roleTitle="Food Rescue Volunteer Hero"
      roleBadge="SEVA WARRIOR #12"
      roleId="VOLUNTEER"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>TOTAL RESCUE MISSIONS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>48 Completed</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>NTR District Top Contributor</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>SEVA HOURS LOGGED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>84.5 Hours</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Level 3 Seva Warrior Badge</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>PORTIONS DELIVERED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>3,890 Meals</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>100% On-Time Record</div>
        </div>
      </div>

      {activeTab === 'missions' && (
        <div className="eco-card eco-card-cream" style={{ border: '2px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="badge badge-green" style={{ marginBottom: '0.3rem' }}>
                Current Active Mission: TRIP-904
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>
                Pickup from Annapurna Grand → Drop at Balala Sadan
              </h3>
            </div>
            <span className="badge badge-saffron" style={{ fontSize: '0.8rem' }}>
              {pickupConfirmed ? 'EN ROUTE TO ORPHANAGE' : 'PROCEED TO HOTEL KITCHEN'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>PICKUP POINT</div>
              <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>
                Annapurna Grand, MG Road, Labbipet
              </div>
            </div>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>DROP DESTINATION</div>
              <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>
                Balala Sadan Orphanage, Satyanarayanapuram
              </div>
            </div>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>SURPLUS LOAD</div>
              <div style={{ fontWeight: 700, color: 'var(--color-accent)', marginTop: '0.2rem' }}>
                160 Meals (Insulated Thermal Boxes)
              </div>
            </div>
          </div>

          {/* OTP Handshake Section */}
          <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
              Step 1: Verify Pickup with Donor Manager
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem' }}>
              Ask donor manager for their 6-digit pickup verification code (Demo Code: <strong>849201</strong>)
            </div>

            {pickupConfirmed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>
                <CheckCircle size={20} />
                <span>Pickup verified! Proceed to drop location. Destination OTP: 315792</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleVerifyPickup();
                }}
                style={{ display: 'flex', gap: '0.5rem', maxWidth: '360px' }}
              >
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  className="form-input"
                  maxLength={6}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Verify & Start Trip
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Completed Seva Rescues (Log)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Verifiable record of completed surplus deliveries across NTR & Krishna districts.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>TRIP-892 • Bawarchi Kitchen to Old Age Home</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>45 kg Biryani & Curry • Handover OTP Verified • Completed in 28 mins</div>
              </div>
              <span className="badge badge-green">DELIVERED & SIGNED</span>
            </div>

            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>TRIP-880 • Sweet Magic Bakers to Night Shelter</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>80 Fresh Snack Boxes • Completed in 19 mins</div>
              </div>
              <span className="badge badge-green">DELIVERED & SIGNED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'rewards' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Seva Hero Recognition & Badges
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Your selfless contribution to hunger relief in Andhra Pradesh.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1.5px solid var(--color-primary)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏅</div>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)' }}>Golden Seva Warrior</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Awarded for completing 40+ on-time rescues</div>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1.5px solid var(--color-accent)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)' }}>Rapid Responder</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Average arrival time under 20 minutes</div>
            </div>

            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1.5px solid var(--color-secondary)', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌟</div>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)' }}>100% Food Safety Certified</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>FSSAI Volunteer Hygiene Protocol trained</div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
