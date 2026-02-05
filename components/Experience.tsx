'use client';

import { useEffect, useState } from 'react';

const educationData = [
  {
    date: '2022 - 2025',
    title: 'B.Sc in Computer Science & Engineering',
    company: 'Northern University Bangladesh',
    description:
      'Graduated with honors (CGPA: 3.25/4.0). Focus areas included Web Development, Cloud Computing, Database Systems, and Software Engineering. Completed capstone project on "Modern Web Application Deployment Pipeline."',
  },
  {
    date: '2018 - 2020',
    title: 'Higher Secondary Certificate (HSC)',
    company: 'Science Group',
    description:
      'Completed with GPA 4.67/5.0. Focused on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving foundations.',
  },
];

const workData = [
  {
    date: 'Oct 2025 - Jan 2026',
    title: 'DevOps Intern',
    company: 'Business Automation LTD.',
    description:
      'DevOps Intern at Business Automation LTD, with hands-on experience in CI/CD pipelines, Linux systems, version control (Git), and basic cloud & automation tools. Passionate about learning DevOps best practices, improving deployment workflows, and bridging development with operations through efficient and secure solutions.',
  },
  {
    date: 'Feb 2025 - Sep 2025',
    title: 'Frontend Developer',
    company: 'Youtube Course',
    description:
      'Assisted in developing responsive web applications using React.js and REST APIs. Participated in code reviews and contributed to team meetings. Gained experience with Git version control and agile development methodologies.',
  },
  {
    date: '2022 - 2023',
    title: 'University Projects',
    company: 'Various Academic Projects',
    description:
      'Developed multiple Web Based applications as part of coursework. The HealthCare Management System (Doctor Portal) and Dhaka Local Bus System Project were appreciated at the University.',
  },
];

const certificationsData = [
  {
    date: '2025',
    title: 'Introduction to Cybersecurity',
    company: 'Cisco Networking Academy',
    description: 'I have successfully completed the Introduction to Cybersecurity course from Cisco Networking Academy.',
  },
  {
    date: '2025',
    title: 'Docker for Beginners',
    company: 'Business Automation LTD.',
    description: 'Containerization fundamentals, Docker commands, Dockerfiles, and basic orchestration concepts.',
  },
  {
    date: '2024',
    title: 'Introduction to Python',
    company: 'DataCamp',
    description: 'I have completed the Introduction to Python course through DataCamp.',
  },
  {
    date: '2022',
    title: 'Git & GitHub Mastery',
    company: 'Business Automation LTD',
    description:
      'Comprehensive understanding of version control, branching strategies, and collaborative development workflows.',
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    const items = document.querySelectorAll('#experience .reveal');
    items.forEach((item) => item.classList.add('active'));
  }, [activeTab]);

  const renderContent = () => {
    let data;
    if (activeTab === 'education') {
      data = educationData;
    } else if (activeTab === 'work') {
      data = workData;
    } else {
      data = certificationsData;
    }

    return data.map((item, idx) => (
      <div key={idx} className="timeline-item reveal">
        <div className="timeline-date">
          <i className="far fa-calendar"></i> {item.date}
        </div>
        <div className="timeline-content">
          <h3>{item.title}</h3>
          <h4>{item.company}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience & Education</h2>
        </div>

        <div className="experience-tabs">
          {[
            { id: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
            { id: 'work', icon: 'fas fa-briefcase', label: 'Experience' },
            { id: 'certifications', icon: 'fas fa-certificate', label: 'Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`experience-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              data-tab={tab.id}
            >
              <i className={tab.icon}></i> {tab.label}
            </button>
          ))}
        </div>

        <div className="experience-content">
          <div className={`experience-category ${activeTab === 'education' || activeTab === 'work' || activeTab === 'certifications' ? 'active' : ''}`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
