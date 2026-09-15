import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { Truck, MapPin, CheckCircle, Navigation, BatteryCharging, Shield } from 'lucide-react';

export const DeliveryPartnerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fleet');

  const sidebarItems = [
    { id: 'fleet', label: 'Vehicle Telemetry', icon: <Truck size={18} /> },
    { id: 'trips', label: 'Commercial Trips', icon: <Navigation size={18} /> },
    { id: 'coldchain', label: 'Cold-Chain Logs', icon: <BatteryCharging size={18} /> },
    { id: 'docs', label: 'Permits & Fitness', icon: <Shield size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Logistics Fleet Driver"
      roleBadge="ELECTRIC FLEET LOGISTICS"
      roleId="DELIVERY_PARTNER"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>ASSIGNED VEHICLE</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>AP 16 TZ 8421</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Insulated Electric Van (500 kg Cap)</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>BATTERY & RANGE</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>84% • 140 km</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Bhavanipuram Fast Depot Charged</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CARGO HOLD TEMP</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>68.2°C</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Hot-Hold Food Safe Compliant</div>
        </div>
      </div>

      {activeTab === 'fleet' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Real-Time Electric Van Navigation & Route Optimization
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            AI logistics engine dynamically routes through Vijayawada inner ring road to avoid MG Road bottleneck.
          </p>

          <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-cream-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="badge badge-green">TRIP IN PROGRESS</span>
                <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', marginTop: '0.4rem', fontSize: '1.05rem' }}>
                  MG Road Labbipet → Satyanarayanapuram Orphanage
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  Remaining Distance: 2.1 km • ETA: 8 minutes • Cargo: 160 Portions
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => alert('Delivery confirmation sent to Sneha Seva Food Bank.')}
              >
                Mark Arrived & Handover
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'trips' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Today's Commercial Bulk Trips
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Heavy-duty insulated van deliveries across Vijayawada & Guntur corridor.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>TRIP-VAN-104 • Annapurna Grand to Balala Sadan</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>160 Meals • 65 kg • In Progress (ETA 8m)</div>
              </div>
              <span className="badge badge-green">ON ROUTE</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>TRIP-VAN-103 • Sweet Magic Bakery to Senior Home</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>40 kg • Completed at 02:45 PM</div>
              </div>
              <span className="badge badge-green">DELIVERED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'coldchain' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            On-Board Cargo Cold-Chain & Heat Retention Telemetry
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            IoT thermal sensor stream connected to AP Transport & FSSAI dashboard.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>HOLD COMPARTMENT A (HOT)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>68.2°C</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Active Heat Retention OK</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>HOLD COMPARTMENT B (COLD)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>3.6°C</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Chiller Unit Operational</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'docs' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Vehicle Permits, Commercial Fitness & Green EV Certs
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            All commercial documents valid under AP Motor Vehicles Department & FSSAI.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>FSSAI Food Transport Vehicle Permit</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Permit #FSSAI-VEH-AP-9901 • Valid through Dec 2027</div>
              </div>
              <span className="badge badge-green">VALID</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Commercial EV Fitness Certificate</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>RTO Vijayawada • AP 16 TZ 8421 • Zero Emission Certified</div>
              </div>
              <span className="badge badge-green">VALID</span>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
