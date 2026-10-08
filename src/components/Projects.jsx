import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Trophy,
  DollarSign,
  CheckCircle,
} from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <div className="section-eyebrow">
            <Trophy size={14} color="#c4a66a" />
            <span>Empirical Research & Community Leadership</span>
          </div>
          <h2 className="section-title">
            Key Projects & <span className="serif-italic" style={{ color: '#4a7c59' }}>Measurable Impact</span>
          </h2>
          <p className="section-subtitle">
            From award-winning macroeconomic modeling to leading a university-funded SME digital training initiative in collaboration with government authorities.
          </p>
        </div>

        {/* Project 1: Final Year Research Project (Thailand FDI & ARDL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-card"
          style={{ padding: '32px', marginBottom: '36px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="project-grid"
          >
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span className="badge-honor">
                  <Award size={13} />
                  <span>Platinum Award Winner — Best Research Paper</span>
                </span>
                <span className="badge-sage">
                  <span className="status-dot"></span>
                  <span>ARDL Cointegration & SPSS</span>
                </span>
                <span className="badge-tag-warm">Seminar in Contemporary Economic Issues 2025</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#264430', marginBottom: '12px' }}>
                Investigating FDI's Role on Youth Unemployment in Thailand
              </h3>

              <div style={{ fontSize: '13px', color: '#74796e', marginBottom: '16px' }}>
                📍 Albukhary International University • Lead Independent Researcher
              </div>

              <p style={{ fontSize: '14.5px', color: '#4a4e4a', lineHeight: 1.68, marginBottom: '20px' }}>
                Conducted rigorous applied macroeconomic research examining the structural impacts of foreign direct investment on youth labor markets. Formulated an Autoregressive Distributed Lag (ARDL) bounds testing procedure to determine cointegrating relationships across time series data, controlling for human capital and gross domestic product fluctuations.
              </p>

              {/* Key Deliverables Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>ARDL Modeling & SPSS Analysis:</strong> Verified long- and short-run dynamics, establishing cointegrating vectors with bounds testing exceeding 1% critical thresholds.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical Defense & Presentation:</strong> Presented findings at the university-wide AIU Seminar Day to faculty evaluation panels, capturing the highest distinction Platinum Award.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Actionable Policy Recommendations:</strong> Derived targeted policy recommendations on enhancing vocational alignment to maximize FDI absorptive capacity.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#research" className="btn-primary" style={{ fontSize: '13px', padding: '9px 18px' }}>
                  <span>Open Interactive ARDL Model</span>
                </a>
              </div>
            </div>

            {/* Right: Econometric Specification Framework Plaque */}
            <div
              style={{
                backgroundColor: '#264430',
                color: '#faf6f0',
                borderRadius: '18px',
                padding: '28px',
                border: '1px solid rgba(196, 166, 106, 0.45)',
                boxShadow: '0 10px 30px rgba(38, 68, 48, 0.18)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '11px', color: '#f8e0a8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700' }}>
                  Methodological Model Matrix
                </span>
                <span className="badge-honor" style={{ fontSize: '11px' }}>
                  Platinum 2025
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  backgroundColor: 'rgba(250, 246, 240, 0.08)',
                  padding: '14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(250, 246, 240, 0.15)',
                  marginBottom: '16px',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ color: '#f8e0a8', marginBottom: '4px' }}>// Long-Run Empirical Vector</div>
                <div>ln(Y_UNEMP) = β₀ + β₁ ln(FDI) + β₂ ln(GDP_G) + β₃ ln(SEC_ED) + ε</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: '#d5dcd2' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Pesaran Bounds F-Statistic:</span>
                  <strong style={{ color: '#f8e0a8' }}>6.42*** (Reject H₀)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Speed of Adjustment (ECM):</span>
                  <strong style={{ color: '#d9edd8' }}>-0.412 (p &lt; 0.01)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Model Goodness-of-Fit (R²):</span>
                  <strong style={{ color: '#ffffff' }}>0.884</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Data Source:</span>
                  <strong style={{ color: '#ffffff' }}>World Bank Open Data</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Digital Training Program for SMEs (MADA Partnership & RM5,000 Budget) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="editorial-card"
          style={{ padding: '32px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: '36px',
              alignItems: 'center',
            }}
            className="project-grid-reverse"
          >
            {/* Left: Project Governance Infographic Card */}
            <div
              style={{
                backgroundColor: '#f5f1ea',
                borderRadius: '18px',
                padding: '28px',
                border: '1px solid rgba(196, 166, 106, 0.35)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <DollarSign size={18} color="#705c30" />
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#705c30', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Grant Governance Breakdown
                </span>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#264430', lineHeight: 1 }}>
                  RM5,000
                </div>
                <div style={{ fontSize: '12px', color: '#74796e', marginTop: '4px' }}>
                  100% University-Funded Community Grant
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Institutional Partner:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Muda Agricultural Development Authority (MADA)</div>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Target Beneficiaries:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Local SMEs & Micro-Entrepreneurs in Alor Setar</div>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Curriculum Pillars:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Canva Design • E-Commerce • Social Media Ads</div>
                </div>
              </div>
            </div>

            {/* Right: Text Details */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span className="badge-honor" style={{ backgroundColor: '#264430', color: '#f8e0a8' }}>
                  <DollarSign size={13} />
                  <span>RM5,000 University-Funded Grant</span>
                </span>
                <span className="badge-tag-warm" style={{ background: '#ffffff', borderColor: '#4a7c59', color: '#4a7c59' }}>
                  MADA (Muda Agricultural Development Authority)
                </span>
                <span className="badge-tag-warm">Final Year Community Project • Alor Setar (2025)</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#264430', marginBottom: '12px' }}>
                Digital Training Program for Local SMEs
              </h3>

              <div style={{ fontSize: '13px', color: '#74796e', marginBottom: '16px' }}>
                📍 Alor Setar, Kedah • Project Director & Lead Trainer
              </div>

              <p style={{ fontSize: '14.5px', color: '#4a4e4a', lineHeight: 1.68, marginBottom: '20px' }}>
                Spearheaded a comprehensive digital empowerment curriculum for small and medium-sized enterprises (SMEs) to bridge the digital skills gap and accelerate online business acquisition. Orchestrated end-to-end program governance, from stakeholder needs assessments to curriculum rollout and financial reconciliation.
              </p>

              {/* Key Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#c4a66a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical Needs Assessment:</strong> Conducted structured field surveys and in-depth interviews with local entrepreneurs to formulate customized learning pathways.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#c4a66a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Multi-Disciplinary Training:</strong> Instructed business owners in Canva graphic design, social media conversion funnels, brand storytelling, and e-commerce listing management.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#c4a66a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Financial & Institutional Governance:</strong> Managed a RM5,000 university grant with zero budget variance, collaborating directly with MADA officials on logistics and venue delivery.</span>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="badge-taxonomy">SME Digitalization</span>
                <span className="badge-taxonomy">Curriculum Design</span>
                <span className="badge-taxonomy">Canva & Social Media</span>
                <span className="badge-taxonomy">Budget Governance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-grid, .project-grid-reverse {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
