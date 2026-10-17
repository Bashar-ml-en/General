import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Linkedin, Film, Download } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'skills', 'about', 'activities', 'projects', 'experience', 'research', 'hero'];
      const scrollPos = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Screening Room', href: '#research', id: 'research' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: '6 Productions', href: '#projects', id: 'projects' },
    { label: 'Journalism & Impact', href: '#activities', id: 'activities' },
    { label: 'Toolkit', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const allNavLinks = [
    { label: 'Overview & Viewfinder', href: '#hero' },
    { label: "Director's Screening Room (4 Films)", href: '#research' },
    { label: 'Experience & Visual7vibes Analytics', href: '#experience' },
    { label: '6 Flagship Film & PR Productions', href: '#projects' },
    { label: 'UDZ Bilingual Journalism & Leadership', href: '#activities' },
    { label: 'Education & Storyteller Profile', href: '#about' },
    { label: 'Adobe CC & NLE Post-Production Suite', href: '#skills' },
    { label: 'Hire / Contact Mosaab', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(246, 242, 234, 0.96)' : 'rgba(246, 242, 234, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(30, 77, 59, 0.18)' : '1px solid rgba(26, 23, 20, 0.08)',
        boxShadow: isScrolled ? '0 4px 20px rgba(26, 23, 20, 0.06)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px',
          gap: '16px',
        }}
      >
        {/* Brand Monogram & Live Tally */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '11px',
              background: 'linear-gradient(135deg, #141210 0%, #1e4d3b 100%)',
              color: '#f6f2ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '15px',
              letterSpacing: '0.02em',
              border: '1.5px solid rgba(200, 138, 50, 0.7)',
              boxShadow: '0 2px 8px rgba(20, 18, 16, 0.2)',
              position: 'relative',
            }}
          >
            MM
            <span
              className="tally-dot"
              title="ON AIR • Portfolio Active"
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '9px',
                height: '9px',
                border: '1.5px solid #f6f2ea',
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
              }}
            >
              Mosaab Mohammed
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#1e4d3b',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Film size={10} color="#d93829" />
              <span>Digital Marketing & Cinema</span>
            </div>
          </div>
        </a>

        {/* Desktop Pill Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            backgroundColor: 'rgba(236, 229, 216, 0.85)',
            padding: '4px',
            borderRadius: '9999px',
            border: '1px solid rgba(26, 23, 20, 0.1)',
          }}
        >
          {desktopNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '12.5px',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  backgroundColor: isActive ? '#1e4d3b' : 'transparent',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 2px 6px rgba(30, 77, 59, 0.25)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#112e23';
                    e.currentTarget.style.backgroundColor = 'rgba(30, 77, 59, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="desktop-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <a
            href="https://www.linkedin.com/in/mosaab-mohammed-0289b2275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mosaab Mohammed LinkedIn Profile"
            title="Connect on LinkedIn"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(26, 23, 20, 0.15)',
              color: '#0a66c2',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0a66c2';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0a66c2';
            }}
          >
            <Linkedin size={16} />
          </a>

          <a
            href="/Mosaab_Adam_Resume.pdf"
            download="Mosaab_Mohammed_Adam_Resume.pdf"
            className="btn-secondary"
            title="Download Official 1-Page PDF Resume"
            style={{ padding: '8px 12px', fontSize: '12.5px', borderRadius: '9px' }}
          >
            <Download size={14} color="#1e4d3b" />
            <span>PDF</span>
          </a>

          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{ padding: '8px 15px', fontSize: '12.5px', borderRadius: '9px' }}
          >
            <FileText size={14} color="#f3c677" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: '#ffffff',
            border: '1px solid rgba(26, 23, 20, 0.18)',
            borderRadius: '8px',
            padding: '8px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#f6f2ea',
            borderBottom: '1px solid var(--border-hairline)',
            padding: '16px 24px 24px',
            boxShadow: 'var(--shadow-level-2)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="#c88a32" />
              </a>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <FileText size={15} color="#f3c677" />
                <span>Interactive Resume</span>
              </button>
              <a
                href="/Mosaab_Adam_Resume.pdf"
                download="Mosaab_Mohammed_Adam_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                <Download size={15} color="#1e4d3b" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
