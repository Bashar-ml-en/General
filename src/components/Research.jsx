import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Film,
  Play,
  ExternalLink,
  Award,
  Layers,
  Sliders,
  Volume2,
  Camera,
  FileText,
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  Tv,
} from 'lucide-react';

export default function Research() {
  const productions = [
    {
      id: 'keris',
      code: 'PROD 01 // COPYRIGHT REGISTERED DOCUMENTARY',
      title: 'Keris: Supremacy of Legacy',
      subtitle: '24-Minute Expository Documentary Film • Baling, Malaysia',
      year: '2023 (Copyright 2025)',
      duration: '24:00',
      driveId: '1WzH__K8pnoDRLpCpNWZC1Tvvvr3L1Kh3',
      watchUrl: 'https://drive.google.com/file/d/1WzH__K8pnoDRLpCpNWZC1Tvvvr3L1Kh3/view?usp=sharing',
      poster: '/mosab/raw/img_042_obj1290_927x1311.jpg',
      still: '/mosab/raw/img_046_obj1323_782x439.jpg',
      roles: ['Assistant Cameraman', 'Scriptwriter', 'Behind the Scene Producer'],
      badge: 'Malaysia Copyright Act 1987 (CRFM2025P01130)',
      synopsis:
        'A 24-minute expository documentary exploring traditional Keris blacksmithing and cultural craftsmanship in Baling, Malaysia. Structured across three narrative acts — "The Story Begins," "Keris History, Philosophy & Design," and "Cultural Impact" — officially registered under the Malaysia Copyright Act 1987.',
      tracks: [
        {
          track: 'V2 // COLOR & GRAPHICS',
          tool: 'DaVinci Resolve & Premiere Pro',
          detail: 'Warm heritage color grading for artisan forge sequences, three-act title cards, and bilingual lower-thirds for master Keris craftsmen.',
          segments: ['Act I Title Card (00:00)', 'Forge Warmth LUT (06:30)', 'Cultural Archival Grade (16:40)'],
        },
        {
          track: 'V1 // CINEMATOGRAPHY',
          tool: 'Dual-Camera Documentary Setup',
          detail: 'Captured macro B-roll of intricate blade forging (pamor) and wood hilt carving in Baling alongside multi-angle sit-down interviews.',
          segments: ['Baling Forge Macro (01:15)', 'Master Craftsman Interview (08:20)', 'Hilt Carving Details (18:10)'],
        },
        {
          track: 'A1 // SCRIPT & NARRATION',
          tool: 'Expository Documentary Script',
          detail: 'Co-authored the 24-minute three-segment expository script weaving historical Malay philosophy with contemporary artisan interviews.',
          segments: ['Act I: The Story Begins', 'Act II: Philosophy & Design', 'Act III: Cultural Impact'],
        },
        {
          track: 'A2 // SOUND DESIGN',
          tool: 'Adobe Audition Mastering',
          detail: 'Layered diegetic anvil hammer strikes, traditional Nusantara instrumental motifs, and noise-isolated field dialogue.',
          segments: ['Forge Ambience Stem', 'Dialogue De-Noise & EQ', 'Traditional Score Mix'],
        },
      ],
    },
    {
      id: 'wakeup-call',
      code: 'PROD 02 // NARRATIVE DRAMA SHORT FILM',
      title: 'The Wake-Up Call',
      subtitle: 'Psychological & Academic Resilience Drama Short Film',
      year: '2024',
      duration: '14:20',
      driveId: '1ktc6RzY5P2w9QQtPVsFYROA-vSgbPH5U',
      watchUrl: 'https://drive.google.com/file/d/1ktc6RzY5P2w9QQtPVsFYROA-vSgbPH5U/view?usp=sharing',
      poster: '/mosab/raw/img_022_obj1229_763x1080.jpg',
      still: '/mosab/raw/img_032_obj1258_1004x753.jpg',
      roles: ['Ideation', 'Assistant Director', 'Camera Operator', 'Editor', 'Sound Designer', 'Scriptwriter'],
      badge: '6-Role Full-Cycle Auteur Production',
      synopsis:
        '"The Wake-Up Call" follows Ethan, a university student overwhelmed by academic pressure and the fear of failure. Through vivid subconscious dream sequences that mirror his internal turmoil, the film delivers a metaphorical journey of self-realization, resilience, and personal growth.',
      tracks: [
        {
          track: 'V2 // COLOR & VFX',
          tool: 'Premiere Pro Lumetri Color Wheels',
          detail: 'Contrasted cold, desaturated high-contrast dream sequences against warm daylight campus restoration scenes.',
          segments: ['Subconscious Nightmare Grade', 'Dream Transition Dissolves', 'Final Awakening Warmth'],
        },
        {
          track: 'V1 // CAMERA & BLOCKING',
          tool: '3-Axis Gimbal & Tripod Rig',
          detail: 'Operated principal camera and 3-axis motorized gimbal during night exterior walks, classroom exam tension, and dormitory close-ups.',
          segments: ['Dormitory Pressure Scene', 'Night Exterior Gimbal Tracking', 'Exam Hall Close-Ups'],
        },
        {
          track: 'A1 // SCREENPLAY & DIRECTING',
          tool: 'Narrative Screenwriting & AD',
          detail: 'Originated story concept, co-wrote the dramatic script, and served as Assistant Director coordinating cast blocking on set.',
          segments: ['Inciting Academic Crisis', 'Dream Metaphor Sequence', 'Resolution & Mindset Shift'],
        },
        {
          track: 'A2 // PSYCHOACOUSTIC SOUND',
          tool: 'Adobe Audition & Premiere Pro',
          detail: 'Engineered tension risers, muffled subconscious clock ticks, and emotional ambient pads to heighten Ethan’s internal journey.',
          segments: ['Subconscious Heartbeat & Ticks', 'Dream Reverb Tail', 'Uplifting Finale Score'],
        },
      ],
    },
    {
      id: 'news-sphere',
      code: 'PROD 03 // 15-MINUTE TV NEWS BROADCAST',
      title: 'News Sphere (News Report)',
      subtitle: 'Multi-Segment Studio & Field Broadcast News Program',
      year: '2023',
      duration: '15:00',
      driveId: '1wn4NEXCzDeWcD6LjLqW8yuzLcFkhu7FK',
      watchUrl: 'https://drive.google.com/file/d/1wn4NEXCzDeWcD6LjLqW8yuzLcFkhu7FK/view?usp=sharing',
      poster: '/mosab/raw/img_057_obj1360_984x1313.jpg',
      still: '/mosab/raw/img_059_obj1373_1644x924.jpg',
      roles: ['Cameraman', 'Editor', 'Sound Designer', 'Scriptwriter', 'Sports Reporter', 'Graphic Designer'],
      badge: 'Studio Chroma-Key & Live Field Standup',
      synopsis:
        'A fast-paced 15-minute broadcast news program delivering campus and global stories across politics, education, humanitarian crises, and sports. Featured green-screen virtual newsroom keying alongside Mosaab’s on-camera sideline sports reporting and athlete interviews.',
      tracks: [
        {
          track: 'V2 // BROADCAST GRAPHICS',
          tool: 'After Effects & Premiere Ultra Key',
          detail: 'Keyed green-screen studio anchor plates and designed broadcast lower-thirds, breaking news tickers, and segment stingers.',
          segments: ['News Sphere Intro Bumper', 'Chroma-Key Virtual Studio', 'Sports Highlight Lower-Thirds'],
        },
        {
          track: 'V1 // STUDIO & FIELD CAMERA',
          tool: 'Studio Teleprompter Rig & Field ENG',
          detail: 'Lit and filmed studio anchor Abdulmajid on green screen and captured night floodlit football and cricket sideline interviews.',
          segments: ['Anchor Studio Desk', 'Football Pitch Standup', 'Cricket & SRC Interviews'],
        },
        {
          track: 'A1 // BROADCAST SCRIPT & REPORTING',
          tool: 'On-Camera Sports Correspondent',
          detail: 'Wrote broadcast lead-ins and stepped in front of the mic as Sports Reporter interviewing footballer Jahid, cricketer Khalid, and the SRC President.',
          segments: ['Studio Handover to Pitch', 'Post-Match Athlete Interviews', 'Inter-School Sports Carnival'],
        },
        {
          track: 'A2 // BROADCAST AUDIO MIX',
          tool: 'Multi-Track Broadcast Mastering',
          detail: 'Balanced lapel mics in studio with handheld ENG microphone audio in high-noise stadium environments.',
          segments: ['Broadcast Theme Stinger', 'Lapel Studio EQ', 'Stadium Wind-Noise Reduction'],
        },
      ],
    },
    {
      id: 'water-campaign',
      code: 'PROD 04 // SUSTAINABILITY & PR FILM',
      title: 'Water Conservation: "Every Drop Counts!"',
      subtitle: '10-Minute Campus Sustainability & Behavioral Change Campaign',
      year: '2025',
      duration: '10:00',
      driveId: '1w3PE4gHqViZjIvSgkcbteW9WtqWnGowS',
      watchUrl: 'https://drive.google.com/file/d/1w3PE4gHqViZjIvSgkcbteW9WtqWnGowS/view?usp=sharing',
      poster: '/mosab/raw/img_077_obj1422_763x1080.jpg',
      still: '/mosab/raw/img_085_obj1443_609x812.jpg',
      roles: ['Cameraman', 'Scriptwriter', 'Editor', 'Sound Designer'],
      badge: 'UN SDG 6 • Clean Water & Sanitation',
      synopsis:
        'A 10-minute sustainability campaign film and visual advocacy initiative aligned with UN SDG 6 (Clean Water and Sanitation) at Albukhary International University. Combines student interviews, infographic poster design, and behavioral nudges to inspire daily water-saving habits.',
      tracks: [
        {
          track: 'V2 // INFOGRAPHICS & POSTERS',
          tool: 'Canva, Photoshop & Premiere Pro',
          detail: 'Designed the "Every Drop Counts!" campaign poster with daily water consumption charts and animated on-screen callouts.',
          segments: ['SDG 6 Identity Intro', 'Daily Water Usage Pie Overlay', 'Pledge Call-to-Action Card'],
        },
        {
          track: 'V1 // CAMPUS CINEMATOGRAPHY',
          tool: 'Multi-Location Campus Shoot',
          detail: 'Filmed auditorium group pledges, laboratory & residential water usage demonstrations, and student vox-pop interviews.',
          segments: ['Campus Water Audit B-Roll', 'Student Vox-Pop Interviews', 'Auditorium Group Finale'],
        },
        {
          track: 'A1 // CAMPAIGN MESSAGING',
          tool: 'Persuasive Advocacy Script',
          detail: 'Crafted the 10-minute narrative arc moving from water scarcity awareness to practical campus conservation habits.',
          segments: ['Hook: Why Every Drop Counts', 'Community Voices', 'Join Us in Saving Water'],
        },
        {
          track: 'A2 // ACOUSTIC DESIGN',
          tool: 'Foley & Clean Dialogue Mix',
          detail: 'Integrated crisp water-droplet foley cues with clean interview dialogue and upbeat acoustic background instrumentation.',
          segments: ['Water Droplet Foley Hook', 'Multi-Mic Panel Leveling', 'Inspiring Campaign Outro'],
        },
      ],
    },
  ];

  const [activeProdIndex, setActiveProdIndex] = useState(0);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [playMode, setPlayMode] = useState('breakdown'); // 'breakdown' | 'stream'
  const [playheadPercent, setPlayheadPercent] = useState(38);
  const [isCopyrightOpen, setIsCopyrightOpen] = useState(false);

  const activeProd = productions[activeProdIndex];
  const activeTrack = activeProd.tracks[activeTrackIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCopyrightOpen) {
        setIsCopyrightOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCopyrightOpen]);

  return (
    <section
      id="research"
      className="section-padding"
      style={{
        backgroundColor: '#141210',
        color: '#f6f2ea',
        borderTop: '2px solid rgba(200, 138, 50, 0.4)',
        borderBottom: '2px solid rgba(200, 138, 50, 0.4)',
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
          <div style={{ maxWidth: '760px' }}>
            <div className="section-eyebrow" style={{ color: '#f3c677' }}>
              <Film size={14} color="#d93829" />
              <span>Interactive Director’s Screening Room & NLE Timeline</span>
            </div>
            <h2
              className="section-title"
              style={{ color: '#f6f2ea', marginBottom: '12px' }}
            >
              Watch & Deconstruct Mosaab’s{' '}
              <span className="serif-italic" style={{ color: '#f3c677' }}>
                4 Flagship Films & Broadcasts
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: '#c7bfb2', lineHeight: 1.65 }}>
              Select any production below to stream the full film directly inside the screening monitor or inspect Mosaab’s multi-track contributions across cinematography, scriptwriting, color grading, and sound design.
            </p>
          </div>

          <button
            onClick={() => setIsCopyrightOpen(true)}
            className="btn-primary"
            style={{
              backgroundColor: 'rgba(200, 138, 50, 0.18)',
              border: '1px solid #f3c677',
              color: '#f3c677',
            }}
          >
            <Award size={16} />
            <span>Inspect Copyright Certificate (CRFM2025P01130)</span>
          </button>
        </div>

        {/* 4-Production Selector Tabs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '24px',
          }}
          className="screening-tabs-grid"
        >
          {productions.map((prod, idx) => {
            const isSelected = idx === activeProdIndex;
            return (
              <button
                key={prod.id}
                onClick={() => {
                  setActiveProdIndex(idx);
                  setActiveTrackIndex(0);
                }}
                style={{
                  textAlign: 'left',
                  padding: '15px 16px',
                  borderRadius: '14px',
                  backgroundColor: isSelected ? '#1f1c18' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected
                    ? '1.5px solid #f3c677'
                    : '1px solid rgba(246, 242, 234, 0.12)',
                  color: '#f6f2ea',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 10px 28px rgba(0, 0, 0, 0.4)' : 'none',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    color: isSelected ? '#f3c677' : '#9c9284',
                    fontWeight: 700,
                  }}
                >
                  <span>0{idx + 1} // {prod.year}</span>
                  <span>{prod.duration}</span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {prod.title}
                </div>
                <div style={{ fontSize: '12px', color: '#b5aca0', lineHeight: 1.35 }}>
                  {prod.roles.slice(0, 3).join(' • ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Screening Room Monitor + NLE Inspector */}
        <div
          className="cinema-card"
          style={{
            padding: '26px',
            backgroundColor: '#1b1815',
            border: '1px solid rgba(200, 138, 50, 0.32)',
          }}
        >
          {/* Top Monitor Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              paddingBottom: '18px',
              marginBottom: '22px',
              borderBottom: '1px solid rgba(246, 242, 234, 0.1)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#f3c677',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}
              >
                {activeProd.code} • DURATION {activeProd.duration}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '26px',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {activeProd.title}{' '}
                <span style={{ fontSize: '15px', fontWeight: 400, color: '#c7bfb2' }}>
                  — {activeProd.subtitle}
                </span>
              </h3>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <button
                onClick={() => setPlayMode(playMode === 'stream' ? 'breakdown' : 'stream')}
                className={playMode === 'stream' ? 'btn-secondary' : 'btn-crimson'}
                style={{ padding: '9px 16px', fontSize: '13px' }}
              >
                <Play size={14} fill={playMode === 'stream' ? 'none' : '#ffffff'} />
                <span>
                  {playMode === 'stream' ? 'Show Poster & NLE View' : 'Stream Film in Monitor'}
                </span>
              </button>

              <a
                href={activeProd.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '9px 16px', fontSize: '13px' }}
              >
                <ExternalLink size={14} color="#f3c677" />
                <span>Open Full Video (Google Drive)</span>
              </a>
            </div>
          </div>

          {/* 12-Column Monitor & Synopsis Split */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '26px',
              alignItems: 'stretch',
            }}
          >
            {/* Left 7 Columns: Video Stream or Poster + Scene Still */}
            <div style={{ gridColumn: 'span 7' }} className="monitor-left-col">
              {playMode === 'stream' ? (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    backgroundColor: '#000000',
                    border: '1.5px solid #f3c677',
                  }}
                >
                  <iframe
                    src={`https://drive.google.com/file/d/${activeProd.driveId}/preview`}
                    title={activeProd.title}
                    allow="autoplay; fullscreen"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '5fr 7fr',
                    gap: '14px',
                    height: '100%',
                  }}
                  className="poster-still-grid"
                >
                  {/* Official Film Poster */}
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(246, 242, 234, 0.16)',
                      backgroundColor: '#0e0c0a',
                      position: 'relative',
                      minHeight: '300px',
                    }}
                  >
                    <img
                      src={activeProd.poster}
                      alt={`${activeProd.title} Official Poster`}
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
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(20, 18, 16, 0.85)',
                        color: '#f3c677',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        fontWeight: 700,
                        border: '1px solid rgba(200, 138, 50, 0.4)',
                      }}
                    >
                      OFFICIAL POSTER
                    </div>
                  </div>

                  {/* Production Still with Stream Trigger Overlay */}
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '1px solid rgba(246, 242, 234, 0.16)',
                      backgroundColor: '#0e0c0a',
                      position: 'relative',
                      minHeight: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <img
                      src={activeProd.still}
                      alt={`${activeProd.title} Production Frame`}
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
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.3) 55%, rgba(20,18,16,0.5) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10.5px',
                            color: '#ffffff',
                            backgroundColor: 'rgba(217, 56, 41, 0.85)',
                            padding: '3px 9px',
                            borderRadius: '999px',
                            fontWeight: 700,
                          }}
                        >
                          ● MASTER CUT ({activeProd.duration})
                        </span>
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => setPlayMode('stream')}
                          className="btn-crimson"
                          style={{
                            borderRadius: '999px',
                            padding: '12px 22px',
                            boxShadow: '0 8px 28px rgba(217, 56, 41, 0.5)',
                          }}
                        >
                          <Play size={16} fill="#ffffff" />
                          <span>Play Film in Monitor</span>
                        </button>
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          color: '#f3c677',
                        }}
                      >
                        {activeProd.badge}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Columns: Director's Synopsis, Credits & Active Track Breakdown */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
              }}
              className="monitor-right-col"
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#f3c677',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}
                >
                  DIRECTOR’S SYNOPSIS & CREDITS
                </div>
                <p style={{ fontSize: '14.5px', color: '#e6dfd3', lineHeight: 1.65, marginBottom: '14px' }}>
                  {activeProd.synopsis}
                </p>

                {/* Roles Credited */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {activeProd.roles.map((r) => (
                    <span
                      key={r}
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(30, 77, 59, 0.35)',
                        color: '#a9dec5',
                        border: '1px solid rgba(169, 222, 197, 0.3)',
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Track Telemetry Box */}
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#141210',
                  border: '1px solid rgba(200, 138, 50, 0.35)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#f3c677',
                    }}
                  >
                    ACTIVE NLE TRACK: {activeTrack.track}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#a9dec5',
                    }}
                  >
                    {activeTrack.tool}
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#d8d0c3', lineHeight: 1.55, marginBottom: '10px' }}>
                  {activeTrack.detail}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeTrack.segments.map((seg) => (
                    <span
                      key={seg}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10.5px',
                        padding: '3px 8px',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(200, 138, 50, 0.14)',
                        color: '#f3c677',
                      }}
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Premiere Pro / DaVinci Resolve Multi-Track NLE Timeline */}
          <div
            style={{
              marginTop: '24px',
              padding: '18px',
              borderRadius: '14px',
              backgroundColor: '#12100e',
              border: '1px solid rgba(246, 242, 234, 0.12)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                  color: '#f3c677',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sliders size={14} color="#d93829" />
                <span>PREMIERE PRO / DAVINCI RESOLVE MULTI-TRACK NLE SEQUENCE (CLICK ANY TRACK TO INSPECT)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '240px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#c7bfb2' }}>
                  SCRUB PLAYHEAD:
                </span>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={playheadPercent}
                  onChange={(e) => setPlayheadPercent(Number(e.target.value))}
                  className="econometric-slider"
                  aria-label="Scrub timeline playhead"
                  style={{ width: '130px' }}
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#f3c677' }}>
                  {playheadPercent}%
                </span>
              </div>
            </div>

            {/* NLE Tracks Container with Playhead Line */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Vertical Playhead Indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${playheadPercent}%`,
                  width: '2px',
                  backgroundColor: '#d93829',
                  zIndex: 10,
                  pointerEvents: 'none',
                  boxShadow: '0 0 10px rgba(217, 56, 41, 0.8)',
                }}
              />

              {activeProd.tracks.map((tr, tIdx) => {
                const isTrackActive = tIdx === activeTrackIndex;
                const trackColors = ['#6b4c9a', '#1e4d3b', '#2b5b84', '#8f5b22'];
                const barColor = trackColors[tIdx % trackColors.length];
                return (
                  <button
                    key={tr.track}
                    onClick={() => setActiveTrackIndex(tIdx)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '210px 1fr',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      backgroundColor: isTrackActive ? 'rgba(200, 138, 50, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                      border: isTrackActive
                        ? '1px solid #f3c677'
                        : '1px solid rgba(246, 242, 234, 0.08)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.18s ease',
                    }}
                    className="nle-track-row"
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: 700,
                        color: isTrackActive ? '#f3c677' : '#d8d0c3',
                      }}
                    >
                      {tr.track}
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '6px',
                      }}
                    >
                      {tr.segments.map((seg) => (
                        <div
                          key={seg}
                          style={{
                            backgroundColor: barColor,
                            padding: '5px 10px',
                            borderRadius: '5px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10.5px',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 255, 255, 0.22)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {seg}
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Official Malaysia Copyright Act 1987 Banner */}
        <div
          style={{
            marginTop: '28px',
            padding: '24px 28px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #1e4d3b 0%, #112e23 100%)',
            border: '1px solid rgba(243, 198, 119, 0.45)',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <div style={{ gridColumn: 'span 8' }} className="copyright-left">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 11px',
                borderRadius: '999px',
                backgroundColor: 'rgba(243, 198, 119, 0.16)',
                color: '#f3c677',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              <CheckCircle2 size={13} />
              <span>INTELLECTUAL PROPERTY MILESTONE • MALAYSIA COPYRIGHT ACT 1987</span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '24px',
                color: '#ffffff',
                marginBottom: '8px',
              }}
            >
              Officially Registered Film Under Malaysia Copyright Act 1987 (2025)
            </h3>
            <p style={{ fontSize: '14.5px', color: '#d9ebe2', lineHeight: 1.6, marginBottom: '14px' }}>
              <strong>Notification No: CRFM2025P01130</strong> — Certifying{' '}
              <em>“Keris: Supremacy of Legacy”</em> (Category: Film, Date of Creation: 12 December 2023, Date of Notification: 26 February 2025) with <strong>Mosaab Mohammed Adam Mohammed</strong> officially recorded in the Register of Copyright as Co-Author under Albukhary International University (AIU).
            </p>
            <button
              onClick={() => setIsCopyrightOpen(true)}
              className="btn-secondary"
              style={{
                backgroundColor: '#f3c677',
                color: '#141210',
                border: 'none',
                padding: '9px 18px',
                fontSize: '13px',
              }}
            >
              <Maximize2 size={14} />
              <span>View Official Certificate Document</span>
            </button>
          </div>

          <div
            style={{ gridColumn: 'span 4', display: 'flex', justifyContent: 'flex-end' }}
            className="copyright-right"
          >
            <div
              onClick={() => setIsCopyrightOpen(true)}
              style={{
                cursor: 'pointer',
                width: '190px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '2px solid #f3c677',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45)',
              }}
              title="Click to enlarge Certificate of Copyright Notification"
            >
              <img
                src="/mosab/raw/img_044_obj1311_828x1167.jpg"
                alt="Malaysia Copyright Act 1987 Certificate CRFM2025P01130"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isCopyrightOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setIsCopyrightOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '720px',
                width: '100%',
                backgroundColor: '#1f1c18',
                borderRadius: '16px',
                border: '1px solid #f3c677',
                padding: '20px',
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
                    NOTIFICATION NO: CRFM2025P01130 • 26 FEBRUARY 2025
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#ffffff' }}>
                    Certificate of Copyright Notification — Malaysia Copyright Act 1987
                  </h4>
                </div>
                <button
                  onClick={() => setIsCopyrightOpen(false)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px',
                    color: '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>
              <div
                style={{
                  maxHeight: '75vh',
                  overflowY: 'auto',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                }}
              >
                <img
                  src="/mosab/raw/img_044_obj1311_828x1167.jpg"
                  alt="Official Certificate of Copyright Notification CRFM2025P01130"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '6px' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .screening-tabs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .monitor-left-col, .monitor-right-col, .copyright-left, .copyright-right {
            grid-column: span 12 !important;
          }
          .copyright-right {
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 640px) {
          .screening-tabs-grid, .poster-still-grid, .nle-track-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
