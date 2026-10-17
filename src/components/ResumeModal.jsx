import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  Award,
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextCV = `MOSAAB MOHAMMED ADAM
Digital Marketing Executive | Multimedia Producer & Filmmaker
+60 11-5779 7454 | mosaab.adam15@gmail.com | mosaab.mohammed@student.aiu.edu.my
LinkedIn: https://www.linkedin.com/in/mosaab-mohammed-adam-0289b2275/
Portfolio Deck: https://drive.google.com/file/d/1j_jt-twpKlI4EB9TwqnRfUCj7CcjdJih/view?usp=sharing

PROFILE
Media and Communication graduate with hands-on experience in video editing, graphic design, and social media content production across corporate, nonprofit, and personal-brand settings. Grew a personal content brand's audience reach by 110% and produced a documentary officially registered under the Malaysia Copyright Act 1987. Seeking opportunities in digital marketing, multimedia production, or graphic design.

PROFESSIONAL EXPERIENCE
Graphic Designer & Content Writer — Rabita Center Australia (Remote) | Mar 2026 – Present
• Designed digital visual assets and wrote blog and publication content to support brand outreach and audience engagement across platforms.
• Maintained consistent brand voice and visual identity across all published content.

Digital Marketing Executive — KLEM Wellness (KL Eco City, Malaysia) | Nov 2025 – Present
• Led the digital marketing strategy for KLEM Clinics, enhancing brand awareness and audience engagement.
• Developed and managed content calendars for social media platforms, ensuring consistent messaging and branding.
• Created and edited promotional visuals and short-form videos, aligning with the clinic's voice and marketing goals.
• Collaborated with management on creative projects, overseeing the process from concept to final delivery.

FILM & VIDEO PROJECTS
• Keris: Supremacy of Legacy (2023) — Assistant Cameraman & Scriptwriter, 24-min documentary; officially registered under the Malaysia Copyright Act 1987 (Notification No. CRFM2025P01130).
• The Wake-Up Call (2024) — Assistant Director, Camera Operator, Editor & Sound Designer, narrative short film.
• News Sphere (2023) — Cameraman, Editor & Sports Reporter, 15-minute campus news broadcast.
• Water Conservation Campaign (2025) — Cameraman, Scriptwriter & Editor, 10-minute sustainability film.
• Global Eyes (2023) — Assistant Director, Cameraman, Scriptwriter & Graphic Designer, 8-minute campus broadcast.
• Sugar Savvy Malaysia (2025) — Campaign Content Creator, Graphic Designer & Logistics Coordinator, Public Relations campaign.

PERSONAL BRAND & LEADERSHIP
• Founder, Visual7vibes — photography and short-form video content brand across Instagram, TikTok, and Facebook; grew account reach by 110% (530 accounts reached, 1,822 post views) in one month.
• Media Officer, Nagashi Club (2023–2025) — designed promotional materials and produced event content.
• News Writer, Student News Platform / Updazone (UDZ) (2023–2024) — wrote bilingual (Arabic/English) weekly articles on Sudanese political and humanitarian developments.
• Sports Affairs Officer, Sudanese Student Community (2022–2023) — designed, promoted, organized, and documented sports events.
• Designer, Community Protection Network, Kassala – Sudan (2020) — designed awareness posters for the "Lifeline" safe-migration initiative and engaged refugee camp communities.

TECHNICAL SKILLS
• Video Editing: Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, Adobe Audition, VN
• Design: Adobe Photoshop, Illustrator, Lightroom, Canva, Figma
• Content & Marketing: Content Writing, Social Media Strategy, Web Design, Public Relations

EDUCATION
Bachelor of Media and Communication (Honours) — Albukhary International University | Mar 2023 – Mar 2026
Languages: Arabic & English (Professional Fluency)`;

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
          border: '1px solid rgba(30, 77, 59, 0.3)',
          boxShadow: '0 25px 60px -15px rgba(20, 18, 16, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Top Modal Action Bar */}
        <div
          className="no-print"
          style={{
            padding: '15px 24px',
            backgroundColor: '#141210',
            color: '#f6f2ea',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            borderBottom: '1px solid rgba(200, 138, 50, 0.45)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(200, 138, 50, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f3c677',
              }}
            >
              <FileText size={16} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '15px' }}>
                Mosaab Mohammed Adam — Executive Resume
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: '#c7bfb2' }}>
                ATS-Verified 1-Page Format • Print & PDF Ready
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleCopy}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 13px',
                borderRadius: '8px',
                backgroundColor: copied ? '#1e4d3b' : 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {copied ? <Check size={14} color="#f3c677" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Text!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 13px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <a
              href="/Mosaab_Adam_Resume.pdf"
              download="Mosaab_Mohammed_Adam_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '8px',
                backgroundColor: '#c88a32',
                color: '#141210',
                fontSize: '12px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close Resume Modal"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
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
        </div>

        {/* Printable 1-Page Executive Resume Document */}
        <div
          id="printable-resume"
          style={{
            padding: '40px 48px',
            overflowY: 'auto',
            color: '#1a1714',
            backgroundColor: '#ffffff',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.55,
          }}
        >
          {/* Resume Header */}
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '28px',
                fontWeight: 800,
                letterSpacing: '0.03em',
                color: '#141210',
                marginBottom: '4px',
              }}
            >
              MOSAAB MOHAMMED ADAM
            </h1>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#433d37', marginBottom: '6px' }}>
              Digital Marketing Executive
            </div>
            <div style={{ fontSize: '13px', color: '#433d37' }}>
              +60 11-5779 7454 &nbsp;|&nbsp;{' '}
              <a href="mailto:mosaab.adam15@gmail.com" style={{ color: '#1e4d3b', fontWeight: 600 }}>
                mosaab.adam15@gmail.com
              </a>{' '}
              &nbsp;|&nbsp;{' '}
              <a
                href="https://www.linkedin.com/in/mosaab-mohammed-adam-0289b2275/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0a66c2', fontWeight: 600 }}
              >
                LinkedIn
              </a>{' '}
              &nbsp;|&nbsp;{' '}
              <a
                href="https://drive.google.com/file/d/1j_jt-twpKlI4EB9TwqnRfUCj7CcjdJih/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0a66c2', fontWeight: 600 }}
              >
                Portfolio Deck
              </a>
            </div>
          </div>

          {/* PROFILE */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              PROFILE
            </div>
            <p style={{ fontSize: '13.5px', color: '#2b2620' }}>
              Media and Communication graduate with hands-on experience in video editing, graphic design, and social media content production across corporate, nonprofit, and personal-brand settings. Grew a personal content brand’s audience reach by 110% and produced a documentary officially registered under the Malaysia Copyright Act 1987. Seeking entry-level opportunities in digital marketing, multimedia production, or graphic design.
            </p>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '10px',
              }}
            >
              PROFESSIONAL EXPERIENCE
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <div>
                  <strong>Graphic Designer & Content Writer</strong> — Rabita Center Australia (Remote)
                </div>
                <div style={{ fontStyle: 'italic', color: '#433d37' }}>Mar 2026 – Present</div>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', fontSize: '13.5px', color: '#2b2620' }}>
                <li>
                  Designed digital visual assets and wrote blog and publication content to support brand outreach and audience engagement across platforms.
                </li>
                <li>
                  Maintained consistent brand voice and visual identity across all published content.
                </li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <div>
                  <strong>Digital Marketing Executive</strong> — KLEM Wellness (KL Eco City, Malaysia)
                </div>
                <div style={{ fontStyle: 'italic', color: '#433d37' }}>Nov 2025 – Present</div>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', fontSize: '13.5px', color: '#2b2620' }}>
                <li>
                  Led the digital marketing strategy for KLEM Clinics, enhancing brand awareness and audience engagement.
                </li>
                <li>
                  Developed and managed content calendars for social media platforms, ensuring consistent messaging and branding.
                </li>
                <li>
                  Created and edited promotional visuals and short-form videos, aligning with the clinic’s voice and marketing goals.
                </li>
                <li>
                  Collaborated with management on creative projects, overseeing the process from concept to final delivery.
                </li>
              </ul>
            </div>
          </div>

          {/* FILM & VIDEO PROJECTS */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              FILM & VIDEO PROJECTS
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '13.5px', color: '#2b2620', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <li>
                <strong>Keris: Supremacy of Legacy (2023)</strong> — Assistant Cameraman & Scriptwriter, 24-min documentary; officially registered under the Malaysia Copyright Act 1987 (Notification No. CRFM2025P01130).{' '}
                <a
                  href="https://drive.google.com/file/d/1WzH__K8pnoDRLpCpNWZC1Tvvvr3L1Kh3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print"
                  style={{ color: '#1e4d3b', fontWeight: 700, fontSize: '12px' }}
                >
                  [Watch Film]
                </a>
              </li>
              <li>
                <strong>The Wake-Up Call (2024)</strong> — Assistant Director, Camera Operator, Editor & Sound Designer, narrative short film.{' '}
                <a
                  href="https://drive.google.com/file/d/1ktc6RzY5P2w9QQtPVsFYROA-vSgbPH5U/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print"
                  style={{ color: '#1e4d3b', fontWeight: 700, fontSize: '12px' }}
                >
                  [Watch Film]
                </a>
              </li>
              <li>
                <strong>News Sphere (2023)</strong> — Cameraman, Editor & Sports Reporter, 15-minute campus news broadcast.{' '}
                <a
                  href="https://drive.google.com/file/d/1wn4NEXCzDeWcD6LjLqW8yuzLcFkhu7FK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print"
                  style={{ color: '#1e4d3b', fontWeight: 700, fontSize: '12px' }}
                >
                  [Watch Broadcast]
                </a>
              </li>
              <li>
                <strong>Water Conservation Campaign (2025)</strong> — Cameraman, Scriptwriter & Editor, 10-minute sustainability film.{' '}
                <a
                  href="https://drive.google.com/file/d/1w3PE4gHqViZjIvSgkcbteW9WtqWnGowS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-print"
                  style={{ color: '#1e4d3b', fontWeight: 700, fontSize: '12px' }}
                >
                  [Watch Campaign]
                </a>
              </li>
              <li>
                <strong>Global Eyes (2023) & Sugar Savvy Malaysia PR Campaign (2025)</strong> — Assistant Director, Cameraman, Graphic Designer & Logistics Coordinator.
              </li>
            </ul>
          </div>

          {/* PERSONAL BRAND & LEADERSHIP */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              PERSONAL BRAND & LEADERSHIP
            </div>
            <ul style={{ paddingLeft: '20px', fontSize: '13.5px', color: '#2b2620', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <li>
                <strong>Founder, Visual7vibes</strong> — photography and short-form video content brand across Instagram, TikTok, and Facebook; grew account reach by 110% (530 accounts reached, 1,822 post views) in one month.
              </li>
              <li>
                <strong>Media Officer, Nagashi Club (2023–2025)</strong> — designed promotional materials and produced event content.
              </li>
              <li>
                <strong>News Writer, Student News Platform / Updazone (2023–2024)</strong> — wrote bilingual (Arabic/English) weekly articles on Sudanese political and humanitarian developments.
              </li>
              <li>
                <strong>Sports Affairs Officer, Sudanese Student Community (2022–2023) & Designer, Community Protection Network Kassala (2020)</strong> — organized sports events and designed awareness posters for the “Lifeline” safe migration initiative.
              </li>
            </ul>
          </div>

          {/* TECHNICAL SKILLS */}
          <div style={{ marginBottom: '20px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              TECHNICAL SKILLS
            </div>
            <div style={{ fontSize: '13.5px', color: '#2b2620', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div>
                <strong>Video Editing & Audio:</strong> Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, Adobe Audition, VN
              </div>
              <div>
                <strong>Design:</strong> Adobe Photoshop, Illustrator, Lightroom, Canva, Figma
              </div>
              <div>
                <strong>Content & Marketing:</strong> Content Writing, Social Media Strategy, Web Design, Public Relations Campaigns
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                borderBottom: '1.5px solid #141210',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              EDUCATION
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <div>
                <strong>Bachelor of Media and Communication (Honours)</strong> — Albukhary International University
              </div>
              <div style={{ fontStyle: 'italic', color: '#433d37' }}>Mar 2023 – Mar 2026</div>
            </div>
            <div style={{ fontSize: '13.5px', color: '#2b2620', marginTop: '4px' }}>
              <strong>Languages:</strong> Arabic & English (Professional Fluency)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
