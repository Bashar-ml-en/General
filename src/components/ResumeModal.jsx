import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  FileText,
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextCV = `ALHASSAN IBRAHIM ALI HASSAN
Economics Graduate | Applied Economics & Data Analysis
Kuala Lumpur, Malaysia | alhassan.ibrahim2070@gmail.com | +60 17 922 6551 | LinkedIn

PROFESSIONAL SUMMARY
Economics graduate with hands-on experience in applied econometrics and data analysis (Excel, SPSS, Stata, World Bank datasets), combined with a strong track record in digital marketing, community outreach, and event coordination. Delivered a Platinum Award-winning research project using ARDL modeling, led a university-funded SME digital-skills training program with a RM5,000 budget, and managed communications for an NGO reaching hundreds of beneficiaries. Native Arabic speaker, fluent in English, with proven ability to engage diverse stakeholders and drive measurable outcomes.

CORE SKILLS
• Data & Analysis: Excel, SPSS, Stata, World Bank Data, ARDL Modeling, Econometrics
• Digital Marketing: WordPress (Blog/SEO), Social Media Marketing, Canva, CapCut
• Productivity & Design: Microsoft Office (Word, Excel, PowerPoint), Google Workspace (Docs, Sheets, Slides)
• Professional: Community Outreach, Event Coordination, Stakeholder & Vendor Relations, Public Speaking
• Languages: Arabic (Native), English (Fluent)

PROFESSIONAL EXPERIENCE
Media & Outreach Coordinator | Nagashi Relief and Development Berhad (NGO) | Mar 2025 – Apr 2026
• Managed Nagashi Media's digital outreach and content strategy, growing organizational visibility across social platforms.
• Advised prospective students on the Albukhary International University (AIU) scholarship process and academic transition.
• Facilitated English-language and capacity-building workshops for refugees, strengthening community engagement.

Digital Marketing Intern | TAKO | Nov 2025 – Feb 2026
• Wrote and managed SEO-optimized blog content on WordPress, improving on-site engagement and readability.
• Supported end-to-end digital marketing campaigns, from content planning to publication.

Scholarship & Outreach Volunteer | Ijma Foundation for Humanitarian Action | Jul 2025 – Jan 2026
• Guided prospective applicants through the AIU scholarship application process from inquiry to submission.
• Supported digital outreach campaigns to promote scholarship opportunities to prospective students.

KEY PROJECTS
Final Year Research Project — Investigating FDI's Role on Youth Unemployment in Thailand | Seminar in Contemporary Economic Issues 2025
• Conducted independent research applying ARDL modeling and SPSS to analyze long- and short-run economic relationships.
• Presented findings at AIU Seminar Day; received the Platinum Award for research quality and presentation.

Digital Training Program for SMEs | Final Year Community Project — Alor Setar 2025
• Led a digital-skills training program for local SMEs to strengthen online presence and business performance.
• Conducted needs assessments through surveys and interviews with entrepreneurs to tailor training content.
• Trained participants in Canva, social media marketing, and e-commerce fundamentals.
• Managed a RM5,000 university-funded project budget and collaborated with the Muda Agricultural Development Authority (MADA) on coordination and delivery.

PROFESSIONAL ACTIVITIES & EXHIBITIONS
Sales & Brand Representative | Mashreq International for Books — Kuala Lumpur International Book Fair (KLIBF) 2026
• Represented the company at KLIBF, promoting a diverse catalog of Arabic, Islamic, and educational publications.
• Engaged visitors to introduce products, communicate promotions, and enhance brand awareness.

Event Organizing Committee Member | UiTM–Umrah Plus International Travel Market Exhibition 2026
• Coordinated booth allocations and vendor requirements for an international travel market exhibition.
• Managed public relations and visitor inquiries, promoting Islamic tourism and "Umrah Plus" travel trends.
• Supported digital promotion and on-site media coordination to maximize event turnout.

EDUCATION & CERTIFICATIONS
Bachelor of Economics (Hons.) | Albukhary International University | Graduated Apr 2026
Relevant Coursework: Microeconomics, Macroeconomics, Development Economics, Econometrics, Islamic Economics & Finance, Principles of Marketing, Entrepreneurship & Innovation.
• Platinum Award — Best Research Paper, AIU Seminar Day (2025)
• Gold Award — Social Business Group Project

References available upon request.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(plainTextCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-wrapper"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '92vh',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid rgba(74, 124, 89, 0.25)',
          boxShadow: '0 25px 60px -15px rgba(31, 54, 39, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Modal Chrome Header */}
        <div
          className="no-print"
          style={{
            padding: '16px 24px',
            backgroundColor: '#264430',
            color: '#faf6f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(196, 166, 106, 0.45)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                backgroundColor: 'rgba(196, 166, 106, 0.2)',
                color: '#f8e0a8',
                padding: '6px',
                borderRadius: '6px',
              }}
            >
              <FileText size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff' }}>
                Curriculum Vitae • Alhassan Ibrahim Ali Hassan
              </h3>
              <p style={{ fontSize: '11px', color: '#d5dcd2' }}>
                Bachelor of Economics (Hons.) • Applied Econometrics & Data Analysis
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleCopy}
              className="btn-ghost-dark"
              style={{ padding: '6px 12px', fontSize: '12px' }}
              title="Copy plain text CV to clipboard"
            >
              {copied ? <Check size={14} color="#f8e0a8" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-amber"
              style={{ padding: '6px 14px', fontSize: '12px' }}
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.12)',
                border: 'none',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close CV Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '36px 44px',
            backgroundColor: '#ffffff',
            color: '#2e3230',
          }}
          className="cv-document"
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #264430', paddingBottom: '16px', marginBottom: '20px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '28px',
                fontWeight: '700',
                color: '#264430',
                letterSpacing: '0.04em',
                marginBottom: '4px',
              }}
            >
              ALHASSAN IBRAHIM ALI HASSAN
            </h1>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: '600',
                color: '#705c30',
                marginBottom: '8px',
              }}
            >
              Economics Graduate | Applied Economics & Data Analysis
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12.5px',
                color: '#4a4e4a',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '14px',
              }}
            >
              <span>Kuala Lumpur, Malaysia</span>
              <span>•</span>
              <a href="mailto:alhassan.ibrahim2070@gmail.com" style={{ color: '#264430', textDecoration: 'none' }}>
                alhassan.ibrahim2070@gmail.com
              </a>
              <span>•</span>
              <span>+60 17 922 6551</span>
              <span>•</span>
              <span>LinkedIn</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#333' }}>
              Economics graduate with hands-on experience in applied econometrics and data analysis (Excel, SPSS, Stata, World Bank datasets), combined with a strong track record in digital marketing, community outreach, and event coordination. Delivered a Platinum Award-winning research project using ARDL modeling, led a university-funded SME digital-skills training program with a RM5,000 budget, and managed communications for an NGO reaching hundreds of beneficiaries. Native Arabic speaker, fluent in English, with proven ability to engage diverse stakeholders and drive measurable outcomes.
            </p>
          </div>

          {/* Section: Core Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Skills
            </h2>
            <div style={{ fontSize: '12.5px', lineHeight: 1.65, color: '#333' }}>
              <div><strong>• Data & Analysis:</strong> Excel, SPSS, Stata, World Bank Data, ARDL Modeling, Econometrics</div>
              <div><strong>• Digital Marketing:</strong> WordPress (Blog/SEO), Social Media Marketing, Canva, CapCut</div>
              <div><strong>• Productivity & Design:</strong> Microsoft Office (Word, Excel, PowerPoint), Google Workspace (Docs, Sheets, Slides)</div>
              <div><strong>• Professional:</strong> Community Outreach, Event Coordination, Stakeholder & Vendor Relations, Public Speaking</div>
              <div><strong>• Languages:</strong> Arabic (Native), English (Fluent)</div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Professional Experience
            </h2>

            {/* Experience 1 */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>Media & Outreach Coordinator | Nagashi Relief and Development Berhad (NGO)</strong>
                <span style={{ fontSize: '12px', color: '#555', fontVariantNumeric: 'tabular-nums' }}>Mar 2025 – Apr 2026</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Managed Nagashi Media's digital outreach and content strategy, growing organizational visibility across social platforms.</li>
                <li>Advised prospective students on the Albukhary International University (AIU) scholarship process and academic transition.</li>
                <li>Facilitated English-language and capacity-building workshops for refugees, strengthening community engagement.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>Digital Marketing Intern | TAKO</strong>
                <span style={{ fontSize: '12px', color: '#555', fontVariantNumeric: 'tabular-nums' }}>Nov 2025 – Feb 2026</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Wrote and managed SEO-optimized blog content on WordPress, improving on-site engagement and readability.</li>
                <li>Supported end-to-end digital marketing campaigns, from content planning to publication.</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>Scholarship & Outreach Volunteer | Ijma Foundation for Humanitarian Action</strong>
                <span style={{ fontSize: '12px', color: '#555', fontVariantNumeric: 'tabular-nums' }}>Jul 2025 – Jan 2026</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Guided prospective applicants through the AIU scholarship application process from inquiry to submission.</li>
                <li>Supported digital outreach campaigns to promote scholarship opportunities to prospective students.</li>
              </ul>
            </div>
          </div>

          {/* Section: Key Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Projects
            </h2>

            {/* Project 1 */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>
                  Final Year Research Project — Investigating FDI's Role on Youth Unemployment in Thailand
                </strong>
                <span style={{ fontSize: '12px', color: '#555' }}>Seminar in Contemporary Economic Issues 2025</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Conducted independent research applying ARDL modeling and SPSS to analyze long- and short-run economic relationships.</li>
                <li>Presented findings at AIU Seminar Day; received the <strong>Platinum Award</strong> for research quality and presentation.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>
                  Digital Training Program for SMEs | Final Year Community Project — Alor Setar
                </strong>
                <span style={{ fontSize: '12px', color: '#555' }}>2025</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Led a digital-skills training program for local SMEs to strengthen online presence and business performance.</li>
                <li>Conducted needs assessments through surveys and interviews with entrepreneurs to tailor training content.</li>
                <li>Trained participants in Canva, social media marketing, and e-commerce fundamentals.</li>
                <li>Managed a <strong>RM5,000</strong> university-funded project budget and collaborated with the Muda Agricultural Development Authority (MADA) on coordination and delivery.</li>
              </ul>
            </div>
          </div>

          {/* Section: Professional Activities & Exhibitions */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Professional Activities & Exhibitions
            </h2>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>
                  Sales & Brand Representative | Mashreq International for Books — Kuala Lumpur International Book Fair (KLIBF)
                </strong>
                <span style={{ fontSize: '12px', color: '#555' }}>2026</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Represented the company at KLIBF, promoting a diverse catalog of Arabic, Islamic, and educational publications.</li>
                <li>Engaged visitors to introduce products, communicate promotions, and enhance brand awareness.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ fontSize: '13.5px', color: '#264430' }}>
                  Event Organizing Committee Member | UiTM–Umrah Plus International Travel Market Exhibition
                </strong>
                <span style={{ fontSize: '12px', color: '#555' }}>2026</span>
              </div>
              <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
                <li>Coordinated booth allocations and vendor requirements for an international travel market exhibition.</li>
                <li>Managed public relations and visitor inquiries, promoting Islamic tourism and "Umrah Plus" travel trends.</li>
                <li>Supported digital promotion and on-site media coordination to maximize event turnout.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education & Certifications */}
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '700', color: '#264430', borderBottom: '1px solid #c4c8bc', paddingBottom: '3px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Education & Certifications
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <strong style={{ fontSize: '13.5px', color: '#264430' }}>
                Bachelor of Economics (Hons.) | Albukhary International University
              </strong>
              <span style={{ fontSize: '12px', color: '#555' }}>Graduated Apr 2026</span>
            </div>
            <div style={{ fontSize: '12.5px', color: '#4a4e4a', marginTop: '4px' }}>
              <strong>Relevant Coursework:</strong> Microeconomics, Macroeconomics, Development Economics, Econometrics, Islamic Economics & Finance, Principles of Marketing, Entrepreneurship & Innovation.
            </div>
            <ul style={{ paddingLeft: '18px', marginTop: '4px', fontSize: '12.5px', color: '#333', lineHeight: 1.55 }}>
              <li><strong>Platinum Award</strong> — Best Research Paper, AIU Seminar Day (2025)</li>
              <li><strong>Gold Award</strong> — Social Business Group Project</li>
            </ul>
          </div>

          <div style={{ fontSize: '12px', color: '#74796e', textAlign: 'center', fontStyle: 'italic', marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #e4e0d8' }}>
            References available upon request.
          </div>
        </div>
      </div>
    </div>
  );
}
