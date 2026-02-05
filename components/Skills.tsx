'use client';

import { useState } from 'react';

const skillsData = {
  frontend: [
    { icon: 'fab fa-html5', name: 'HTML5', level: 'Advanced' },
    { icon: 'fab fa-css3-alt', name: 'CSS3 & Tailwind', level: 'Advanced' },
    { icon: 'fab fa-js', name: 'JavaScript (ES6+)', level: 'Intermediate' },
    { icon: 'fab fa-react', name: 'React.js', level: 'Intermediate' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap', level: 'Intermediate' },
    { icon: 'fas fa-mobile-alt', name: 'Responsive Design', level: 'Advanced' },
  ],
  devops: [
    { icon: 'fab fa-git-alt', name: 'Git & GitHub', level: 'Intermediate' },
    { icon: 'fab fa-docker', name: 'Docker', level: 'Beginner' },
    { icon: 'fab fa-aws', name: 'AWS Basics', level: 'Beginner' },
    { icon: 'fas fa-code-branch', name: 'CI/CD Concepts', level: 'Beginner' },
    { icon: 'fab fa-linux', name: 'Linux CLI', level: 'Intermediate' },
    { icon: 'fas fa-terminal', name: 'Bash Scripting', level: 'Beginner' },
  ],
  professional: [
    { icon: 'fas fa-lightbulb', name: 'Problem Solving', level: 'Advanced' },
    { icon: 'fas fa-comments', name: 'Communication', level: 'Intermediate' },
    { icon: 'fas fa-handshake', name: 'Team Collaboration', level: 'Intermediate' },
    { icon: 'fas fa-tasks', name: 'Project Management', level: 'Beginner' },
    { icon: 'fas fa-clock', name: 'Time Management', level: 'Intermediate' },
    { icon: 'fas fa-book', name: 'Continuous Learning', level: 'Advanced' },
  ],
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('frontend');

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>

        <div className="skills-buttons">
          {Object.keys(skillsData).map((skill) => (
            <button
              key={skill}
              className={`skill-btn ${activeSkill === skill ? 'active' : ''}`}
              onClick={() => setActiveSkill(skill)}
              data-skill={skill}
            >
              <i
                className={
                  skill === 'frontend'
                    ? 'fas fa-code'
                    : skill === 'devops'
                    ? 'fas fa-server'
                    : 'fas fa-users'
                }
              ></i>
              {skill === 'frontend'
                ? 'Frontend Development'
                : skill === 'devops'
                ? 'DevOps & Tools'
                : 'Professional Skills'}
            </button>
          ))}
        </div>

        <div className="skills-container">
          {Object.keys(skillsData).map((skill) => (
            <div
              key={skill}
              className={`skill-card ${activeSkill === skill ? 'active' : 'hidden'}`}
              id={`${skill}-card`}
            >
              <ul className="skill-list">
                {skillsData[skill as keyof typeof skillsData].map((item, idx) => (
                  <li key={idx}>
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                    <span className="skill-level">{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
