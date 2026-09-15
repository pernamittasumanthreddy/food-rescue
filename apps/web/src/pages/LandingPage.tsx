import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar.js';
import { EcoAnimatedBackground } from '../components/common/EcoAnimatedBackground.js';
import { LiveWorkflowSimulator } from '../components/workflow/LiveWorkflowSimulator.js';
import { IndiaCoverageMap } from '../components/common/IndiaCoverageMap.js';
import { useLanguage } from '../context/LanguageContext.js';
import {
  Sparkles,
  HeartHandshake,
  Utensils,
  Building,
  Award,
  Leaf,
  Quote
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Background Animated Floating Leaves & Particles */}
      <EcoAnimatedBackground />

      {/* Primary Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 1.5rem 4rem',
          maxWidth: '1280px',
          margin: '0 auto',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        <div
          className="badge badge-green"
          style={{
            marginBottom: '1.25rem',
            padding: '0.45rem 1rem',
            fontSize: '0.85rem',
            boxShadow: '0 2px 8px rgba(18, 107, 79, 0.15)'
          }}
        >
          <Sparkles size={16} color="#F4A340" />
          <span>{t.hero.badge}</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            color: 'var(--color-primary-dark)',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            maxWidth: '960px',
            margin: '0 auto 1.25rem'
          }}
        >
          {t.hero.headline}{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #F28C28 0%, #C65D3A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            {t.hero.headlineHighlight}
          </span>
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--color-text-muted)',
            maxWidth: '780px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.6
          }}
        >
          {t.hero.subheadline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <Link
            to="/register"
            className="btn btn-primary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1.05rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <Utensils size={18} />
            <span>{t.hero.ctaDonate}</span>
          </Link>
          <a
            href="#simulator"
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1.05rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <Sparkles size={18} color="var(--color-accent)" />
            <span>{t.hero.ctaWorkflow}</span>
          </a>
          <Link
            to="/register"
            className="btn btn-outline-primary"
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1.05rem',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <HeartHandshake size={18} />
            <span>{t.hero.ctaVolunteer}</span>
          </Link>
        </div>
      </section>

      {/* 2. LIVE IMPACT COUNTERS */}
      <section
        style={{
          position: 'relative',
          padding: '2.5rem 1.5rem',
          maxWidth: '1280px',
          margin: '0 auto 3rem',
          zIndex: 1
        }}
      >
        <div
          className="eco-card eco-card-cream"
          style={{
            border: '2px solid var(--color-primary)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                1,84,565+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.foodRescued}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                4,61,410+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.mealsServed}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-terracotta)' }}>
                4,61,412+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.co2Avoided}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                426+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.activeDonors}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>
                90+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.verifiedNgos}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                18+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                {t.stats.citiesCovered}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 8-STAGE WORKFLOW SIMULATOR */}
      <LiveWorkflowSimulator />

      {/* 4. STAKEHOLDER VALUE PROPOSITIONS */}
      <section
        id="how-it-works"
        style={{
          padding: '4rem 1.5rem',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-saffron" style={{ marginBottom: '0.6rem' }}>
              {t.pillars.badge}
            </div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)' }}>
              {t.pillars.title}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '640px', margin: '0.5rem auto 0' }}>
              {t.pillars.subtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {/* Donors Card */}
            <div className="eco-card eco-card-cream">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}
              >
                <Utensils size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                {t.pillars.hotels.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {t.pillars.hotels.desc}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>{t.pillars.hotels.p1}</li>
                <li>{t.pillars.hotels.p2}</li>
                <li>{t.pillars.hotels.p3}</li>
              </ul>
            </div>

            {/* NGOs Card */}
            <div className="eco-card eco-card-cream">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}
              >
                <Building size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                {t.pillars.ngos.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {t.pillars.ngos.desc}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>{t.pillars.ngos.p1}</li>
                <li>{t.pillars.ngos.p2}</li>
                <li>{t.pillars.ngos.p3}</li>
              </ul>
            </div>

            {/* Volunteers Card */}
            <div className="eco-card eco-card-cream">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}
              >
                <HeartHandshake size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                {t.pillars.volunteers.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {t.pillars.volunteers.desc}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>{t.pillars.volunteers.p1}</li>
                <li>{t.pillars.volunteers.p2}</li>
                <li>{t.pillars.volunteers.p3}</li>
              </ul>
            </div>

            {/* Corporate CSR Card */}
            <div className="eco-card eco-card-cream">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-primary-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}
              >
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                {t.pillars.csr.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {t.pillars.csr.desc}
              </p>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>{t.pillars.csr.p1}</li>
                <li>{t.pillars.csr.p2}</li>
                <li>{t.pillars.csr.p3}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDIA COVERAGE SECTION */}
      <IndiaCoverageMap />

      {/* 6. REALISTIC INDIAN TESTIMONIALS */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge badge-green" style={{ marginBottom: '0.6rem' }}>
            {t.testimonials.badge}
          </div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)' }}>
            {t.testimonials.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="eco-card">
            <Quote size={24} color="var(--color-saffron)" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>
              "{t.testimonials.t1Quote}"
            </p>
            <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{t.testimonials.t1Author}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.testimonials.t1Role}</div>
          </div>

          <div className="eco-card">
            <Quote size={24} color="var(--color-saffron)" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>
              "{t.testimonials.t2Quote}"
            </p>
            <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{t.testimonials.t2Author}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.testimonials.t2Role}</div>
          </div>

          <div className="eco-card">
            <Quote size={24} color="var(--color-saffron)" style={{ marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '1rem' }}>
              "{t.testimonials.t3Quote}"
            </p>
            <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{t.testimonials.t3Author}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.testimonials.t3Role}</div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section
        style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(135deg, #126B4F 0%, #0B4633 100%)',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div className="badge badge-saffron" style={{ marginBottom: '1rem', color: '#FFFFFF', backgroundColor: 'rgba(244, 163, 64, 0.3)' }}>
            {t.cta.badge}
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
            {t.cta.title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', lineHeight: 1.6 }}>
            {t.cta.desc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link
              to="/register"
              className="btn"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#FFFFFF',
                padding: '0.85rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              {t.cta.btnDonate}
            </Link>
            <Link
              to="/register"
              className="btn"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--color-primary-dark)',
                padding: '0.85rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              {t.cta.btnNgo}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. ENTERPRISE FOOTER */}
      <footer
        style={{
          backgroundColor: '#1F2933',
          color: '#E5E0D3',
          padding: '4rem 1.5rem 2rem',
          fontSize: '0.88rem'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <Leaf size={22} color="#F4A340" />
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF' }}>
                Food<span style={{ color: 'var(--color-accent)' }}>Rescue</span>
              </span>
            </div>
            <p style={{ color: '#9AA5B1', lineHeight: 1.6, marginBottom: '1rem' }}>
              {t.footer.desc}
            </p>
            <div style={{ color: '#F4A340', fontWeight: 600 }}>
              {t.footer.certs}
            </div>
          </div>

          {/* Col 2: Operational Hubs */}
          <div>
            <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t.footer.activeHubsTitle}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#9AA5B1' }}>
              <li>Andhra Pradesh (Vijayawada / VJA)</li>
              <li>Telangana (Hyderabad / HYD)</li>
              <li>Karnataka (Bengaluru / BLR)</li>
              <li>Tamil Nadu (Chennai / MAA)</li>
              <li>Maharashtra (Mumbai / BOM)</li>
              <li>Delhi NCR (National Capital)</li>
            </ul>
          </div>

          {/* Col 3: Role Portals */}
          <div>
            <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t.footer.rolePortalsTitle}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.SUPER_ADMIN}</Link></li>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.REGIONAL_ADMIN}</Link></li>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.HOTEL}</Link></li>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.RESTAURANT}</Link></li>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.NGO}</Link></li>
              <li><Link to="/login" style={{ color: '#9AA5B1' }}>{t.roles.VOLUNTEER}</Link></li>
            </ul>
          </div>

          {/* Col 4: Compliance & Contact */}
          <div>
            <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              {t.footer.helplineTitle}
            </div>
            <div style={{ color: '#9AA5B1', lineHeight: 1.6 }}>
              <div>{t.footer.hqAddress}</div>
              <div style={{ color: 'var(--color-saffron)', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem' }}>
                {t.footer.tollFreeLabel}
              </div>
              <div style={{ marginTop: '0.5rem' }}>rescue@foodrescue.org.in</div>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            paddingTop: '2rem',
            borderTop: '1px solid #323F4B',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            color: '#7B8794',
            fontSize: '0.8rem'
          }}
        >
          <div>
            {t.footer.rights}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>FSSAI Hygiene Standards</span>
            <span>CSR Schedule VII</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
