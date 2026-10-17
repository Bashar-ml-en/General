import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Film,
  Palette,
  TrendingUp,
  Sliders,
  CheckCircle2,
  Camera,
  Volume2,
  Layers,
} from 'lucide-react';

export default function Skills() {
  const [activeSuite, setActiveSuite] = useState('all');

  const softwareDock = [
    {
      code: 'Pr',
      name: 'Adobe Premiere Pro',
      category: 'video',
      color: '#9999ff',
      bg: '#1f1538',
      level: 'Expert NLE Editing',
      useCase: 'Multi-track cutting for 24-min Keris documentary, News Sphere, and The Wake-Up Call.',
    },
    {
      code: 'Ae',
      name: 'Adobe After Effects',
      category: 'video',
      color: '#c4b5fd',
      bg: '#1c1635',
      level: 'Motion & Chroma Key',
      useCase: 'Broadcast lower-thirds, title stingers, and green-screen studio keying.',
    },
    {
      code: 'DV',
      name: 'DaVinci Resolve',
      category: 'video',
      color: '#f3c677',
      bg: '#231c12',
      level: 'Color Grading & Finishing',
      useCase: 'Cinematic color grading, skin-tone matching, and film look LUT finishing.',
    },
    {
      code: 'CC',
      name: 'CapCut Pro & VN',
      category: 'video',
      color: '#6ee7b7',
      bg: '#11261e',
      level: 'High-Retention Reels',
      useCase: 'Short-form vertical reels for KLEM Wellness and Visual7vibes (+110.3% reach).',
    },
    {
      code: 'Au',
      name: 'Adobe Audition',
      category: 'video',
      color: '#5eead4',
      bg: '#0f2926',
      level: 'Sound Design & Mixing',
      useCase: 'Dialogue noise reduction, psychoacoustic dream soundscapes, and broadcast leveling.',
    },
    {
      code: 'Ps',
      name: 'Adobe Photoshop',
      category: 'design',
      color: '#60a5fa',
      bg: '#102238',
      level: 'Key Art & Manipulation',
      useCase: 'Theatrical film posters, KLEM clinical campaign graphics, and photo retouching.',
    },
    {
      code: 'Ai',
      name: 'Adobe Illustrator',
      category: 'design',
      color: '#fb923c',
      bg: '#2b180c',
      level: 'Vector & Brand Identity',
      useCase: 'Brand marks, typography lockups, and vector infographics for print & social.',
    },
    {
      code: 'Lr',
      name: 'Adobe Lightroom',
      category: 'design',
      color: '#38bdf8',
      bg: '#0f2332',
      level: 'RAW Photo Grading',
      useCase: 'Event photography batch processing and Visual7vibes skyline/nature color profiles.',
    },
    {
      code: 'Cv',
      name: 'Canva Pro',
      category: 'design',
      color: '#2dd4bf',
      bg: '#0f2828',
      level: 'Campaign Systems',
      useCase: 'Rapid social media carousels, corporate event flyers, and PR awareness posters.',
    },
    {
      code: 'Fg',
      name: 'Figma',
      category: 'design',
      color: '#f472b6',
      bg: '#2c1423',
      level: 'UI & Web Design',
      useCase: 'Interactive digital layouts, web design prototypes, and brand system components.',
    },
  ];

  const filteredTools =
    activeSuite === 'all'
      ? softwareDock
      : softwareDock.filter((t) => t.category === activeSuite);

  const pillars = [
    {
      icon: Film,
      title: 'Video Editing & Cinema Production',
      accent: '#d93829',
      items: [
        'Adobe Premiere Pro, After Effects, DaVinci Resolve, CapCut & VN',
        'Multi-Camera Documentary & Narrative Short Film Direction',
        '3-Axis Motorized Gimbal, Tripod & Studio Chroma-Key Lighting',
        'Psychoacoustic Sound Design & Dialogue Mastering (Adobe Audition)',
      ],
    },
    {
      icon: Palette,
      title: 'Graphic, Brand & Web Design',
      accent: '#1e4d3b',
      items: [
        'Adobe Photoshop, Illustrator, Lightroom, Canva Pro & Figma',
        'Theatrical Film Posters & Public Relations Campaign Systems',
        'Corporate Event Promotional Flyers & Clinical Service Infographics',
        'Consistent Visual Identity & Brand Voice Governance',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Content Strategy',
      accent: '#c88a32',
      items: [
        'End-to-End Social Media Strategy & Content Calendar Management',
        'High-Retention Short-Form Reels Production (83.8% Reels Reach Mix)',
        'Bilingual Content Writing & Investigative Journalism (English & Arabic)',
        'Audience Analytics, Brand Positioning & Web Design',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        backgroundColor: 'var(--canvas-bg)',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div className="section-eyebrow">
              <Sliders size={14} color="#1e4d3b" />
              <span>Technical Skills & Creative Software Dock</span>
            </div>
            <h2 className="section-title">
              Full-Cycle Post-Production, Design &{' '}
              <span className="serif-italic" style={{ color: '#1e4d3b' }}>
                Digital Marketing Toolkit
              </span>
            </h2>
            <p className="section-subtitle">
              Industry-standard proficiency across the Adobe Creative Cloud suite, DaVinci Resolve, Figma, and multi-platform social growth workflows.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'All 10 Tools' },
              { id: 'video', label: 'Video & Audio NLE' },
              { id: 'design', label: 'Design & UI Suite' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSuite(tab.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '999px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  backgroundColor: activeSuite === tab.id ? '#1e4d3b' : '#ffffff',
                  color: activeSuite === tab.id ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid rgba(26, 23, 20, 0.14)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Software Dock Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '14px',
            marginBottom: '40px',
          }}
          className="software-dock-grid"
        >
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-card"
              style={{
                padding: '18px',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: tool.bg,
                      color: tool.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '16px',
                      fontWeight: 800,
                      border: `1.5px solid ${tool.color}`,
                    }}
                  >
                    {tool.code}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#1e4d3b',
                      backgroundColor: 'var(--primary-light)',
                      padding: '3px 8px',
                      borderRadius: '999px',
                    }}
                  >
                    {tool.level}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', marginBottom: '6px' }}>
                  {tool.name}
                </h3>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {tool.useCase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3 Core Competency Pillars from Resume */}
        <div className="grid-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="editorial-card"
                style={{
                  padding: '26px',
                  backgroundColor: '#ffffff',
                  borderTop: `3px solid ${p.accent}`,
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--canvas-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    border: '1px solid rgba(26, 23, 20, 0.1)',
                  }}
                >
                  <Icon size={20} color={p.accent} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginBottom: '14px' }}>
                  {p.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {p.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} color={p.accent} style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .software-dock-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .software-dock-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
