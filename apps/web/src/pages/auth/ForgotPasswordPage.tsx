import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft, CheckCircle2, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.js';

export const ForgotPasswordPage: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [identifier, setIdentifier] = useState('');
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
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
      <div style={{ maxWidth: '420px', width: '100%', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          maxWidth: '420px',
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--color-border)',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: '#ffffff'
          }}
        >
          <Leaf size={24} color="#F4A340" />
        </div>

        <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
          {t.auth.resetPasswordTitle}
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          {t.auth.resetPasswordSubtitle}
        </p>

        {sent ? (
          <div>
            <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={18} />
              <span>{t.auth.resetSentMessage} ({identifier})</span>
            </div>
            <Link to="/login" className="btn btn-primary" style={{ width: '100%' }}>
              {t.auth.returnToSignIn}
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={t.auth.resetInputPlaceholder}
              className="form-input"
            />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {t.auth.sendResetOtpButton}
            </button>
          </form>
        )}

        <div style={{ marginTop: '1.25rem' }}>
          <Link to="/login" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <ArrowLeft size={14} /> {t.auth.backToSignIn}
          </Link>
        </div>
      </div>
    </div>
  );
};
