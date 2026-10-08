import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Calendar,
  Camera,
  HeartHandshake,
  Building2,
  CheckCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react';

import mediaCameraImg from '../../o5.jpeg';
import reliefImg from '../../o2.jpeg';
import corporateVisitImg from '../../o3.jpeg';

export default function Activities() {
  const exhibitions = [
    {
      title: 'Sales & Brand Representative',
      event: 'Kuala Lumpur International Book Fair (KLIBF 2026)',
      organization: 'Mashreq International for Books',
      year: '2026',
      location: 'World Trade Centre Kuala Lumpur (WTCKL)',
      desc: 'Represented Mashreq International at Malaysia’s flagship publishing expo, managing client relations and book circulation for international Arabic, Islamic, and academic titles.',
      bullets: [
        'Represented the company across 10-day exhibition, promoting a diverse catalog of Arabic, Islamic, and educational publications.',
        'Engaged thousands of international visitors, scholars, and academic buyers, driving product awareness and direct revenue.',
        'Managed on-site inventory reconciliation and real-time customer feedback collection.',
      ],
      tag: 'Publishing & International Trade',
    },
    {
      title: 'Event Organizing Committee Member',
      event: 'UiTM–Umrah Plus International Travel Market Exhibition 2026',
      organization: 'UiTM & Travel Market Consortium',
      year: '2026',
      location: 'Kuala Lumpur, Malaysia',
      desc: 'Key committee organizer responsible for exhibitor logistics, floor coordination, public relations, and on-site media coverage for international travel agencies and tourism boards.',
      bullets: [
        'Coordinated booth allocations, technical specs, and vendor requirements for 30+ international travel agencies and vendors.',
        'Managed public relations and visitor inquiries, promoting Islamic tourism and emerging "Umrah Plus" hospitality trends.',
        'Executed digital promotion and on-site media coordination to maximize physical event turnout and press visibility.',
      ],
      tag: 'Exhibition Management & PR',
    },
  ];

  const galleryItems = [
    {
      img: mediaCameraImg,
      caption: 'Digital Media & Outreach Coverage',
      sub: 'DSLR visual storytelling & NGO event documentation',
      role: 'Media Coordinator',
    },
    {
      img: reliefImg,
      caption: 'Community Food Aid & Relief Operations',
      sub: 'Red Crescent emergency meal preparation & distribution',
      role: 'Outreach Volunteer',
    },
    {
      img: corporateVisitImg,
      caption: 'Corporate & Economic Sector Engagement',
      sub: 'Maybank commercial banking & innovation engagement',
      role: 'Economics Scholar',
    },
  ];

  return (
    <section id="activities" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <div className="section-eyebrow">
            <Compass size={14} color="#c8a24a" />
            <span>Exhibitions, Trade Fairs & Field Coordination</span>
          </div>
          <h2 className="section-title">
            Professional Activities & <span className="serif-italic">International Exhibitions</span>
          </h2>
          <p className="section-subtitle">
            Active engagement across international exhibitions, trade fairs, multi-vendor coordination, and humanitarian field documentation.
          </p>
        </div>

        {/* 2 Major Exhibitions Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '48px',
          }}
        >
          {exhibitions.map((e, idx) => (
            <motion.div
              key={e.event}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="editorial-card"
              style={{
                padding: '28px',
                backgroundColor: '#fdf9f0',
                border: '1px solid rgba(11, 31, 58, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge-tag-warm" style={{ backgroundColor: '#ffffff', color: '#0b1f3a', fontWeight: '600' }}>
                    {e.tag}
                  </span>
                  <span className="tnum" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#785a00', fontWeight: '700' }}>
                    {e.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#0b1f3a', marginBottom: '4px' }}>
                  {e.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#785a00', fontSize: '14.5px', marginBottom: '8px' }}>
                  {e.event}
                </div>
                <div style={{ fontSize: '12px', color: '#75777e', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
                  <MapPin size={12} /> {e.location} • {e.organization}
                </div>

                <p style={{ fontSize: '13.5px', color: '#44474d', lineHeight: 1.6, marginBottom: '16px' }}>
                  {e.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {e.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#2e3230' }}>
                      <CheckCircle size={14} color="#2a7f83" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photographic Field & Activity Gallery */}
        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#0b1f3a', marginBottom: '8px' }}>
            Field Documentation & Community Engagements
          </h3>
          <p style={{ fontSize: '13.5px', color: '#75777e', marginBottom: '22px' }}>
            Moments capturing media production, NGO humanitarian logistics, and industry networking:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.caption}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="editorial-card"
                style={{
                  padding: '12px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: '#f1eee5',
                    aspectRatio: '3 / 4',
                    maxHeight: '340px',
                    marginBottom: '12px',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ padding: '4px 6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span className="badge-taxonomy" style={{ fontSize: '10px' }}>{item.role}</span>
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#0b1f3a', marginBottom: '2px' }}>
                    {item.caption}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#75777e' }}>
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
