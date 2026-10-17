import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  FileText,
  Award,
  Play,
  Film,
  Camera,
  TrendingUp,
  Linkedin,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const linkedinUrl = 'https://www.linkedin.com/in/mosaab-mohammed-0289b2275';
  const portfolioDeckUrl = 'https://drive.google.com/file/d/1j_jt-twpKlI4EB9TwqnRfUCj7CcjdJih/view?usp=sharing';

  // Multi-camera viewfinder switcher for Mosaab's portrait
  const cameraFeeds = [
    {
      id: 'cam-a',
      code: 'CAM A // CINEMA RIG',
      label: 'On-Set Director & Camera Op',
      src: '/mosab/raw/img_123_obj1636_1108x960.jpg',
      lens: 'Canon Cinema EOS • 24-70mm f/2.8L • Benro Fluid Head',
      timecode: '00:24:18:09',
      caption: 'Framing principal photography on location — combining narrative blocking, tripod/gimbal operation, and live audio monitoring.',
      objectPosition: 'center top',
    },
    {
      id: 'cam-b',
      code: 'CAM B // EXECUTIVE',
      label: 'Executive Studio Portrait',
      src: '/mosab/raw/img_004_obj1153_319x628.jpg',
      lens: '85mm Prime Portrait • Studio Key Light • ISO 200',
      timecode: '01:08:42:00',
      caption: 'Mosaab Mohammed Adam — Digital Marketing Executive & Media and Communication (Honours) Graduate at Albukhary International University.',
      objectPosition: 'center top',
    },
    {
      id: 'cam-c',
      code: 'CAM C // GIMBAL OP',
      label: 'Night Shoot 3-Axis Stabilizer',
      src: '/mosab/raw/img_035_obj1264_576x768.jpg',
      lens: '35mm Anamorphic • 3-Axis Gimbal • Night Exterior',
      timecode: '02:14:55:21',
      caption: 'Operating a 3-axis motorized gimbal during night exterior sequences for the narrative drama short film "The Wake-Up Call" (2024).',
      objectPosition: 'center center',
    },
  ];

  const [activeCamIndex, setActiveCamIndex] = useState(0);
  const activeCam = cameraFeeds[activeCamIndex];

  const disciplines = [
    'Digital Marketing',
    'Video Editing',
    'Graphic Design',
    'Filmmaking & Docs',
    'Social Media Management',
    'Broadcast Journalism',
  ];

  const metrics = [
    {
      num: '+110.3%',
      label: 'Brand Reach Growth',
      sub: 'Founder, Visual7vibes • 530 Accounts Reached & 83.8% Reels Mix',
      accent: '#d93829',
    },
    {
      num: 'CRFM2025',
      label: 'Copyright Registered Film',
      sub: 'Malaysia Copyright Act 1987 (No. CRFM2025P01130 • 24-Min Documentary)',
      accent: '#c88a32',
    },
    {
      num: '2 Global',
      label: 'Marketing & Design Roles',
      sub: 'KLEM Wellness (KL Eco City) & Rabita Center Australia (Remote)',
      accent: '#1e4d3b',
    },
    {
      num: '06 Films',
      label: 'Broadcast & PR Productions',
      sub: 'Short Film, Heritage Documentary, TV News & Sustainability PR',
      accent: '#7c5216',
    },
  ];

  return (
    <section
      id="hero"
      style={{
        paddingTop: '112px',
        paddingBottom: '72px',
        position: 'relative',
        backgroundColor: 'var(--canvas-bg)',
        backgroundImage: 'radial-gradient(rgba(30, 77, 59, 0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container">
        {/* Top Broadcast & Credentials Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '22px',
          }}
        >
          <span className="badge-crimson">
            <span className="tally-dot"></span>
            <span>REC • Open for Digital Marketing, Video Editing & Media Roles</span>
          </span>

          <a
            href="#research"
            className="badge-honor"
            style={{ textDecoration: 'none' }}
          >
            <Award size={13} color="#f3c677" />
            <span>Malaysia Copyright Act 1987 Registered Filmmaker (CRFM2025P01130)</span>
          </a>

          <span className="badge-tag-warm" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={12} color="#1e4d3b" />
            <span>Kuala Lumpur, Malaysia • EN & AR Fluency</span>
          </span>
        </motion.div>

        {/* Main 12-Column Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'stretch',
          }}
        >
          {/* Left 7 Columns: Executive Identity & Storyteller Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            className="hero-left-col"
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#1e4d3b',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>MOSAAB MOHAMMED ADAM</span>
                <span style={{ color: '#c88a32' }}>//</span>
                <span>DIGITAL MARKETING EXECUTIVE & FILMMAKER</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(34px, 4.5vw, 54px)',
                  fontWeight: 700,
                  lineHeight: 1.09,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)',
                  marginBottom: '18px',
                }}
              >
                Purposeful Storytelling Across{' '}
                <span className="serif-italic" style={{ color: '#1e4d3b', fontWeight: 600 }}>
                  Cinema, Broadcast
                </span>{' '}
                & Digital Growth.
              </h1>

              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  maxWidth: '650px',
                }}
              >
                <strong>Media and Communication (Honours)</strong> graduate from{' '}
                <strong>Albukhary International University (AIU)</strong> with hands-on leadership across corporate digital marketing, narrative & expository filmmaking, broadcast news reporting, and brand design. Currently serving as{' '}
                <strong>Digital Marketing Executive at KLEM Wellness (KL Eco City)</strong> and{' '}
                <strong>Graphic Designer & Content Writer at Rabita Center Australia (Remote)</strong>.
              </p>

              {/* 6 Discipline Pills from Portfolio Cover */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '26px',
                }}
              >
                {disciplines.map((d, i) => (
                  <span
                    key={d}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 13px',
                      borderRadius: '9999px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      backgroundColor: i === 0 ? '#1e4d3b' : '#ffffff',
                      color: i === 0 ? '#ffffff' : 'var(--text-primary)',
                      border: i === 0 ? '1px solid #112e23' : '1px solid rgba(26, 23, 20, 0.15)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <CheckCircle2 size={12} color={i === 0 ? '#f3c677' : '#1e4d3b'} />
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary & Secondary Action Suite */}
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '11px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-hairline)',
                }}
              >
                <a href="#research" className="btn-crimson">
                  <Play size={15} fill="#ffffff" />
                  <span>Enter Screening Room (4 Films)</span>
                </a>

                <button onClick={onOpenResume} className="btn-primary">
                  <FileText size={15} color="#f3c677" />
                  <span>Interactive Resume</span>
                </button>

                <a
                  href="/Mosaab_Adam_Resume.pdf"
                  download="Mosaab_Mohammed_Adam_Resume.pdf"
                  className="btn-secondary"
                >
                  <Download size={15} color="#1e4d3b" />
                  <span>Download CV</span>
                </a>

                <a
                  href={portfolioDeckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  title="Open 21-Page Creative Portfolio Deck on Google Drive"
                >
                  <ExternalLink size={15} color="#c88a32" />
                  <span>21-Page Deck</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    borderColor: 'rgba(10, 102, 194, 0.3)',
                    color: '#0a66c2',
                  }}
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right 5 Columns: Interactive Director's Viewfinder Monitor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            style={{ gridColumn: 'span 5' }}
            className="hero-right-col"
          >
            <div
              className="cinema-card"
              style={{
                height: '100%',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(155deg, #141210 0%, #1f1c18 100%)',
                border: '1px solid rgba(200, 138, 50, 0.35)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Viewfinder Telemetry Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span className="tally-dot" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#f6f2ea',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {activeCam.code}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#f3c677',
                    backgroundColor: 'rgba(200, 138, 50, 0.16)',
                    padding: '3px 9px',
                    borderRadius: '6px',
                    border: '1px solid rgba(200, 138, 50, 0.35)',
                  }}
                >
                  TC {activeCam.timecode} • 24FPS
                </div>
              </div>

              {/* Viewfinder Viewport with Reticle Brackets */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '330px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(246, 242, 234, 0.18)',
                  backgroundColor: '#0c0b09',
                  marginBottom: '12px',
                }}
              >
                <img
                  src={activeCam.src}
                  alt={activeCam.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: activeCam.objectPosition,
                    display: 'block',
                    transition: 'all 0.35s ease',
                  }}
                />

                {/* Corner Viewfinder Reticles */}
                <div
                  style={{
                    position: 'absolute',
                    inset: '12px',
                    pointerEvents: 'none',
                    border: '1px dashed rgba(246, 242, 234, 0.22)',
                    borderRadius: '8px',
                  }}
                />

                {/* Bottom Gradient Overlay inside Monitor */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '14px',
                    background: 'linear-gradient(to top, rgba(14, 12, 10, 0.94) 0%, rgba(14, 12, 10, 0.55) 70%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10.5px',
                      color: '#f3c677',
                      marginBottom: '3px',
                    }}
                  >
                    {activeCam.lens}
                  </div>
                  <div
                    style={{
                      fontSize: '12.5px',
                      color: '#f6f2ea',
                      lineHeight: 1.4,
                    }}
                  >
                    {activeCam.caption}
                  </div>
                </div>
              </div>

              {/* Multi-Camera Angle Switcher Buttons */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                }}
              >
                {cameraFeeds.map((cam, idx) => {
                  const isSelected = idx === activeCamIndex;
                  return (
                    <button
                      key={cam.id}
                      onClick={() => setActiveCamIndex(idx)}
                      style={{
                        padding: '8px 10px',
                        borderRadius: '9px',
                        border: isSelected
                          ? '1px solid #f3c677'
                          : '1px solid rgba(246, 242, 234, 0.14)',
                        backgroundColor: isSelected
                          ? 'rgba(200, 138, 50, 0.22)'
                          : 'rgba(255, 255, 255, 0.04)',
                        color: isSelected ? '#f3c677' : '#c7bfb2',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.18s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                        <Camera size={11} color={isSelected ? '#f3c677' : '#9c9284'} />
                        <span>CAM 0{idx + 1}</span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '11px',
                          color: '#f6f2ea',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {cam.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Executive & Production Telemetry Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="grid-4"
          style={{ marginTop: '32px' }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="editorial-card"
              style={{
                padding: '22px 24px',
                borderTop: `3px solid ${m.accent}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  className="tnum"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 800,
                    color: m.accent,
                    lineHeight: 1.1,
                    marginBottom: '6px',
                  }}
                >
                  {m.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {m.label}
                </div>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                {m.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-left-col, .hero-right-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
