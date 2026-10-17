import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Languages,
  Award,
  FileText,
  Download,
  CheckCircle2,
  Camera,
} from 'lucide-react';

export default function About({ onOpenResume }) {
  const coursework = [
    'Broadcast Features & Documentaries (EMC2133)',
    'Management & Production of Aesthetic Presentation (EMC3213)',
    'Television & Broadcast Journalism',
    'Public Relations & Strategic Campaign Management',
    'Digital Media Production & Visual Branding',
    'Bilingual Investigative Reporting (English & Arabic)',
    'Non-Linear Video Editing & Sound Design',
    'Social Media Analytics & Content Strategy',
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="grid-12" style={{ alignItems: 'stretch' }}>
          {/* Left 7 Columns: Education & Academic Profile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }}
            className="about-left"
          >
            <div>
              <div className="section-eyebrow">
                <GraduationCap size={14} color="#1e4d3b" />
                <span>Academic Foundation & Storyteller Identity</span>
              </div>
              <h2 className="section-title">
                Bachelor of Media &{' '}
                <span className="serif-italic" style={{ color: '#1e4d3b' }}>
                  Communication (Honours)
                </span>
              </h2>
              <p className="section-subtitle">
                Trained at <strong>Albukhary International University (AIU)</strong> in Alor Setar, Malaysia, blending rigorous media theory with end-to-end cinema, broadcast newsroom, and public relations execution.
              </p>
            </div>

            {/* University Card */}
            <div
              className="editorial-card"
              style={{
                padding: '28px',
                backgroundColor: 'var(--canvas-bg)',
                borderLeft: '4px solid #1e4d3b',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <span className="badge-sage">Mar 2023 – Mar 2026</span>
                <span className="badge-honor">
                  <Award size={12} color="#f3c677" />
                  <span>Copyright Registered Co-Author (CRFM2025P01130)</span>
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', marginBottom: '4px' }}>
                Albukhary International University (AIU)
              </h3>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e4d3b', marginBottom: '14px' }}>
                Bachelor of Media and Communication (Honours) • School of Education & Human Sciences
              </div>

              <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '18px' }}>
                Completed a comprehensive honours curriculum spanning documentary filmmaking, studio & field broadcast journalism, public relations campaign management, and corporate multimedia branding. Co-authored the 24-minute documentary{' '}
                <em>“Keris: Supremacy of Legacy”</em>, officially registered under the Malaysia Copyright Act 1987.
              </p>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                CORE PRODUCTION & MEDIA MODULES:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                }}
                className="coursework-grid"
              >
                {coursework.map((c) => (
                  <div
                    key={c}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 11px',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(26, 23, 20, 0.1)',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle2 size={14} color="#1e4d3b" style={{ flexShrink: 0 }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: Storyteller Bio, Bilingual Fluency & Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '20px' }}
            className="about-right"
          >
            <div
              className="editorial-card"
              style={{
                padding: '26px',
                backgroundColor: 'var(--canvas-bg)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px 1fr',
                    gap: '16px',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '110px',
                      height: '135px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '2px solid #1e4d3b',
                    }}
                  >
                    <img
                      src="/mosab/raw/img_004_obj1153_319x628.jpg"
                      alt="Mosaab Mohammed Adam"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: '#d93829',
                        fontWeight: 700,
                        marginBottom: '4px',
                      }}
                    >
                      ABOUT ME // STORYTELLER
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', marginBottom: '4px' }}>
                      Mosaab Mohammed Adam
                    </h3>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      Digital Marketing Executive, Multimedia Producer & Media Honours Graduate based in Kuala Lumpur.
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                  “I am passionate about using media to tell powerful and purposeful stories. With hands-on experience in documentaries, short films, news reporting, awareness campaigns, and digital content creation, I combine strong storytelling skills with technical expertise to produce engaging and impactful media.”
                </p>

                {/* Bilingual Fluency Card */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(26, 23, 20, 0.12)',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#1e4d3b',
                      marginBottom: '8px',
                    }}
                  >
                    <Languages size={14} />
                    <span>BILINGUAL PROFESSIONAL FLUENCY</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div style={{ padding: '8px 10px', borderRadius: '8px', backgroundColor: 'var(--canvas-bg)' }}>
                      <div style={{ fontWeight: 700, fontSize: '13.5px' }}>English</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Professional Fluency (Broadcast, Copywriting & PR)
                      </div>
                    </div>
                    <div style={{ padding: '8px 10px', borderRadius: '8px', backgroundColor: 'var(--canvas-bg)' }}>
                      <div style={{ fontWeight: 700, fontSize: '13.5px' }}>Arabic (العربية)</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        Native / Professional Fluency (Journalism & Media)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <button onClick={onOpenResume} className="btn-primary" style={{ flex: 1 }}>
                  <FileText size={15} color="#f3c677" />
                  <span>Open Full Resume</span>
                </button>
                <a
                  href="/Mosaab_Adam_Resume.pdf"
                  download="Mosaab_Mohammed_Adam_Resume.pdf"
                  className="btn-secondary"
                >
                  <Download size={15} color="#1e4d3b" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-left, .about-right {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .coursework-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
