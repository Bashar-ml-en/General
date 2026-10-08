import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building,
  CheckCircle2,
  Users2,
  Compass,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Media & Outreach Coordinator',
      company: 'Nagashi Relief and Development Berhad (NGO)',
      period: 'Mar 2025 – Apr 2026',
      badge: 'NGO & Community Development',
      badgeColor: '#0b1f3a',
      location: 'Kuala Lumpur / Kedah, Malaysia',
      desc: 'Directed comprehensive media strategy and community development initiatives, serving as primary liaison between institutional leadership, prospective scholars, and vulnerable demographic groups.',
      bullets: [
        'Managed Nagashi Media’s digital outreach and content strategy, growing organizational visibility across social platforms through data-driven storytelling.',
        'Advised prospective international and local students on the Albukhary International University (AIU) full scholarship admissions process and academic transitions.',
        'Facilitated English-language instruction and capacity-building workshops for refugees, directly enhancing community engagement and educational upward mobility.',
        'Organized multimedia coverage and post-event analysis to quantify audience engagement across campaigns.',
      ],
      skills: ['Digital Content Strategy', 'Scholarship Advising', 'Refugee Workshop Facilitation', 'Public Communications'],
    },
    {
      role: 'Digital Marketing Intern',
      company: 'TAKO',
      period: 'Nov 2025 – Feb 2026',
      badge: 'Private Sector & SEO',
      badgeColor: '#2a7f83',
      location: 'Kuala Lumpur, Malaysia',
      desc: 'Executed performance-focused content marketing and on-page search engine optimization within a fast-paced agency setting, elevating organic search rankings and audience retention.',
      bullets: [
        'Wrote and managed SEO-optimized blog content on WordPress, improving on-site organic search engagement, keyword densities, and readability scores.',
        'Supported end-to-end digital marketing campaigns, translating high-level marketing briefs from initial content planning to final multi-channel publication.',
        'Analyzed web traffic indicators and user navigation heatmaps to refine content structure and user conversion points.',
      ],
      skills: ['WordPress CMS', 'On-Page SEO', 'Content Marketing', 'Copywriting & Readability'],
    },
    {
      role: 'Scholarship & Outreach Volunteer',
      company: 'Ijma Foundation for Humanitarian Action',
      period: 'Jul 2025 – Jan 2026',
      badge: 'Humanitarian Outreach',
      badgeColor: '#785a00',
      location: 'Malaysia',
      desc: 'Provided dedicated mentorship and structured guidance for aspiring undergraduate candidates pursuing transformative tertiary education scholarships.',
      bullets: [
        'Guided prospective applicants through the competitive AIU scholarship application lifecycle, from initial inquiry through dossier preparation and final submission.',
        'Supported digital outreach campaigns to broaden awareness of higher education scholarship opportunities among underrepresented student populations.',
        'Collaborated with admissions committees to answer procedural queries and ensure documentation integrity.',
      ],
      skills: ['Mentorship', 'Application Review', 'Humanitarian Outreach', 'Stakeholder Engagement'],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="section-eyebrow">
            <Briefcase size={14} color="#c8a24a" />
            <span>Professional Career History</span>
          </div>
          <h2 className="section-title">
            Professional Experience & <span className="serif-italic">Operational Track Record</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated versatility across non-profit humanitarian coordination, digital marketing strategy, and international scholarship advocacy.
          </p>
        </div>

        {/* Policy Timeline Container */}
        <div className="policy-timeline" style={{ maxWidth: '980px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="policy-node"
            >
              {/* Gold Node Bullet */}
              <div className="policy-dot" />

              {/* Experience Card */}
              <div
                className="editorial-card"
                style={{
                  padding: '28px 32px',
                  backgroundColor: '#fdf9f0',
                  border: '1px solid rgba(11, 31, 58, 0.1)',
                }}
              >
                {/* Header Row */}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        backgroundColor: exp.badgeColor,
                        color: '#fdf9f0',
                        fontSize: '11px',
                        fontWeight: '600',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {exp.badge}
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#75777e' }}>{exp.location}</span>
                  </div>

                  <div
                    className="tnum"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12.5px',
                      fontWeight: '600',
                      color: '#0b1f3a',
                      backgroundColor: 'rgba(11, 31, 58, 0.05)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                  >
                    <Calendar size={12} style={{ display: 'inline', marginRight: '5px' }} />
                    {exp.period}
                  </div>
                </div>

                {/* Job Title & Company */}
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#0b1f3a', marginBottom: '4px' }}>
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '15px',
                    color: '#785a00',
                    fontStyle: 'italic',
                    marginBottom: '14px',
                  }}
                >
                  {exp.company}
                </div>

                <p style={{ fontSize: '14px', color: '#44474d', lineHeight: 1.6, marginBottom: '18px' }}>
                  {exp.desc}
                </p>

                {/* Bullet Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {exp.bullets.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '13.5px',
                        color: '#2e3230',
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="#2a7f83"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="badge-taxonomy"
                      style={{ backgroundColor: '#ffffff', fontSize: '11px' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
