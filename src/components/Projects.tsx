import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle,
  X,
  Sparkles,
  ArrowUpRight,
  Code
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'AI / ML', 'Systems / Tools'];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="container">
      <div className="section-badge">
        <Code size={15} />
        <span>Featured Engineering</span>
      </div>

      <h2 className="section-title">
        Selected Projects &amp; <span className="text-gradient">System Builds</span>
      </h2>
      <p className="section-subtitle">
        Production-grade web apps, distributed systems, and algorithmic tools engineered with modern tech stacks.
      </p>

      {/* Category Tabs */}
      <div className="projects-header-actions">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card card-glass">
            <div className="project-card-top">
              <div className="project-meta-row">
                <span className="project-category-badge">{project.category}</span>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                    title="View Source Code on GitHub"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <GithubIcon size={16} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      title="Open Live Preview"
                      aria-label={`Live preview for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
            </div>

            {/* Metrics Strip */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="project-metrics-strip">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="metric-chip">
                    <span className="metric-chip-val">{m.value}</span>
                    <span className="metric-chip-lbl">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Tags */}
            <div className="project-tags-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer / Detail Modal Trigger */}
            <div className="project-card-footer">
              <button
                type="button"
                className="details-btn"
                onClick={() => setActiveModalProject(project)}
              >
                <span>Architecture &amp; Highlights</span>
                <ArrowUpRight size={15} />
              </button>

              {project.featured && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: 'var(--color-warning)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={12} />
                  Featured
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-category-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                  {activeModalProject.category}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{activeModalProject.title}</h3>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  System Overview
                </h4>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
                  {activeModalProject.longDescription}
                </p>
              </div>

              {activeModalProject.metrics && (
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.65rem' }}>
                    Key Performance Metrics
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    {activeModalProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: 'var(--color-surface-2)',
                          padding: '0.75rem',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--color-border)',
                          textAlign: 'center',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.15rem' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginTop: '2px' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Engineering Highlights &amp; Solutions
                </h4>
                <ul className="highlights-list">
                  {activeModalProject.highlights.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Technologies Used
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {activeModalProject.tags.map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub Repository</span>
                </a>
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
