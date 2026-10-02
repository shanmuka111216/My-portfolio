import React from 'react';
import { Award, Trophy, ExternalLink, Code2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements, codingProfiles } = portfolioData;

  return (
    <section id="achievements" className="container">
      <div className="section-badge">
        <Trophy size={15} />
        <span>Proof of Work</span>
      </div>

      <h2 className="section-title">
        Coding Profiles &amp; <span className="text-gradient">Honors</span>
      </h2>
      <p className="section-subtitle">
        Algorithmic rankings, industry certifications, and hackathon recognitions earned throughout my CS degree.
      </p>

      <div className="achievements-grid" style={{ marginTop: '2.5rem' }}>
        {/* Left: Coding Platforms Stats */}
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code2 size={20} style={{ color: 'var(--color-primary)' }} />
            Competitive Coding Footprint
          </h3>

          <div className="coding-profiles-box">
            {codingProfiles.map((prof) => (
              <a
                key={prof.platform}
                href={prof.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="coding-card card-glass"
                title={`View ${prof.platform} profile`}
              >
                <div className="coding-card-left">
                  <div
                    className="coding-platform-icon"
                    style={{ background: prof.color }}
                  >
                    {prof.platform[0]}
                  </div>
                  <div>
                    <div className="coding-platform-title">{prof.platform}</div>
                    <div className="coding-handle">@{prof.handle}</div>
                  </div>
                </div>

                <div className="coding-card-right">
                  <div className="coding-stat-val">{prof.statValue}</div>
                  <div className="coding-stat-lbl">{prof.statLabel}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Awards & Certifications */}
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={20} style={{ color: 'var(--color-warning)' }} />
            Awards &amp; Certifications
          </h3>

          <div className="achievements-list">
            {achievements.map((item) => (
              <div key={item.id} className="achievement-card card-glass">
                <div className="achievement-icon-wrap">
                  {item.badgeType === 'Award' ? <Trophy size={20} /> : <ShieldCheck size={20} />}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <h4 className="achievement-title">{item.title}</h4>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                      {item.date}
                    </span>
                  </div>
                  <div className="achievement-issuer">{item.issuer}</div>
                  <p className="achievement-desc">{item.description}</p>

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.78rem',
                        color: 'var(--color-primary)',
                        marginTop: '0.5rem',
                        fontWeight: 600,
                      }}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
