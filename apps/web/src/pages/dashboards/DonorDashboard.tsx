import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { PlusCircle, Clock, CheckCircle2, Award, FileText, Utensils, MapPin } from 'lucide-react';

export const DonorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');
  const [foodTitle, setFoodTitle] = useState('');
  const [meals, setMeals] = useState('');
  const [dietary, setDietary] = useState('VEG');
  const [pickupTime, setPickupTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sidebarItems = [
    { id: 'create', label: 'Post Surplus Food', icon: <PlusCircle size={18} /> },
    { id: 'history', label: 'Donation History', icon: <Clock size={18} /> },
    { id: 'certificates', label: '80G Tax Certificates', icon: <Award size={18} /> },
    { id: 'impact', label: 'My Impact Stats', icon: <FileText size={18} /> }
  ];

  const handleCreateDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <DashboardLayout
      roleTitle="Community Food Donor"
      roleBadge="VERIFIED FOOD DONOR"
      roleId="DONOR"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'create' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="eco-card eco-card-cream" style={{ border: '2px solid var(--color-primary)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="badge badge-green" style={{ marginBottom: '0.4rem' }}>
                FSSAI Compliant Donation Wizard
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
                Donate Fresh Surplus Food
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Your surplus will be inspected, matched with nearby verified orphanages/shelters, and picked up within 45 minutes.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle2 size={36} color="var(--color-primary)" />
                </div>
                <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                  Surplus Donation Successfully Listed!
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                  Donation <strong>DON-AP-2026-905</strong> has been sent to FSSAI verification and matched with nearby NGOs.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Post Another Surplus Batch
                </button>
              </div>
            ) : (
              <form onSubmit={handleCreateDonation} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                    Food Description / Menu Items *
                  </label>
                  <input
                    type="text"
                    required
                    value={foodTitle}
                    onChange={(e) => setFoodTitle(e.target.value)}
                    placeholder="e.g. Wedding Caterer Sambar Rice, Veg Biryani, Chutney & Sweets"
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                      Estimated Portions (Meals) *
                    </label>
                    <input
                      type="number"
                      required
                      min="5"
                      value={meals}
                      onChange={(e) => setMeals(e.target.value)}
                      placeholder="e.g. 75"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                      Dietary Type *
                    </label>
                    <select
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      className="form-select"
                    >
                      <option value="VEG">Pure Vegetarian (శ్రీ వైష్ణవ / శాకాహారం)</option>
                      <option value="NON_VEG">Non-Vegetarian (మాంసాహారం)</option>
                      <option value="JAIN">Jain Compliant (నో ఆనియన్ / గార్లిక్)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                      Latest Safe Pickup Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
                      Packaging Type
                    </label>
                    <select className="form-select">
                      <option>Stainless Steel Thermal Carriers</option>
                      <option>Sealed Food Grade Boxes</option>
                      <option>Catering Aluminum Trays</option>
                    </select>
                  </div>
                </div>

                <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  ✓ Under the <strong>Indian Food Safety & Standards (FSSAI) Surplus Food Regulations</strong>, donors donating good-faith edible surplus are safeguarded from civil liability.
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem', fontSize: '1rem' }}>
                  Submit Surplus for Fast Pickup
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
            Your Donation History & Impact Badges
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>DON-AP-2026-881 • Guntur Family Gathering Surplus</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>90 Meals • Distributed at Vrudhula Ashrayam Senior Home</div>
              </div>
              <span className="badge badge-green">COMPLETED & VERIFIED</span>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>DON-AP-2026-812 • Birthday Celebration Sweets & Meals</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>60 Meals • Distributed at Balala Sadan Orphanage</div>
              </div>
              <span className="badge badge-green">COMPLETED & VERIFIED</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>
                Section 80G Tax Exemption Certificates
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                Government approved tax deduction receipts generated in partnership with verified NGOs.
              </p>
            </div>
            <button className="btn btn-secondary" onClick={() => alert('Downloading consolidated 80G tax certificate zip...')}>
              Download All (FY 2026-27)
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1.2rem', border: '1.5px solid var(--color-primary)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-cream-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-primary-dark)' }}>
                  Certificate #80G-AP-2026-00412
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Donation Value: <strong>₹9,450</strong> • In-Kind Food Aid to Sneha Seva Society (Darpan AP/2018/0192834)
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>
                  Valid for 50% deduction under Section 80G of Indian IT Act
                </div>
              </div>
              <button className="btn btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => alert('Certificate #80G-AP-2026-00412 downloaded.')}>
                Download PDF
              </button>
            </div>

            <div style={{ padding: '1.2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-primary-dark)' }}>
                  Certificate #80G-AP-2026-00388
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Donation Value: <strong>₹6,300</strong> • Balala Sadan Child Shelter Support
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                  Issued on 28 Aug 2026
                </div>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: '0.82rem' }} onClick={() => alert('Certificate #80G-AP-2026-00388 downloaded.')}>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'impact' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            My Personal Sustainability Footprint
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Real-time tracking of food saved from landfills, CO₂ prevented, and individuals nourished.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>TOTAL MEALS DONATED</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>150 Meals</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Zero Waste Advocate Level 2</div>
            </div>
            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CO₂ EMISSIONS AVERTED</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-terracotta)', marginTop: '0.25rem' }}>187.5 kg</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Equivalent to 8 planted trees</div>
            </div>
            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>WATER CONSERVED</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>32,500 L</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>Agricultural water footprint saved</div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
