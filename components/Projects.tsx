import Image from 'next/image';

const projects = [
  {
    img: '/images/healpoint.jpeg',
    alt: 'HealthCare website',
    title: 'HealPoint',
    description: 'A Modern, Responsive, and user-friendly healthcare website that allows patients to book doctor appointments.',
    liveLink: 'https://healpoint.netlify.app/',
    githubLink: 'https://github.com/joynto1/doc-app',
  },
  {
    img: '/images/Bus-services.jpeg',
    alt: 'Task Manager App',
    title: 'Dhaka Local Bus Services',
    description: 'A Friendly Dhaka Local Bus Services website That show Every Bus Route and Bus Stop and Show Also Ticket Price.',
    liveLink: 'https://dhaka-local-bus-info.netlify.app/',
    githubLink: 'https://github.com/joynto1/dhaka_local_bus',
  },
  {
    img: '/images/convension.png',
    alt: 'DevOps Pipeline',
    title: 'Convention Center',
    description: 'A modern convention center website with booking functionality and responsive design.',
    liveLink: 'https://joynto1.github.io/Convention-center/',
    githubLink: 'https://github.com/joynto1/Convention-center',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Academic & Personal Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card reveal">
              <Image 
                src={project.img} 
                alt={project.alt} 
                className="project-img"
                width={400}
                height={250}
                style={{ width: '100%', height: 'auto' }}
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
