import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.js';
import { useAuth, DEMO_ACCOUNTS, getRoleDashboardPath } from '../../context/AuthContext.js';
import {
  Globe,
  Leaf,
  Users,
  LogOut,
  ChevronDown,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { user, isAuthenticated, logout, loginAsDemo } = useAuth();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowDemoModal(false);
        setShowLangMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectDemo = (account: (typeof DEMO_ACCOUNTS)[0]) => {
    const targetPath = loginAsDemo(account);
    setShowDemoModal(false);
    navigate(targetPath);
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: '0 2px 8px rgba(18, 107, 79, 0.06)'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 10px rgba(18, 107, 79, 0.3)'
              }}
            >
              <Leaf size={22} color="#F4A340" />
            </div>
            <div>
              <div
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--color-primary-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                {t.brandName.includes(' ') ? t.brandName : <>Food<span style={{ color: 'var(--color-accent)' }}>Rescue</span></>}
              </div>
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  letterSpacing: '0.02em'
                }}
              >
                {t.tagline.split(' • ')[0]} • {t.tagline.split(' • ')[1]}
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.92rem',
              fontWeight: 600
            }}
            className="desktop-nav"
          >
            <Link to="/" style={{ color: 'var(--color-text-main)' }}>
              {t.nav.home}
            </Link>
            <a href="#how-it-works" style={{ color: 'var(--color-text-main)' }}>
              {t.nav.howItWorks}
            </a>
            <a href="#simulator" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={15} color="#F28C28" /> {t.nav.liveSimulator}
            </a>
            <a href="#coverage" style={{ color: 'var(--color-text-main)' }}>
              {t.nav.coverage}
            </a>
            <a href="#impact" style={{ color: 'var(--color-text-main)' }}>
              {t.nav.impact}
            </a>
          </nav>

          {/* Action Center */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Language Switcher Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setShowLangMenu(!showLangMenu)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-cream)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-primary-dark)',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}
                aria-label="Language selector"
              >
                <Globe size={15} color="var(--color-primary)" />
                <span>
                  {language === 'en' ? 'English' : language === 'te' ? 'తెలుగు' : 'हिन्दी'}
                </span>
                <ChevronDown size={14} />
              </button>

              {showLangMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    width: '150px',
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-lg)',
                    overflow: 'hidden',
                    zIndex: 50
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('en');
                      setShowLangMenu(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.6rem 1rem',
                      textAlign: 'left',
                      backgroundColor: language === 'en' ? 'var(--color-primary-subtle)' : 'transparent',
                      color: 'var(--color-text-main)',
                      fontWeight: language === 'en' ? 700 : 500,
                      fontSize: '0.88rem'
                    }}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('te');
                      setShowLangMenu(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.6rem 1rem',
                      textAlign: 'left',
                      backgroundColor: language === 'te' ? 'var(--color-primary-subtle)' : 'transparent',
                      color: 'var(--color-text-main)',
                      fontWeight: language === 'te' ? 700 : 500,
                      fontSize: '0.88rem'
                    }}
                  >
                    తెలుగు (Telugu)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLanguage('hi');
                      setShowLangMenu(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.6rem 1rem',
                      textAlign: 'left',
                      backgroundColor: language === 'hi' ? 'var(--color-primary-subtle)' : 'transparent',
                      color: 'var(--color-text-main)',
                      fontWeight: language === 'hi' ? 700 : 500,
                      fontSize: '0.88rem'
                    }}
                  >
                    हिन्दी (Hindi)
                  </button>
                </div>
              )}
            </div>

            {/* Quick Demo Switcher (Access all 12 roles instantly) */}
            <button
              type="button"
              onClick={() => setShowDemoModal(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #F4A340 0%, #C65D3A 100%)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 700,
                boxShadow: '0 2px 6px rgba(198, 93, 58, 0.25)'
              }}
              title={t.nav.exploreDashboardsTitle}
            >
              <Users size={16} />
              <span>{t.nav.dashboards}</span>
            </button>

            {/* Auth Buttons */}
            {isAuthenticated && user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link
                  to={getRoleDashboardPath(user.role)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-subtle)',
                    color: 'var(--color-primary-dark)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>{t.nav.myDashboard}</span>
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  style={{
                    padding: '0.45rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'transparent',
                    border: '1px solid var(--color-danger)',
                    color: 'var(--color-danger)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  title="Sign out of active session"
                >
                  <LogOut size={15} />
                  <span>{t.nav.signOut}</span>
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link
                  to="/login"
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'transparent',
                    border: '1.5px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  {t.nav.signIn}
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                  style={{
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.85rem'
                  }}
                >
                  {t.nav.donateFoodCta}
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 12-Role Quick Switcher Modal */}
      {showDemoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(31, 41, 51, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '1.5rem'
          }}
          onClick={() => setShowDemoModal(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '860px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '2rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--color-border)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <div className="badge badge-saffron" style={{ marginBottom: '0.5rem' }}>
                  {t.nav.dashboards}
                </div>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)' }}>
                  {t.nav.exploreDashboardsTitle}
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                  {t.nav.exploreDashboardsDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                style={{
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  background: 'none',
                  color: 'var(--color-text-muted)',
                  padding: '0.25rem'
                }}
              >
                &times;
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1rem'
              }}
            >
              {DEMO_ACCOUNTS.map((acc) => (
                <div
                  key={acc.id}
                  onClick={() => handleSelectDemo(acc)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Login as ${acc.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectDemo(acc);
                    }
                  }}
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    cursor: 'pointer',
                    backgroundColor: 'var(--color-cream-card)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span className="badge badge-green" style={{ fontSize: '0.68rem' }}>
                        {t.roles[acc.role] || acc.role.replace(/_/g, ' ')}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                        {acc.city}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>
                      {acc.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.35 }}>
                      {acc.description}
                    </div>
                  </div>

                  <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    <span>{t.nav.launchDashboard}</span>
                    <span style={{ color: 'var(--color-accent)' }}>{t.nav.activeStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
