import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Globe,
  Monitor,
  Users,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('data');

  const categories = [
    { id: 'data', label: 'Data & Econometrics', icon: <BarChart3 size={15} /> },
    { id: 'marketing', label: 'Digital Marketing & SEO', icon: <Globe size={15} /> },
    { id: 'tools', label: 'Productivity & Research', icon: <Monitor size={15} /> },
    { id: 'leadership', label: 'Outreach & Leadership', icon: <Users size={15} /> },
  ];

  const skillGroups = {
    data: [
      { name: 'ARDL Modeling', level: 'Expert', desc: 'Autoregressive Distributed Lag cointegration bounds testing and error correction (ECM).' },
      { name: 'SPSS Analysis', level: 'Advanced', desc: 'Cross-sectional hypothesis testing, multivariate regression, and descriptive synthesis.' },
      { name: 'Stata', level: 'Proficient', desc: 'Time series estimation, unit root diagnostics (ADF, PP), and statistical forecasting.' },
      { name: 'Advanced Excel', level: 'Advanced', desc: 'Pivot Tables, VLOOKUP/XLOOKUP, econometric forecasting models, and financial scenarios.' },
      { name: 'World Bank Open Data', level: 'Expert', desc: 'Extracting, cleaning, and standardizing macro indicators across developing nations.' },
      { name: 'Applied Econometrics', level: 'Advanced', desc: 'Macroeconomic modeling, labor market elasticity, capital flow absorption.' },
    ],
    marketing: [
      { name: 'WordPress CMS', level: 'Advanced', desc: 'Publishing, on-site SEO optimization, taxonomy structuring, and engagement formatting.' },
      { name: 'Search Engine Optimization (SEO)', level: 'Advanced', desc: 'Keyword research, meta structuring, search intent optimization, readability scoring.' },
      { name: 'Social Media Marketing', level: 'Proficient', desc: 'End-to-end campaign planning, multi-platform publishing, and audience engagement.' },
      { name: 'Canva Design', level: 'Advanced', desc: 'High-impact infographics, social campaign visuals, workshop slide decks.' },
      { name: 'CapCut Video Editing', level: 'Proficient', desc: 'Short-form visual editing, subtitle styling, pacing, and digital storytelling.' },
    ],
    tools: [
      { name: 'Microsoft Excel', level: 'Advanced', desc: 'Complex quantitative sheets, regression add-in, scenario managers, data visualization.' },
      { name: 'Microsoft PowerPoint', level: 'Advanced', desc: 'Academic seminar defense decks, executive briefings, institutional presentations.' },
      { name: 'Microsoft Word', level: 'Advanced', desc: 'Scholarly monograph compilation, citation referencing, policy proposals.' },
      { name: 'Google Workspace', level: 'Advanced', desc: 'Docs, Sheets, Slides, and Google Forms for empirical survey intake.' },
    ],
    leadership: [
      { name: 'Community Outreach', level: 'Expert', desc: 'Connecting with non-profit beneficiaries, refugees, and aspiring scholars.' },
      { name: 'Event Coordination', level: 'Advanced', desc: 'Exhibition booth logistics, vendor contracts, attendee flow at KLIBF and UiTM.' },
      { name: 'Public Speaking', level: 'Advanced', desc: 'Award-winning academic presentations, seminar defense, and training delivery.' },
      { name: 'Stakeholder Relations', level: 'Proficient', desc: 'Collaborating with government entities (MADA), university faculties, and NGOs.' },
      { name: 'Grant Budget Management', level: 'Proficient', desc: 'Administering university-funded grants (RM5,000) with complete accountability.' },
    ],
  };

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Cpu size={14} color="#c8a24a" />
            <span>Comprehensive Technical & Methodological Competencies</span>
          </div>
          <h2 className="section-title">
            Core Skills & <span className="serif-italic">Analytical Toolkit</span>
          </h2>
          <p className="section-subtitle">
            A balanced synthesis of econometric research, digital growth strategy, productivity software, and stakeholder leadership.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={activeTab === cat.id ? 'btn-primary' : 'btn-secondary'}
              style={{
                fontSize: '13px',
                padding: '10px 18px',
                borderRadius: '6px',
              }}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid for active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {skillGroups[activeTab].map((skill, idx) => (
            <div
              key={skill.name}
              className="editorial-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0b1f3a' }}>
                    {skill.name}
                  </h3>
                  <span
                    className={skill.level === 'Expert' ? 'badge-honor' : 'badge-teal'}
                    style={{ fontSize: '11px', padding: '2px 8px' }}
                  >
                    {skill.level}
                  </span>
                </div>

                <p style={{ fontSize: '13px', color: '#44474d', lineHeight: 1.55 }}>
                  {skill.desc}
                </p>
              </div>

              {/* Progress Indicator Accent */}
              <div style={{ marginTop: '16px' }}>
                <div style={{ height: '4px', width: '100%', backgroundColor: '#f1eee5', borderRadius: '2px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '75%',
                      backgroundColor: skill.level === 'Expert' ? '#c8a24a' : '#2a7f83',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
