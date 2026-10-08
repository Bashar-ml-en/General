import React from 'react';
import { Award, ArrowUp, FileText, Mail, Linkedin } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#16271c',
        color: '#faf6f0',
        paddingTop: '60px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(196, 166, 106, 0.3)',
      }}
    >
      <div className="container">
        {/* Top Row: Colophon & Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.8fr 0.8fr',
            gap: '40px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Brand Colophon */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  backgroundColor: '#264430',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#faf6f0',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: '1px solid rgba(196, 166, 106, 0.45)',
                }}
              >
                AI
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#faf6f0',
                }}
              >
                Alhassan Ibrahim Ali Hassan
              </span>
            </div>

            <p style={{ fontSize: '13px', color: '#d5dcd2', lineHeight: 1.65, maxWidth: '420px', marginBottom: '16px' }}>
              Economics graduate from Albukhary International University (Graduated Apr 2026). Specializing in applied econometrics (ARDL, SPSS, Stata), digital marketing, and non-profit community coordination.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-honor" style={{ fontSize: '11px', padding: '3px 8px' }}>
                <Award size={12} /> Platinum Award 2025
              </span>
              <span style={{ fontSize: '12px', color: '#d5dcd2' }}>Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          {/* Editorial Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c4a66a',
                marginBottom: '14px',
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="#hero" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Overview</a>
              <a href="#research" style={{ color: '#d5dcd2', textDecoration: 'none' }}>ARDL Econometric Thesis</a>
              <a href="#projects" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Key Projects & MADA SME</a>
              <a href="#experience" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Experience Timeline</a>
              <a href="#about" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Academic Coursework</a>
              <a href="#activities" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Exhibitions & Diplomatic Expos</a>
              <a href="#skills" style={{ color: '#d5dcd2', textDecoration: 'none' }}>Skills & Toolkit</a>
            </div>
          </div>

          {/* Curriculum Vitae */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#c4a66a',
                marginBottom: '14px',
              }}
            >
              Resume & Credentials
            </h4>
            <p style={{ fontSize: '12.5px', color: '#d5dcd2', lineHeight: 1.55, marginBottom: '14px' }}>
              Access the complete academic and professional resume with verified project citations.
            </p>
            <button
              onClick={onOpenResume}
              className="btn-amber"
              style={{ padding: '8px 16px', fontSize: '12px', width: '100%' }}
            >
              <FileText size={14} />
              <span>View Official Resume</span>
            </button>
            <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="#contact"
                style={{
                  color: '#f8e0a8',
                  fontSize: '12.5px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Mail size={13} />
                <span>alhassan.ibrahim2070@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/alhassan-ibrahim-ali-hassan-a4b2ab323"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#93c5fd',
                  fontSize: '12.5px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: '500',
                }}
              >
                <Linkedin size={13} />
                <span>LinkedIn • Alhassan Ibrahim</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Rule */}
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(250, 246, 240, 0.1)', marginBottom: '24px' }} />

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12px',
            color: '#74796e',
          }}
        >
          <div>
            © {new Date().getFullYear()} Alhassan Ibrahim Ali Hassan. Built with Terra Design System via Stitch MCP.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'transparent',
              border: '1px solid rgba(250, 246, 240, 0.2)',
              color: '#d5dcd2',
              borderRadius: '4px',
              padding: '4px 10px',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
