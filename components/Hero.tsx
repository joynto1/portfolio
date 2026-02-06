'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [activeRole, setActiveRole] = useState(0);
  const roles = ['Frontend Developer', 'DevOps', 'Cloud Engineer'];

  useEffect(() => {
    const fullName = 'Joyonto Kumar Das ';
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setTypedText(fullName.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === fullName.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }

        setTimeout(type, 100);
      } else {
        setTypedText(fullName.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          setTimeout(type, 1000);
          return;
        }

        setTimeout(type, 50);
      }
    };

    setTimeout(type, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <div className="hero-image">
          <Image 
            src="/images/joyonto_kumar_das.jpg" 
            alt="Joyonto Kumar Das" 
            className="profile-img"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="hero-text">
          <h1>
            <div className="typing-container">
              <span className="typing-text">{typedText}</span>
              <span className="cursor"></span>
            </div>
          </h1>
          <div className="role role-rotator" id="roleRotator" aria-live="polite">
            {roles.map((role, idx) => (
              <span
                key={idx}
                className={`role-item ${idx === activeRole ? 'active' : ''}`}
                aria-hidden={idx !== activeRole}
              >
                {role}
              </span>
            ))}
          </div>
          <p>
            Recent Computer Science graduate passionate about creating responsive web applications
            and optimizing deployment workflows. Seeking opportunities as a Frontend Developer & DevOps
            Intern to contribute to innovative projects while expanding my skills in modern web
            technologies and cloud infrastructure.
          </p>
          <div className="hero-btns">
            <a href="mailto:mr.joyontokumardas@gmail.com" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Hire Me
            </a>
            <a  href="/documents/Joyonto_Resume.pdf"  target="_blank" rel="noopener noreferrer" className="btn btn-resume">
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
