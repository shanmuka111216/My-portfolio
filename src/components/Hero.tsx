import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Code,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, stats } = portfolioData;

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalTab, setTerminalTab] = useState<'profile' | 'tests'>('profile');

  // Typewriter effect
  useEffect(() => {
    const currentFullText = personal.subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(
          currentFullText.substring(0, typedText.length + 1)
        );

        if (typedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(
          currentFullText.substring(0, typedText.length - 1)
        );

        if (typedText.length === 0) {
          setIsDeleting(false);
          setSubtitleIndex(
            (prev) => (prev + 1) % personal.subtitles.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    typedText,
    isDeleting,
    subtitleIndex,
    personal.subtitles
  ]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">

        <div className="hero-grid">

          {/* LEFT SIDE */}
          <div className="hero-content">

            {/* Status */}
            <div className="status-pill">
              <span className="pulse-dot"></span>
              <span>{personal.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Hello, I'm{' '}
              <span className="text-gradient">
                B. Shanmuka Sai
              </span>
            </h1>

            {/* Course */}
            <div className="hero-role-wrapper">
              <Sparkles
                size={18}
                style={{
                  color: 'var(--color-primary)'
                }}
              />

              <span>{typedText}</span>

              <span className="typing-cursor"></span>
            </div>

            {/* Bio */}
            <p className="hero-bio">
              {personal.bio}
            </p>

            {/* Buttons */}
            <div className="hero-actions">

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <Mail size={16} />
                <span>Get In Touch</span>
              </button>

            </div>

            {/* Social Links */}
            <div className="hero-socials">

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personal.leetcode}
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
                title="LeetCode Profile"
              >
                <Code size={15} />
                <span>LeetCode</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="hero-social-link"
                title="Send Email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>

            </div>
          </div>


          {/* RIGHT SIDE - TERMINAL */}
          <div className="hero-visual">

            <div className="hero-terminal-card card-glass">

              {/* Terminal Header */}
              <div className="terminal-header">

                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

                <div className="terminal-title">
                  shanmuka@reva-cse:~
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '6px'
                  }}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setTerminalTab('profile')
                    }
                    style={{
                      fontSize: '0.7rem',
                      color:
                        terminalTab === 'profile'
                          ? 'var(--color-primary)'
                          : 'var(--color-text-muted)',
                      fontWeight:
                        terminalTab === 'profile'
                          ? 700
                          : 400
                    }}
                  >
                    profile.sh
                  </button>

                  <span
                    style={{
                      color: 'var(--color-border)'
                    }}
                  >
                    |
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setTerminalTab('tests')
                    }
                    style={{
                      fontSize: '0.7rem',
                      color:
                        terminalTab === 'tests'
                          ? 'var(--color-primary)'
                          : 'var(--color-text-muted)',
                      fontWeight:
                        terminalTab === 'tests'
                          ? 700
                          : 400
                    }}
                  >
                    projects.sh
                  </button>

                </div>
              </div>


              {/* Terminal Body */}
              <div className="terminal-body">

                {terminalTab === 'profile' ? (

                  <>
                    <div className="terminal-line">
                      <span className="term-prompt">
                        $
                      </span>

                      <span className="term-cmd">
                        whoami
                      </span>
                    </div>

                    <div className="term-output">
                      B. Shanmuka Sai
                    </div>


                    <div className="terminal-line">
                      <span className="term-prompt">
                        $
                      </span>

                      <span className="term-cmd">
                        cat student.json
                      </span>
                    </div>

                    <div className="term-output">

                      <pre
                        style={{
                          margin: 0,
                          fontFamily: 'inherit',
                          color: 'inherit'
                        }}
                      >
{`{
  "course": "Computer Science Engineering",
  "university": "REVA University",
  "location": "Bangalore, India",
  "cgpa": "7.01 / 10",
  "year": "2026 - 2027",
  "status": "Currently Learning & Building"
}`}
                      </pre>

                    </div>


                    <div className="terminal-line">
                      <span className="term-prompt">
                        $
                      </span>

                      <span className="term-cmd">
                        git status
                      </span>
                    </div>

                    <div className="term-output">
                      On branch{' '}
                      <span className="term-output-highlight">
                        main
                      </span>
                      . Currently learning and building new projects.
                    </div>

                  </>

                ) : (

                  <>
                    <div className="terminal-line">
                      <span className="term-prompt">
                        $
                      </span>

                      <span className="term-cmd">
                        ls projects/
                      </span>
                    </div>

                    <div className="term-output">
                      IoT_Project/
                      <br />
                      SIH_Project/
                    </div>


                    <div className="terminal-line">
                      <span className="term-prompt">
                        $
                      </span>

                      <span className="term-cmd">
                        cat learning.txt
                      </span>
                    </div>

                    <div className="term-output">
                      Programming
                      <br />
                      Web Development
                      <br />
                      IoT
                      <br />
                      Database Management
                      <br />
                      Git & GitHub
                    </div>


                    <div
                      className="term-output"
                      style={{
                        color: 'var(--color-success)',
                        fontWeight: 600
                      }}
                    >
                      Status: Learning • Building • Improving
                    </div>

                  </>

                )}

              </div>
            </div>
          </div>

        </div>


        {/* STATS */}
        <div className="hero-stats-row">

          {stats.map((item, idx) => (

            <div
              key={idx}
              className="stat-card card-glass"
            >

              <div className="stat-value text-gradient">
                {item.value}
              </div>

              <div className="stat-label">
                {item.label}
              </div>

              <div className="stat-subtext">
                {item.subtext}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};