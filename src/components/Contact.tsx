import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Copy, Check, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopy = (text: string, type: 'email' | 'discord') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast('Email copied to clipboard!');
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
      onShowToast('Discord username copied!');
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Thank you, ${formData.name}! Your message was simulated successfully.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="container">
      <div className="section-badge">
        <Mail size={15} />
        <span>Get In Touch</span>
      </div>

      <h2 className="section-title">
        Let&rsquo;s Build Something <span className="text-gradient">Extraordinary</span>
      </h2>
      <p className="section-subtitle">
        Whether you have an internship opportunity, a project to collaborate on, or simply want to talk algorithms and tech—my inbox is always open!
      </p>

      <div className="contact-grid">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="contact-info-panel">
          <div className="card-glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Contact Details</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              I am based in India and open to both on-site (Hyderabad / Bangalore) and remote opportunities across global time zones.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
              <span>{personal.location}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              <Globe size={18} style={{ color: 'var(--color-success)' }} />
              <span>Fluent in English, Telugu, and Hindi</span>
            </div>

            <div className="contact-quick-box">
              <div className="contact-quick-left">
                <Mail size={18} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Email</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {personal.email}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy(personal.email, 'email')}
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={13} style={{ color: 'var(--color-success)' }} /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-quick-box">
              <div className="contact-quick-left">
                <MessageSquare size={18} style={{ color: 'var(--color-secondary)' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Discord</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {personal.discord}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => handleCopy(personal.discord, 'discord')}
                aria-label="Copy Discord handle"
              >
                {copiedDiscord ? <Check size={13} style={{ color: 'var(--color-success)' }} /> : <Copy size={13} />}
                <span>{copiedDiscord ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-panel card-glass">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Send a Direct Message
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
            Fill out the form below and I will respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name <span style={{ color: 'var(--color-danger)' }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                className="form-input"
                placeholder="e.g. Alex Miller"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && (
                <span style={{ fontSize: '0.78rem', color: 'var(--color-danger)', marginTop: '2px' }}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email Address <span style={{ color: 'var(--color-danger)' }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && (
                <span style={{ fontSize: '0.78rem', color: 'var(--color-danger)', marginTop: '2px' }}>
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                className="form-input"
                placeholder="Internship opportunity / Project query"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Your Message <span style={{ color: 'var(--color-danger)' }}>*</span>
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Hi Shanmukh, I came across your portfolio and wanted to reach out regarding..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && (
                <span style={{ fontSize: '0.78rem', color: 'var(--color-danger)', marginTop: '2px' }}>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
