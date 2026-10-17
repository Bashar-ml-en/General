import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  Tv,
  Megaphone,
  Play,
  ExternalLink,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  Instagram,
  Camera,
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxState, setLightboxState] = useState(null); // { gallery: [], index: 0, projectTitle: '' }

  const projects = [
    {
      id: 'project-01',
      number: 'PROJECT 01',
      year: '2024',
      category: 'Filmmaking & Docs',
      title: 'The Wake-Up Call',
      subtitle: 'Narrative Drama Short Film • School of Education & Human Sciences',
      roles: ['Ideation', 'Assistant Director', 'Camera Operator', 'Editor', 'Sound Designer', 'Scriptwriter'],
      description:
        '"The Wake-Up Call" is a drama short film following Ethan, a student overwhelmed by academic pressure and the fear of failure. Through vivid subconscious dream sequences reflecting his inner struggles, the film delivers a metaphorical journey of self-realization, resilience, and personal growth.',
      watchUrl: 'https://drive.google.com/file/d/1ktc6RzY5P2w9QQtPVsFYROA-vSgbPH5U/view?usp=sharing',
      watchLabel: 'Watch Short Film',
      badge: '6 Production Credits',
      cover: '/mosab/raw/img_022_obj1229_763x1080.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_022_obj1229_763x1080.jpg',
          title: 'Official Poster — "The Wake-Up Call" (2024)',
          caption: 'Official theatrical poster presented by Bridge to Connect Productions.',
        },
        {
          src: '/mosab/raw/img_031_obj1252_1280x960.jpg',
          title: 'Premiere Screening Cohort & Production Crew',
          caption: 'Mosaab Mohammed (left) with the cast and crew of "The Wake-Up Call" at the official campus showcase.',
        },
        {
          src: '/mosab/raw/img_033_obj1260_480x640.jpg',
          title: 'Mosaab Mohammed with Official Film Poster',
          caption: 'Holding the official poster featuring credits for Camera Operator, Assistant Director, Editor, and Scriptwriter.',
        },
        {
          src: '/mosab/raw/img_035_obj1264_576x768.jpg',
          title: 'Behind the Scenes: 3-Axis Gimbal Night Shoot',
          caption: 'Operating the motorized stabilizer during night exterior tracking sequences.',
        },
        {
          src: '/mosab/raw/img_034_obj1262_576x768.jpg',
          title: 'Behind the Scenes: Night Exterior Camera Blocking',
          caption: 'Directing and framing dramatic night sequences on campus.',
        },
        {
          src: '/mosab/raw/img_038_obj1270_693x520.jpg',
          title: 'Post-Production: Multi-Track NLE & Color Grading',
          caption: 'Editing and Lumetri color grading inside Adobe Premiere Pro.',
        },
      ],
    },
    {
      id: 'project-02',
      number: 'PROJECT 02',
      year: '2023 • Copyright 2025',
      category: 'Filmmaking & Docs',
      title: 'Keris: Supremacy of Legacy',
      subtitle: '24-Minute Expository Documentary Film • Baling, Malaysia',
      roles: ['Assistant Cameraman', 'Scriptwriter', 'Behind the Scene Producer'],
      description:
        'A 24-minute expository documentary exploring traditional Keris craftsmanship in Baling, Malaysia. Divided into three acts — "The Story Begins," "Keris History, Philosophy & Design," and "Cultural Impact" — officially registered under the Malaysia Copyright Act 1987 (Notification No: CRFM2025P01130).',
      watchUrl: 'https://drive.google.com/file/d/1WzH__K8pnoDRLpCpNWZC1Tvvvr3L1Kh3/view?usp=sharing',
      watchLabel: 'Watch 24-Min Documentary',
      badge: 'Copyright Act 1987 (CRFM2025P01130)',
      cover: '/mosab/raw/img_042_obj1290_927x1311.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_042_obj1290_927x1311.jpg',
          title: 'Official Documentary Poster — "Keris: Supremacy of Legacy"',
          caption: 'Official poster crediting Mosaab Mohammed Adam under Broadcast Features and Documentaries (EMC2133).',
        },
        {
          src: '/mosab/raw/img_044_obj1311_828x1167.jpg',
          title: 'Certificate of Copyright Notification (CRFM2025P01130)',
          caption: 'Official registration under the Malaysia Copyright Act 1987 (26 February 2025).',
        },
        {
          src: '/mosab/raw/img_046_obj1323_782x439.jpg',
          title: 'Master Craftsman Inspecting Traditional Keris Blade',
          caption: 'Documentary interview and close-up blade inspection in Baling, Kedah.',
        },
        {
          src: '/mosab/raw/img_050_obj1331_824x464.jpg',
          title: 'Intricate Wood Hilt (Hulu Keris) Carving',
          caption: 'Macro cinematography capturing traditional carving precision.',
        },
        {
          src: '/mosab/raw/img_053_obj1337_692x461.jpg',
          title: 'Completed Keris & Scabbard (Sarung) Heritage Still',
          caption: 'Showcasing the serpentine blade geometry and cultural artistry.',
        },
      ],
    },
    {
      id: 'project-03',
      number: 'PROJECT 03',
      year: '2023',
      category: 'Broadcast Journalism',
      title: 'News Sphere (News Report)',
      subtitle: '15-Minute Studio & Field Broadcast News Program',
      roles: ['Cameraman', 'Editor', 'Sound Designer', 'Scriptwriter', 'Sports Reporter', 'Graphic Designer'],
      description:
        'A fast-paced 15-minute news program delivering campus and global stories on sports, education, crises, and culture. Combined green-screen virtual studio production with on-the-ground sports reporting, athlete sideline interviews, and multi-track broadcast editing.',
      watchUrl: 'https://drive.google.com/file/d/1wn4NEXCzDeWcD6LjLqW8yuzLcFkhu7FK/view?usp=sharing',
      watchLabel: 'Watch 15-Min Broadcast',
      badge: 'Studio Chroma-Key & Field Standup',
      cover: '/mosab/raw/img_057_obj1360_984x1313.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_057_obj1360_984x1313.jpg',
          title: 'On-Location Field Reporting with ENG Camera Rig',
          caption: 'Mosaab Mohammed reporting live on the pitch for News Sphere.',
        },
        {
          src: '/mosab/raw/img_059_obj1373_1644x924.jpg',
          title: 'Broadcast Lower-Third: Mosaab Mohammed (Sports Reporter)',
          caption: 'Stepping up to the mic after the studio handover to deliver sports highlights.',
        },
        {
          src: '/mosab/raw/img_062_obj1379_795x446.jpg',
          title: 'Post-Match Sideline Interview with Footballer Jahid',
          caption: 'Capturing immediate post-match reflections on team performance.',
        },
        {
          src: '/mosab/raw/img_063_obj1381_795x446.jpg',
          title: 'Sideline Interview with SRC President',
          caption: 'Uncovering the vision behind the Inter-School Sports Carnival.',
        },
        {
          src: '/mosab/raw/img_070_obj1394_715x953.jpg',
          title: 'Behind the Scenes: Green-Screen Studio Camera Setup',
          caption: 'Setting up studio lighting and tripod framing for anchor Abdulmajid.',
        },
        {
          src: '/mosab/raw/img_076_obj1406_1161x654.jpg',
          title: 'Premiere Pro Multi-Track Broadcast Timeline',
          caption: 'Post-production sequence combining chroma-keyed studio segments and field interviews.',
        },
      ],
    },
    {
      id: 'project-04',
      number: 'PROJECT 04',
      year: '2025',
      category: 'PR & Sustainability',
      title: 'Water Conservation Campaign',
      subtitle: '"Every Drop Counts!" • 10-Minute Sustainability Film & Visual Campaign',
      roles: ['Cameraman', 'Scriptwriter', 'Editor', 'Sound Designer'],
      description:
        'A 10-minute sustainability campaign promoting water-saving habits on campus under UN SDG 6 (Clean Water and Sanitation). Integrated interviews, visual infographic posters, and impactful storytelling to inspire measurable community action.',
      watchUrl: 'https://drive.google.com/file/d/1w3PE4gHqViZjIvSgkcbteW9WtqWnGowS/view?usp=sharing',
      watchLabel: 'Watch 10-Min Campaign',
      badge: 'UN SDG 6 Advocacy',
      cover: '/mosab/raw/img_077_obj1422_763x1080.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_077_obj1422_763x1080.jpg',
          title: '"Every Drop Counts!" Official Campaign Poster',
          caption: 'Infographic poster illustrating daily water usage and conservation pledges.',
        },
        {
          src: '/mosab/raw/img_080_obj1431_651x868.jpg',
          title: 'Mosaab Presenting the "Every Drop Counts!" Poster',
          caption: 'Showcasing the visual advocacy materials produced for the AIU Sustainable Planet Team.',
        },
        {
          src: '/mosab/raw/img_085_obj1443_609x812.jpg',
          title: 'Premiere Pro Editing Timeline for Campaign Video',
          caption: 'Cutting multi-camera interviews and auditorium pledge sequences.',
        },
        {
          src: '/mosab/raw/img_086_obj1445_652x869.jpg',
          title: 'Auditorium Campaign Filming',
          caption: 'Recording the collective campus water-saving pledge.',
        },
      ],
    },
    {
      id: 'project-05',
      number: 'PROJECT 05',
      year: '2023',
      category: 'Broadcast Journalism',
      title: 'Global Eyes',
      subtitle: '8-Minute Campus Broadcast Journalism Program',
      roles: ['Assistant Director', 'Cameraman', 'Scriptwriter', 'Graphic Designer'],
      description:
        'An 8-minute campus broadcast exploring education, health, and sports. Featured dynamic visual transitions, student voices, studio anchor segments, and a narrative journalism approach to highlight campus life.',
      watchUrl: null,
      watchLabel: null,
      badge: '8-Min Campus Broadcast',
      cover: '/mosab/raw/img_089_obj1471_854x1139.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_089_obj1471_854x1139.jpg',
          title: 'Mosaab Operating Principal Broadcast Camera',
          caption: 'Framing studio and campus segments for Global Eyes.',
        },
        {
          src: '/mosab/raw/img_091_obj1474_576x768.jpg',
          title: 'On-Set Playback Review with Broadcast Anchor',
          caption: 'Reviewing shot composition and audio levels between takes.',
        },
        {
          src: '/mosab/raw/img_092_obj1475_794x529.jpg',
          title: 'Global Eyes Production Team Cohort',
          caption: 'Full broadcast journalism production team after wrapping studio recording.',
        },
      ],
    },
    {
      id: 'project-06',
      number: 'PROJECT 06',
      year: '2025',
      category: 'PR & Sustainability',
      title: 'Sugar Savvy Malaysia',
      subtitle: 'Public Relations & Health Awareness Campaign',
      roles: ['Campaign Content Creator', 'Graphic Designer', 'Logistics Coordinator'],
      description:
        'A creative public relations awareness campaign promoting healthier sugar consumption across Malaysia. Produced campaign posters, on-ground exhibition booth coverage, and interactive digital content while coordinating event logistics.',
      watchUrl: 'https://www.instagram.com/sugarsavvymalaysia.campaign?igsh=dTVhNmU5b290b2py',
      watchLabel: 'Campaign Instagram',
      badge: 'Public Relations & Logistics',
      cover: '/mosab/raw/img_100_obj1501_761x1142.jpg',
      gallery: [
        {
          src: '/mosab/raw/img_100_obj1501_761x1142.jpg',
          title: 'Official Executive Role Card — Logistics Coordinator',
          caption: 'Mosaab Mohammed Adam Mohammed — Logistics Coordinator, The Sugar Savvy Malaysia Campaign Project.',
        },
        {
          src: '/mosab/raw/img_097_obj1497_1077x718.jpg',
          title: 'Sugar Savvy Malaysia Exhibition Booth & Committee',
          caption: 'Engaging campus and community visitors with interactive sugar-reduction pledges.',
        },
        {
          src: '/mosab/raw/img_099_obj1500_979x674.jpg',
          title: 'Interactive Campaign Activation Booth',
          caption: '"Sugar is sweet, but health is sweeter" — on-site awareness activation.',
        },
      ],
    },
  ];

  const categories = ['All', 'Filmmaking & Docs', 'Broadcast Journalism', 'PR & Sustainability'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') setLightboxState(null);
      if (e.key === 'ArrowRight') {
        setLightboxState((prev) => ({
          ...prev,
          index: (prev.index + 1) % prev.gallery.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxState((prev) => ({
          ...prev,
          index: (prev.index - 1 + prev.gallery.length) % prev.gallery.length,
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState]);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Header & Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div className="section-eyebrow">
              <Camera size={14} color="#d93829" />
              <span>Complete Production Archive (Projects 01 – 06)</span>
            </div>
            <h2 className="section-title">
              6 Flagship Film, Broadcast &{' '}
              <span className="serif-italic" style={{ color: '#1e4d3b' }}>
                Public Relations Productions
              </span>
            </h2>
            <p className="section-subtitle">
              Every project below includes original posters, behind-the-scenes cinematography & Premiere Pro editing stills, and direct links to watch the full production.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 15px',
                    borderRadius: '999px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    backgroundColor: active ? '#1e4d3b' : 'var(--canvas-bg)',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    border: active ? '1px solid #112e23' : '1px solid rgba(26, 23, 20, 0.14)',
                    transition: 'all 0.18s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Production Cards Grid */}
        <div className="grid-2">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-card"
              style={{
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--canvas-bg)',
              }}
            >
              <div>
                {/* Top Metadata Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: '#d93829',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {proj.number} // {proj.year}
                  </span>
                  <span className="badge-sage">{proj.badge}</span>
                </div>

                {/* Cover + Synopsis Split */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '170px 1fr',
                    gap: '18px',
                    marginBottom: '18px',
                  }}
                  className="proj-card-split"
                >
                  <div
                    onClick={() =>
                      setLightboxState({
                        gallery: proj.gallery,
                        index: 0,
                        projectTitle: proj.title,
                      })
                    }
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(26, 23, 20, 0.16)',
                      backgroundColor: '#141210',
                      cursor: 'pointer',
                      position: 'relative',
                      height: '235px',
                    }}
                    title="Click to inspect full gallery"
                  >
                    <img
                      src={proj.cover}
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(20, 18, 16, 0.85)',
                        color: '#f3c677',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Maximize2 size={11} />
                      <span>{proj.gallery.length} Stills</span>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '23px', marginBottom: '4px' }}>
                      {proj.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1e4d3b',
                        marginBottom: '10px',
                      }}
                    >
                      {proj.subtitle}
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '12px' }}>
                      {proj.description}
                    </p>

                    {/* Credited Roles */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {proj.roles.map((r) => (
                        <span
                          key={r}
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 9px',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            color: 'var(--text-primary)',
                            border: '1px solid rgba(26, 23, 20, 0.12)',
                          }}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom BTS Strip + Watch Action */}
              <div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${Math.min(proj.gallery.length, 5)}, 1fr)`,
                    gap: '8px',
                    marginBottom: '14px',
                  }}
                >
                  {proj.gallery.slice(0, 5).map((item, gIdx) => (
                    <div
                      key={item.title}
                      onClick={() =>
                        setLightboxState({
                          gallery: proj.gallery,
                          index: gIdx,
                          projectTitle: proj.title,
                        })
                      }
                      style={{
                        height: '62px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid rgba(26, 23, 20, 0.16)',
                        cursor: 'pointer',
                        backgroundColor: '#141210',
                      }}
                      title={item.title}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-hairline)',
                  }}
                >
                  <button
                    onClick={() =>
                      setLightboxState({
                        gallery: proj.gallery,
                        index: 0,
                        projectTitle: proj.title,
                      })
                    }
                    className="btn-secondary"
                    style={{ padding: '8px 14px', fontSize: '12.5px' }}
                  >
                    <Maximize2 size={13} color="#1e4d3b" />
                    <span>Inspect BTS & Stills ({proj.gallery.length})</span>
                  </button>

                  {proj.watchUrl && (
                    <a
                      href={proj.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-crimson"
                      style={{ padding: '8px 16px', fontSize: '12.5px' }}
                    >
                      <Play size={13} fill="#ffffff" />
                      <span>{proj.watchLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Keyboard-Accessible Lightbox */}
      <AnimatePresence>
        {lightboxState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setLightboxState(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '900px',
                width: '100%',
                backgroundColor: '#181512',
                borderRadius: '18px',
                border: '1px solid rgba(243, 198, 119, 0.4)',
                padding: '22px',
                color: '#f6f2ea',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#f3c677' }}>
                    {lightboxState.projectTitle.toUpperCase()} • FRAME {lightboxState.index + 1} OF{' '}
                    {lightboxState.gallery.length}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#ffffff' }}>
                    {lightboxState.gallery[lightboxState.index].title}
                  </h4>
                </div>
                <button
                  onClick={() => setLightboxState(null)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '7px',
                    color: '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '460px',
                  backgroundColor: '#0c0b09',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}
              >
                <img
                  src={lightboxState.gallery[lightboxState.index].src}
                  alt={lightboxState.gallery[lightboxState.index].title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />

                {lightboxState.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setLightboxState((prev) => ({
                          ...prev,
                          index: (prev.index - 1 + prev.gallery.length) % prev.gallery.length,
                        }))
                      }
                      aria-label="Previous image"
                      style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(20, 18, 16, 0.8)',
                        border: '1px solid #f3c677',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setLightboxState((prev) => ({
                          ...prev,
                          index: (prev.index + 1) % prev.gallery.length,
                        }))
                      }
                      aria-label="Next image"
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(20, 18, 16, 0.8)',
                        border: '1px solid #f3c677',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <p style={{ fontSize: '14px', color: '#d8d0c3', textAlign: 'center' }}>
                {lightboxState.gallery[lightboxState.index].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .proj-card-split {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
