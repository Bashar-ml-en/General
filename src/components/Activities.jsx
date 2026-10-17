import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Globe2,
  Instagram,
  ExternalLink,
  HeartHandshake,
  Users,
  CheckCircle2,
  Languages,
  Megaphone,
} from 'lucide-react';

export default function Activities() {
  const [articleLang, setArticleLang] = useState('en'); // 'en' | 'ar'

  const articles = {
    en: {
      dir: 'ltr',
      badge: 'UPDAZONE (UDZ ENGLISH) • INVESTIGATIVE JOURNALISM (2023–2024)',
      headline: "Shadows Over Omdurman: Conflicting Claims in Sudan's War",
      byline: 'By Mosaab Mohammed Adam • Published on Updazone Student News Platform',
      summary:
        'Researched, verified, and wrote an in-depth investigative report examining conflicting military and humanitarian claims between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) following the airstrike in Dar Al-Salam, Omdurman.',
      excerpt:
        'In Omdurman, west of Khartoum, the Sudanese army denies carrying out an airstrike that the Rapid Support Forces (RSF) claim killed civilians in the "22 Dar Al-Salam Imbada Square" area. Army officials insist their air force did not target civilian positions, accusing the RSF of shelling residential neighborhoods with artillery and rockets. While both sides battle for narrative dominance in the headlines, civilians bear the brunt of the humanitarian crisis.',
      screenshot: '/mosab/raw/img_104_obj1536_648x810.jpg',
    },
    ar: {
      dir: 'rtl',
      badge: 'منصة أبدازون (UDZ العربية) • صحافة استقصائية وتقارير إخبارية (2023–2024)',
      headline: 'ظلال فوق أم درمان: مزاعم متضاربة في حرب السودان',
      byline: 'بقلم: مصعب محمد آدم • تقارير أسبوعية باللغتين العربية والإنجليزية',
      summary:
        'إعداد وتحرير تقارير إخبارية أسبوعية معمقة حول التطورات السياسية والاجتماعية والإنسانية في السودان باللغتين العربية والإنجليزية، مع تطبيق مهارات التحقق الاستقصائي لتفنيد الروايات المتضاربة وتقديم أخبار دقيقة وموثوقة.',
      excerpt:
        'في أم درمان، غرب الخرطوم، ينفي الجيش السوداني تنفيذ غارة جوية تقول قوات الدعم السريع إنها قتلت مدنيين في منطقة "مربع 22 دار السلام أمبدة". ويؤكد المتحدث باسم الجيش أن سلاح الجو لم يستهدف أي مواقع معادية في أم درمان، متهماً قوات الدعم السريع بقصف الأحياء السكنية بالمدفعية والصواريخ، وبينما تتصارع هاتان الروايتان على صدارة المشهد الإعلامي، تتواصل معاناة المدنيين الإنسانية.',
      screenshot: '/mosab/raw/img_105_obj1537_648x810.jpg',
    },
  };

  const activeArticle = articles[articleLang];

  const leadershipRoles = [
    {
      period: '2023 – 2025',
      role: 'Media Officer',
      org: 'Nagashi Club — Albukhary International University',
      field: 'Promotional Design, Event Content & Audio/DJ Coordination',
      description:
        'Designed high-visibility promotional materials, managed live audio and DJ sets during campus cultural festivals, created real-time social media event content, and documented student community activities.',
      link: 'https://www.instagram.com/naga_shi_club.aiu?igsh=cml5ejhyd2V2ZGFt',
      linkLabel: '@naga_shi_club.aiu',
      accent: '#1e4d3b',
    },
    {
      period: '2022 – 2023',
      role: 'Sports Affairs Officer',
      org: 'Sudanese Student Community (SSC — AIU)',
      field: 'Sports Tournament Organization, Branding & Media Coverage',
      description:
        'Designed tournament branding, promoted community athletic fixtures, organized inter-community sports events, and documented matches through action photography and highlight reels.',
      link: 'https://www.instagram.com/ssc.aiu?igsh=MTlvYWlvNW5rNWRibw==',
      linkLabel: '@ssc.aiu',
      accent: '#c88a32',
    },
  ];

  return (
    <section
      id="activities"
      className="section-padding"
      style={{
        backgroundColor: 'var(--canvas-bg)',
        borderTop: '1px solid var(--border-hairline)',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
          <div className="section-eyebrow">
            <Newspaper size={14} color="#1e4d3b" />
            <span>Bilingual Journalism, Leadership & Humanitarian Advocacy</span>
          </div>
          <h2 className="section-title">
            Investigative News Desk &{' '}
            <span className="serif-italic" style={{ color: '#1e4d3b' }}>
              Community Impact
            </span>
          </h2>
          <p className="section-subtitle">
            From bilingual (Arabic & English) investigative reporting on Sudan’s humanitarian crisis to leading refugee camp safe-migration workshops in Kassala and campus media organizations in Malaysia.
          </p>
        </div>

        {/* Interactive Bilingual Investigative Journalism Reader (UDZ 2023-2024) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="editorial-card"
          style={{
            padding: '32px',
            marginBottom: '40px',
            backgroundColor: '#ffffff',
            borderTop: '4px solid #d93829',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingBottom: '20px',
              marginBottom: '24px',
              borderBottom: '1px solid var(--border-hairline)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#d93829',
                  letterSpacing: '0.08em',
                  marginBottom: '4px',
                }}
              >
                WEEKLY NEWS ARTICLES ON SUDAN (2023 – 2024) • UPDAZONE PLATFORM (UDZ)
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '25px' }}>
                Interactive Bilingual Investigative News Desk
              </h3>
            </div>

            {/* Language Switcher + UDZ Link */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  backgroundColor: 'var(--canvas-warm)',
                  padding: '4px',
                  borderRadius: '10px',
                  border: '1px solid rgba(26, 23, 20, 0.12)',
                }}
              >
                <button
                  onClick={() => setArticleLang('en')}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '7px',
                    border: 'none',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    backgroundColor: articleLang === 'en' ? '#1e4d3b' : 'transparent',
                    color: articleLang === 'en' ? '#ffffff' : 'var(--text-secondary)',
                  }}
                >
                  English Edition (LTR)
                </button>
                <button
                  onClick={() => setArticleLang('ar')}
                  className="font-arabic"
                  style={{
                    padding: '7px 14px',
                    borderRadius: '7px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    backgroundColor: articleLang === 'ar' ? '#d93829' : 'transparent',
                    color: articleLang === 'ar' ? '#ffffff' : 'var(--text-secondary)',
                  }}
                >
                  النسخة العربية (RTL)
                </button>
              </div>

              <a
                href="https://www.facebook.com/share/176bkaNp19/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '12.5px' }}
              >
                <ExternalLink size={14} color="#d93829" />
                <span>UDZ Platform</span>
              </a>
            </div>
          </div>

          {/* 12-Column Article Text + Original Published Clippings */}
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div
              style={{ gridColumn: 'span 7' }}
              dir={activeArticle.dir}
              className={`udz-left ${articleLang === 'ar' ? 'font-arabic' : ''}`}
            >
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 11px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-crimson-bg)',
                  color: '#d93829',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                {activeArticle.badge}
              </div>

              <h4
                style={{
                  fontFamily: articleLang === 'ar' ? 'var(--font-arabic)' : 'var(--font-serif)',
                  fontSize: '26px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '8px',
                }}
              >
                {activeArticle.headline}
              </h4>

              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#1e4d3b',
                  marginBottom: '16px',
                }}
              >
                {activeArticle.byline}
              </div>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  fontWeight: 500,
                }}
              >
                {activeArticle.summary}
              </p>

              <div
                style={{
                  padding: '18px 20px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--canvas-bg)',
                  borderLeft: articleLang === 'en' ? '3px solid #1e4d3b' : 'none',
                  borderRight: articleLang === 'ar' ? '3px solid #d93829' : 'none',
                  fontSize: '14.5px',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                }}
              >
                “{activeArticle.excerpt}”
              </div>
            </div>

            {/* Right 5 Columns: Side-by-Side Published Article Screenshots */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
              className="udz-right"
            >
              <div
                onClick={() => setArticleLang('en')}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border:
                    articleLang === 'en'
                      ? '2.5px solid #1e4d3b'
                      : '1px solid rgba(26, 23, 20, 0.15)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src="/mosab/raw/img_104_obj1536_648x810.jpg"
                  alt="UDZ English Article — Shadows Over Omdurman"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div
                onClick={() => setArticleLang('ar')}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border:
                    articleLang === 'ar'
                      ? '2.5px solid #d93829'
                      : '1px solid rgba(26, 23, 20, 0.15)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src="/mosab/raw/img_105_obj1537_648x810.jpg"
                  alt="UDZ Arabic Article — ظلال فوق أم درمان"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Humanitarian Advocacy: Community Protection Network, Kassala – Sudan (2020) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="editorial-card"
          style={{
            padding: '30px',
            marginBottom: '32px',
            backgroundColor: '#ffffff',
            borderLeft: '4px solid #c88a32',
          }}
        >
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 6' }} className="kassala-left">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <span className="badge-honor">2020 • KASSALA, SUDAN</span>
                <span className="badge-sage">Humanitarian Protection & Visual Advocacy</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', marginBottom: '6px' }}>
                Designer — Community Protection Network, Kassala – Sudan
              </h3>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#7c5216', marginBottom: '14px' }}>
                “Lifeline” Safe Migration Initiative & Refugee Camp Outreach Workshops
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                Designed high-impact visual awareness posters and led community campaigns for the{' '}
                <strong>“Lifeline” initiative</strong>, raising critical awareness on the life-threatening dangers of irregular migration. Collaborated with local leaders to facilitate interactive workshops inside refugee camps, empowering vulnerable youth and families with safe and informed migration choices.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Poster Design', 'Refugee Camp Workshops', 'Safe Migration Advocacy', 'Community Outreach'].map(
                  (tag) => (
                    <span key={tag} className="badge-tag-warm">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              style={{
                gridColumn: 'span 6',
                display: 'grid',
                gridTemplateColumns: '5fr 7fr',
                gap: '14px',
                alignItems: 'center',
              }}
              className="kassala-right"
            >
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(26, 23, 20, 0.16)',
                  backgroundColor: '#141210',
                }}
              >
                <img
                  src="/mosab/raw/img_108_obj1570_754x1131.jpg"
                  alt="Lifeline Campaign Poster — Community Protection Network Kassala Sudan"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(26, 23, 20, 0.16)',
                  backgroundColor: '#141210',
                }}
              >
                <img
                  src="/mosab/raw/img_106_obj1565_768x576.jpg"
                  alt="Mosaab Mohammed at Community Protection Network Workshop in Kassala, Sudan"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div
                  style={{
                    padding: '8px 12px',
                    fontSize: '11.5px',
                    color: '#f6f2ea',
                    backgroundColor: '#1e1b18',
                  }}
                >
                  Mosaab receiving recognition during the Community Protection Network workshop in Kassala (2020).
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campus Leadership Cards: Nagashi Club & Sudanese Student Community */}
        <div className="grid-2">
          {leadershipRoles.map((item) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-card"
              style={{
                padding: '26px',
                borderTop: `3px solid ${item.accent}`,
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
                    marginBottom: '10px',
                  }}
                >
                  <span className="badge-tag-warm">{item.period}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: item.accent, fontWeight: 700 }}>
                    CAMPUS LEADERSHIP
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '21px', marginBottom: '4px' }}>
                  {item.role}
                </h3>
                <div style={{ fontSize: '14px', fontWeight: 700, color: item.accent, marginBottom: '10px' }}>
                  {item.org}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>
                  {item.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {item.field}
                </span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  <Instagram size={13} color="#d93829" />
                  <span>{item.linkLabel}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .udz-left, .udz-right, .kassala-left, .kassala-right {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .kassala-right {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
