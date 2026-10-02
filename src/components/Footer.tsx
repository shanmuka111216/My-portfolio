import React from 'react';
import { ArrowUp, Code, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <div className="brand-badge" style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}>
              SB
            </div>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-text-primary)' }}>
              Shanmukh Bekkanti
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', maxWidth: '420px' }}>
            Computer Science &amp; Engineering undergraduate at VIT. Focused on high-performance web systems and algorithmic problem solving.
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
          <div className="footer-socials">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              title="LeetCode"
              aria-label="LeetCode"
            >
              <Code size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="icon-btn"
              title="Email"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to Top"
              style={{ background: 'var(--color-surface-hover)' }}
            >
              <ArrowUp size={16} />
            </button>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>
            &copy; {new Date().getFullYear()} Shanmukh Bekkanti. Built with React 19, TypeScript &amp; Vanilla CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
