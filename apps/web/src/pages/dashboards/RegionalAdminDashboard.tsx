import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { MapPin, Users, Truck, AlertCircle, FileCheck, CheckCircle, ArrowUpRight } from 'lucide-react';

export const RegionalAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('districts');

  const sidebarItems = [
    { id: 'districts', label: 'District Operations', icon: <MapPin size={18} /> },
    { id: 'volunteers', label: 'Field Volunteers', icon: <Users size={18} /> },
    { id: 'logistics', label: 'Regional Fleet', icon: <Truck size={18} /> },
    { id: 'disputes', label: 'Disputes & Exceptions', icon: <AlertCircle size={18} /> }
  ];

  const districts = [
    { name: 'NTR District (Vijayawada Hub)', rescuesToday: 14, meals: 3420, activeVolunteers: 48, status: 'HIGH_VOLUME' },
    { name: 'Krishna District (Machilipatnam)', rescuesToday: 6, meals: 1250, activeVolunteers: 22, status: 'STABLE' },
    { name: 'Guntur District (Guntur Metro)', rescuesToday: 11, meals: 2680, activeVolunteers: 36, status: 'HIGH_VOLUME' },
    { name: 'Visakhapatnam (Port Zone)', rescuesToday: 18, meals: 4200, activeVolunteers: 64, status: 'HIGH_VOLUME' },
    { name: 'Tirupati (Temple Pilgrim Sector)', rescuesToday: 24, meals: 5900, activeVolunteers: 72, status: 'PEAK_SURPLUS' }
  ];

  return (
    <DashboardLayout
      roleTitle="Regional Administrator"
      roleBadge="STATE LEVEL — ANDHRA PRADESH"
      roleId="REGIONAL_ADMIN"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>ACTIVE DISTRICT HUBS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>6 Districts</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>100% operational status</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>TODAY'S RESCUED MEALS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>17,450</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>From 73 banquet & kitchen donations</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>ON-FIELD VOLUNTEERS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>242 Active</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Avg response time 18 mins</div>
        </div>
      </div>

      {activeTab === 'districts' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
            District-Level Hunger & Surplus Allocation Heatmap
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {districts.map((d) => (
              <div
                key={d.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-cream-card)'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-primary-dark)' }}>{d.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    {d.rescuesToday} Surplus Rescues Today • {d.meals.toLocaleString()} Portions Handed Over
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="badge badge-green">{d.status}</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    {d.activeVolunteers} Volunteers Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'volunteers' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Field Volunteers Deployment (Andhra Pradesh)</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>242 active volunteers on field standby.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Broadcasting regional volunteer mobilization alert...')}>
              Broadcast Mobilization
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Suresh Reddy (Seva Warrior #12)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Vijayawada Central • Currently on active trip (TRIP-904)</div>
              </div>
              <span className="badge badge-green">ON MISSION</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>P. Anitha Devi (Seva Volunteer #44)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Guntur Hub • Available within 15 min radius</div>
              </div>
              <span className="badge badge-green">STANDBY READY</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'logistics' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Statewide Electric Van & Fleet Readiness
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Live status of insulated and refrigerated transport vehicles.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>ACTIVE ELECTRIC VANS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>18 Vans</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Avg Charge: 82%</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>COLD CHAIN VANS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.2rem' }}>6 Vans</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Active in Coastal Corridor</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'disputes' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Disputes, Exceptions & Delayed Handover Resolution
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Escalation management for pickup delays or food temperature exceptions.
          </p>

          <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-cream-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Zero Open Escalations</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  All 73 donations today were picked up and handed over within safe FSSAI time windows.
                </div>
              </div>
              <span className="badge badge-green">100% RESOLVED</span>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
