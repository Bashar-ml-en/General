import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  CheckCircle,
  MapPin,
  Ticket,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Sparkles,
  Layers,
  Building2,
  Users,
  Globe2,
  BookOpen,
} from 'lucide-react';

export default function Activities() {
  // Lightbox state: tracks which gallery is active and the current photo index
  const [lightboxState, setLightboxState] = useState(null); // { gallery: 'nice' | 'uitm' | 'klibf', index: number }

  const nicePhotos = [
    {
      id: 'alhassan',
      src: '/nice-2026/nice-2026-alhassan.jpg',
      title: 'Alhassan Ibrahim Ali Hassan',
      subtitle: 'Official Delegate & Applied Economics Graduate',
      caption: 'Alhassan standing proudly beside the illuminated NICE 26 installation with his official delegate credential, representing applied economics and research.',
      badge: 'Official Delegate',
      badgeColor: '#264430',
    },
    {
      id: 'delegation',
      src: '/nice-2026/nice-2026-delegation.png',
      title: 'NICE 2026 Delegation Cohort',
      subtitle: 'Research & Innovation Delegation at Entrance Portal',
      caption: 'Official delegation group before the illuminated NICE 26 installation arch featuring the Kementerian Sains, Teknologi dan Inovasi (MOSTI) national crest.',
      badge: 'Delegation Team',
      badgeColor: '#4a7c59',
    },
    {
      id: 'investors',
      src: '/nice-2026/nice-2026-investors-panel.jpg',
      title: 'Panel Discussion: "What Investors Really Look For"',
      subtitle: 'Venture Capital & Investment Decision Evaluation',
      caption: 'High-level plenary panel featuring Navvin Kumar Kirupanandan (Gobi Partners), Saemin Ahn (Rakuten Capital Singapore), Adelene Low (Bintang Capital Partners), and moderator Kiran Jacob (The Edge Malaysia).',
      badge: 'VC & Investor Panel',
      badgeColor: '#705c30',
    },
    {
      id: 'hall',
      src: '/nice-2026/nice-2026-hall.jpg',
      title: 'Plenary Congress & Dignitaries Assembly',
      subtitle: 'Mission to Market. Malaysia to the World.',
      caption: 'Grand congress hall assembly bringing together government ministers, MOSTI policymakers, researchers, and strategic partner MRANTI to celebrate commercialization milestones.',
      badge: 'Plenary Assembly',
      badgeColor: '#16271c',
    },
  ];

  const uitmPhotos = [
    {
      id: 'uitm-intercontinental',
      src: '/uitm-travel-2026/uitm-intercontinental-delegation.jpg',
      title: 'InterContinental Kuala Lumpur Dignitary Reception',
      subtitle: 'Alhassan with International Ambassadors & Delegation Leads',
      caption: 'Alhassan Ibrahim standing with international ambassadors, ministry officials, and organizing committee members at the grand entrance of InterContinental Kuala Lumpur.',
      badge: 'InterContinental Diplomatic Reception',
      badgeColor: '#264430',
    },
    {
      id: 'uitm-bilateral',
      src: '/uitm-travel-2026/uitm-bilateral-delegation-meeting.jpg',
      title: 'Malaysia–Uzbekistan Bilateral Diplomatic Session',
      subtitle: 'High-Level Roundtable on Islamic Tourism & Pilgrim Mobility',
      caption: 'Official bilateral conference between the Tourism Committee of the Republic of Uzbekistan and Malaysian tourism authorities, structuring new Umrah Plus international routes.',
      badge: 'Bilateral Diplomatic Roundtable',
      badgeColor: '#705c30',
    },
    {
      id: 'uitm-redcarpet',
      src: '/uitm-travel-2026/uitm-redcarpet-vip-reception.jpg',
      title: 'Uzbekistan Tourism Committee VIP Reception',
      subtitle: 'Official Red Carpet Lineup & International Consortium',
      caption: 'Accredited VIP lineup before the Tourism Committee of the Republic of Uzbekistan (UZSAA) ceremonial pavilion at the international travel expo.',
      badge: 'VIP Red Carpet Lineup',
      badgeColor: '#16271c',
    },
  ];

  const klibfPhotos = [
    {
      id: 'klibf-vest',
      src: '/klibf-2026/klibf-alhassan-vest.png',
      title: 'Alhassan Ibrahim Ali Hassan — Sales & Brand Representative',
      subtitle: 'Mashreq International for Books • WTC Kuala Lumpur',
      caption: 'Alhassan in official publisher representative uniform at the Kuala Lumpur International Book Fair (KLIBF 2026), managing catalog circulation and client inquiries.',
      badge: 'Official Publisher Uniform',
      badgeColor: '#264430',
    },
    {
      id: 'klibf-cultural',
      src: '/klibf-2026/klibf-cultural-delegation.jpg',
      title: 'International Cultural & Publishing Delegation',
      subtitle: 'Heritage Pavilion & Traditional Attire Exhibition',
      caption: 'Alhassan Ibrahim engaging with international cultural delegates in traditional attire at the heritage pavilion during the Kuala Lumpur International Book Fair.',
      badge: 'Cultural Delegation Liaison',
      badgeColor: '#705c30',
    },
    {
      id: 'klibf-symposium',
      src: '/klibf-2026/klibf-translation-symposium.jpg',
      title: 'International Translation & Publishing Standards Symposium',
      subtitle: 'Literature, Publishing & Translation Commission (LPTC)',
      caption: 'Keynote plenary session on "The Role of International Organizations in Developing Professional Standards for Translation" hosted by the Literature, Publishing and Translation Commission.',
      badge: 'Translation & Publishing Symposium',
      badgeColor: '#16271c',
    },
  ];

  const currentGalleryList = lightboxState
    ? lightboxState.gallery === 'nice'
      ? nicePhotos
      : lightboxState.gallery === 'uitm'
      ? uitmPhotos
      : klibfPhotos
    : [];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') setLightboxState(null);
      if (e.key === 'ArrowRight') {
        setLightboxState((prev) => ({
          ...prev,
          index: (prev.index + 1) % currentGalleryList.length,
        }));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxState((prev) => ({
          ...prev,
          index: (prev.index - 1 + currentGalleryList.length) % currentGalleryList.length,
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, currentGalleryList.length]);

  const credentials = [
    {
      badge: 'Innovation Expo Delegate',
      title: 'NICE 2026 Accredited Delegate',
      organization: 'MOSTI & MRANTI Partnership',
      desc: 'Accredited participant in national innovation, startup venture capital discussions, and IP commercialization frameworks.',
      color: '#4a7c59',
    },
    {
      badge: 'Diplomatic Expo Committee',
      title: 'UiTM Travel Exhibition Organizing Lead',
      organization: 'InterContinental KL • UiTM & Uzbekistan Tourism',
      desc: 'Committee member overseeing international diplomatic delegations, bilateral roundtable logistics, and vendor booth operations.',
      color: '#705c30',
    },
    {
      badge: 'Trade Expo Credential',
      title: 'KLIBF 2026 Representative',
      organization: 'Mashreq International for Books • WTCKL',
      desc: 'Accredited sales liaison managing Arabic and academic literature circulation across international academic delegations.',
      color: '#264430',
    },
    {
      badge: 'Community Engagement',
      title: 'Refugee Capacity-Building Workshops',
      organization: 'Nagashi Relief & Development NGO',
      desc: 'Lead facilitator for community English-language modules and higher education scholarship pathways.',
      color: '#4a7c59',
    },
  ];

  return (
    <section id="activities" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Compass size={14} color="#c4a66a" />
            <span>Innovation Expos, Diplomatic Forums & Book Fairs 2026</span>
          </div>
          <h2 className="section-title">
            Professional Activities & <span className="serif-italic" style={{ color: '#4a7c59' }}>International Exhibitions</span>
          </h2>
          <p className="section-subtitle">
            Accredited delegate representation, diplomatic floor management, and international trade fair execution across Malaysia’s premier national expos and book fairs in 2026.
          </p>
        </div>

        {/* =========================================================================
            FEATURED SHOWCASE 1: NICE 2026 (NATIONAL INNOVATION & COMMERCIALISATION EXPO)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: '#faf6f0',
            border: '2px solid rgba(74, 124, 89, 0.22)',
            borderRadius: '16px',
            padding: '36px',
            marginBottom: '44px',
            boxShadow: '0 12px 36px -10px rgba(38, 68, 48, 0.08)',
          }}
          className="nice-showcase-card"
        >
          {/* Expo Header Plaque */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px',
              borderBottom: '1px solid rgba(74, 124, 89, 0.16)',
              paddingBottom: '24px',
              marginBottom: '26px',
            }}
          >
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    backgroundColor: '#264430',
                    color: '#faf6f0',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Sparkles size={12} color="#c4a66a" />
                  National Innovation Expo • 2026
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(196, 166, 106, 0.2)',
                    color: '#705c30',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(196, 166, 106, 0.4)',
                  }}
                >
                  MOSTI & MRANTI Strategic Partnership
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(74, 124, 89, 0.12)',
                    color: '#264430',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  Mission to Market. Malaysia to the World.
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.95rem',
                  fontWeight: '700',
                  color: '#264430',
                  lineHeight: 1.25,
                  marginBottom: '6px',
                }}
              >
                National Innovation and Commercialisation Expo 2026 (NICE 2026)
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '13px',
                  color: '#705c30',
                  fontWeight: '600',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Building2 size={14} color="#4a7c59" />
                  Ministry of Science, Technology and Innovation (MOSTI)
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Users size={14} color="#4a7c59" />
                  Strategic Partner: MRANTI
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={14} color="#4a7c59" />
                  Kuala Lumpur, Malaysia
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 124, 89, 0.2)',
                borderRadius: '8px',
                padding: '10px 16px',
                textAlign: 'right',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#74796e', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                Delegate Credential
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#264430' }}>
                Alhassan Ibrahim Ali Hassan
              </div>
              <div style={{ fontSize: '12px', color: '#4a7c59', fontWeight: '600' }}>
                Applied Economics & Research
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '14.5px',
              color: '#383d39',
              lineHeight: 1.68,
              maxWidth: '960px',
              marginBottom: '26px',
            }}
          >
            Represented as an accredited delegate at Malaysia’s premier national technology commercialisation showcase, organized by the <strong>Ministry of Science, Technology and Innovation (MOSTI)</strong> alongside strategic accelerator partner <strong>MRANTI</strong>. Engaged directly in high-level sessions bridging econometric policy research, venture capital investment criteria, and market commercialisation frameworks under the national banner <em>"Mission to Market. Malaysia to the World."</em>
          </p>

          {/* 4-Image Editorial Gallery Grid */}
          <div style={{ marginBottom: '26px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#4a7c59" />
                <h4 style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264430', margin: 0 }}>
                  Event Photography & Evidence Documentation (4 Photos)
                </h4>
              </div>
              <span style={{ fontSize: '12px', color: '#705c30', fontStyle: 'italic' }}>
                Click to inspect in high resolution
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '16px',
              }}
              className="expo-photo-grid"
            >
              {nicePhotos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxState({ gallery: 'nice', index: pIdx })}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(74, 124, 89, 0.16)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="expo-photo-card"
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '210px',
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
                        objectPosition: photo.id === 'alhassan' ? 'center 15%' : 'center center',
                        transition: 'transform 0.35s ease',
                      }}
                      className="expo-img-zoom"
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

          {/* 3 Core Engagement Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(74, 124, 89, 0.14)',
            }}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(74, 124, 89, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#4a7c59',
                }}
              >
                <TrendingUp size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  Venture Capital Investment Criteria
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Attended flagship investor panel <em>"What Investors Really Look For"</em> with senior partners from Gobi Partners, Rakuten Capital Singapore, and Bintang Capital Partners.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(196, 166, 106, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#705c30',
                }}
              >
                <Award size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  Mission to Market Commercialisation
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Analyzed technology transfer frameworks, intellectual property valuation, and university-to-market scaling pathways fostered by MOSTI and MRANTI.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(38, 68, 48, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#264430',
                }}
              >
                <Users size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  National Innovation Ecosystem
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Engaged with high-growth startup founders, government innovation officers, and corporate venture leaders aligned with Malaysia MADANI economic initiatives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            FEATURED SHOWCASE 2: UITM–UMRAH PLUS INTERNATIONAL TRAVEL MARKET EXHIBITION 2026
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            backgroundColor: '#ffffff',
            border: '2px solid rgba(196, 166, 106, 0.35)',
            borderRadius: '16px',
            padding: '36px',
            marginBottom: '44px',
            boxShadow: '0 12px 36px -10px rgba(112, 92, 48, 0.08)',
          }}
          className="uitm-showcase-card"
        >
          {/* Header Plaque */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px',
              borderBottom: '1px solid rgba(196, 166, 106, 0.22)',
              paddingBottom: '24px',
              marginBottom: '26px',
            }}
          >
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    backgroundColor: '#705c30',
                    color: '#faf6f0',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Globe2 size={12} color="#f8e0a8" />
                  International Diplomatic Expo • 2026
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(74, 124, 89, 0.12)',
                    color: '#264430',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(74, 124, 89, 0.3)',
                  }}
                >
                  UiTM & Tourism Committee of Uzbekistan (UZSAA)
                </span>
                <span
                  style={{
                    backgroundColor: '#f5f1ea',
                    color: '#264430',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  InterContinental Kuala Lumpur
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.95rem',
                  fontWeight: '700',
                  color: '#264430',
                  lineHeight: 1.25,
                  marginBottom: '6px',
                }}
              >
                UiTM–Umrah Plus International Travel Market Exhibition 2026 — Malaysia
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '13px',
                  color: '#705c30',
                  fontWeight: '600',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Building2 size={14} color="#4a7c59" />
                  Universiti Teknologi MARA (UiTM)
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Globe2 size={14} color="#4a7c59" />
                  Tourism Committee of the Republic of Uzbekistan (UZSAA)
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={14} color="#4a7c59" />
                  InterContinental Hotel, Kuala Lumpur
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#faf6f0',
                border: '1px solid rgba(196, 166, 106, 0.4)',
                borderRadius: '8px',
                padding: '10px 16px',
                textAlign: 'right',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#74796e', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                Organizing Role
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#264430' }}>
                Event Organizing Committee Member
              </div>
              <div style={{ fontSize: '12px', color: '#705c30', fontWeight: '600' }}>
                Floor Coordination & Diplomatic Protocol
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '14.5px',
              color: '#383d39',
              lineHeight: 1.68,
              maxWidth: '960px',
              marginBottom: '26px',
            }}
          >
            Served as an active organizing committee member for the international travel market exhibition convened at <strong>InterContinental Kuala Lumpur</strong> in partnership between <strong>Universiti Teknologi MARA (UiTM)</strong> and the <strong>Tourism Committee of the Republic of Uzbekistan (UZSAA)</strong>. Coordinated bilateral diplomatic round-tables between Malaysian tourism leaders and Uzbek state delegations, managed commercial exhibitor floor operations for 30+ international agencies, and supported high-profile VIP protocol for visiting ambassadors.
          </p>

          {/* 3-Image Editorial Gallery Grid */}
          <div style={{ marginBottom: '26px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#705c30" />
                <h4 style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264430', margin: 0 }}>
                  Diplomatic Reception & Bilateral Summit Photography (3 Photos)
                </h4>
              </div>
              <span style={{ fontSize: '12px', color: '#705c30', fontStyle: 'italic' }}>
                Click to inspect in high resolution
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
              }}
              className="expo-photo-grid"
            >
              {uitmPhotos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxState({ gallery: 'uitm', index: pIdx })}
                  style={{
                    backgroundColor: '#faf6f0',
                    border: '1px solid rgba(196, 166, 106, 0.35)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="expo-photo-card"
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
                        objectPosition: photo.id === 'uitm-intercontinental' ? 'center 30%' : 'center center',
                        transition: 'transform 0.35s ease',
                      }}
                      className="expo-img-zoom"
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

                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(196, 166, 106, 0.16)', fontSize: '11px', color: '#705c30', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Maximize2 size={11} /> Click to expand
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Core Pillars for UiTM Expo */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '16px',
              backgroundColor: '#faf6f0',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(196, 166, 106, 0.25)',
            }}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(112, 92, 48, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#705c30',
                }}
              >
                <Globe2 size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  Bilateral Diplomatic Dialogue
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Facilitated bilateral round-tables between the Republic of Uzbekistan tourism leaders and Malaysian authorities on pilgrimage corridors and cultural tourism.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(74, 124, 89, 0.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#4a7c59',
                }}
              >
                <Users size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  InterContinental VIP Protocol
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Managed dignitary receiving lines, ambassador escorts, and ceremonial red-carpet logistics at InterContinental Kuala Lumpur.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(38, 68, 48, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#264430',
                }}
              >
                <Building2 size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '13px', color: '#264430', display: 'block', marginBottom: '2px' }}>
                  Exhibition Floor Management
                </strong>
                <p style={{ fontSize: '12.5px', color: '#4a4e4a', lineHeight: 1.5, margin: 0 }}>
                  Structured booth layouts, technical coordination, and commercial vendor support for 30+ international travel and Umrah hospitality agencies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            FEATURED SHOWCASE 3: KUALA LUMPUR INTERNATIONAL BOOK FAIR 2026 (KLIBF 2026)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            backgroundColor: '#faf6f0',
            border: '2px solid rgba(74, 124, 89, 0.2)',
            borderRadius: '16px',
            padding: '36px',
            marginBottom: '44px',
            boxShadow: '0 12px 36px -10px rgba(38, 68, 48, 0.08)',
          }}
          className="klibf-showcase-card"
        >
          {/* Header Plaque */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px',
              borderBottom: '1px solid rgba(74, 124, 89, 0.16)',
              paddingBottom: '24px',
              marginBottom: '26px',
            }}
          >
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span
                  style={{
                    backgroundColor: '#264430',
                    color: '#faf6f0',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <BookOpen size={12} color="#c4a66a" />
                  International Publishing Fair • 2026
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(196, 166, 106, 0.2)',
                    color: '#705c30',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(196, 166, 106, 0.4)',
                  }}
                >
                  Mashreq International for Books
                </span>
                <span
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#264430',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(74, 124, 89, 0.2)',
                  }}
                >
                  World Trade Centre Kuala Lumpur (WTCKL)
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.95rem',
                  fontWeight: '700',
                  color: '#264430',
                  lineHeight: 1.25,
                  marginBottom: '6px',
                }}
              >
                Kuala Lumpur International Book Fair 2026 (KLIBF 2026)
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '13px',
                  color: '#705c30',
                  fontWeight: '600',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Building2 size={14} color="#4a7c59" />
                  Mashreq International for Books
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={14} color="#4a7c59" />
                  World Trade Centre Kuala Lumpur (WTCKL)
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <Globe2 size={14} color="#4a7c59" />
                  Arabic, Islamic & Academic Publishing
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 124, 89, 0.2)',
                borderRadius: '8px',
                padding: '10px 16px',
                textAlign: 'right',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#74796e', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: '700' }}>
                Exhibition Role
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#264430' }}>
                Sales & Brand Representative
              </div>
              <div style={{ fontSize: '12px', color: '#4a7c59', fontWeight: '600' }}>
                International Publishing Trade Liaison
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '14.5px',
              color: '#383d39',
              lineHeight: 1.68,
              maxWidth: '960px',
              marginBottom: '26px',
            }}
          >
            Represented <strong>Mashreq International for Books</strong> at Malaysia’s flagship publishing expo at the <strong>World Trade Centre Kuala Lumpur (WTCKL)</strong>. Managed institutional client acquisitions, academic book circulation, and high-volume public engagement across a 10-day intensive international trade exhibition.
          </p>

          {/* 2-Image Photographic Evidence Grid */}
          <div style={{ marginBottom: '26px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#4a7c59" />
                <h4 style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#264430', margin: 0 }}>
                  Book Fair Photography & Field Representation (3 Photos)
                </h4>
              </div>
              <span style={{ fontSize: '12px', color: '#705c30', fontStyle: 'italic' }}>
                Click to inspect in high resolution
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
              }}
              className="expo-photo-grid"
            >
              {klibfPhotos.map((photo, pIdx) => (
                <div
                  key={photo.id}
                  onClick={() => setLightboxState({ gallery: 'klibf', index: pIdx })}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(74, 124, 89, 0.16)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  className="expo-photo-card"
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
                        objectPosition: photo.id === 'klibf-vest' ? 'center 15%' : 'center center',
                        transition: 'transform 0.35s ease',
                      }}
                      className="expo-img-zoom"
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

          {/* Core Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#2e3230' }}>
              <CheckCircle size={15} color="#4a7c59" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>10-Day Intensive Trade Exhibition:</strong> Represented Mashreq International, presenting diverse catalogs of Arabic, Islamic, and academic works.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#2e3230' }}>
              <CheckCircle size={15} color="#4a7c59" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Delegation & Public Engagement:</strong> Interacted with thousands of international visitors, university delegations, and academic buyers.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#2e3230' }}>
              <CheckCircle size={15} color="#4a7c59" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Inventory & Commercial Logistics:</strong> Managed on-site inventory reconciliation and real-time customer acquisition feedback.</span>
            </div>
          </div>
        </motion.div>

        {/* Institutional Credentials Grid */}
        <div style={{ marginTop: '36px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430', marginBottom: '8px' }}>
            Accreditations & Community Engagement Roles
          </h3>
          <p style={{ fontSize: '13.5px', color: '#74796e', marginBottom: '22px' }}>
            Verified positions across national expos, international trade fairs, and NGO programs:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {credentials.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="editorial-card"
                style={{
                  padding: '24px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(74, 124, 89, 0.12)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Ticket size={16} color={c.color} />
                  <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: c.color }}>
                    {c.badge}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: '#264430', marginBottom: '4px' }}>
                  {c.title}
                </h4>
                <div style={{ fontSize: '12px', color: '#705c30', fontWeight: '600', marginBottom: '10px' }}>
                  {c.organization}
                </div>
                <p style={{ fontSize: '13px', color: '#4a4e4a', lineHeight: 1.55 }}>
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR FULL-RESOLUTION INSPECTION
          ========================================================================= */}
      <AnimatePresence>
        {lightboxState !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxState(null)}
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
                maxWidth: '960px',
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
              {/* Lightbox Header Bar */}
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
                    {currentGalleryList[lightboxState.index]?.badge}
                  </span>
                  <span style={{ fontSize: '13px', color: '#d5dcd2' }}>
                    Photo {lightboxState.index + 1} of {currentGalleryList.length}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() =>
                      setLightboxState((prev) => ({
                        ...prev,
                        index: (prev.index - 1 + currentGalleryList.length) % currentGalleryList.length,
                      }))
                    }
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: '#faf6f0',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                    }}
                    title="Previous Photo (Left Arrow)"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={() =>
                      setLightboxState((prev) => ({
                        ...prev,
                        index: (prev.index + 1) % currentGalleryList.length,
                      }))
                    }
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      color: '#faf6f0',
                      borderRadius: '6px',
                      padding: '6px 10px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                    }}
                    title="Next Photo (Right Arrow)"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <button
                    onClick={() => setLightboxState(null)}
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
                    aria-label="Close Lightbox"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Main Image Frame */}
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
                  src={currentGalleryList[lightboxState.index]?.src}
                  alt={currentGalleryList[lightboxState.index]?.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                  }}
                />
              </div>

              {/* Lightbox Footer Caption */}
              <div
                style={{
                  padding: '16px 22px',
                  borderTop: '1px solid rgba(250, 246, 240, 0.12)',
                  backgroundColor: '#16271c',
                  color: '#faf6f0',
                }}
              >
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#f8e0a8',
                    marginBottom: '4px',
                  }}
                >
                  {currentGalleryList[lightboxState.index]?.title}
                </h4>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#d5dcd2',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {currentGalleryList[lightboxState.index]?.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .expo-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -6px rgba(38, 68, 48, 0.14) !important;
          border-color: rgba(74, 124, 89, 0.4) !important;
        }
        .expo-photo-card:hover .expo-img-zoom {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .nice-showcase-card, .uitm-showcase-card, .klibf-showcase-card {
            padding: 20px !important;
          }
          .expo-photo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
