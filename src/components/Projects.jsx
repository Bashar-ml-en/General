import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Trophy,
  DollarSign,
  CheckCircle,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users,
  Building2,
} from 'lucide-react';

export default function Projects() {
  // Lightbox State for Community Project Photos
  const [activeCommunityPhotoIndex, setActiveCommunityPhotoIndex] = useState(null);

  const communityPhotos = [
    {
      id: 'mada-cohort',
      src: '/community-project/mada-sme-cohort.jpg',
      title: 'Program Latihan Digital Usahawan — Complete Cohort & Faculty',
      subtitle: 'AIU Auditorium • In Collaboration with MADA',
      caption: 'Alhassan Ibrahim (center, in Digital Spark team navy shirt) with local SME participants, faculty advisors, and MADA leadership under the official auditorium screen: "Program Latihan Digital Usahawan (Digital Spark, Creating Impact)".',
      badge: 'Participant Cohort & Faculty',
    },
    {
      id: 'mada-committee',
      src: '/community-project/mada-organizing-committee.jpg',
      title: 'Organizing Committee & MADA Institutional Leadership',
      subtitle: 'Muda Agricultural Development Authority (MADA) Partnership',
      caption: 'Project organizing committee and lead trainers giving the thumbs-up with senior MADA leadership and academic advisors following successful delivery of the SME training program.',
      badge: 'MADA Leadership & Committee',
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeCommunityPhotoIndex === null) return;
      if (e.key === 'Escape') setActiveCommunityPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveCommunityPhotoIndex((prev) => (prev + 1) % communityPhotos.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveCommunityPhotoIndex((prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCommunityPhotoIndex]);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <div className="section-eyebrow">
            <Trophy size={14} color="#c4a66a" />
            <span>Empirical Research & Community Leadership</span>
          </div>
          <h2 className="section-title">
            Key Projects & <span className="serif-italic" style={{ color: '#4a7c59' }}>Measurable Impact</span>
          </h2>
          <p className="section-subtitle">
            From award-winning macroeconomic modeling to directing a university-funded SME digital training initiative in direct partnership with Malaysian government authorities.
          </p>
        </div>

        {/* Project 1: Final Year Research Project (Thailand FDI & ARDL) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="editorial-card"
          style={{ padding: '32px', marginBottom: '40px' }}
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

              <h3 style={{ fontSize: '1.65rem', fontWeight: '600', color: '#264430', marginBottom: '12px' }}>
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
                  <span>Open Interactive ARDL Model & Award Evidence</span>
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
                  marginBottom: '16px',
                  color: '#d5dcd2',
                  lineHeight: 1.5,
                  border: '1px solid rgba(250, 246, 240, 0.12)',
                }}
              >
                ln(Y_UNEMP) = β₀ + β₁ ln(FDI) + β₂ ln(GDP_PC) + β₃ (SEC_ENROLL) + εₜ
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(250, 246, 240, 0.12)', paddingBottom: '6px' }}>
                  <span style={{ color: '#d5dcd2' }}>Bounds Test F-Statistic:</span>
                  <span style={{ color: '#f8e0a8', fontWeight: '700' }}>6.42*** (&gt; 4.35 Upper Bound)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(250, 246, 240, 0.12)', paddingBottom: '6px' }}>
                  <span style={{ color: '#d5dcd2' }}>Error Correction Speed:</span>
                  <span style={{ color: '#f8e0a8', fontWeight: '700' }}>-0.412 (p &lt; 0.01)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(250, 246, 240, 0.12)', paddingBottom: '6px' }}>
                  <span style={{ color: '#d5dcd2' }}>Diagnostic Stability:</span>
                  <span style={{ color: '#93c5fd', fontWeight: '700' }}>CUSUM / CUSUMSQ Stable</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#d5dcd2' }}>Data Source:</span>
                  <span style={{ color: '#faf6f0' }}>World Bank Macro Datasets</span>
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
          {/* Card Top Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
            <span className="badge-honor" style={{ backgroundColor: '#264430', color: '#f8e0a8' }}>
              <DollarSign size={13} />
              <span>RM5,000 University-Funded Community Grant</span>
            </span>
            <span className="badge-tag-warm" style={{ background: '#ffffff', borderColor: '#4a7c59', color: '#4a7c59', fontWeight: '700' }}>
              MADA (Muda Agricultural Development Authority)
            </span>
            <span className="badge-tag-warm">Program Latihan Digital Usahawan PKS • 2025</span>
          </div>

          <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#264430', marginBottom: '6px' }}>
            Digital Training Program for Local SMEs (Program Latihan Digital Usahawan)
          </h3>

          <div style={{ fontSize: '13px', color: '#74796e', marginBottom: '20px' }}>
            📍 AIU Auditorium & Alor Setar, Kedah • Project Director & Lead Trainer
          </div>

          <p style={{ fontSize: '14.5px', color: '#4a4e4a', lineHeight: 1.68, marginBottom: '26px', maxWidth: '960px' }}>
            Spearheaded a comprehensive digital empowerment curriculum titled <strong>"Program Latihan Digital Usahawan (Digital Spark, Creating Impact)"</strong> for small and medium-sized enterprises (SMEs) to bridge the digital skills gap and accelerate online business acquisition. Orchestrated end-to-end program governance with the <strong>Muda Agricultural Development Authority (MADA)</strong>, from field stakeholder needs assessments to auditorium curriculum rollout and complete financial reconciliation.
          </p>

          {/* Photographic Evidence Grid: MADA Training Program */}
          <div
            style={{
              backgroundColor: '#faf6f0',
              border: '1px solid rgba(196, 166, 106, 0.35)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} color="#705c30" />
                <h4 style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264430', margin: 0 }}>
                  Field Photographic Evidence & Delivery Documentation (2 Photos)
                </h4>
              </div>
              <span style={{ fontSize: '12px', color: '#705c30', fontStyle: 'italic' }}>
                Click to inspect full resolution
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '18px',
              }}
              className="community-photo-grid"
            >
              {communityPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => setActiveCommunityPhotoIndex(idx)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid rgba(74, 124, 89, 0.16)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="community-photo-card"
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '220px',
                      backgroundColor: '#16271c',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        transition: 'transform 0.35s ease',
                      }}
                      className="community-img-zoom"
                    />

                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(22, 39, 28, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#faf6f0',
                        fontSize: '10.5px',
                        fontWeight: '700',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(196, 166, 106, 0.4)',
                      }}
                    >
                      {photo.badge}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#264430',
                        borderRadius: '6px',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      }}
                    >
                      <Maximize2 size={13} />
                    </div>
                  </div>

                  <div style={{ padding: '14px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h5 style={{ fontSize: '13.5px', fontWeight: '700', color: '#264430', marginBottom: '4px', lineHeight: 1.35 }}>
                        {photo.title}
                      </h5>
                      <div style={{ fontSize: '11.5px', color: '#705c30', fontWeight: '600', marginBottom: '6px' }}>
                        {photo.subtitle}
                      </div>
                      <p style={{ fontSize: '12px', color: '#4a4e4a', lineHeight: 1.45, margin: 0 }}>
                        {photo.caption}
                      </p>
                    </div>

                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(74, 124, 89, 0.08)', fontSize: '11px', color: '#4a7c59', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Maximize2 size={11} /> Click to expand
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Column Details: Governance Metrics on Left, Bullet Highlights on Right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.85fr 1.15fr',
              gap: '32px',
              alignItems: 'start',
            }}
            className="project-grid-reverse"
          >
            {/* Left: Project Governance Infographic Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
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
                  100% University-Funded Community Grant • 0% Variance
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                <div style={{ backgroundColor: '#faf6f0', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Institutional Partner:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Muda Agricultural Development Authority (MADA)</div>
                </div>
                <div style={{ backgroundColor: '#faf6f0', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Target Beneficiaries:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Local SMEs & Micro-Entrepreneurs in Alor Setar</div>
                </div>
                <div style={{ backgroundColor: '#faf6f0', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(74, 124, 89, 0.12)' }}>
                  <strong style={{ color: '#264430' }}>Curriculum Pillars:</strong>
                  <div style={{ color: '#4a4e4a', fontSize: '12px' }}>Canva Design • E-Commerce • Social Media Marketing</div>
                </div>
              </div>
            </div>

            {/* Right: Key Highlights */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Empirical Needs Assessment:</strong> Conducted structured field surveys and in-depth interviews with local entrepreneurs to formulate customized learning pathways.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Multi-Disciplinary Training:</strong> Instructed business owners in Canva graphic design, social media conversion funnels, brand storytelling, and e-commerce listing management.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#2e3230' }}>
                  <CheckCircle size={16} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
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

      {/* =========================================================================
          LIGHTBOX MODAL FOR COMMUNITY PROJECT PHOTOGRAPHS
          ========================================================================= */}
      <AnimatePresence>
        {activeCommunityPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCommunityPhotoIndex(null)}
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
                    {communityPhotos[activeCommunityPhotoIndex].badge}
                  </span>
                  <span style={{ fontSize: '13px', color: '#d5dcd2' }}>
                    Photo {activeCommunityPhotoIndex + 1} of {communityPhotos.length}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() =>
                      setActiveCommunityPhotoIndex(
                        (prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length
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
                      setActiveCommunityPhotoIndex(
                        (prev) => (prev + 1) % communityPhotos.length
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
                    title="Next"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <button
                    onClick={() => setActiveCommunityPhotoIndex(null)}
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
                  src={communityPhotos[activeCommunityPhotoIndex].src}
                  alt={communityPhotos[activeCommunityPhotoIndex].title}
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
                  {communityPhotos[activeCommunityPhotoIndex].title}
                </h4>
                <p style={{ fontSize: '13px', color: '#d5dcd2', lineHeight: 1.5, margin: 0 }}>
                  {communityPhotos[activeCommunityPhotoIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .community-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px rgba(38, 68, 48, 0.14) !important;
          border-color: rgba(74, 124, 89, 0.4) !important;
        }
        .community-photo-card:hover .community-img-zoom {
          transform: scale(1.04);
        }
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
