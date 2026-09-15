import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext.js';
import {
  Utensils,
  ClipboardCheck,
  Cpu,
  CheckCircle2,
  Truck,
  Building,
  Heart,
  BarChart3,
  Play,
  RotateCcw,
  ArrowRight,
  Check
} from 'lucide-react';

export const LiveWorkflowSimulator: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const wf = t.workflow;

  const stages = [
    { step: 1, info: wf.step1, icon: <Utensils size={20} /> },
    { step: 2, info: wf.step2, icon: <ClipboardCheck size={20} /> },
    { step: 3, info: wf.step3, icon: <Cpu size={20} /> },
    { step: 4, info: wf.step4, icon: <CheckCircle2 size={20} /> },
    { step: 5, info: wf.step5, icon: <Truck size={20} /> },
    { step: 6, info: wf.step6, icon: <Building size={20} /> },
    { step: 7, info: wf.step7, icon: <Heart size={20} /> },
    { step: 8, info: wf.step8, icon: <BarChart3 size={20} /> }
  ];

  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const stopSimulation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsSimulating(false);
  };

  const handleNext = () => {
    stopSimulation();
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    stopSimulation();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    stopSimulation();
    setCurrentStep(1);
  };

  const handleSelectStep = (step: number) => {
    stopSimulation();
    setCurrentStep(step);
  };

  const runAutoSimulation = () => {
    if (isSimulating) {
      stopSimulation();
      return;
    }
    stopSimulation();
    setIsSimulating(true);
    let step = currentStep >= 8 ? 1 : currentStep;
    setCurrentStep(step);

    timerRef.current = setInterval(() => {
      step += 1;
      if (step <= 8) {
        setCurrentStep(step);
      } else {
        stopSimulation();
      }
    }, 1200);
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(targetTag)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' && targetTag !== 'BUTTON') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleSelectStep(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleSelectStep(8);
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        handleReset();
      } else if (e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        runAutoSimulation();
      } else if (e.key === 'Escape') {
        if (isSimulating) {
          e.preventDefault();
          stopSimulation();
        }
      } else if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(e.key)) {
        e.preventDefault();
        handleSelectStep(Number(e.key));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, isSimulating]);

  return (
    <section id="simulator" style={{ padding: '4rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="badge badge-saffron" style={{ marginBottom: '0.6rem' }}>
          {wf.badge}
        </div>
        <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary-dark)' }}>
          {wf.title}
        </h2>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '680px', margin: '0.5rem auto 0', fontSize: '1.05rem' }}>
          {wf.subtitle}
        </p>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={runAutoSimulation}
            style={{ opacity: isSimulating ? 0.9 : 1 }}
            title="Auto-simulate workflow [A]"
          >
            <Play size={16} />
            <span>{isSimulating ? wf.simulatingBtn : wf.autoRunBtn}</span>
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={currentStep === 1}
            title="Previous Step [←]"
          >
            <span>←</span>
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleNext}
            disabled={currentStep === 8}
            title="Next Step [→]"
          >
            <span>{wf.nextStepBtn} ({currentStep}/8)</span>
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleReset}
            title={`${wf.resetBtn} [R]`}
          >
            <RotateCcw size={16} />
          </button>
        </div>

        {/* Keyboard Keys Hint */}
        <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
          ⌨ Keyboard Keys: [← / →] Prev/Next • [1-8] Jump to Stage • [A] Auto-Run/Pause • [R] Reset • [Esc] Stop
        </div>
      </div>

      {/* 8-Step Horizontal Timeline Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          gap: '0.5rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}
      >
        {stages.map((st) => {
          const isCurrent = currentStep === st.step;
          const isDone = currentStep > st.step || (currentStep === 8 && st.step === 8);

          return (
            <div
              key={st.step}
              tabIndex={0}
              role="button"
              aria-label={`Step ${st.step}: ${st.info.stepName}`}
              onClick={() => handleSelectStep(st.step)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectStep(st.step);
                }
              }}
              style={{
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 0.5rem',
                textAlign: 'center',
                backgroundColor: isCurrent
                  ? 'var(--color-primary)'
                  : isDone
                  ? 'var(--color-primary-subtle)'
                  : '#FFFFFF',
                border: isCurrent
                  ? '2px solid var(--color-primary-dark)'
                  : isDone
                  ? '1px solid var(--color-secondary)'
                  : '1px solid var(--color-border)',
                color: isCurrent ? '#FFFFFF' : 'var(--color-text-main)',
                transition: 'all 0.2s ease',
                boxShadow: isCurrent ? '0 4px 12px rgba(18, 107, 79, 0.25)' : 'none'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  margin: '0 auto 0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isCurrent ? '#FFFFFF' : isDone ? 'var(--color-secondary)' : '#F7F5EF',
                  color: isCurrent ? 'var(--color-primary)' : isDone ? '#FFFFFF' : 'var(--color-text-muted)'
                }}
              >
                {isDone && !isCurrent ? <Check size={16} /> : st.icon}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {st.info.stepName}
              </div>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: isCurrent ? 'rgba(255,255,255,0.85)' : 'var(--color-text-muted)',
                  marginTop: '0.2rem'
                }}
              >
                {st.info.actor}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Stage Details Card */}
      <div
        className="eco-card eco-card-cream"
        style={{
          border: '2px solid var(--color-primary)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'var(--color-primary)',
            color: '#FFFFFF',
            padding: '0.4rem 1.25rem',
            borderBottomLeftRadius: 'var(--radius-md)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}
        >
          {wf.stageActive} ({currentStep}/8)
        </div>

        {currentStep === 1 && (
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
              {wf.step1.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step1.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step1.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step1.field1Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>{wf.step1.field1Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step1.field2Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-accent)', marginTop: '0.2rem' }}>{wf.step1.field2Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step1.field3Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-text-main)', marginTop: '0.2rem' }}>{wf.step1.field3Val}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <div className="badge badge-saffron" style={{ marginBottom: '0.75rem' }}>
              {wf.step2.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step2.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step2.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step2.field1Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>{wf.step2.field1Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step2.field2Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginTop: '0.2rem' }}>{wf.step2.field2Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step2.field3Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>{wf.step2.field3Val}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
              {wf.step3.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step3.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step3.desc}
            </p>
            <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1.1rem' }}>
                  {wf.step3.topMatchLabel}
                </span>
                <span className="badge badge-saffron" style={{ fontSize: '0.85rem' }}>
                  {wf.step3.matchScoreLabel}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {wf.step3.breakdownText}
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <div className="badge badge-saffron" style={{ marginBottom: '0.75rem' }}>
              {wf.step4.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step4.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step4.desc}
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle2 color="var(--color-primary)" size={26} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{wf.step4.lockTitle}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{wf.step4.lockDesc}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
              {wf.step5.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step5.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step5.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step5.field1Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.2rem' }}>{wf.step5.field1Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step5.field2Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-accent)', marginTop: '0.2rem' }}>{wf.step5.field2Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step5.field3Label}</div>
                <div style={{ fontWeight: 800, color: 'var(--color-primary-dark)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>{wf.step5.field3Val}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 6 && (
          <div>
            <div className="badge badge-saffron" style={{ marginBottom: '0.75rem' }}>
              {wf.step6.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step6.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step6.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step6.field1Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary)', marginTop: '0.2rem' }}>{wf.step6.field1Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step6.field2Label}</div>
                <div style={{ fontWeight: 800, color: 'var(--color-terracotta)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>{wf.step6.field2Val}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 7 && (
          <div>
            <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>
              {wf.step7.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step7.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step7.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step7.field1Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.2rem' }}>{wf.step7.field1Val}</div>
              </div>
              <div style={{ padding: '0.9rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{wf.step7.field2Label}</div>
                <div style={{ fontWeight: 700, color: 'var(--color-accent)', marginTop: '0.2rem' }}>{wf.step7.field2Val}</div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 8 && (
          <div>
            <div className="badge badge-saffron" style={{ marginBottom: '0.75rem' }}>
              {wf.step8.badge}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              {wf.step8.heading}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              {wf.step8.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-secondary)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>{wf.step8.card1Title}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{wf.step8.card1Val}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{wf.step8.card1Sub}</div>
              </div>
              <div style={{ padding: '1rem', background: 'var(--color-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-saffron)' }}>
                <div style={{ fontSize: '0.75rem', color: '#92400e', fontWeight: 700 }}>{wf.step8.card2Title}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-terracotta)' }}>{wf.step8.card2Val}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{wf.step8.card2Sub}</div>
              </div>
              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>{wf.step8.card3Title}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-secondary)' }}>{wf.step8.card3Val}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{wf.step8.card3Sub}</div>
              </div>
              <div style={{ padding: '1rem', background: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>{wf.step8.card4Title}</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>{wf.step8.card4Val}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{wf.step8.card4Sub}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
