import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Linkedin,
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Applied Econometrics & Research',
    message: '',
  });

  const emailAddress = 'alhassan.ibrahim2070@gmail.com';
  const phoneNumber = '+60 17 922 6551';
  const phoneClean = '60179226551';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding section-monograph">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '780px', marginBottom: '52px' }}>
          <div className="section-eyebrow" style={{ color: '#c4a66a' }}>
            <Mail size={14} color="#c4a66a" />
            <span>Executive & Academic Inquiries</span>
          </div>
          <h2 className="section-title" style={{ color: '#faf6f0' }}>
            Initiate a <span className="serif-italic" style={{ color: '#f8e0a8' }}>Dialogue</span>
          </h2>
          <p className="section-subtitle" style={{ color: '#d5dcd2' }}>
            Open for applied economics research collaborations, corporate advisory roles, digital marketing initiatives, and institutional presentations.
          </p>
        </div>

        {/* 2-Column Grid: Contact Channels & Message Dispatch */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '40px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Institutional Channels */}
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#faf6f0', marginBottom: '16px' }}>
              Direct Contact Details
            </h3>

            {/* Email Card */}
            <div
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                border: '1px solid rgba(250, 246, 240, 0.16)',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8e0a8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                  <Mail size={14} /> Official Email
                </div>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(250, 246, 240, 0.25)',
                    color: '#faf6f0',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {copiedEmail ? <Check size={12} color="#c4a66a" /> : <Copy size={12} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14.5px',
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'block',
                  fontWeight: '500',
                }}
              >
                {emailAddress}
              </a>
              <div style={{ fontSize: '12px', color: '#d5dcd2', marginTop: '4px' }}>
                Fast response for research & hiring inquiries.
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                border: '1px solid rgba(250, 246, 240, 0.16)',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d9edd8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', fontWeight: '600' }}>
                <Phone size={14} /> Direct Telephone & WhatsApp
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  color: '#ffffff',
                  fontWeight: '600',
                  marginBottom: '8px',
                }}
              >
                {phoneNumber}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={`https://wa.me/${phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="btn-ghost-dark"
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                >
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Professional Network Card */}
            <div
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                border: '1px solid rgba(250, 246, 240, 0.16)',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8ec5fc', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                  <Linkedin size={14} /> Professional Network
                </div>
                <span style={{ fontSize: '11px', color: '#d5dcd2', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '2px 7px', borderRadius: '4px' }}>
                  Verified
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  color: '#ffffff',
                  fontWeight: '600',
                  marginBottom: '10px',
                }}
              >
                Alhassan Ibrahim Ali Hassan
              </div>
              <a
                href="https://www.linkedin.com/in/alhassan-ibrahim-ali-hassan-a4b2ab323"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark"
                style={{ fontSize: '12px', padding: '7px 14px', width: 'fit-content', gap: '6px' }}
              >
                <Linkedin size={13} style={{ color: '#8ec5fc' }} />
                <span>View LinkedIn Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Location & Availability Card */}
            <div
              style={{
                backgroundColor: 'rgba(250, 246, 240, 0.06)',
                border: '1px solid rgba(250, 246, 240, 0.16)',
                borderRadius: '14px',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d5dcd2', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px', fontWeight: '600' }}>
                <MapPin size={14} /> Base Location
              </div>
              <div style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: '500' }}>
                Kuala Lumpur, Malaysia
              </div>
              <div style={{ fontSize: '12px', color: '#d5dcd2', marginTop: '4px' }}>
                Available for on-site roles in Klang Valley and remote international engagements.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div
            style={{
              backgroundColor: '#faf6f0',
              borderRadius: '20px',
              padding: '32px',
              color: '#2e3230',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(74, 124, 89, 0.2)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: '600', color: '#264430', marginBottom: '6px' }}>
              Send an Inquiry
            </h3>
            <p style={{ fontSize: '13px', color: '#74796e', marginBottom: '22px' }}>
              Please provide details regarding your organization, project scope, or proposed role:
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(74, 124, 89, 0.12)',
                  border: '1px solid #4a7c59',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div style={{ color: '#4a7c59', marginBottom: '10px' }}>
                  <Check size={36} style={{ margin: '0 auto' }} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#264430', marginBottom: '6px' }}>
                  Inquiry Dispatched Successfully
                </h4>
                <p style={{ fontSize: '13px', color: '#4a4e4a', marginBottom: '16px' }}>
                  Thank you for reaching out, {formData.name || 'colleague'}. Alhassan will review your note and respond promptly at {formData.email || 'your email'}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '12px' }}
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#264430', marginBottom: '5px' }}>
                    Full Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Ahmad / Strategic Economic Advisory"
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#264430', marginBottom: '5px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#264430', marginBottom: '8px' }}>
                    Subject / Area of Interest
                  </label>

                  {/* Quick Clickable Topic Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                    {[
                      { key: 'Applied Econometrics & Research', label: 'ARDL & Econometrics' },
                      { key: 'Economics Graduate Role / Hiring', label: 'Graduate Role' },
                      { key: 'SME Digital Skills & Training', label: 'SME Digitalization' },
                      { key: 'NGO & Community Outreach', label: 'NGO Outreach' },
                      { key: 'Other Inquiries', label: 'Other Inquiries' },
                    ].map((t) => {
                      const isSelected = formData.topic === t.key;
                      return (
                        <button
                          key={t.key}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic: t.key })}
                          style={{
                            background: isSelected ? '#264430' : '#ffffff',
                            color: isSelected ? '#faf6f0' : '#264430',
                            border: isSelected ? '1px solid #264430' : '1px solid rgba(74, 124, 89, 0.25)',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '11.5px',
                            fontWeight: isSelected ? '700' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>

                  <select
                    className="input-field"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Applied Econometrics & Research">Applied Econometrics & ARDL Research</option>
                    <option value="Economics Graduate Role / Hiring">Economics Graduate Role / Employment</option>
                    <option value="SME Digital Skills & Training">SME Digital Skills & Training Consultation</option>
                    <option value="NGO & Community Outreach">NGO & Community Outreach Collaboration</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: '#264430', marginBottom: '5px' }}>
                    Message Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please outline the requirements, timeline, or scope of discussion..."
                    className="input-field"
                    style={{ resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px', fontSize: '14px', marginTop: '6px' }}
                >
                  <Send size={15} style={{ color: '#f8e0a8' }} />
                  <span>Send Message to Alhassan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
