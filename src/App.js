import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./App.css"; // Ensure to create a corresponding CSS file for styling

const Resume = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const handleDownload = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="resume-container">
      <header className="resume-header">
        <img src="/profileimage.jpeg" alt="Profile" className="profile-pic" />
        <div>
          <h1>Anjali Gurjar</h1>
          <h2>Software Developer</h2>
        </div>
      </header>
      <div className="resume-content" ref={resumeRef}>
        <aside className="resume-sidebar">
          <div className="contact-info">
            <p>Sector 51, Noida(UP), India</p>
            <p>+91 93409 79716</p>
            <p>anjali755577@gmail.com</p>
            <p>linkedin.com/in/anjaligurjar</p>
          </div>
          <div className="skills">
            <h3>Key Skills</h3>
            <div className="skill">
              <p>Detail Oriented</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>PL/pgSQL</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>PostgreSQL</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>SQL Tools</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Microsoft SQL Server</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Backup & Recovery Systems</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Troubleshooting</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>NodeJS</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>ExpressJS</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>Git</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>AWS (Basic)</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
          <div className="languages">
            <h3>Languages</h3>
            <p>English</p>
            <p>Hindi</p>
          </div>
        </aside>
        <main className="resume-main">
          <section className="summary">
            <h3>Summary</h3>
            <p>
              Experienced Database Administrator and Developer with over 4 years
              of expertise in managing database server backup and recovery
              systems, designing robust database structures, and developing
              complex PL/SQL functions. Proficient in Node.js for creating APIs,
              facilitating seamless front-end integration. Demonstrated ability
              to improve system efficiency and reliability in dynamic and
              fast-paced environments. Recognized with a Great Achievement
              Performance Award for exceptional teamwork and collaboration.
            </p>
          </section>
          <section className="experience">
            <h3>Professional Experience</h3>
            <div className="job">
              <h4>Software Developer</h4>
              <p>Velocis Systems Private Limited, Delhi</p>
              <p>December 2023 - May 2024</p>
              <ul>
                <li>
                  Designed and developed comprehensive database structures,
                  supporting complex application requirements.
                </li>
                <li>
                  Created and optimized PL/SQL functions to handle intricate API
                  logics, enhancing system functionality.
                </li>
                <li>
                  Developed and maintained APIs using Node.js, enabling smooth
                  integration with front-end applications.
                </li>
                <li>
                  Conducted performance tuning and query optimization to improve
                  database efficiency.
                </li>
                <li>
                  Worked closely with front-end developers and other
                  stakeholders to deliver high-quality software solutions.
                </li>
              </ul>
            </div>
            <div className="job">
              <h4>Sr. Analyst</h4>
              <p>HCL Technologies, Noida, UP</p>
              <p>October 2018 - December 2023</p>
              <ul>
                <li>
                  Managed and maintained database server backup and recovery
                  systems, ensuring data integrity and availability.
                </li>
                <li>
                  Implemented automated backup solutions, reducing manual effort
                  and minimizing downtime.
                </li>
                <li>
                  Monitored database performance, performed troubleshooting, and
                  optimized database configurations.
                </li>
                <li>
                  Collaborated with cross-functional teams to address and
                  resolve database-related issues.
                </li>
                <li>
                  Awarded the Great Achievement Performance Award for
                  outstanding teamwork and contribution to successful project
                  outcomes.
                </li>
              </ul>
            </div>
          </section>
          <section className="education">
            <h3>Education</h3>
            <p>
              Bachelor of Engineering in Electronics & Communication Engineering
            </p>
            <p>Samrat Ashok Technology Institute, Vidisha (MP)</p>
            <p>July 2015 - May 2019</p>
          </section>
          <section className="accomplishments">
            <h3>Accomplishments</h3>
            <p>Great Achievement Performance - January 2023</p>
            <p>HCL Technologies</p>
            <p>
              Awarded the Great Achievement Performance Award for outstanding
              teamwork and contribution to successful project outcomes in HCL
              Technologies
            </p>
          </section>
        </main>
      </div>
      <div className="resume-actions">
        <button onClick={handlePrint}>Print Resume</button>
        <button onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;

