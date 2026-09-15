import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { Heart, Users, Utensils, Star, MessageSquare } from 'lucide-react';

export const BeneficiaryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('demand');

  const sidebarItems = [
    { id: 'demand', label: 'Meal Demand Registry', icon: <Utensils size={18} /> },
    { id: 'feedback', label: 'Dignity Feedback & Ratings', icon: <Star size={18} /> },
    { id: 'community', label: 'Resident Head Count', icon: <Users size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="Community Shelter Manager"
      roleBadge="BALALA SADAN ORPHANAGE"
      roleId="BENEFICIARY"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>VERIFIED RESIDENTS</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>120 Children</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Satyanarayanapuram, Vijayawada</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DINNER MEALS ARRIVING</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>160 Portions</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>From Annapurna Grand Banquet</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>SATISFACTION RATING</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>4.95 / 5.0</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>100% Hygienic Fresh Food</div>
        </div>
      </div>

      {activeTab === 'demand' && (
        <div className="eco-card eco-card-cream">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Tonight's Warm Community Dinner Delivery
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Sneha Seva Society Food Bank confirmed delivery arriving via volunteer Suresh Reddy.
          </p>

          <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-primary)' }}>
            <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>
              Royal Andhra Wedding Bhojanam (Hot Meals)
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
              Menu: Ghee Sambar Rice, Veg Dum Biryani, Pappu, Tomato Chutney & Gulab Jamun
            </div>
            <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-green">TEMPERATURE MONITORED: 68°C</span>
              <button
                className="btn btn-primary"
                style={{ fontSize: '0.82rem' }}
                onClick={() => alert('Meal satisfaction feedback recorded: 5 Stars! Thank you.')}
              >
                Submit Meal Rating ★★★★★
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            Dignity Feedback, Nutrition & Taste Ratings
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Empowering community beneficiaries to score meal freshness, warmth, and dignity of delivery.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Yesterday Lunch • Sambar Rice & Potato Poriyal</div>
                <span className="badge badge-green">★★★★★ 5.0 Rating</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
                "Food was delivered steaming hot in insulated containers. The children loved the taste and fresh sweets!"
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'community' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Resident Census & Dietary Profile</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Registered head count at Balala Sadan Orphanage Home.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.8rem' }} onClick={() => alert('Updating head count...')}>
              Update Head Count
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>PRIMARY RESIDENTS</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>120 Children</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Ages 4 - 17 years</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>DIETARY REQUIREMENTS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>Pure Veg</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>High protein lentil & green leaf focus</div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
