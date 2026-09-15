import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, UserRole, DEMO_ACCOUNTS } from '../../context/AuthContext.js';
import { useLanguage } from '../../context/LanguageContext.js';
import {
  Leaf,
  LogOut,
  Bell,
  Search,
  Globe,
  ChevronDown,
  User,
  Shield,
  Layers,
  Settings,
  HelpCircle,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  active?: boolean;
}

interface DashboardLayoutProps {
  roleTitle: string;
  roleBadge: string;
  roleId: UserRole;
  sidebarItems: SidebarItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  roleTitle,
  roleBadge,
  roleId,
  sidebarItems,
  activeTab,
  onTabChange,
  children
}) => {
  const { user, logout, loginAsDemo } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSwitchRole, setShowSwitchRole] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSwitchRole(false);
        setShowLangMenu(false);
        setShowNotifications(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const notificationsList = [
    { id: '1', title: 'FSSAI Inspection Approved', time: '10m ago', unread: true },
    { id: '2', title: 'Surplus Batch #DON-904 Dispatched', time: '35m ago', unread: true },
    { id: '3', title: 'Monthly ESG Impact Report Ready', time: '2h ago', unread: false }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-bg-canvas)' }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 45
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          height: '100vh',
          zIndex: 50,
          transition: 'transform 0.3s ease'
        }}
      >
        <div>
          {/* Brand Header */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Leaf size={18} color="#F4A340" />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>
                  Food<span style={{ color: 'var(--color-accent)' }}>Rescue</span>
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--color-secondary)' }}>
                  {t.dashboard.workspaceSuffix}
                </div>
              </div>
            </Link>
          </div>

          {/* Current Role Identity Card */}
          <div
            style={{
              margin: '1rem',
              padding: '0.85rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--color-cream-card)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <Shield size={16} color="var(--color-primary)" />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                {t.roles[roleId as keyof typeof t.roles] || roleBadge}
              </span>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
              {user ? `${user.firstName} ${user.lastName}` : (t.roles[roleId as keyof typeof t.roles] || roleTitle)}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              {user?.city || 'Vijayawada Hub'}
            </div>
          </div>

          {/* Navigation Menu Items */}
          <nav style={{ padding: '0.5rem 1rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-light)', padding: '0.5rem 0.5rem', letterSpacing: '0.05em' }}>
              {t.dashboard.moduleWorkspaces}
            </div>
            {sidebarItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.88rem',
                    marginBottom: '0.25rem',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: isActive ? '#FFFFFF' : 'var(--color-primary)' }}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      style={{
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : 'var(--color-primary-subtle)',
                        color: isActive ? '#FFFFFF' : 'var(--color-primary-dark)'
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Bottom Footer with Fast Role Switcher & Prominent SIGN OUT */}
        <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)' }}>
          {/* Quick Switch Role Drawer */}
          <div style={{ position: 'relative', marginBottom: '0.6rem' }}>
            <button
              type="button"
              onClick={() => setShowSwitchRole(!showSwitchRole)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-cream)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-primary-dark)',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Layers size={14} color="var(--color-accent)" />
                <span>{t.dashboard.switchRoleBtn}</span>
              </div>
              <ChevronDown size={14} />
            </button>

            {showSwitchRole && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '110%',
                  left: 0,
                  width: '240px',
                  maxHeight: '260px',
                  overflowY: 'auto',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 60,
                  padding: '0.4rem'
                }}
              >
                {DEMO_ACCOUNTS.map((acc) => (
                  <div
                    key={acc.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`Switch role to ${acc.name}`}
                    onClick={() => {
                      const p = loginAsDemo(acc);
                      setShowSwitchRole(false);
                      navigate(p);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const p = loginAsDemo(acc);
                        setShowSwitchRole(false);
                        navigate(p);
                      }
                    }}
                    style={{
                      padding: '0.45rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      color: 'var(--color-text-main)',
                      fontWeight: 500,
                      backgroundColor: acc.role === roleId ? 'var(--color-primary-subtle)' : 'transparent'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{acc.name.split(' (')[0]}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{t.roles[acc.role as keyof typeof t.roles] || acc.role.replace(/_/g, ' ')}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Critical SIGN OUT Button */}
          <button
            type="button"
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.65rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#FDF2F2',
              border: '1px solid rgba(194, 65, 59, 0.25)',
              color: 'var(--color-danger)',
              fontWeight: 700,
              fontSize: '0.88rem'
            }}
            title="Invalidate session and sign out"
          >
            <LogOut size={16} />
            <span>{t.dashboard.signOutBtn}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Navigation Bar */}
        <header
          style={{
            height: '64px',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 35
          }}
        >
          {/* Breadcrumbs & Role Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ display: 'none', background: 'none', border: 'none', padding: '0.3rem' }}
              className="mobile-menu-btn"
            >
              <Menu size={20} />
            </button>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                FoodRescue India / {t.roles[roleId as keyof typeof t.roles] || roleTitle} / {activeTab.toUpperCase()}
              </div>
              <h1 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                {t.roles[roleId as keyof typeof t.roles] || roleTitle} {t.dashboard.workspaceSuffix}
              </h1>
            </div>
          </div>

          {/* Header Controls: Search, Language, Notifications, Logout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '220px' }}>
              <Search size={15} color="var(--color-text-muted)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.dashboard.searchPlaceholder}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.6rem 0.45rem 2rem',
                  fontSize: '0.82rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Language Switcher */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                style={{
                  padding: '0.45rem 0.65rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-cream)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <Globe size={14} color="var(--color-primary)" />
                <span>{language.toUpperCase()}</span>
              </button>

              {showLangMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    width: '130px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-md)',
                    zIndex: 50,
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('en');
                      setShowLangMenu(false);
                    }}
                    style={{ width: '100%', padding: '0.5rem', textAlign: 'left', background: 'none', fontSize: '0.8rem' }}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('te');
                      setShowLangMenu(false);
                    }}
                    style={{ width: '100%', padding: '0.5rem', textAlign: 'left', background: 'none', fontSize: '0.8rem' }}
                  >
                    తెలుగు
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('hi');
                      setShowLangMenu(false);
                    }}
                    style={{ width: '100%', padding: '0.5rem', textAlign: 'left', background: 'none', fontSize: '0.8rem' }}
                  >
                    हिन्दी
                  </button>
                </div>
              )}
            </div>

            {/* Notifications Bell */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowNotifications(!showNotifications)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                title="View Notifications"
              >
                <Bell size={17} color="var(--color-text-main)" />
                <span
                  style={{
                    position: 'absolute',
                    top: '6px',
                    right: '6px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-accent)'
                  }}
                />
              </button>

              {showNotifications && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    width: '300px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: '1rem',
                    zIndex: 50
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)' }}>{t.dashboard.notificationsTitle}</span>
                    <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>{t.dashboard.newBadge}</span>
                  </div>
                  {notificationsList.map((n) => (
                    <div
                      key={n.id}
                      style={{
                        padding: '0.5rem 0',
                        borderBottom: '1px solid var(--color-border-subtle)',
                        fontSize: '0.8rem'
                      }}
                    >
                      <div style={{ fontWeight: n.unread ? 700 : 500, color: 'var(--color-text-main)' }}>{n.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-text-light)' }}>{n.time}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prominent Header SIGN OUT */}
            <button
              type="button"
              onClick={handleLogout}
              className="btn"
              style={{
                backgroundColor: '#FDF2F2',
                color: 'var(--color-danger)',
                border: '1px solid rgba(194, 65, 59, 0.3)',
                padding: '0.4rem 0.85rem',
                fontSize: '0.82rem',
                fontWeight: 700
              }}
              title="Sign Out of session"
            >
              <LogOut size={14} />
              <span>{t.dashboard.signOutBtn}</span>
            </button>
          </div>
        </header>

        {/* Dashboard Main Viewport */}
        <main style={{ padding: '1.75rem', flex: 1, maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
};
