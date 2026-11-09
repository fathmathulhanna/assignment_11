import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/resume")
      .then((response) => setResume(response.data))
      .catch((err) => {
        console.error(err);
        setError("Unable to load resume data. Make sure the backend and MongoDB are running.");
      });
  }, []);

  if (error) {
    return <div className="loading error">{error}</div>;
  }

  if (!resume) {
    return <div className="loading">Loading resume...</div>;
  }

  return (
    <main className="resume">
      <header className="header">
        <h1>{resume.name}</h1>

        <div className="location">
          <p>
            {resume.contact.location} | {resume.contact.phone} |{" "}
            {resume.contact.email}
          </p>
        </div>

        <div className="links-line">
          LinkedIn:{" "}
          <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
            {resume.contact.linkedin.replace("https://", "")}
          </a>
          {" | "}
          GitHub:{" "}
          <a href={resume.contact.github} target="_blank" rel="noreferrer">
            {resume.contact.github.replace("https://", "")}
          </a>
        </div>
      </header>

      <section>
        <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
        <div className="summary">
          <p>{resume.summary}</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">EDUCATION</h2>

        {resume.education.map((education, index) => (
          <div className="education-item" key={index}>
            <div className="edu-row">
              <span className="edu-title">
                {education.degree}
                {education.cgpa && ` CGPA: ${education.cgpa}`}
              </span>
              <span className="edu-date">{education.date}</span>
            </div>

            <div className="edu-sub">{education.institution}</div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">INTERNSHIP EXPERIENCE</h2>

        {resume.internships.map((internship, index) => (
          <div className="experience" key={index}>
            <div className="edu-row">
              <span className="edu-title">
                {internship.position} - {internship.company},{" "}
                {internship.location}
              </span>
              <span className="edu-date">{internship.date}</span>
            </div>

            <ul className="bullets">
              {internship.responsibilities.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">TECHNICAL SKILLS</h2>

        <div className="edu-row">
          <ul className="bullets">
            {resume.technicalSkills.map((skillGroup, index) => (
              <li key={index}>
                <strong>{skillGroup.category}:</strong>{" "}
                {skillGroup.skills.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">PROJECTS</h2>

        {resume.projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="edu-row">
              <span className="edu-title">{project.name}</span>
              <span className="edu-date">{project.year}</span>
            </div>

            <div className="edu-sub">{project.technologies}</div>

            <div className="edu-row">
              <ul className="bullets">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="section-title">
          LEADERSHIP &amp; EXTRACURRICULAR EXPERIENCE
        </h2>

        {resume.leadership.map((item, index) => (
          <div className="leadership" key={index}>
            <div className="edu-row">
              <span className="edu-title">
                {item.position}, {item.organization}
              </span>
              <span className="edu-date">{item.year}</span>
            </div>

            <ul className="bullets">
              {item.responsibilities.map((responsibility, responsibilityIndex) => (
                <li key={responsibilityIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
