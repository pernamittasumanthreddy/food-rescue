import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import { ShieldCheck, Thermometer, CheckCircle2, XCircle, AlertTriangle, FileText } from 'lucide-react';

export const FoodSafetyDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inspections');
  const [inspectionCertified, setInspectionCertified] = useState(false);

  const sidebarItems = [
    { id: 'inspections', label: 'Safety Inspections', icon: <ShieldCheck size={18} />, badge: '1 Awaiting' },
    { id: 'temperature', label: 'Thermal Probe Logs', icon: <Thermometer size={18} /> },
    { id: 'standards', label: 'FSSAI Protocols', icon: <FileText size={18} /> }
  ];

  return (
    <DashboardLayout
      roleTitle="FSSAI Food Safety Inspector"
      roleBadge="FOOD SAFETY & STANDARDS AUTHORITY"
      roleId="FOOD_SAFETY_OFFICER"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>BATCHES INSPECTED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>1,842</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>NTR District Directorate</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>SAFETY CERTIFICATION RATE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>98.4%</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Strict FSSAI hygiene standard</div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>AVERAGE HYGIENE SCORE</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>9.4 / 10</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>All commercial hot-holds checked</div>
        </div>
      </div>

      {activeTab === 'inspections' && (
        <div className="eco-card eco-card-cream" style={{ border: '2px solid var(--color-primary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="badge badge-saffron" style={{ marginBottom: '0.3rem' }}>
                Pending Safety Inspection
              </span>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>
                Donation Batch DON-AP-2026-001 • Annapurna Grand Hotel
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                160 Meals • Cooked Rice, Pappu, Sambar & Biryani • MG Road, Vijayawada
              </p>
            </div>
            <span className="badge badge-green">
              {inspectionCertified ? 'CERTIFIED FOR CONSUMPTION' : 'INSPECTION REQUIRED'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>THERMAL SENSOR READING</div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-secondary)', marginTop: '0.2rem' }}>
                67.5°C (Safe Hot-Hold &gt; 65°C)
              </div>
            </div>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>ORGANOLEPTIC SENSORY TEST</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>
                Passed (Aroma & Texture Normal)
              </div>
            </div>
            <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>CONTAINER PACKAGING</div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                Sealed Insulated Food Warmers
              </div>
            </div>
          </div>

          {inspectionCertified ? (
            <div style={{ padding: '1rem', background: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
              ✓ Batch certified safe under FSSAI Regulations 2026. Forwarded to AI Matching Engine.
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setInspectionCertified(true)}
              >
                <CheckCircle2 size={16} /> Certify Safe & Approve for Matching
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: '#FDF2F2', color: 'var(--color-danger)', border: '1px solid var(--color-danger)' }}
                onClick={() => alert('Batch rejected for human consumption.')}
              >
                <XCircle size={16} /> Reject Batch (Safety Violation)
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'temperature' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>Live Thermal Probe Telemetry Logs</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Continuous Bluetooth sensor monitoring across refrigerated & insulated transport holds.</p>
            </div>
            <button className="btn btn-secondary" onClick={() => alert('Exporting thermal audit logs (CSV)...')}>
              Export Temperature Log
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Probe Device</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Carrier / Vehicle</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Food Batch</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Recorded Temp</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Threshold Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>PROBE-AP-01</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Electric Van AP 16 TZ 8421</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>DON-AP-2026-001 (Annapurna)</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>68.2°C</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">SAFE HOT-HOLD</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>PROBE-AP-04</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Cold Van AP 16 TY 2291</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>DON-AP-2026-004 (Dairy Sweets)</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>3.8°C</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">CHILLED SAFE (&lt;4°C)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'standards' && (
        <div className="eco-card">
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            FSSAI Food Safety Protocols & Guidelines (2026)
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Official regulatory standards governing surplus food recovery, donation, and redistribution in India.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1rem' }}>1. Hot-Holding Temperature Limits</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                Cooked food intended for warm consumption must be maintained strictly at or above <strong>65°C</strong> from donor premises to distribution point.
              </div>
            </div>

            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1rem' }}>2. Two-Hour Transit Rule</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                Perishable hot surplus must be delivered to beneficiary shelters within <strong>120 minutes</strong> of pickup to preserve safety and organoleptic quality.
              </div>
            </div>

            <div style={{ padding: '1.2rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1rem' }}>3. Good Samaritan Legal Shield</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                Section 42 of FSSAI Food Recovery Regulations protects registered food donors and volunteers acting in good faith from legal liability.
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
