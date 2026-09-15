import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.js';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [role, setRole] = useState('RESTAURANT');
  const [orgName, setOrgName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Vijayawada');
  const [state, setState] = useState('Andhra Pradesh');
  const [fssaiOrDarpan, setFssaiOrDarpan] = useState('');
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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registration submitted for ${orgName || name}! Our regional coordinator in ${city} will verify your credentials.`);
    navigate('/login');
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
        backgroundColor: 'var(--color-bg-canvas)'
      }}
    >
      <div style={{ maxWidth: '520px', width: '100%', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <Leaf size={20} color="#F4A340" />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
            Food<span style={{ color: 'var(--color-accent)' }}>Rescue</span>
          </span>
        </Link>

        {/* Language Selector */}
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
              backgroundColor: 'var(--color-cream)',
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

      <div
        className="eco-card"
        style={{
          maxWidth: '520px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--color-border)'
        }}
      >
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)' }}>{t.auth.registerTitle}</h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
            {t.auth.registerSubtitle}
          </p>
        </div>

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
              {t.auth.stakeholderCategory}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-select"
            >
              <option value="RESTAURANT">{t.roles.RESTAURANT}</option>
              <option value="HOTEL">{t.roles.HOTEL}</option>
              <option value="NGO">{t.roles.NGO}</option>
              <option value="VOLUNTEER">{t.roles.VOLUNTEER}</option>
              <option value="CORPORATE_CSR">{t.roles.CORPORATE_CSR}</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
              {t.auth.organizationNameLabel}
            </label>
            <input
              type="text"
              required
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder={t.auth.organizationNamePlaceholder}
              className="form-input"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
                {t.auth.contactPersonLabel}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.auth.contactPersonPlaceholder}
                className="form-input"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
                {t.auth.contactPhoneLabel}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.auth.contactPhonePlaceholder}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
                {t.auth.cityLabel}
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Vijayawada, Hyderabad"
                className="form-input"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
                {t.auth.stateLabel}
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="form-select"
              >
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.3rem' }}>
              {t.auth.fssaiDarpanLabel}
            </label>
            <input
              type="text"
              value={fssaiOrDarpan}
              onChange={(e) => setFssaiOrDarpan(e.target.value)}
              placeholder={t.auth.fssaiDarpanPlaceholder}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.4rem', fontSize: '0.95rem' }}
          >
            {t.auth.registerButton}
          </button>
        </form>

        <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
          {t.auth.alreadyRegisteredPrompt}{' '}
          <Link to="/login" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
            {t.auth.alreadyRegisteredLink}
          </Link>
        </div>
      </div>
    </div>
  );
};
