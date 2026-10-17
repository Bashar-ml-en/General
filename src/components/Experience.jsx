import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  Instagram,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Eye,
  Users,
  Video,
  Globe2,
} from 'lucide-react';

export default function Experience() {
  const [selectedCampaignAsset, setSelectedCampaignAsset] = useState(0);

  const klemAssets = [
    {
      title: 'Career Lifestyle & Success Empowerment Poster',
      role: 'Visual Design & Promotional Campaign',
      src: '/mosab/raw/img_018_obj1205_405x540.jpg',
      caption: 'Designed high-conversion executive training promotional poster for KLEM Corporate Care (Trillion Hotel KL).',
    },
    {
      title: 'Nutritional Therapies IV Services Infographic',
      role: 'Medical & Wellness Brand Design',
      src: '/mosab/raw/img_019_obj1207_488x608.jpg',
      caption: 'Created clinical service awareness graphics for KLEM Wellness maintaining brand identity and medical clarity.',
    },
    {
      title: 'On-Site Gimbal Event Videography (35mm Frame)',
      role: 'Multimedia Production & Reels Capture',
      src: '/mosab/raw/img_021_obj1211_454x608.jpg',
      caption: 'Capturing on-site corporate wellness events and short-form video reels in KL Eco City.',
    },
    {
      title: 'KLEM Clinics TikTok Channel (2,169 Followers • 11.2K Likes)',
      role: 'Social Media Management & Short-Form Video',
      src: '/mosab/raw/img_017_obj1203_425x463.jpg',
      caption: 'Managed content calendar and produced educational health & aesthetic reels on TikTok and Instagram.',
    },
  ];

  const visual7vibesScreenshots = [
    {
      label: 'Key Metrics (1,822 Post Views)',
      src: '/mosab/raw/img_113_obj1617_410x904.jpg',
    },
    {
      label: 'Audience Reach (530 • +110.3%)',
      src: '/mosab/raw/img_112_obj1616_406x737.jpg',
    },
    {
      label: 'TikTok Reels Feed (@visual7vibes)',
      src: '/mosab/raw/img_114_obj1619_359x791.jpg',
    },
    {
      label: 'Skyline & Nature Photography Grid',
      src: '/mosab/raw/img_119_obj1624_373x823.jpg',
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding"
      style={{
        backgroundColor: 'var(--canvas-bg)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Briefcase size={14} color="#1e4d3b" />
            <span>Professional Experience & Brand Growth Lab</span>
          </div>
          <h2 className="section-title">
            Executive Marketing, Multimedia Production &{' '}
            <span className="serif-italic" style={{ color: '#1e4d3b' }}>
              +110.3% Audience Growth
            </span>
          </h2>
          <p className="section-subtitle">
            Combining corporate digital marketing leadership in Kuala Lumpur and remote international brand communication in Australia with proven short-form video analytics.
          </p>
        </div>

        {/* Experience Timeline: Rabita Center Australia + KLEM Wellness */}
        <div className="grid-12" style={{ marginBottom: '48px', alignItems: 'stretch' }}>
          {/* Left 7 Columns: Role Cards */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }} className="exp-left-col">
            {/* Role 1: Rabita Center Australia */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-card"
              style={{
                padding: '28px',
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
                <span className="badge-sage">
                  <Globe2 size={12} />
                  <span>Mar 2026 – Present • Remote (Australia)</span>
                </span>
                <span className="badge-tag-warm">Brand Design & Publications</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', marginBottom: '4px' }}>
                Graphic Designer & Content Writer
              </h3>
              <div
                style={{
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: '#1e4d3b',
                  marginBottom: '14px',
                }}
              >
                Rabita Center Australia (Remote)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#1e4d3b" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <strong>Digital Visual Assets & Editorial Copy</strong>: Designed high-impact digital visual assets and wrote blog and publication content to support cross-platform brand outreach and community engagement.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#1e4d3b" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <strong>Brand Identity Governance</strong>: Maintained a cohesive brand voice, typographic hierarchy, and visual identity system across all published digital and print materials.
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Role 2: KLEM Wellness */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-card"
              style={{
                padding: '28px',
                borderLeft: '4px solid #c88a32',
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
                <span className="badge-honor">
                  <span>Nov 2025 – Present • KL Eco City, Kuala Lumpur</span>
                </span>
                <span className="badge-tag-warm">Full Production Cycle</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', marginBottom: '4px' }}>
                Digital Marketing Executive ( & Multimedia Intern)
              </h3>
              <div
                style={{
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: '#7c5216',
                  marginBottom: '14px',
                }}
              >
                KLEM Wellness & KLEM Corporate Care — KL Eco City
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#c88a32" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <strong>Digital Marketing Strategy</strong>: Led the digital marketing strategy for KLEM Clinics, enhancing brand visibility, patient education, and multi-channel audience engagement.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#c88a32" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <strong>Content Calendar & Short-Form Video Reels</strong>: Developed and managed social media content calendars, capturing and editing on-site corporate event videos and medical promotional reels.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#c88a32" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                    <strong>Executive Concept-to-Delivery</strong>: Collaborated directly with clinic management on creative campaigns from initial storyboard to final multi-platform delivery.
                  </span>
                </div>
              </div>

              {/* Verified Managed Accounts Links */}
              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>
                  MANAGED CHANNELS:
                </span>
                <a
                  href="https://www.instagram.com/klemcorporatecare?igsh=cHkyOTR4Z3o1cW8z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  <Instagram size={13} color="#d93829" />
                  <span>@klemcorporatecare</span>
                </a>
                <a
                  href="https://www.instagram.com/klemclinics?igsh=MXIyanRhdjdrcXp3Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  <Instagram size={13} color="#d93829" />
                  <span>@klemclinics</span>
                </a>
                <a
                  href="https://www.tiktok.com/@klemclinics?_r=1&_t=ZS-96JAmBAEKrU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  <Video size={13} color="#1e4d3b" />
                  <span>TikTok @klemclinics</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right 5 Columns: Interactive KLEM Wellness Creative Deliverables Showcase */}
          <div style={{ gridColumn: 'span 5' }} className="exp-right-col">
            <div
              className="editorial-card"
              style={{
                height: '100%',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1e4d3b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  KLEM WELLNESS DELIVERABLES INSPECTOR
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', marginBottom: '12px' }}>
                  {klemAssets[selectedCampaignAsset].title}
                </h4>

                <div
                  style={{
                    width: '100%',
                    height: '330px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#141210',
                    border: '1px solid var(--border-hairline)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={klemAssets[selectedCampaignAsset].src}
                    alt={klemAssets[selectedCampaignAsset].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                  {klemAssets[selectedCampaignAsset].caption}
                </p>
              </div>

              {/* 4-Asset Thumbnail Switcher */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {klemAssets.map((asset, idx) => (
                  <button
                    key={asset.title}
                    onClick={() => setSelectedCampaignAsset(idx)}
                    style={{
                      padding: '4px',
                      borderRadius: '8px',
                      border:
                        idx === selectedCampaignAsset
                          ? '2px solid #1e4d3b'
                          : '1px solid rgba(26, 23, 20, 0.14)',
                      backgroundColor: idx === selectedCampaignAsset ? 'var(--primary-light)' : '#ffffff',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={asset.src}
                      alt={asset.title}
                      style={{
                        width: '100%',
                        height: '58px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        display: 'block',
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual7vibes — Founder & Content Creator Analytics Lab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="editorial-card-dark"
          style={{ padding: '32px' }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '26px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(246, 242, 234, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="/mosab/raw/img_111_obj1614_348x348.jpg"
                alt="Visual7vibes Brand Logo"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #f3c677',
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#f3c677',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  PERSONAL CREATIVE BRAND & ANALYTICS CASE STUDY
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#ffffff' }}>
                  Founder & Curator — Visual7vibes
                </h3>
                <p style={{ fontSize: '14px', color: '#c7bfb2', maxWidth: '640px' }}>
                  Multi-platform photography and short-form video reels brand across Instagram, TikTok, and Facebook specializing in urban skyline, nature imagery, and visual storytelling.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href="https://www.tiktok.com/@visual7vibes?_t=ZS-8yoHYT4m6r2&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson"
                style={{ padding: '9px 15px', fontSize: '12.5px' }}
              >
                <Video size={14} />
                <span>TikTok @visual7vibes</span>
              </a>
              <a
                href="https://www.instagram.com/visual7vibes?igsh=ZGpseHJrcjYxOWE4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '9px 15px', fontSize: '12.5px' }}
              >
                <Instagram size={14} color="#f3c677" />
                <span>Instagram @visual7vibes</span>
              </a>
              <a
                href="https://www.facebook.com/share/1B5NArgKFF/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '9px 15px', fontSize: '12.5px' }}
              >
                <ExternalLink size={14} />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>

          {/* Analytics Telemetry Strip + Content Mix Bar + Screenshots */}
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 6' }} className="v7-left">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '14px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(243, 198, 119, 0.25)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c7bfb2' }}>
                    ACCOUNTS REACHED (30 DAYS)
                  </div>
                  <div
                    className="tnum"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#f3c677',
                    }}
                  >
                    530 <span style={{ fontSize: '14px', color: '#6ee7b7' }}>↑ +110.3%</span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(246, 242, 234, 0.12)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c7bfb2' }}>
                    POST VIEWS (JUL 14 – AUG 10)
                  </div>
                  <div
                    className="tnum"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#ffffff',
                    }}
                  >
                    1,822 <span style={{ fontSize: '13px', color: '#6ee7b7' }}>+218.5%</span>
                  </div>
                </div>
              </div>

              {/* Content Distribution Breakdown */}
              <div
                style={{
                  padding: '18px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(20, 18, 16, 0.65)',
                  border: '1px solid rgba(246, 242, 234, 0.1)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#f3c677',
                    fontWeight: 700,
                    marginBottom: '12px',
                  }}
                >
                  VERIFIED CONTENT FORMAT DISTRIBUTION (1,132 REEL/POST VIEWS)
                </div>

                {[
                  { label: 'Short-Form Video Reels', pct: 83.8, color: '#d93829' },
                  { label: 'Carousel & Photography Posts', pct: 12.8, color: '#f3c677' },
                  { label: 'Interactive Stories', pct: 3.4, color: '#6ee7b7' },
                ].map((bar) => (
                  <div key={bar.label} style={{ marginBottom: '10px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12.5px',
                        color: '#e6dfd3',
                        marginBottom: '4px',
                      }}
                    >
                      <span>{bar.label}</span>
                      <span className="tnum" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        {bar.pct}%
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '7px',
                        borderRadius: '999px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${bar.pct}%`,
                          height: '100%',
                          backgroundColor: bar.color,
                          borderRadius: '999px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Columns: 4 Mobile Telemetry & Grid Screenshots */}
            <div
              style={{
                gridColumn: 'span 6',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
              }}
              className="v7-right"
            >
              {visual7vibesScreenshots.map((s) => (
                <div
                  key={s.label}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(246, 242, 234, 0.16)',
                    backgroundColor: '#0e0c0a',
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      padding: '6px 8px',
                      fontSize: '10.5px',
                      color: '#d8d0c3',
                      textAlign: 'center',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .exp-left-col, .exp-right-col, .v7-left, .v7-right {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .v7-right {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
