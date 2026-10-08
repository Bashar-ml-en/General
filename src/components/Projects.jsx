import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Trophy,
  Users,
  DollarSign,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Presentation,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

import workshopImg from '../../o1.jpeg';
import awardMedalImg from '../../o4.jpeg';

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <div className="section-eyebrow">
            <Trophy size={14} color="#c8a24a" />
            <span>Empirical Research & Community Leadership</span>
          </div>
          <h2 className="section-title">
            Key Projects & <span className="serif-italic">Measurable Impact</span>
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
                <span className="badge-teal">
                  <span className="status-dot"></span>
                  <span>ARDL Cointegration & SPSS</span>
                </span>
                <span className="badge-tag-warm">Seminar in Contemporary Economic Issues 2025</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '500', color: '#0b1f3a', marginBottom: '12px' }}>
                Investigating FDI's Role on Youth Unemployment in Thailand
              </h3>

              <div style={{ fontSize: '13px', color: '#75777e', marginBottom: '16px' }}>
                📍 Albukhary International University • Lead Independent Researcher
              </div>

              <p style={{ fontSize: '14.5px', color: '#44474d', lineHeight: 1.68, marginBottom: '20px' }}>
                Conducted rigorous applied macroeconomic research examining the structural impacts of foreign direct investment on youth labor markets. Formulated an Autoregressive Distributed Lag (ARDL) bounds testing procedure to determine cointegrating relationships across time series data, controlling for human capital and gross domestic product fluctuations.
              </p>

              {/* Key Deliverables Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#2a7f83" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>ARDL Modeling & SPSS Analysis:</strong> Verified long- and short-run dynamics, establishing cointegrating vectors with bounds testing exceeding 1% critical thresholds.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#2a7f83" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical Defense & Presentation:</strong> Presented findings at the university-wide AIU Seminar Day to faculty evaluation panels, capturing the highest distinction Platinum Award.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#2a7f83" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Actionable Policy Recommendations:</strong> Derived targeted policy recommendations on enhancing vocational alignment to maximize FDI absorptive capacity.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#research" className="btn-primary" style={{ fontSize: '13px', padding: '9px 18px' }}>
                  <span>Open Interactive ARDL Model</span>
                </a>
              </div>
            </div>

            {/* Right: Medal & Award Ceremony Photo */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(11, 31, 58, 0.12)',
                  aspectRatio: '4 / 5',
                  maxHeight: '400px',
                  backgroundColor: '#f1eee5',
                  boxShadow: 'var(--shadow-level-1)',
                }}
              >
                <img
                  src={awardMedalImg}
                  alt="Alhassan Ibrahim celebrating Gold / Platinum Award"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '16px',
                  backgroundColor: '#0b1f3a',
                  color: '#fdf9f0',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid rgba(200, 162, 74, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(11, 31, 58, 0.25)',
                }}
              >
                <Award size={14} color="#ffd577" />
                <span>Award-Winning Empirical Defense</span>
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
            {/* Left: Workshop Training Action Photo */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(11, 31, 58, 0.12)',
                  aspectRatio: '3 / 4',
                  maxHeight: '420px',
                  backgroundColor: '#f1eee5',
                  boxShadow: 'var(--shadow-level-1)',
                }}
              >
                <img
                  src={workshopImg}
                  alt="Alhassan Ibrahim delivering digital training workshop"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '16px',
                  backgroundColor: '#fdf9f0',
                  color: '#0b1f3a',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid rgba(11, 31, 58, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(11, 31, 58, 0.1)',
                }}
              >
                <Users size={14} color="#2a7f83" />
                <span>Field Training & Public Facilitation</span>
              </div>
            </div>

            {/* Right: Text Details */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span className="badge-honor" style={{ backgroundColor: '#785a00', color: '#fff' }}>
                  <DollarSign size={13} />
                  <span>RM5,000 University-Funded Grant</span>
                </span>
                <span className="badge-tag-warm" style={{ background: '#fff', borderColor: '#2a7f83', color: '#2a7f83' }}>
                  MADA (Muda Agricultural Development Authority)
                </span>
                <span className="badge-tag-warm">Final Year Community Project • Alor Setar (2025)</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: '500', color: '#0b1f3a', marginBottom: '12px' }}>
                Digital Training Program for Local SMEs
              </h3>

              <div style={{ fontSize: '13px', color: '#75777e', marginBottom: '16px' }}>
                📍 Alor Setar, Kedah • Project Director & Lead Trainer
              </div>

              <p style={{ fontSize: '14.5px', color: '#44474d', lineHeight: 1.68, marginBottom: '20px' }}>
                Spearheaded a comprehensive digital empowerment curriculum for small and medium-sized enterprises (SMEs) to bridge the digital skills gap and accelerate online business acquisition. Orchestrated end-to-end program governance, from stakeholder needs assessments to curriculum rollout and financial reconciliation.
              </p>

              {/* Key Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#c8a24a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical Needs Assessment:</strong> Conducted structured field surveys and in-depth interviews with local entrepreneurs to formulate customized learning pathways.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#c8a24a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Multi-Disciplinary Training:</strong> Instructed business owners in Canva graphic design, social media conversion funnels, brand storytelling, and e-commerce listing management.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#333' }}>
                  <CheckCircle size={16} color="#c8a24a" style={{ flexShrink: 0, marginTop: '3px' }} />
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
