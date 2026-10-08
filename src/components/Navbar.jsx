import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Linkedin } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: detect which section is currently active
      const sectionIds = ['contact', 'skills', 'activities', 'about', 'experience', 'projects', 'research', 'hero'];
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

  // Primary curated desktop links
  const desktopNavLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Academics', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Comprehensive drawer links for mobile
  const allNavLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Research & ARDL Thesis', href: '#research' },
    { label: 'Key Projects & SME Training', href: '#projects' },
    { label: 'Professional Experience', href: '#experience' },
    { label: 'Academics & Coursework', href: '#about' },
    { label: 'Exhibitions & Trade Fairs', href: '#activities' },
    { label: 'Skills & Toolkit', href: '#skills' },
    { label: 'Contact Alhassan', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.96)' : 'rgba(250, 246, 240, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(74, 124, 89, 0.16)' : '1px solid rgba(74, 124, 89, 0.08)',
        boxShadow: isScrolled ? '0 4px 20px rgba(38, 68, 48, 0.05)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          gap: '16px',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0,
          }}
        >
          {/* Monogram Crest */}
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#264430',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#faf6f0',
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontWeight: '700',
              letterSpacing: '0.04em',
              border: '1.5px solid rgba(196, 166, 106, 0.55)',
              boxShadow: '0 3px 10px rgba(38, 68, 48, 0.2)',
              flexShrink: 0,
            }}
          >
            AI
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17.5px',
                  fontWeight: '700',
                  color: '#264430',
                  letterSpacing: '-0.015em',
                  whiteSpace: 'nowrap',
                }}
              >
                Alhassan Ibrahim
              </span>
              <span
                style={{
                  background: 'rgba(196, 166, 106, 0.2)',
                  color: '#705c30',
                  fontSize: '10.5px',
                  fontWeight: '700',
                  padding: '2px 7px',
                  borderRadius: '5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                Econ '26
              </span>
            </div>
            <p
              className="brand-subtitle"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                color: '#74796e',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Applied Economics & Data Analysis
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(240, 236, 228, 0.65)',
            padding: '4px 6px',
            borderRadius: '12px',
            border: '1px solid rgba(74, 124, 89, 0.12)',
          }}
          className="desktop-nav"
        >
          {desktopNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? '#264430' : '#4a4e4a',
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  boxShadow: isActive ? '0 1px 4px rgba(38, 68, 48, 0.08)' : 'none',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontWeight: isActive ? '700' : '600',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                    e.currentTarget.style.color = '#264430';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#4a4e4a';
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              borderRadius: '9px',
              whiteSpace: 'nowrap',
            }}
          >
            <FileText size={14} style={{ color: '#f8e0a8' }} />
            <span>Resume</span>
          </button>

          {/* LinkedIn Icon Action */}
          <a
            href="https://www.linkedin.com/in/alhassan-ibrahim-ali-hassan-a4b2ab323"
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with Alhassan on LinkedIn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              border: '1px solid rgba(10, 102, 194, 0.35)',
              color: '#0a66c2',
              backgroundColor: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 1px 4px rgba(10, 102, 194, 0.1)',
              transition: 'all 0.18s ease',
            }}
          >
            <Linkedin size={17} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(74, 124, 89, 0.25)',
              borderRadius: '8px',
              padding: '8px',
              color: '#264430',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#faf6f0',
            borderBottom: '1px solid rgba(74, 124, 89, 0.16)',
            padding: '20px 24px 28px 24px',
            boxShadow: '0 16px 36px rgba(38, 68, 48, 0.12)',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#2e3230',
                  textDecoration: 'none',
                  fontSize: '14.5px',
                  fontWeight: '600',
                  padding: '9px 4px',
                  borderBottom: '1px solid rgba(74, 124, 89, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="#74796e" />
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/alhassan-ibrahim-ali-hassan-a4b2ab323"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 4px',
                borderBottom: '1px solid rgba(74, 124, 89, 0.08)',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0a66c2', fontWeight: '700', fontSize: '14.5px' }}>
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </div>
              <ChevronRight size={16} color="#0a66c2" />
            </a>

            <div style={{ marginTop: '16px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '11px', borderRadius: '10px' }}
              >
                <FileText size={15} style={{ color: '#f8e0a8' }} />
                <span>View Official Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS helper */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
        @media (max-width: 1140px) {
          .brand-subtitle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
