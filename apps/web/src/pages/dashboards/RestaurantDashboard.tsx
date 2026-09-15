import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { UtensilsCrossed, Clock, Flame, ShieldAlert, BarChart2, Plus } from 'lucide-react';

export const RestaurantDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('surplus');

  const sidebarItems = [
    { id: 'surplus', label: 'Surplus Management', icon: <UtensilsCrossed size={18} /> },
    { id: 'schedule', label: 'Auto-Schedule Pickups', icon: <Clock size={18} /> },
    { id: 'safety', label: 'FSSAI Temperature Logs', icon: <Flame size={18} /> },
    { id: 'waste', label: 'Waste Reduction ROI', icon: <BarChart2 size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Restaurant Surplus Manager"
      roleBadge="COMMERCIAL KITCHEN"
      roleId="RESTAURANT"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DAILY KITCHEN SURPLUS DIVERTED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>84 kg / Day</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Zero food discarded to bins</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>RESCUED MEALS THIS MONTH</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>2,140</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Avg pickup turnaround: 22 mins</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>FSSAI HYGIENE RATING</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>9.8 / 10</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>Golden Clean Kitchen Certified</div>
        </div>
      </div>

      {activeTab === 'surplus' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>
                Active Commercial Surplus Batches — Bawarchi Kitchen
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                RTC X Roads, Hyderabad • Automated daily pickup at 11:30 PM
              </p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }} onClick={() => alert('New restaurant surplus batch form opened.')}>
              <Plus size={15} /> Post Additional Surplus
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-cream-card)' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  Fresh Dum Rice & Vegetable Salan (40 kg)
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  Temp: 68°C • Sealed Thermal Carriers • Matched with Hyderabad Robin Rescue
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="badge badge-green">PICKUP ASSIGNED (14m ETA)</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
                  Volunteer: Venkat Rao
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Auto-Scheduled Kitchen Surplus Pickups</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Recurring nightly pickup timetable linked to closing shifts.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => alert('Editing kitchen pickup schedule')}>
              Modify Schedule
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Nightly Dinner Shift (Daily)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Scheduled Time: 11:30 PM • Estimated Volume: 35-50 kg</div>
              </div>
              <span className="badge badge-green">ACTIVE RECURRING</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Afternoon Lunch Shift (Friday - Sunday)</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Scheduled Time: 04:00 PM • Estimated Volume: 20-30 kg</div>
              </div>
              <span className="badge badge-green">ACTIVE RECURRING</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'safety' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            FSSAI Commercial Kitchen Temperature Logs
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Mandatory digital probe logs recorded prior to handover under Food Safety Regulations.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '0.5rem' }}>Time</th>
                <th style={{ padding: '0.5rem' }}>Item</th>
                <th style={{ padding: '0.5rem' }}>Probe Temp</th>
                <th style={{ padding: '0.5rem' }}>Hygiene Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '0.65rem 0.5rem' }}>Today 11:15 PM</td>
                <td style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Dum Biryani & Gravy</td>
                <td style={{ padding: '0.65rem 0.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>68.4°C</td>
                <td style={{ padding: '0.65rem 0.5rem' }}><span className="badge badge-green">COMPLIANT</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <td style={{ padding: '0.65rem 0.5rem' }}>Yesterday 11:20 PM</td>
                <td style={{ padding: '0.65rem 0.5rem', fontWeight: 600 }}>Dal Tadka & Rice</td>
                <td style={{ padding: '0.65rem 0.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>66.8°C</td>
                <td style={{ padding: '0.65rem 0.5rem' }}><span className="badge badge-green">COMPLIANT</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'waste' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Kitchen Waste Reduction & Financial ROI
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Financial value recovered through 80G tax exemptions and reduced municipal disposal levies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>ESTIMATED FOOD INGREDIENTS SAVED</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>₹1,48,200</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>This Quarter</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>MUNICIPAL DISPOSAL SAVINGS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.2rem' }}>₹18,500</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Zero commercial dumping penalties</div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
