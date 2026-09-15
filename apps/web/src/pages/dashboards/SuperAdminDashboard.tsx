import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout.js';
import {
  Users,
  ShieldCheck,
  Building,
  Activity,
  FileText,
  Sliders,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  Filter,
  Search
} from 'lucide-react';

export const SuperAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [filterState, setFilterState] = useState('ALL');

  const sidebarItems = [
    { id: 'overview', label: 'Platform Overview', icon: <Activity size={18} /> },
    { id: 'ngos', label: 'NGO Verification', icon: <Building size={18} />, badge: '3 Pending' },
    { id: 'users', label: 'User & RBAC Control', icon: <Users size={18} /> },
    { id: 'audit', label: 'Immutable Audit Logs', icon: <FileText size={18} /> },
    { id: 'system', label: 'System Health & Engine', icon: <Sliders size={18} /> }
  ];

  const pendingNgos = [
    {
      id: 'ngo-p1',
      name: 'Chaitanya Mahila Mandali Food Bank',
      city: 'Guntur, Andhra Pradesh',
      darpanId: 'AP/2021/0291823',
      fssaiReg: '20121006000412',
      dailyCapacity: '350 Meals',
      dateApplied: '14 Sep 2026'
    },
    {
      id: 'ngo-p2',
      name: 'Deccan Hunger Relief Mission',
      city: 'Warangal, Telangana',
      darpanId: 'TS/2022/0319201',
      fssaiReg: '20222007000819',
      dailyCapacity: '500 Meals',
      dateApplied: '15 Sep 2026'
    },
    {
      id: 'ngo-p3',
      name: 'Kavery Seva Trust',
      city: 'Mysuru, Karnataka',
      darpanId: 'KA/2020/0182741',
      fssaiReg: '20320004000192',
      dailyCapacity: '250 Meals',
      dateApplied: '15 Sep 2026'
    }
  ];

  const auditRecords = [
    {
      id: 'AUD-8912',
      timestamp: '15 Sep 11:42 AM',
      actor: 'Dr. Anand Kumar (FSSAI Officer)',
      action: 'FOOD_SAFETY_CERTIFIED',
      resource: 'DON-AP-2026-001 (Annapurna Grand)',
      status: 'SUCCESS'
    },
    {
      id: 'AUD-8911',
      timestamp: '15 Sep 11:35 AM',
      actor: 'FoodRescue AI Engine v2.4',
      action: 'NGO_MATCH_OPTIMIZED',
      resource: 'Sneha Seva Society (94.8% match)',
      status: 'SUCCESS'
    },
    {
      id: 'AUD-8910',
      timestamp: '15 Sep 11:15 AM',
      actor: 'Ramesh Chowdary (Hotel Manager)',
      action: 'DONATION_BATCH_POSTED',
      resource: '160 Portions Hot Bhojanam',
      status: 'SUCCESS'
    },
    {
      id: 'AUD-8909',
      timestamp: '15 Sep 10:48 AM',
      actor: 'S. Chandrasekhar IAS',
      action: 'DISTRICT_HUNGER_INDEX_EXPORT',
      resource: 'NTR District Report (PDF)',
      status: 'SUCCESS'
    }
  ];

  return (
    <DashboardLayout
      roleTitle="Super Administrator"
      roleBadge="APEX GOVERNANCE"
      roleId="SUPER_ADMIN"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* 4 Summary Stat Widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>TOTAL FOOD RESCUED (INDIA)</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>
            1,84,565 kg
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>
            ↑ 18.4% this month across 6 states
          </div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>MEALS NOURISHED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>
            4,61,410
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
            Serving 148 verified shelter homes
          </div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-terracotta)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>CO₂ EMISSIONS AVOIDED</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-terracotta)', marginTop: '0.25rem' }}>
            4,61,412 kg
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
            Diverted from municipal landfills
          </div>
        </div>

        <div className="eco-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>NETWORK ENTITIES</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginTop: '0.25rem' }}>
            1,482
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>
            426 Donors • 90 NGOs • 966 Volunteers
          </div>
        </div>
      </div>

      {/* Main Workspace Panels */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          {/* Active Missions Table */}
          <div className="eco-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)' }}>Live National Rescue Operations</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Real-time surplus dispatch & custody transfers</p>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Donation ID</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Donor Org</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Region</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Portions</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>DON-AP-2026-001</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>Annapurna Grand (MG Road)</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>Vijayawada, AP</td>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>160 Meals (65 kg)</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">IN TRANSIT</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>DON-TS-2026-088</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>Bawarchi Spice Kitchen</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>Hyderabad, TS</td>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>120 Meals (48 kg)</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-saffron">AI MATCHED</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>DON-KA-2026-112</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>ITC Gardenia Banquet</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>Bengaluru, KA</td>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>310 Meals (120 kg)</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">DISTRIBUTED</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* System & AI Engine Telemetry */}
          <div className="eco-card eco-card-cream">
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}>
              System Health & AI Engine
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Core Monolith API</span>
                <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>ONLINE (99.98%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>PostgreSQL Database</span>
                <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>CONNECTED (8 Pools)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>AI Proximity Matcher</span>
                <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>Active (Avg 120ms)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>FSSAI Strict Mode</span>
                <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>ENFORCED</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Redis Caching Layer</span>
                <span style={{ fontWeight: 700, color: 'var(--color-secondary)' }}>98.4% Hit Rate</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NGO Verification Tab */}
      {activeTab === 'ngos' && (
        <div className="eco-card">
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>NGO Compliance & Darpan Verification</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Validate Darpan registrations, FSSAI compliance, and operational feeding capacity before authorizing food allocations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pendingNgos.map((ngo) => (
              <div
                key={ngo.id}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-primary-dark)' }}>
                    {ngo.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    📍 {ngo.city} • Darpan ID: <strong>{ngo.darpanId}</strong> • FSSAI: <strong>{ngo.fssaiReg}</strong>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-secondary)', fontWeight: 600, marginTop: '0.2rem' }}>
                    Declared Daily Feeding Capacity: {ngo.dailyCapacity} • Applied: {ngo.dateApplied}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-primary"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                    onClick={() => alert(`NGO ${ngo.name} verified and approved for state allocations.`)}
                  >
                    <CheckCircle2 size={14} /> Approve NGO
                  </button>
                  <button
                    className="btn"
                    style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem', background: '#FDF2F2', color: 'var(--color-danger)' }}
                    onClick={() => alert(`Request additional compliance documentation for ${ngo.name}.`)}
                  >
                    <XCircle size={14} /> Request Docs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Immutable Audit Logs Tab */}
      {activeTab === 'audit' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>National Immutable Audit Trail</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Cryptographically timestamped compliance records</p>
            </div>
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }} onClick={() => alert('Exporting national audit logs (CSV)...')}>
              <Download size={14} /> Export Audit Log
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '0.6rem 0.5rem' }}>Log ID</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Timestamp</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Actor</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Action</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Resource</th>
                <th style={{ padding: '0.6rem 0.5rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {auditRecords.map((rec) => (
                <tr key={rec.id} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>{rec.id}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>{rec.timestamp}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 600 }}>{rec.actor}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">{rec.action}</span></td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>{rec.resource}</td>
                  <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{rec.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="eco-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>User Directory & RBAC Permissions</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Manage platform roles, access levels, and active enterprise entities across India.</p>
            </div>
            <button className="btn btn-primary" style={{ fontSize: '0.82rem' }} onClick={() => alert('New user registration invitation wizard opened.')}>
              + Invite Administrator
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1.5px solid var(--color-border)', textAlign: 'left', color: 'var(--color-text-muted)' }}>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Name & Email</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Assigned Role</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Jurisdiction</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Status</th>
                  <th style={{ padding: '0.6rem 0.5rem' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Kalyan Varma</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>superadmin@foodrescue.org.in</div>
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">SUPER ADMIN</span></td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>National (All India)</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>ACTIVE</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }} onClick={() => alert('Configuring Kalyan Varma permissions')}>Edit</button></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Lakshmi Prasanna</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>regional.ap@foodrescue.org.in</div>
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-saffron">REGIONAL ADMIN</span></td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Andhra Pradesh Zone</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>ACTIVE</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }} onClick={() => alert('Configuring Lakshmi Prasanna permissions')}>Edit</button></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <td style={{ padding: '0.75rem 0.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>Dr. Anand Kumar</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>fssai.officer@apgov.in</div>
                  </td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><span className="badge badge-green">FOOD SAFETY OFFICER</span></td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>NTR & Krishna Districts</td>
                  <td style={{ padding: '0.75rem 0.5rem', color: 'var(--color-secondary)', fontWeight: 700 }}>VERIFIED</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }} onClick={() => alert('Configuring Dr. Anand Kumar permissions')}>Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'system' && (
        <div className="eco-card">
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)' }}>System Infrastructure & AI Matching Engine Telemetry</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Real-time health monitoring, database latency, and geo-spatial cluster performance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>API RESPONSE LATENCY</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)', marginTop: '0.25rem' }}>42 ms</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>P99: 88ms • All nodes healthy</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>AI MATCHING SPEED</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.25rem' }}>114 ms</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Geo-proximity Haversine matrix</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-cream-card)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>DATABASE STORAGE</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.25rem' }}>14.8 GB / 100 GB</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>PostgreSQL 16 High Availability</div>
            </div>
          </div>

          <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>FSSAI Strict Compliance Protocol Engine</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Automatically blocks any surplus listing without mandatory sensory or thermal check declarations.</div>
            </div>
            <span className="badge badge-green">ENFORCED (STRICT)</span>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};
