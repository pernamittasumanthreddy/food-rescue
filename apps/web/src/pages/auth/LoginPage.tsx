import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, DEMO_ACCOUNTS, DemoAccount } from '../../context/AuthContext.js';
import { useLanguage } from '../../context/LanguageContext.js';
import { EcoAnimatedBackground } from '../../components/common/EcoAnimatedBackground.js';
import { Leaf, Lock, Mail, ShieldCheck, Globe, Sparkles } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginWithCredentials, loginAsDemo } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showLangMenu, setShowLangMenu] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowLangMenu(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const redirectPath = await loginWithCredentials(emailOrPhone);
      navigate(redirectPath);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSelect = (acc: DemoAccount) => {
    const targetPath = loginAsDemo(acc);
    navigate(targetPath);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Animated Floating Leaves & Particles */}
      <EcoAnimatedBackground />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '440px',
          width: '100%'
        }}
      >
        <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <div
              className="animate-pulse-glow"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}
            >
              <Leaf size={22} color="#F4A340" />
            </div>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-primary-dark)', letterSpacing: '-0.02em' }}>
              Food<span style={{ color: 'var(--color-accent)' }}>Rescue</span>
            </span>
          </Link>

          {/* Quick Language Toggle */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.65rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--color-primary-dark)'
              }}
              aria-label="Change Language"
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
                  width: '120px',
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 50,
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => { setLanguage('en'); setShowLangMenu(false); }}
                  style={{ width: '100%', padding: '0.45rem 0.75rem', textAlign: 'left', background: 'none', fontSize: '0.8rem', fontWeight: language === 'en' ? 700 : 500 }}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => { setLanguage('te'); setShowLangMenu(false); }}
                  style={{ width: '100%', padding: '0.45rem 0.75rem', textAlign: 'left', background: 'none', fontSize: '0.8rem', fontWeight: language === 'te' ? 700 : 500 }}
                >
                  తెలుగు
                </button>
                <button
                  type="button"
                  onClick={() => { setLanguage('hi'); setShowLangMenu(false); }}
                  style={{ width: '100%', padding: '0.45rem 0.75rem', textAlign: 'left', background: 'none', fontSize: '0.8rem', fontWeight: language === 'hi' ? 700 : 500 }}
                >
                  हिन्दी
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Floating eco badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.85rem' }}>
          <div
            className="badge badge-green animate-float-badge"
            style={{
              padding: '0.35rem 0.85rem',
              fontSize: '0.78rem',
              boxShadow: '0 2px 8px rgba(18, 107, 79, 0.15)'
            }}
          >
            <Sparkles size={14} color="#F4A340" />
            <span>FSSAI 2026 Secured Access Portal</span>
          </div>
        </div>

        {/* Login Card with Entrance Animation & Glassmorphism */}
        <div
          className="eco-card animate-card-enter"
          style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.2rem',
            boxShadow: '0 20px 35px -5px rgba(18, 107, 79, 0.12), 0 10px 15px -5px rgba(0, 0, 0, 0.04)',
            border: '1.5px solid rgba(18, 107, 79, 0.18)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated top gradient highlight line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #126B4F 0%, #F4A340 50%, #C65D3A 100%)'
            }}
          />

          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.45rem', color: 'var(--color-primary-dark)' }}>{t.auth.signInTitle}</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
              {t.auth.signInSubtitle}
            </p>
          </div>

        {error && (
          <div
            style={{
              padding: '0.75rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#FDF2F2',
              color: 'var(--color-danger)',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              border: '1px solid rgba(194, 65, 59, 0.2)'
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.35rem' }}>
              {t.auth.emailOrPhoneLabel}
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder={t.auth.emailOrPhonePlaceholder}
                className="form-input"
                style={{ paddingLeft: '2.2rem' }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                {t.auth.passwordLabel}
              </label>
              <Link to="/forgot-password" style={{ fontSize: '0.78rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                {t.auth.forgotPasswordLink}
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="var(--color-text-muted)" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.auth.passwordPlaceholder}
                className="form-input"
                style={{ paddingLeft: '2.2rem' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', fontSize: '0.95rem' }}
          >
            {loading ? t.auth.authenticating : t.auth.signInButton}
          </button>
        </form>

        <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>
            {t.auth.instantDemoTitle}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-border)' }} />
        </div>

        {/* 1-Click Role Switcher inside Login with Keyboard Access */}
        <div>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', textAlign: 'center' }}>
            {t.auth.instantDemoSubtitle}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem' }}>
            {DEMO_ACCOUNTS.slice(0, 6).map((acc) => (
              <button
                key={acc.id}
                type="button"
                className="role-chip-btn"
                onClick={() => handleDemoSelect(acc)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDemoSelect(acc);
                  }
                }}
                style={{
                  padding: '0.45rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-cream-card)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-dark)',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  cursor: 'pointer'
                }}
              >
                <ShieldCheck size={13} color="var(--color-primary)" />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {t.roles[acc.role] || acc.role.replace(/_/g, ' ')}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
          {t.auth.registerCtaPrompt}{' '}
          <Link to="/register" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
            {t.auth.registerCtaLink}
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};
