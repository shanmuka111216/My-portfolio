import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Search,
  Code2,
  Globe,
  Database,
  Cpu,
  Layers
} from 'lucide-react';
import { portfolioData, type SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 size={20} />,
    'Web & Frameworks': <Globe size={20} />,
    'Databases & Cloud': <Database size={20} />,
    'Core CS Fundamentals': <Cpu size={20} />,
    'Developer Tools & DevOps': <Wrench size={20} />,
  };

  const categories = ['All', ...skills.map((c) => c.name)];

  const filteredCategories = useMemo(() => {
    return skills
      .filter((cat) => {
        if (selectedCategory === 'All') return true;
        return cat.name === selectedCategory;
      })
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const query = searchQuery.toLowerCase();
        const matchingSkills = cat.skills.filter((s) =>
          s.name.toLowerCase().includes(query)
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skills, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="container">
      <div className="section-badge">
        <Wrench size={15} />
        <span>Technical Arsenal</span>
      </div>

      <h2 className="section-title">
        Technologies &amp; <span className="text-gradient">Core Competencies</span>
      </h2>
      <p className="section-subtitle">
        A structured breakdown of languages, engineering frameworks, and foundational computer science tools.
      </p>

      {/* Controls: Filter Tabs + Live Search */}
      <div className="skills-controls">
        <div className="skills-filter-tabs">
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

        <div className="skills-search">
          <Search size={16} style={{ color: 'var(--color-text-muted)' }} />
          <input
            type="text"
            placeholder="Search skills (e.g. C++, Redis)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filter skills by keyword"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat: SkillCategory) => (
            <div key={cat.name} className="skill-cat-card card-glass">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">
                  {categoryIcons[cat.name] || <Layers size={20} />}
                </div>
                <div>
                  <h3 className="skill-cat-title">{cat.name}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {cat.skills.length} competencies
                  </span>
                </div>
              </div>

              <div className="skill-chips-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span>{skill.name}</span>
                    <span className="skill-badge-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              gridColumn: '1 / -1',
              padding: '3rem',
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              background: 'var(--color-surface-1)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--color-border)',
            }}
          >
            No skills found matching &ldquo;{searchQuery}&rdquo;. Try another search term or switch category filter.
          </div>
        )}
      </div>
    </section>
  );
};
