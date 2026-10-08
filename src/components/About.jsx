import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  BookOpen,
  Languages,
} from 'lucide-react';

export default function About() {
  const coursework = [
    { title: 'Econometrics', desc: 'Regression diagnostics, time-series forecasting, ARDL bounds testing & cointegration.' },
    { title: 'Microeconomics', desc: 'Market structures, consumer utility optimization, game theory, and pricing elasticity.' },
    { title: 'Macroeconomics', desc: 'Monetary policy transmission, fiscal frameworks, inflation targeting, and labor equilibrium.' },
    { title: 'Development Economics', desc: 'Structural transformation, poverty reduction metrics, institutional capital, and FDI absorption.' },
    { title: 'Islamic Economics & Finance', desc: 'Ethical risk-sharing, Sukuk structures, Shariah governance, and social finance.' },
    { title: 'Principles of Marketing', desc: 'Consumer segmentation, positioning strategies, digital conversion funnels, and brand equity.' },
    { title: 'Entrepreneurship & Innovation', desc: 'Venture feasibility, business model canvas, grant allocation, and social enterprise design.' },
  ];

  const languages = [
    { name: 'Arabic', status: 'Native Speaker', desc: 'Mother tongue; articulate verbal eloquence & formal business correspondence.', code: 'AR', fluency: '100%' },
    { name: 'English', status: 'Fluent / Full Professional', desc: 'Primary language of academic research, econometrics defense, and public workshops.', code: 'EN', fluency: '95%' },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="section-eyebrow">
            <GraduationCap size={14} color="#c4a66a" />
            <span>Academic Foundations & Linguistic Fluency</span>
          </div>
          <h2 className="section-title">
            Education, Academic Rigor & <span className="serif-italic" style={{ color: '#4a7c59' }}>Strategic Vision</span>
          </h2>
          <p className="section-subtitle">
            Grounded in rigorous macroeconomic theory, empirical econometrics, and cross-cultural communication to solve modern economic and organizational challenges.
          </p>
        </div>

        {/* 2-Column Grid: Education Card & Philosophy */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '36px',
          }}
          className="about-grid"
        >
          {/* Card 1: Degree & Institution */}
          <div className="editorial-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  backgroundColor: '#264430',
                  color: '#c4a66a',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(196, 166, 106, 0.45)',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="badge-tag-warm" style={{ fontSize: '11px', marginBottom: '4px' }}>
                  Conferred Degree
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430' }}>
                  Bachelor of Economics (Hons.)
                </h3>
                <p style={{ fontSize: '13px', color: '#74796e' }}>
                  Albukhary International University (AIU) • Graduated Apr 2026
                </p>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#4a4e4a', lineHeight: 1.65, marginBottom: '22px' }}>
              Completed a comprehensive four-year curriculum centered on quantitative macroeconomic modeling, econometric analysis, and public policy evaluation. Awarded top institutional accolades for research presentation and social business innovation.
            </p>

            {/* Academic Accolades Box */}
            <div
              style={{
                backgroundColor: '#f5f1ea',
                borderRadius: '12px',
                padding: '16px 20px',
                border: '1px solid rgba(196, 166, 106, 0.35)',
              }}
            >
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: '700',
                  color: '#705c30',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Award size={14} /> Institutional Distinctions:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#264430' }}>
                  <span style={{ color: '#c4a66a', fontWeight: '700' }}>🥇 Platinum Award:</span>
                  <span>Best Research Paper, AIU Seminar Day (2025)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#264430' }}>
                  <span style={{ color: '#705c30', fontWeight: '700' }}>🥈 Gold Award:</span>
                  <span>Social Business Group Project</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Linguistic Competence */}
          <div className="editorial-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  backgroundColor: 'rgba(74, 124, 89, 0.12)',
                  color: '#4a7c59',
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(74, 124, 89, 0.25)',
                }}
              >
                <Languages size={24} />
              </div>
              <div>
                <span className="badge-sage" style={{ fontSize: '11px', marginBottom: '4px' }}>
                  International Engagement
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430' }}>
                  Linguistic Versatility
                </h3>
                <p style={{ fontSize: '13px', color: '#74796e' }}>
                  Multi-Stakeholder Cross-Cultural Communication
                </p>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#4a4e4a', lineHeight: 1.65, marginBottom: '22px' }}>
              Equipped to engage executive boards, international academic faculties, and grassroots community beneficiaries seamlessly across Arabic and English.
            </p>

            {/* Languages breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {languages.map((l) => (
                <div
                  key={l.name}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(74, 124, 89, 0.12)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: '700', color: '#264430', fontSize: '14px' }}>{l.name}</span>
                      <span className="badge-tag-warm" style={{ fontSize: '11px', padding: '1px 6px' }}>{l.status}</span>
                    </div>
                    <span className="tnum" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '600', color: '#4a7c59' }}>
                      {l.fluency}
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5 }}>
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Relevant Academic Coursework Matrix */}
        <div className="editorial-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430', marginBottom: '6px' }}>
            Relevant Undergraduate Coursework & Competencies
          </h3>
          <p style={{ fontSize: '13.5px', color: '#74796e', marginBottom: '22px' }}>
            Core curriculum modules completed at Albukhary International University:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {coursework.map((c) => (
              <div
                key={c.title}
                style={{
                  backgroundColor: '#faf6f0',
                  border: '1px solid rgba(74, 124, 89, 0.12)',
                  borderRadius: '10px',
                  padding: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <BookOpen size={15} color="#c4a66a" />
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#264430' }}>{c.title}</h4>
                </div>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
