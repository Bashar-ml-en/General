import React from 'react';
import { Film, Linkedin, Mail, Phone, FileText, Download, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#141210',
        color: '#f6f2ea',
        padding: '54px 0 36px',
        borderTop: '2px solid rgba(200, 138, 50, 0.4)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            paddingBottom: '28px',
            borderBottom: '1px solid rgba(246, 242, 234, 0.12)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span className="tally-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                Mosaab Mohammed Adam
              </span>
            </div>
            <div style={{ fontSize: '13.5px', color: '#c7bfb2' }}>
              Digital Marketing Executive • Filmmaker & Documentary Scriptwriter • Bachelor of Media & Communication (Honours), AIU
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button onClick={onOpenResume} className="btn-primary" style={{ padding: '8px 15px', fontSize: '12.5px' }}>
              <FileText size={14} color="#f3c677" />
              <span>Interactive Resume</span>
            </button>
            <a
              href="/Mosaab_Adam_Resume.pdf"
              download="Mosaab_Mohammed_Adam_Resume.pdf"
              className="btn-secondary"
              style={{ padding: '8px 15px', fontSize: '12.5px' }}
            >
              <Download size={14} color="#1e4d3b" />
              <span>Download PDF CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mosaab-mohammed-0289b2275/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '8px 15px', fontSize: '12.5px' }}
            >
              <Linkedin size={14} color="#0a66c2" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '8px 13px', fontSize: '12.5px', cursor: 'pointer' }}
              title="Smooth scroll to top of page"
            >
              <ArrowUp size={14} color="#f3c677" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: '22px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '12.5px',
            color: '#9c9284',
          }}
        >
          <div>
            © {new Date().getFullYear()} Mosaab Mohammed Adam • Officially Registered Co-Author under Malaysia Copyright Act 1987 (CRFM2025P01130)
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#f3c677' }}>
            STITCH DESIGN SYSTEM: AUTEUR & BROADCAST EDITORIAL
          </div>
        </div>
      </div>
    </footer>
  );
}
