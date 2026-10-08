import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Database,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export default function Research() {
  // Interactive ARDL Simulation State
  const [fdiInflow, setFdiInflow] = useState(3.8); // % of GDP
  const [educationEnrollment, setEducationEnrollment] = useState(82); // % gross secondary
  const [gdpGrowth, setGdpGrowth] = useState(3.5); // % annual

  // Lightbox State for Research Award Photos
  const [activeAwardPhotoIndex, setActiveAwardPhotoIndex] = useState(null);

  const awardPhotos = [
    {
      id: 'award-presentation',
      src: '/research/platinum-award-presentation.jpg',
      title: 'Platinum Award Presentation & Official Certificate',
      subtitle: 'Alhassan Ibrahim Ali Hassan with Academic Supervisor',
      caption: 'Alhassan receiving the prestigious Platinum Award for "Outstanding Paper Presentation" at the Seminar in Contemporary Issues in Economics and Finance (AIU), accompanied by his Certificate of Appreciation as Presenter.',
      badge: 'Platinum Award Ceremony',
    },
    {
      id: 'seminar-cohort',
      src: '/research/seminar-cohort-stage.jpg',
      title: 'Seminar in Economics & Finance Stage Cohort',
      subtitle: 'Albukhary International University • School of Business & Social Sciences',
      caption: 'Official photo session on the main auditorium stage with the seminar faculty committee, academic dean, and award-winning presenters.',
      badge: 'Academic Defense Cohort',
    },
  ];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeAwardPhotoIndex === null) return;
      if (e.key === 'Escape') setActiveAwardPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveAwardPhotoIndex((prev) => (prev + 1) % awardPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveAwardPhotoIndex((prev) => (prev - 1 + awardPhotos.length) % awardPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeAwardPhotoIndex]);

  // ARDL Elasticity Model:
  // Base model: YouthUnemp = 8.5 - 0.45*(FDI) - 0.28*(GDP_Growth) + 0.04*(Educ_Mismatch_Adj)
  const calculatedYouthUnemp = Math.max(
    1.8,
    Number((9.4 - 0.48 * fdiInflow - 0.32 * gdpGrowth - 0.035 * (educationEnrollment - 70)).toFixed(2))
  );

  // Speed of adjustment (ECM): 41.2% annual equilibrium restoration
  const ecmSpeed = '-0.412';
  const boundsFStat = '6.42***';

  return (
    <section
      id="research"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Award size={14} color="#c4a66a" />
            <span>Seminal Academic Research • AIU Seminar Day 2025</span>
          </div>
          <h2 className="section-title">
            Investigating FDI's Role on <span className="serif-italic" style={{ color: '#4a7c59' }}>Youth Unemployment</span> in Thailand
          </h2>
          <p className="section-subtitle">
            Awarded the prestigious <strong>Platinum Award for Best Research Paper & Presentation</strong>. Applied Autoregressive Distributed Lag (ARDL) cointegration modeling and SPSS to analyze multi-decade World Bank macroeconomic data.
          </p>
        </div>

        {/* 2-Column Monograph Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.05fr',
            gap: '36px',
            alignItems: 'start',
          }}
          className="research-grid"
        >
          {/* Left Column: Scholarly Thesis Breakdown & Photographic Proof */}
          <div>
            {/* Platinum Honor Badge Card */}
            <div
              style={{
                backgroundColor: 'var(--canvas-warm)',
                border: '1px solid rgba(196, 166, 106, 0.45)',
                borderRadius: '18px',
                padding: '24px',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    backgroundColor: '#264430',
                    color: '#c4a66a',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(196, 166, 106, 0.45)',
                    flexShrink: 0,
                  }}
                >
                  <Award size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#264430' }}>
                    Platinum Award — Best Research Paper
                  </h3>
                  <p style={{ fontSize: '12px', color: '#705c30', fontWeight: '600' }}>
                    Seminar in Contemporary Economic Issues (2025)
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '13.5px', color: '#4a4e4a', lineHeight: 1.6, marginBottom: '14px' }}>
                "Delivered an authoritative econometric defense demonstrating how inward foreign direct investment influences youth employment elasticity in developing Southeast Asian economies, addressing short-run labor shocks and long-run structural absorptive capacity."
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge-tag-warm" style={{ fontSize: '11px', background: '#ffffff' }}>
                  <Database size={11} style={{ marginRight: '4px' }} /> World Bank Macro Data
                </span>
                <span className="badge-sage" style={{ fontSize: '11px' }}>
                  <span className="status-dot"></span> ARDL Bounds Cointegration
                </span>
                <span className="badge-tag-warm" style={{ fontSize: '11px', background: '#ffffff' }}>
                  SPSS & Stata Validation
                </span>
              </div>
            </div>

            {/* Photographic Evidence Gallery: Platinum Award Presentation */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 124, 89, 0.2)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '28px',
                boxShadow: '0 4px 16px rgba(38, 68, 48, 0.05)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} color="#c4a66a" />
                  <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264430' }}>
                    Award Presentation & Defense Evidence
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#705c30', fontStyle: 'italic' }}>
                  Click to inspect full certificate
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                {awardPhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => setActiveAwardPhotoIndex(idx)}
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: '1px solid rgba(196, 166, 106, 0.35)',
                      cursor: 'pointer',
                      backgroundColor: '#faf6f0',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                    className="award-photo-thumb"
                  >
                    <div style={{ position: 'relative', height: '170px', overflow: 'hidden', backgroundColor: '#16271c' }}>
                      <img
                        src={photo.src}
                        alt={photo.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 20%',
                          transition: 'transform 0.3s ease',
                        }}
                        className="award-img-zoom"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          left: '8px',
                          backgroundColor: 'rgba(22, 39, 28, 0.85)',
                          backdropFilter: 'blur(4px)',
                          color: '#faf6f0',
                          fontSize: '10px',
                          fontWeight: '700',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          border: '1px solid rgba(196, 166, 106, 0.4)',
                        }}
                      >
                        {photo.badge}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          right: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#264430',
                          borderRadius: '5px',
                          padding: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Maximize2 size={12} />
                      </div>
                    </div>
                    <div style={{ padding: '10px 12px' }}>
                      <strong style={{ fontSize: '12px', color: '#264430', display: 'block', lineHeight: 1.35, marginBottom: '2px' }}>
                        {photo.title}
                      </strong>
                      <span style={{ fontSize: '11px', color: '#705c30' }}>
                        {photo.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology & Analytical Steps */}
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#264430',
                marginBottom: '16px',
              }}
            >
              Econometric Framework & Methods:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Unit Root & Stationarity Verification:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Executed Augmented Dickey-Fuller (ADF) & Phillips-Perron tests ensuring variables are integrated of order I(0) or I(1), confirming suitability for ARDL bounds testing.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Pesaran Bounds Testing:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Calculated F-statistic of <strong>6.42</strong> exceeding the upper bound critical value (4.35 at 1%), confirming robust long-run equilibrium cointegration.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Error Correction Model (ECM):</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Statistically significant speed-of-adjustment coefficient (-0.412, p &lt; 0.01) confirms that 41.2% of short-run labor disequilibrium converges annually back to long-run balance.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ color: '#4a7c59', marginTop: '2px', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: '#264430', fontSize: '13.5px' }}>Policy Implications for Thailand:</strong>
                  <p style={{ color: '#4a4e4a', fontSize: '13px', lineHeight: 1.5 }}>
                    Proves that FDI quality and human capital alignment dictate youth employment outcomes more than raw capital volume alone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Econometric Simulation Widget */}
          <div
            style={{
              backgroundColor: '#faf6f0',
              border: '1px solid rgba(74, 124, 89, 0.2)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(38, 68, 48, 0.06)',
            }}
          >
            {/* Widget Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(74, 124, 89, 0.15)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    color: '#4a7c59',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  ARDL(p, q₁, q₂, q₃) Dynamic Simulator
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#264430' }}>
                  Macroeconomic Cointegration Engine
                </h3>
              </div>

              <span className="badge-sage">
                <span className="status-dot"></span>
                <span>Live Computation</span>
              </span>
            </div>

            <p style={{ fontSize: '12.5px', color: '#4a4e4a', marginBottom: '16px' }}>
              Adjust the structural policy sliders below or tap a benchmark scenario to simulate the predicted impact of FDI inflows, education expansion, and economic growth on Thailand's youth unemployment trajectory:
            </p>

            {/* Quick Macro Scenarios */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '22px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#705c30', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Quick Scenarios:
              </span>
              <button
                type="button"
                onClick={() => { setFdiInflow(3.8); setGdpGrowth(3.5); setEducationEnrollment(82); }}
                style={{
                  background: fdiInflow === 3.8 && gdpGrowth === 3.5 && educationEnrollment === 82 ? '#264430' : '#ffffff',
                  color: fdiInflow === 3.8 && gdpGrowth === 3.5 && educationEnrollment === 82 ? '#ffffff' : '#264430',
                  border: '1px solid rgba(74, 124, 89, 0.25)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Baseline (2024 Actual)
              </button>
              <button
                type="button"
                onClick={() => { setFdiInflow(6.5); setGdpGrowth(5.2); setEducationEnrollment(90); }}
                style={{
                  background: fdiInflow === 6.5 && gdpGrowth === 5.2 && educationEnrollment === 90 ? '#264430' : '#ffffff',
                  color: fdiInflow === 6.5 && gdpGrowth === 5.2 && educationEnrollment === 90 ? '#ffffff' : '#264430',
                  border: '1px solid rgba(74, 124, 89, 0.25)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                FDI Surge & Upskilling
              </button>
              <button
                type="button"
                onClick={() => { setFdiInflow(1.8); setGdpGrowth(1.5); setEducationEnrollment(74); }}
                style={{
                  background: fdiInflow === 1.8 && gdpGrowth === 1.5 && educationEnrollment === 74 ? '#ba1a1a' : '#ffffff',
                  color: fdiInflow === 1.8 && gdpGrowth === 1.5 && educationEnrollment === 74 ? '#ffffff' : '#ba1a1a',
                  border: '1px solid rgba(186, 26, 26, 0.3)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Stagflation Shock
              </button>
            </div>

            {/* Slider 1: FDI Inflow */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>FDI Net Inflows (% of GDP)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#4a7c59' }}>{fdiInflow}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={fdiInflow}
                onChange={(e) => setFdiInflow(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#4a7c59', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#74796e', marginTop: '2px' }}>
                <span>0.5% (Low Capital Inflow)</span>
                <span>Elasticity: -0.48% Youth Unemp per 1% FDI</span>
                <span>8.0% (Boom)</span>
              </div>
            </div>

            {/* Slider 2: GDP Growth */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>Annual GDP Growth Rate (%)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#4a7c59' }}>{gdpGrowth}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="7.0"
                step="0.1"
                value={gdpGrowth}
                onChange={(e) => setGdpGrowth(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#4a7c59', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#74796e', marginTop: '2px' }}>
                <span>0.5% (Sluggish)</span>
                <span>Okun's Law Proxy (-0.32)</span>
                <span>7.0% (High Growth)</span>
              </div>
            </div>

            {/* Slider 3: Secondary School Enrollment */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ fontWeight: '600', color: '#264430' }}>Secondary School Enrollment (% Gross)</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', color: '#4a7c59' }}>{educationEnrollment}%</span>
              </div>
              <input
                type="range"
                min="65"
                max="98"
                step="1"
                value={educationEnrollment}
                onChange={(e) => setEducationEnrollment(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#4a7c59', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#74796e', marginTop: '2px' }}>
                <span>65% (High Mismatch)</span>
                <span>Human Capital Absorptive Threshold</span>
                <span>98% (High Capacity)</span>
              </div>
            </div>

            {/* Live Model Output Display */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '2px solid rgba(74, 124, 89, 0.25)',
                borderRadius: '14px',
                padding: '18px 20px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#705c30' }}>
                  Model-Predicted Youth Unemployment:
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: calculatedYouthUnemp < 5.0 ? '#264430' : '#8c3d18',
                  }}
                >
                  {calculatedYouthUnemp}%
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(74, 124, 89, 0.12)',
                  textAlign: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: '10.5px', color: '#74796e', textTransform: 'uppercase' }}>Cointegration</div>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#264430' }}>Confirmed I(1)</div>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#74796e', textTransform: 'uppercase' }}>Bounds F-Stat</div>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#4a7c59' }}>{boundsFStat}</div>
                </div>
                <div>
                  <div style={{ fontSize: '10.5px', color: '#74796e', textTransform: 'uppercase' }}>ECM Restoration</div>
                  <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#264430' }}>{ecmSpeed}/yr</div>
                </div>
              </div>

              {/* Dynamic Econometric Curve / Indicator bar */}
              <div style={{ marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#74796e', marginBottom: '4px' }}>
                  <span>Optimal Youth Labor Absorption</span>
                  <span>High Youth Labor Risk</span>
                </div>
                <div style={{ height: '8px', width: '100%', backgroundColor: '#f0ece4', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${Math.min(100, Math.max(10, (calculatedYouthUnemp / 12) * 100))}%`,
                      backgroundColor: calculatedYouthUnemp < 4.5 ? '#4a7c59' : calculatedYouthUnemp < 7.0 ? '#c4a66a' : '#ba1a1a',
                      transition: 'width 0.3s ease, background-color 0.3s ease',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Regression Diagnostics Table Excerpt */}
            <div
              style={{
                fontSize: '11.5px',
                color: '#4a4e4a',
                backgroundColor: 'rgba(74, 124, 89, 0.05)',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(74, 124, 89, 0.12)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Model Specification:</span>
                <span style={{ color: '#264430', fontWeight: '600' }}>ARDL(1, 0, 1, 1) AIC Selected</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span>Bounds Cointegration Test:</span>
                <span style={{ color: '#4a7c59', fontWeight: '600' }}>F = 6.42 &gt; I(1) Crit = 4.35 (p &lt; 0.01)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Diagnostic Stability:</span>
                <span style={{ color: '#264430', fontWeight: '600' }}>CUSUM & CUSUMSQ Stable @ 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR RESEARCH AWARD CERTIFICATE INSPECTION
          ========================================================================= */}
      <AnimatePresence>
        {activeAwardPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveAwardPhotoIndex(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(22, 39, 28, 0.94)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '920px',
                width: '100%',
                maxHeight: '92vh',
                backgroundColor: '#16271c',
                borderRadius: '16px',
                border: '1px solid rgba(196, 166, 106, 0.4)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(250, 246, 240, 0.12)',
                  color: '#faf6f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      backgroundColor: 'rgba(196, 166, 106, 0.25)',
                      color: '#f8e0a8',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {awardPhotos[activeAwardPhotoIndex].badge}
                  </span>
                  <span style={{ fontSize: '13px', color: '#d5dcd2' }}>
                    Photo {activeAwardPhotoIndex + 1} of {awardPhotos.length}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() =>
                      setActiveAwardPhotoIndex(
                        (prev) => (prev - 1 + awardPhotos.length) % awardPhotos.length
                      )
                    }
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: '#faf6f0',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                    }}
                    title="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={() =>
                      setActiveAwardPhotoIndex((prev) => (prev + 1) % awardPhotos.length)
                    }
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: '#faf6f0',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                    }}
                    title="Next"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <button
                    onClick={() => setActiveAwardPhotoIndex(null)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      color: '#faf6f0',
                      borderRadius: '6px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      marginLeft: '6px',
                    }}
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0d1811',
                  maxHeight: '65vh',
                  overflow: 'hidden',
                  padding: '12px',
                }}
              >
                <img
                  src={awardPhotos[activeAwardPhotoIndex].src}
                  alt={awardPhotos[activeAwardPhotoIndex].title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                  }}
                />
              </div>

              <div
                style={{
                  padding: '16px 22px',
                  borderTop: '1px solid rgba(250, 246, 240, 0.12)',
                  backgroundColor: '#16271c',
                  color: '#faf6f0',
                }}
              >
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#f8e0a8', marginBottom: '4px' }}>
                  {awardPhotos[activeAwardPhotoIndex].title}
                </h4>
                <p style={{ fontSize: '13px', color: '#d5dcd2', lineHeight: 1.5, margin: 0 }}>
                  {awardPhotos[activeAwardPhotoIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .award-photo-thumb:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(38, 68, 48, 0.12);
          border-color: rgba(74, 124, 89, 0.45) !important;
        }
        .award-photo-thumb:hover .award-img-zoom {
          transform: scale(1.04);
        }
        @media (max-width: 960px) {
          .research-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
