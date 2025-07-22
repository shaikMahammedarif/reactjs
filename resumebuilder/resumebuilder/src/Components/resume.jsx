import './styling.css';

const resumeStyle = {
  intro: `Results-driven Associate Cloud & Full-Stack Engineer at Zelis, with hands-on experience
in AWS cloud services, DevOps practices, and modern web development. Successfully transitioned from intern to full-time through consistent contributions in cloud infrastructure, backend systems, and responsive front-end applications. Passionate about building scalable, secure, and user-focused solutions across the stack. Always eager to learn, grow, and take on impactful technical challenges.`,

  skills: [
    "Cloud Platforms: AWS (EC2, S3, Lambda, RDS), Azure",
    "DevOps: CI/CD, Docker, Kubernetes, Terraform",
    "Programming Languages: JavaScript, Python, Java",
    "Web Development: React, Node.js, Express.js",
    "Databases: MySQL, MongoDB, PostgreSQL",
    "Version Control: Git, GitHub",
  ],

  education: `Bachelor of Technology in Computer Science and Engineering from G Pulla Reddy Engineering College (Autonomous)`,

  experience: [
    {
      title: "Associate Cloud & Full-Stack Engineer",
      company: "Zelis",
      dates: "June 2023 - Present",
      responsibilities: [
        "Developed and maintained cloud infrastructure using AWS services, ensuring high availability and scalability.",
        "Implemented CI/CD pipelines to automate deployment processes, reducing release times by 30%.",
        "Designed and built responsive web applications using React and Node.js, enhancing user experience and performance.",
        "Collaborated with cross-functional teams to gather requirements and deliver solutions that meet business needs.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Zelis",
      dates: "January 2023 - May 2023",
      responsibilities: [
        "Assisted in the development of cloud-based applications, focusing on backend services and database management.",
        "Participated in code reviews and contributed to improving code quality.",
      ],
    },
  ],

  projects: [
    {
      title: "Cloud-Based E-Commerce Platform",
      description:
        "Developed a scalable e-commerce platform using AWS services, including EC2, S3, and RDS. Implemented a microservices architecture with Docker and Kubernetes for container orchestration. The platform supports user authentication, product management, and order processing.",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Built a real-time chat application using React and Node.js, with WebSockets for real-time communication. Implemented user authentication and message persistence using MongoDB. The application supports multiple chat rooms and private messaging.",
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Certified Kubernetes Administrator (CKA)",
    "Full-Stack Web Development with React Specialization (Coursera)",
  ],

  contact: {
    email: "shaikmahammedarif.me@gmail.com",
    phone: "+1 123 456 7890",
    linkedin: "https://www.linkedin.com/in/mahammed-arif-shaik-1b0b2a1b6/",
    github: "https://github.com/shaikMahammedarif",
  },
};

function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-title">RESUME</h1>

      <section className="section introduction">
        <h3 className="section-title">Introduction</h3>
        <p className="section-content">{resumeStyle.intro}</p>
      </section>

      <section className="section skills">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          {resumeStyle.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section education">
        <h3 className="section-title">Education</h3>
        <p>{resumeStyle.education}</p>
      </section>

      <section className="section experience">
        <h3 className="section-title">Experience</h3>
        {resumeStyle.experience.map((job, index) => (
          <div className="job" key={index}>
            <h4 className="job-title">{job.title}</h4>
            <p className="job-company">{job.company}</p>
            <p className="job-dates">{job.dates}</p>
            <ul className="job-responsibilities">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section projects">
        <h3 className="section-title">Projects</h3>
        {resumeStyle.projects.map((project, index) => (
          <div className="project" key={index}>
            <h4 className="project-title">{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="section certifications">
        <h3 className="section-title">Certifications</h3>
        <ul className="certifications-list">
          {resumeStyle.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="section contact">
        <h3 className="section-title">Contact</h3>
        <p>
          Email:{' '}
          <a href={`mailto:${resumeStyle.contact.email}`}>
            {resumeStyle.contact.email}
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a href={resumeStyle.contact.linkedin}>{resumeStyle.contact.linkedin}</a>
        </p>
        <p>
          GitHub:{' '}
          <a href={resumeStyle.contact.github}>ShaikMahammedArif</a>
        </p>
      </section>
    </div>
  );
}

export default Resume;
