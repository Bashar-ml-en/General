import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  CheckCircle,
  MapPin,
  Ticket,
} from 'lucide-react';

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

  const credentials = [
    {
      badge: 'Trade Expo Credential',
      title: 'KLIBF 2026 Representative',
      organization: 'Mashreq International for Books',
      desc: 'Accredited sales liaison managing Arabic and academic literature circulation across international academic delegations.',
      color: '#264430',
    },
    {
      badge: 'Committee Appointment',
      title: 'UiTM Travel Exhibition Organizing Lead',
      organization: 'UiTM Consortium',
      desc: 'Appointed committee member overseeing commercial floor plans, international vendor setup, and public relations.',
      color: '#705c30',
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
        <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
          <div className="section-eyebrow">
            <Compass size={14} color="#c4a66a" />
            <span>Exhibitions, Trade Fairs & Field Coordination</span>
          </div>
          <h2 className="section-title">
            Professional Activities & <span className="serif-italic" style={{ color: '#4a7c59' }}>International Exhibitions</span>
          </h2>
          <p className="section-subtitle">
            Active engagement across international exhibitions, trade fairs, multi-vendor coordination, and humanitarian field initiatives.
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
                backgroundColor: '#faf6f0',
                border: '1px solid rgba(74, 124, 89, 0.14)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge-tag-warm" style={{ backgroundColor: '#ffffff', color: '#264430', fontWeight: '700' }}>
                    {e.tag}
                  </span>
                  <span className="tnum" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#705c30', fontWeight: '700' }}>
                    {e.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430', marginBottom: '4px' }}>
                  {e.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#705c30', fontSize: '14.5px', marginBottom: '8px' }}>
                  {e.event}
                </div>
                <div style={{ fontSize: '12px', color: '#74796e', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
                  <MapPin size={12} /> {e.location} • {e.organization}
                </div>

                <p style={{ fontSize: '13.5px', color: '#4a4e4a', lineHeight: 1.6, marginBottom: '16px' }}>
                  {e.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {e.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#2e3230' }}>
                      <CheckCircle size={14} color="#4a7c59" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Credentials Grid */}
        <div style={{ marginTop: '32px' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430', marginBottom: '8px' }}>
            Accreditations & Community Engagement Roles
          </h3>
          <p style={{ fontSize: '13.5px', color: '#74796e', marginBottom: '22px' }}>
            Verified positions across major exhibitions and NGO programs:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
    </section>
  );
}
