import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  FileText,
  Award,
  BarChart3,
  GraduationCap,
  Globe2,
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const metrics = [
    {
      num: 'ARDL',
      label: 'Econometric Modeling',
      sub: 'Long-Run Cointegration (Thailand FDI)',
      accent: '#4a7c59',
    },
    {
      num: 'RM5,000',
      label: 'Grant Budget Managed',
      sub: 'University-Funded SME Digital Training',
      accent: '#c4a66a',
    },
    {
      num: '100s+',
      label: 'Outreach Beneficiaries',
      sub: 'Nagashi NGO Media & Refugee Workshops',
      accent: '#264430',
    },
    {
      num: '2x',
      label: 'University Honors',
      sub: 'Platinum Research Award & Gold Project',
      accent: '#705c30',
    },
  ];

  return (
    <section
      id="hero"
      style={{
        paddingTop: '116px',
        paddingBottom: '70px',
        position: 'relative',
        backgroundColor: 'var(--canvas-bg)',
      }}
    >
      <div className="container">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <span className="badge-sage">
            <span className="status-dot"></span>
            <span>Open for Economics & Data Analysis Roles</span>
          </span>

          <span className="badge-honor">
            <Award size={13} />
            <span>Platinum Award Winner — AIU Seminar Day 2025</span>
          </span>

          <span className="badge-tag-warm" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={12} color="#74796e" />
            <span>Kuala Lumpur, Malaysia</span>
          </span>
        </motion.div>

        {/* Main 2-Column Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Editorial Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '12px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#705c30',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Curated Academic & Strategic Portfolio
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.3rem, 4.4vw, 3.8rem)',
                fontWeight: '600',
                lineHeight: 1.14,
                letterSpacing: '-0.02em',
                color: '#264430',
                marginBottom: '20px',
              }}
            >
              Empirical Rigor in <span className="serif-italic" style={{ color: '#4a7c59' }}>Applied Economics</span> & Data Analysis
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.8vw, 1.12rem)',
                lineHeight: 1.68,
                color: '#4a4e4a',
                marginBottom: '24px',
                maxWidth: '640px',
              }}
            >
              Economics graduate from <strong>Albukhary International University</strong> combining hands-on econometrics (ARDL, SPSS, Stata, World Bank datasets) with proven leadership in digital marketing, multi-stakeholder community outreach, and project delivery.
            </p>

            {/* Quick CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              <a href="#research" className="btn-primary">
                <BarChart3 size={15} style={{ color: '#f8e0a8' }} />
                <span>Explore ARDL Research Thesis</span>
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <FileText size={15} />
                <span>View Official Resume</span>
              </button>

              <a href="#contact" className="btn-secondary" style={{ borderStyle: 'dashed' }}>
                <Mail size={15} />
                <span>Contact Alhassan</span>
              </a>
            </div>

            {/* Micro Credentials List */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-hairline)',
                fontSize: '12.5px',
                color: '#74796e',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={15} color="#264430" />
                <span>B.Econ (Hons) '26</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe2 size={15} color="#264430" />
                <span>Arabic (Native) • English (Fluent)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={15} color="#c4a66a" />
                <span>Gold Social Business Award</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Terra Organic Academic Crest & Monogram Plaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Outer Frame in Forest Earth & Amber Hairline */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 124, 89, 0.2)',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 8px 32px -4px rgba(38, 68, 48, 0.08), 0 20px 48px -12px rgba(38, 68, 48, 0.06)',
              }}
            >
              {/* Crest Seal Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  maxHeight: '360px',
                  borderRadius: '18px',
                  backgroundColor: '#264430',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px',
                  border: '1px solid rgba(196, 166, 106, 0.45)',
                  boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.35)',
                  overflow: 'hidden',
                }}
              >
                {/* Background Geometric Axis Lines */}
                <svg
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.15,
                    pointerEvents: 'none',
                  }}
                  viewBox="0 0 300 300"
                >
                  <circle cx="150" cy="150" r="120" fill="none" stroke="#c4a66a" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="150" cy="150" r="90" fill="none" stroke="#4a7c59" strokeWidth="1" />
                  <line x1="30" y1="150" x2="270" y2="150" stroke="#c4a66a" strokeWidth="0.8" />
                  <line x1="150" y1="30" x2="150" y2="270" stroke="#c4a66a" strokeWidth="0.8" />
                  <path d="M50 220 Q 150 120 250 80" fill="none" stroke="#c4a66a" strokeWidth="2" />
                </svg>

                {/* Central AI Monogram Box */}
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(250, 246, 240, 0.08)',
                    border: '2px solid #c4a66a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#faf6f0',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '38px',
                    fontWeight: '600',
                    letterSpacing: '0.06em',
                    boxShadow: '0 0 24px rgba(196, 166, 106, 0.25)',
                    marginBottom: '16px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  AI
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#faf6f0',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    marginBottom: '4px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  Alhassan Ibrahim Ali Hassan
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: '#f8e0a8',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                    marginBottom: '12px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  Bachelor of Economics (Hons.)
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    backgroundColor: 'rgba(196, 166, 106, 0.15)',
                    border: '1px solid rgba(196, 166, 106, 0.35)',
                    borderRadius: '6px',
                    color: '#f8e0a8',
                    fontSize: '11px',
                    fontWeight: '600',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Award size={12} />
                  <span>Albukhary International University • 2026</span>
                </div>
              </div>

              {/* Plaque Excerpt Below Crest */}
              <div
                style={{
                  marginTop: '16px',
                  padding: '14px 16px',
                  backgroundColor: '#f5f1ea',
                  borderRadius: '12px',
                  border: '1px solid rgba(74, 124, 89, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#264430',
                    }}
                  >
                    Econometrics & Quantitative Policy
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      color: '#74796e',
                    }}
                  >
                    ARDL Modeling • World Bank Datasets • SPSS • Stata
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#264430',
                    color: '#c4a66a',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(196, 166, 106, 0.35)',
                  }}
                  title="Platinum Award Best Research Paper"
                >
                  <Award size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hairline Divider */}
        <hr className="axis-divider" style={{ marginTop: '54px', marginBottom: '36px' }} />

        {/* 4 Quantitative Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
          }}
        >
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="metric-box"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                }}
              >
                <span className="metric-label">{m.label}</span>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: m.accent,
                  }}
                />
              </div>
              <div className="metric-num" style={{ color: m.accent === '#4a7c59' ? '#4a7c59' : '#264430' }}>
                {m.num}
              </div>
              <div className="metric-sub">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
