import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  FileText,
  Award,
  TrendingUp,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  BarChart3,
  Globe2,
} from 'lucide-react';

import profileImg from '../../o6.jpeg';

export default function Hero({ onOpenResume }) {
  const metrics = [
    {
      num: 'ARDL',
      label: 'Econometric Modeling',
      sub: 'Long-Run Cointegration (Thailand FDI)',
      accent: '#2a7f83',
    },
    {
      num: 'RM5,000',
      label: 'Grant Budget Managed',
      sub: 'University-Funded SME Digital Training',
      accent: '#c8a24a',
    },
    {
      num: '100s+',
      label: 'Outreach Beneficiaries',
      sub: 'Nagashi NGO Media & Refugee Workshops',
      accent: '#0b1f3a',
    },
    {
      num: '2x',
      label: 'University Honors',
      sub: 'Platinum Research Award & Gold Project',
      accent: '#785a00',
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
          <span className="badge-teal">
            <span className="status-dot"></span>
            <span>Open for Economics & Data Analysis Roles</span>
          </span>

          <span className="badge-honor">
            <Award size={13} />
            <span>Platinum Award Winner — AIU Seminar Day 2025</span>
          </span>

          <span className="badge-tag-warm" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={12} color="#75777e" />
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
                  fontWeight: '600',
                  color: '#785a00',
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
                fontWeight: '400',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#0b1f3a',
                marginBottom: '20px',
              }}
            >
              Empirical Rigor in <span className="serif-italic" style={{ color: '#0b1f3a' }}>Applied Economics</span> & Data Analysis
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.8vw, 1.12rem)',
                lineHeight: 1.68,
                color: '#44474d',
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
                <BarChart3 size={15} style={{ color: '#ffd577' }} />
                <span>Explore ARDL Research Thesis</span>
              </a>

              <button onClick={onOpenResume} className="btn-secondary">
                <FileText size={15} />
                <span>View Full CV & Citations</span>
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
                color: '#75777e',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={15} color="#0b1f3a" />
                <span>B.Econ (Hons) '26</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Globe2 size={15} color="#0b1f3a" />
                <span>Arabic (Native) • English (Fluent)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={15} color="#c8a24a" />
                <span>Gold Social Business Award</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Framed Archival Portrait & Monograph Plaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: 'relative' }}
          >
            {/* Outer Frame with Archival Warm Ivory & Oxford Navy Shadow */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(11, 31, 58, 0.12)',
                borderRadius: '20px',
                padding: '16px',
                boxShadow: '0 8px 32px -4px rgba(11, 31, 58, 0.08), 0 20px 48px -12px rgba(11, 31, 58, 0.06)',
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  maxHeight: '460px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: '#f1eee5',
                }}
              >
                <img
                  src={profileImg}
                  alt="Alhassan Ibrahim Ali Hassan - Graduation at Albukhary International University"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />

                {/* Corner Decorative Hairline */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(11, 31, 58, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#fdf9f0',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    letterSpacing: '0.04em',
                    border: '1px solid rgba(200, 162, 74, 0.4)',
                  }}
                >
                  ALBUKHARY INT. UNIVERSITY
                </div>
              </div>

              {/* Plaque Excerpt Below Photo */}
              <div
                style={{
                  marginTop: '14px',
                  padding: '12px 14px',
                  backgroundColor: '#f7f3ea',
                  borderRadius: '10px',
                  border: '1px solid rgba(11, 31, 58, 0.06)',
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
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#0b1f3a',
                    }}
                  >
                    Alhassan Ibrahim Ali Hassan
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      color: '#75777e',
                    }}
                  >
                    Graduated Apr 2026 • AIU Convocation
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: '#0b1f3a',
                    color: '#c8a24a',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(200, 162, 74, 0.3)',
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

        {/* 4 Quantitative Metric Cards (Tabular Figures) */}
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
              <div className="metric-num" style={{ color: m.accent === '#2a7f83' ? '#2a7f83' : '#0b1f3a' }}>
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
