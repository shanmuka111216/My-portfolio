import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ArrowRight,
  Sun,
  Moon,
  FileText,
  Copy,
  Code,
  Terminal,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
  onShowToast: (msg: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Action' | 'External' | 'Terminal';
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  toggleTheme,
  theme,
  onShowToast,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    onClose();
    onShowToast('Email copied to clipboard!');
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      title: 'Go to Hero / Home',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('home'),
    },
    {
      id: 'nav-about',
      title: 'Go to About Me & Education',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('about'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Skills & Competencies',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('skills'),
    },
    {
      id: 'nav-projects',
      title: 'Go to Featured Projects',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('projects'),
    },
    {
      id: 'nav-exp',
      title: 'Go to Experience & Journey',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('experience'),
    },
    {
      id: 'nav-achieve',
      title: 'Go to Achievements & Coding Profiles',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('achievements'),
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact & Message',
      category: 'Navigation',
      icon: <ArrowRight size={16} />,
      action: () => navigateTo('contact'),
    },

    // Actions
    {
      id: 'act-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Action',
      icon: theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        toggleTheme();
        onClose();
      },
    },
    {
      id: 'act-resume',
      title: 'Download Resume (PDF)',
      category: 'Action',
      icon: <FileText size={16} />,
      action: () => {
        onClose();
        alert('Downloading Shanmukh Bekkanti\'s Resume');
      },
      shortcut: 'PDF',
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      category: 'Action',
      icon: <Copy size={16} />,
      action: copyEmail,
    },

    // External
    {
      id: 'ext-github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: <GithubIcon size={16} />,
      action: () => {
        window.open(portfolioData.personal.github, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-leetcode',
      title: 'Open LeetCode Profile',
      category: 'External',
      icon: <Code size={16} />,
      action: () => {
        window.open(portfolioData.personal.leetcode, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: <LinkedinIcon size={16} />,
      action: () => {
        window.open(portfolioData.personal.linkedin, '_blank');
        onClose();
      },
    },

    // Mock Commands
    {
      id: 'cmd-cgpa',
      title: 'Query CGPA & Academic Standing',
      category: 'Terminal',
      icon: <Terminal size={16} />,
      action: () => {
        onClose();
        onShowToast('Shanmukh has a 9.12/10.0 CGPA at VIT (Top 5%)');
      },
    },
    {
      id: 'cmd-dsa',
      title: 'Query LeetCode & DSA Rating',
      category: 'Terminal',
      icon: <Terminal size={16} />,
      action: () => {
        onClose();
        onShowToast('420+ LeetCode problems solved • Rating: 1845 (Top 7%)');
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="cmd-modal-overlay" onClick={onClose}>
      <div className="cmd-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="cmd-input-row">
          <Search size={18} style={{ color: 'var(--color-primary)' }} />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <button type="button" className="icon-btn" onClick={onClose} style={{ width: '28px', height: '28px' }}>
            <X size={14} />
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-results-list">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-left">
                    <span style={{ color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </div>
                  <span className="cmd-item-tag">{item.category}</span>
                </div>
              );
            })
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              No commands matching &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="cmd-footer">
          <span>
            Use <kbd className="kbd-shortcut">↑</kbd> <kbd className="kbd-shortcut">↓</kbd> to navigate, <kbd className="kbd-shortcut">Enter</kbd> to select
          </span>
          <span>
            <kbd className="kbd-shortcut">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
