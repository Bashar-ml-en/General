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
  Linkedin,
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const linkedinUrl = 'https://www.linkedin.com/in/alhassan-ibrahim-ali-hassan-a4b2ab323';

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

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderColor: 'rgba(10, 102, 194, 0.4)',
                  color: '#0a66c2',
                  backgroundColor: '#ffffff',
                }}
              >
                <Linkedin size={15} />
                <span>Connect on LinkedIn</span>
              </a>

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

          {/* Right Column: Alhassan's Portrait & Verification Card */}
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
                padding: '20px',
                boxShadow: '0 8px 32px -4px rgba(38, 68, 48, 0.08), 0 20px 48px -12px rgba(38, 68, 48, 0.06)',
              }}
            >
              {/* Portrait Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 5',
                  maxHeight: '440px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backgroundColor: '#264430',
                  border: '1.5px solid rgba(196, 166, 106, 0.45)',
                  boxShadow: '0 12px 32px rgba(38, 68, 48, 0.18)',
                }}
              >
                <img
                  src="/alhassan-profile.jpg"
                  alt="Alhassan Ibrahim Ali Hassan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                />

                {/* Soft Vignette / Gradient Overlay at Bottom */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(22, 39, 28, 0.9) 0%, rgba(22, 39, 28, 0.25) 35%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Badge: Verified LinkedIn Profile Pill */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '20px',
                    color: '#0a66c2',
                    fontSize: '11.5px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(10, 102, 194, 0.3)',
                    zIndex: 3,
                    transition: 'transform 0.15s ease',
                  }}
                >
                  <Linkedin size={13} />
                  <span>LinkedIn Verified</span>
                </a>

                {/* Bottom Info Overlay on Portrait */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#faf6f0',
                      letterSpacing: '0.01em',
                      marginBottom: '2px',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
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
                      letterSpacing: '0.06em',
                      marginBottom: '8px',
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    Bachelor of Economics (Hons.) • AIU
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(38, 68, 48, 0.8)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(196, 166, 106, 0.45)',
                      borderRadius: '6px',
                      color: '#f8e0a8',
                      fontSize: '11px',
                      fontWeight: '600',
                    }}
                  >
                    <Award size={12} color="#c4a66a" />
                    <span>Platinum Award Winner — Best Research Paper</span>
                  </div>
                </div>
              </div>

              {/* Plaque Excerpt Below Portrait with LinkedIn Direct Access */}
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

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#0a66c2',
                    color: '#ffffff',
                    borderRadius: '8px',
                    padding: '7px 12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11.5px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(10, 102, 194, 0.3)',
                    transition: 'opacity 0.15s ease',
                  }}
                  title="View Alhassan Ibrahim on LinkedIn"
                >
                  <Linkedin size={13} />
                  <span>Profile</span>
                </a>
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
