import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const presets = [
    {
      label: 'Digital Marketing Role',
      subject: 'Digital Marketing Executive Opportunity — Mosaab Mohammed Adam',
      body: 'Hi Mosaab,\n\nWe reviewed your portfolio and your work as Digital Marketing Executive at KLEM Wellness and Founder of Visual7vibes (+110.3% reach growth). We would love to schedule an interview for a Digital Marketing role with our team.',
    },
    {
      label: 'Video Editing & Production',
      subject: 'Multimedia Producer / Video Editor Inquiry — Mosaab Mohammed Adam',
      body: 'Hi Mosaab,\n\nWe were impressed by your copyright-registered documentary "Keris: Supremacy of Legacy" (CRFM2025P01130) and your short film "The Wake-Up Call". We would like to discuss a video production / editing opportunity.',
    },
    {
      label: 'Graphic & Brand Design',
      subject: 'Graphic Designer & Content Creator Inquiry — Mosaab Mohammed Adam',
      body: 'Hi Mosaab,\n\nYour visual branding work for Rabita Center Australia and KLEM Wellness caught our attention. Let’s connect regarding a graphic design and content creation opportunity.',
    },
    {
      label: 'PR & Media Communications',
      subject: 'Public Relations & Communications Role — Mosaab Mohammed Adam',
      body: 'Hi Mosaab,\n\nHaving seen your bilingual journalism (EN/AR) and PR campaigns like Sugar Savvy Malaysia, we would love to speak with you about a Media & Communications position.',
    },
  ];

  const [selectedPreset, setSelectedPreset] = useState(0);
  const [subject, setSubject] = useState(presets[0].subject);
  const [message, setMessage] = useState(presets[0].body);

  const handleSelectPreset = (idx) => {
    setSelectedPreset(idx);
    setSubject(presets[idx].subject);
    setMessage(presets[idx].body);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mosaab.adam15@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const mailtoHref = `mailto:mosaab.adam15@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  const whatsappHref = `https://wa.me/601157797454?text=${encodeURIComponent(
    `${subject}\n\n${message}`
  )}`;

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="grid-12" style={{ alignItems: 'stretch' }}>
          {/* Left 5 Columns: Direct Contact Coordinates */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '20px' }}
            className="contact-left"
          >
            <div>
              <div className="section-eyebrow">
                <Mail size={14} color="#d93829" />
                <span>Direct Booking & Recruitment Console</span>
              </div>
              <h2 className="section-title">
                Let’s Create{' '}
                <span className="serif-italic" style={{ color: '#1e4d3b' }}>
                  Meaningful Impact
                </span>
              </h2>
              <p className="section-subtitle">
                Available for roles in <strong>Digital Marketing, Graphic Design, Video Editing, Public Relations, Content Creation, and Social Media Management</strong>.
              </p>
            </div>

            <div
              className="editorial-card"
              style={{
                padding: '24px',
                backgroundColor: 'var(--canvas-bg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {/* Primary Email */}
              <div
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(26, 23, 20, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)' }}>
                    PRIMARY EMAIL
                  </div>
                  <a
                    href="mailto:mosaab.adam15@gmail.com"
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#1e4d3b',
                      textDecoration: 'none',
                    }}
                  >
                    mosaab.adam15@gmail.com
                  </a>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Academic: mosaab.mohammed@student.aiu.edu.my
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ padding: '7px 11px', fontSize: '11.5px' }}
                >
                  {copiedEmail ? <Check size={13} color="#1e4d3b" /> : <Copy size={13} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(26, 23, 20, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)' }}>
                    PHONE & WHATSAPP (MALAYSIA)
                  </div>
                  <a
                    href="tel:+601157797454"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    +60 11-5779 7454
                  </a>
                </div>
                <a
                  href="https://wa.me/601157797454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '7px 12px', fontSize: '12px' }}
                >
                  <Phone size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* LinkedIn & Portfolio Deck */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <a
                  href="https://www.linkedin.com/in/mosaab-mohammed-adam-0289b2275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px', fontSize: '12.5px', color: '#0a66c2' }}
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1j_jt-twpKlI4EB9TwqnRfUCj7CcjdJih/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '10px', fontSize: '12.5px' }}
                >
                  <ExternalLink size={14} color="#c88a32" />
                  <span>21-Page Deck</span>
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={onOpenResume}
                  className="btn-primary"
                  style={{ padding: '10px', fontSize: '12.5px' }}
                >
                  <FileText size={14} color="#f3c677" />
                  <span>Interactive Resume</span>
                </button>
                <a
                  href="/Mosaab_Adam_Resume.pdf"
                  download="Mosaab_Mohammed_Adam_Resume.pdf"
                  className="btn-secondary"
                  style={{ padding: '10px', fontSize: '12.5px' }}
                >
                  <Download size={14} color="#1e4d3b" />
                  <span>Download PDF CV</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right 7 Columns: Interactive Recruiter Outreach Composer */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 7' }}
            className="contact-right"
          >
            <div
              className="editorial-card"
              style={{
                height: '100%',
                padding: '30px',
                backgroundColor: 'var(--canvas-bg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#1e4d3b',
                    marginBottom: '8px',
                  }}
                >
                  1-CLICK RECRUITER BRIEF COMPOSER // SELECT ROLE TEMPLATE
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                  {presets.map((p, idx) => (
                    <button
                      key={p.label}
                      onClick={() => handleSelectPreset(idx)}
                      style={{
                        padding: '7px 13px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        backgroundColor: selectedPreset === idx ? '#1e4d3b' : '#ffffff',
                        color: selectedPreset === idx ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid rgba(26, 23, 20, 0.14)',
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '5px',
                    }}
                  >
                    SUBJECT LINE
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(26, 23, 20, 0.18)',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '5px',
                    }}
                  >
                    MESSAGE BRIEF
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(26, 23, 20, 0.18)',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      lineHeight: 1.55,
                      color: 'var(--text-primary)',
                      resize: 'vertical',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href={mailtoHref} className="btn-crimson" style={{ flex: 1 }}>
                  <Send size={15} />
                  <span>Send via Email (mosaab.adam15@gmail.com)</span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageSquare size={15} color="#f3c677" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Clipboard Copy Toast Notification */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            style={{
              position: 'fixed',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#141210',
              color: '#f6f2ea',
              padding: '10px 18px',
              borderRadius: '999px',
              border: '1.5px solid #1e4d3b',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Check size={14} color="#6ee7b7" />
            <span>Copied mosaab.adam15@gmail.com to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .contact-left, .contact-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
