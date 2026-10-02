import React, { useState } from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience, education } = portfolioData;
  const [tab, setTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="container">
      <div className="section-badge">
        <Briefcase size={15} />
        <span>Career Journey</span>
      </div>

      <h2 className="section-title">
        Experience &amp; <span className="text-gradient">Academic Milestones</span>
      </h2>
      <p className="section-subtitle">
        Hands-on software engineering internships, open-source leadership, and rigorous computer science coursework.
      </p>

      {/* Tab Switcher */}
      <div className="timeline-toggle-wrapper">
        <div className="timeline-toggle-pill">
          <button
            type="button"
            className={tab === 'experience' ? 'active' : ''}
            onClick={() => setTab('experience')}
          >
            Work &amp; Leadership
          </button>
          <button
            type="button"
            className={tab === 'education' ? 'active' : ''}
            onClick={() => setTab('education')}
          >
            Education &amp; Academics
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="timeline-list">
        {tab === 'experience' ? (
          experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-node"></div>
              <div className="timeline-card card-glass">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                      <span className="timeline-org">{exp.organization}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <ul className="timeline-bullets">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-node"></div>
              <div className="timeline-card card-glass">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                      <span className="timeline-org">{edu.institution}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <MapPin size={13} /> {edu.location}
                      </span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="timeline-period">{edu.period}</span>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                      {edu.gradeLabel}: {edu.grade}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Core Coursework:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {edu.coursework.map((c) => (
                      <span key={c} className="tech-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <ul className="timeline-bullets" style={{ marginTop: '0.5rem' }}>
                    {edu.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
