import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Research & ARDL', href: '#research' },
    { label: 'Key Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Profile & Academics', href: '#about' },
    { label: 'Exhibitions', href: '#activities' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(250, 246, 240, 0.95)' : 'rgba(250, 246, 240, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(74, 124, 89, 0.14)' : '1px solid rgba(74, 124, 89, 0.07)',
        transition: 'all 0.25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand / Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {/* Monogram Box */}
          <div
            style={{
              width: '38px',
              height: '38px',
              backgroundColor: '#264430',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#faf6f0',
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              border: '1px solid rgba(196, 166, 106, 0.45)',
              boxShadow: '0 2px 8px rgba(38, 68, 48, 0.18)',
            }}
          >
            AI
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#264430',
                  letterSpacing: '-0.01em',
                }}
              >
                Alhassan Ibrahim
              </span>
              <span
                style={{
                  background: 'rgba(196, 166, 106, 0.18)',
                  color: '#705c30',
                  fontSize: '10px',
                  fontWeight: '700',
                  padding: '2px 7px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Econ '26
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                color: '#74796e',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
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
            gap: '22px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#4a4e4a',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: '600',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#4a7c59')}
              onMouseLeave={(e) => (e.target.style.color = '#4a4e4a')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <FileText size={14} style={{ color: '#f8e0a8' }} />
            <span>Curriculum Vitae</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid rgba(74, 124, 89, 0.25)',
              borderRadius: '6px',
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
            borderBottom: '1px solid rgba(74, 124, 89, 0.15)',
            padding: '16px 24px 24px 24px',
            boxShadow: '0 12px 30px rgba(38, 68, 48, 0.08)',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#2e3230',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '8px 0',
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
            <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '10px' }}
              >
                <FileText size={15} style={{ color: '#f8e0a8' }} />
                <span>View Full CV</span>
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
      `}</style>
    </header>
  );
}
