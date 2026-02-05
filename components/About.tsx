import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Joyonto, a recent Computer Science and Engineering graduate with a passion
              for building modern web applications and optimizing development workflows. My academic
              journey has equipped me with strong foundations in both frontend development and DevOps
              practices.
            </p>
            <p>
              I specialize in creating responsive, user-friendly interfaces using React.js while also
              exploring cloud technologies and CI/CD pipelines. As a fresh graduate, I'm eager to apply
              my academic knowledge to real-world projects and grow as a professional developer.
            </p>
          </div>
          <div className="about-image reveal">
            <Image 
              src="/images/about.jpg" 
              alt="Developer workspace" 
              width={500}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: 'var(--border-radius)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
