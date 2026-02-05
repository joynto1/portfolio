'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="container header-content">
        <Link href="/" className="logo">
          JKD<span>.</span>
        </Link>

        <button
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          onClick={toggleMobileMenu}
        >
          <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>

        <nav id="mainNav" className={mobileMenuOpen ? 'active' : ''}>
          <ul>
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/skills" onClick={() => setMobileMenuOpen(false)}>Skills</Link></li>
            <li><Link href="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/experience" onClick={() => setMobileMenuOpen(false)}>Experience</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
          <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
        </button>
      </div>
    </header>
  );
}
