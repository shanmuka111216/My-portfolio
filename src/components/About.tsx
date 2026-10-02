import React from 'react';
import { BookOpen, Cpu, Layers, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, education } = portfolioData;
  const primaryEdu = education[0];

  const pillars = [
    {
      icon: <Cpu size={22} />,
      title: 'Algorithmic Problem Solving',
      desc: 'Deep focus on time & space complexity, graph theory, and dynamic programming, backed by 420+ LeetCode problems.',
    },
    {
      icon: <Layers size={22} />,
      title: 'Full-Stack Engineering',
      desc: 'Building modern, performant web applications using React 19, TypeScript, Node.js, PostgreSQL, and Redis.',
    },
    {
      icon: <BookOpen size={22} />,
      title: 'Computer Science Core',
      desc: 'Thorough grounding in Operating Systems, Database Management (DBMS), Concurrency, and Computer Networks.',
    },
    {
      icon: <Users size={22} />,
      title: 'Mentorship & Community',
      desc: 'ACM Technical Lead organizing coding hackathons and mentoring 180+ students in competitive programming.',
    },
  ];

  return (
    <section id="about" className="container">
      <div className="section-badge">
        <GraduationCap size={15} />
        <span>About Me</span>
      </div>

      <h2 className="section-title">
        Bridging theoretical CS with <span className="text-gradient">practical engineering</span>
      </h2>
      <p className="section-subtitle">
        A passionate Computer Science student dedicated to writing clean, maintainable, and high-performance software.
      </p>

      <div className="about-grid" style={{ marginTop: '2.5rem' }}>
        {/* Left Column: Narrative & Education Highlight */}
        <div className="about-narrative">
          <p>{personal.longBio}</p>

          {/* Academic Highlight Box */}
          <div className="highlight-box">
            <GraduationCap size={28} className="highlight-icon" />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{primaryEdu.degree}</h4>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-primary)',
                    background: 'rgba(6, 182, 212, 0.1)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: 700,
                  }}
                >
                  CGPA: {primaryEdu.grade}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                {primaryEdu.institution} • {primaryEdu.period}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                {primaryEdu.coursework.slice(0, 5).map((course, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      background: 'var(--color-surface-2)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
              <span>Available for 3-6 month Software Engineering internships starting Summer 2026.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--color-success)' }} />
              <span>Strong communication and fast adaptation to unfamiliar codebases and tech stacks.</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Pillars Bento */}
        <div className="about-pillars">
          {pillars.map((p, idx) => (
            <div key={idx} className="pillar-card card-glass">
              <div className="pillar-icon-wrap">{p.icon}</div>
              <h4 className="pillar-title">{p.title}</h4>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
