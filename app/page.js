"use client";
import { useState, useEffect } from "react";

// Main page component for the portfolio
export default function Home() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for user input in the chatbot
  const [userInput, setUserInput] = useState('');

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle logo click, reloads the page
  const handleLogoClick = () => {
    window.location.reload();
  };

  // Effect to add 'show' class to chatbot and hero elements on mount
  useEffect(() => {
    const chatbot = document.querySelector('.hero-chatbot');
    const heroBeige = document.querySelector('.hero-beige');

    if (chatbot) chatbot.classList.add('show');
    if (heroBeige) heroBeige.classList.add('show');
  }, []);

  // Initial chatbot messages
  const [chatMessages, setChatMessages] = useState([{
    role: "assistant",
    content: "Hi! I'm PortPal, here to help you explore this portfolio. Have any questions or want to dive deeper into Harsh's experiences? Just ask!",
  }]);

  // Function to handle form submission for chatbot
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newMessages = [...chatMessages, {
      role: 'user',
      content: userInput
    }];
    setChatMessages(newMessages);
    setUserInput('');
    const apiMessage = await fetch(
      '/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        })
      }
    ).then(res => res.json());
    setChatMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  // Effect to scroll the chat area to bottom when messages change
  useEffect(() => {
    const scrollArea = document.querySelector(".scroll-area");
    if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      {/* Header section with navigation */}
      <header>
        <a className="logo-holder" onClick={handleLogoClick}>
          <div className="logo">
            <img src="./images/title-logo.jpg" alt="Logo" />
          </div>
        </a>
        <nav>
          <ul id="menu" className={isMenuOpen ? "active" : ""}>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work-experience">Work Experiences</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#training-and-certifications">Training & Certifications</a>
            </li>
            <li>
              <a href="mailto:pmharsh545@gmail.com" className="button">Let's Connect!</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
	    </header>
      <main>
        {/* Hero section with introduction and chatbot */}
        <section className="hero container">
          <div className="hero-beige">
            <div>
              <h1>
                <small>
                  Hello, I'm
                </small>
                Harsh Parmar
              </h1>
              <p>
                I thrive on solving problems and turning ideas into innovative solutions.
              </p>
              <p>
                Passionate about creating meaningful experiences, I'm always eager to embrace new challenges and grow through learning.
              </p>
              <div className="call-to-action">
                <a href="./Resume_HarshParmar.pdf" className="button black" target="_blank">
                  Access My Resume
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/711-parmar-harsh/" target="_blank">
                  <img src="./images/linked-in.jpg" alt="LinkedIn" width="48" />
                </a>
                <a href="https://github.com/ParmarHarsh" target="_blank">
                  <img src="./images/github.jpg" alt="GitHub" width="48" />
                </a>
                <a href="https://www.instagram.com/harshp_711/" target="_blank">
                  <img src="./images/instagram.jpg" alt="Instagram" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-chatbot">
            <h4>
              <small> 
                Talk to <b>PortPal...</b>
              </small>		
            </h4>
            <div className="chatbot-blue">
              <div className="chat-box">
                <div className="scroll-area">
                  <ul id="chat-log">
                    {chatMessages.map((message, index) => (
                      <li key={index} className={message.role}>
                        <span className={`avatar ${message.role}`}>
                          <img
                            src={message.role === "user" ? "./images/user.jpg" : "./images/portpal.jpg"}
                            alt={`${message.role === "user" ? "User" : "Bot"} Avatar`}
                          />
                        </span>
                        <div className="message">{message.content}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <form onSubmit={handleSubmit} className="chat-message">
                  <input type="text" placeholder="Hey Pal, what has Harsh studied?" value={userInput} onChange={e => setUserInput(e.target.value)}/>
                  <button className="button black">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Skills marquee section */}
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./images/python.jpg" alt="Python"/>
              <img src="./images/java.jpg" alt="Java"/>
              <img src="./images/javascript.jpg" alt="JavaScript"/>
              <img src="./images/r-language.jpg" alt="R"/>
              <img src="./images/wordpress.jpg" alt="WordPress"/>
              <img src="./images/excel.jpg" alt="Excel"/>
              <img src="./images/power-automate.jpg" alt="PowerAutomate"/>
              <img src="./images/power-bi.jpg" alt="PowerBI"/>
              <img src="./images/react-js.jpg" alt="ReactJS"/>
              <img src="./images/css.jpg" alt="CSS"/>
              <img src="./images/sharepoint.jpg" alt="SharePoint"/>
              <img src="./images/c-language.jpg" alt="C"/>
              <img src="./images/jira.jpg" alt="Jira"/>
              <img src="./images/html.jpg" alt="HTML"/>
              <img src="./images/django.jpg" alt="Django"/>
              <img src="./images/tableau.jpg" alt="Tableau"/>
              <img src="./images/restful-apis.jpg" alt="RESTfulAPIs"/>
              <img src="./images/typescript.jpg" alt="TypeScript"/>
              <img src="./images/node-js.jpg" alt="NodeJS"/>
              <img src="./images/next-js.jpg" alt="NextJS"/>
              <img src="./images/sql.jpg" alt="SQL"/>
              <img src="./images/github-logo.jpg" alt="GitHub"/>
            </div>
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="education container">
          <h2>
            <small>- - - - -</small>
            Education
          </h2>
          <div className="holder-red">
            <div className="column-1">
              <img src="./images/yorku-edu.jpg"/>
            </div>
            <div className="column-2">
              <h3>
                <span className="left">York University - Toronto, Canada</span>
                <span className="right">January 2021 - January 2025</span>
              </h3>
              <ul>
                <li>
                  <b>
                    Degree:&nbsp;
                  </b>
                  Bachelor of Science with Honours Specialization 
                </li>
                <li>
                  <b>
                    Major:&nbsp;
                  </b>
                  Computer Science 
                </li>
                <li>
                  <b>
                    GPA:&nbsp;
                  </b>
                  2.9 / 4.0
                </li>
              </ul>
              <b> Courses: </b>
              <ul>
                <li>
                  Advanced DSA
                </li>
                <li>
                  Advanced OOP
                </li>
                <li>
                  DBMS
                </li>
                <li>
                  Data Mining
                </li>
                <li>
                  Machine Learning & AI
                </li>
                <li>
                  Embedded Systems
                </li>
                <li>
                  Computer Security & Network Protocols
                </li>
                <li>
                  Operating Systems
                </li>
                <li>
                  Web Development
                </li>
                <li>
                  Software Design
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work experience section */}
        <section id="work-experience" className="work-experience container">
          <h2>
            <small>- - - - -</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./images/osgoode-pd.jpg" alt="OPD" width="100%" />
                  <figcaption>
                    Osgoode Professional Development
                  </figcaption>
                </div>
              </figure>
              <h3>Records & Data Entry Assistant</h3>
              <div>July 2024 - May 2025</div>
              <p>Improved data efficiency and accuracy through Excel automation, audits, cross-functional collaboration, and web scraping of Canadian law databases.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/yorku.jpg" alt="YorkU" width="100%" />
                  <figcaption>
                    York University
                  </figcaption>
                </div>
              </figure>
              <h3>Records & Data Entry Assistant</h3>
              <div>July 2023 - May 2024</div>
              <p>Boosted faculty engagement and efficiency by managing SharePoint and WordPress portals, automating job postings and email flows, and creating standardized onboarding guides.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./images/cibc.jpg" alt="CIBC" width="100%" />
                  <figcaption>
                    CIBC
                  </figcaption>
                </div>
              </figure>
              <h3>Intern - Information Security</h3>
              <div>July 2022 - January 2023</div>
              <p>Redesigned SharePoint and organized MS Teams for better usability, ensured secure access, and supported process improvements.</p>
            </article>	
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="projects container">
          <h2>
            <small>- - - - -</small>
            Projects
          </h2>
          <div className="projects-grid">
            <a href="https://public.tableau.com/app/profile/harsh.parmar3512/viz/Global-Inflation-Analysis/GlobalInflationDashboard" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-8.jpg" alt="Project 8" width="100%" />
                <figcaption>Global Inflation Analysis</figcaption>
              </figure>
            </a>
            <a href="" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-7.jpg" alt="Project 7" width="100%" />
                <figcaption>PortPal: AI-Powered Chatbot for Portfolio Interactions</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/Servo-Controlled-Obstacle-Detection-Radar" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-6.jpg" alt="Project 6" width="100%" />
                <figcaption>Servo Controlled Obstacle Detection Radar</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/Authenticator" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-5.jpg" alt="Project 5" width="100%" />
                <figcaption>Authenticator</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/Image-Processing-with-Edge-Detection-and-Seam-Carving" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-4.jpg" alt="Project 4" width="100%" />
                <figcaption>Image Processing with Edge Detection and Seam Carving</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/Car-Sales-Prediction" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-3.jpg" alt="Project 3" width="100%" />
                <figcaption>Car Sales Prediction</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/The-Bird-Game" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-2.jpg" alt="Project 2" width="100%" />
                <figcaption>The Bird Game</figcaption>
              </figure>
            </a>
            <a href="https://github.com/ParmarHarsh/Pong-with-AI" className="projects-item" target="_blank">
              <figure>
                <img src="./images/project-1.jpg" alt="Project 1" width="100%" />
                <figcaption>Pong with AI</figcaption>
              </figure>
            </a>
          </div>
        </section>		

        {/* Skills section */}
        <section id="skills" className="skills container">
          <h2>
            <small>- - - - -</small>
              Skills
          </h2>
          <div className="holder-beige">
              <div className="left-column">
              <h3>Programming Languages</h3>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>R</li>
              </ul>
              <h3>Data Management & Analysis</h3>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Microsoft SQL Server</li>
                <li>Microsoft Excel</li>
                <li>Power BI</li>
                <li>Tableau</li>
              </ul>
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Microsoft Visual Studio Code</li>
                <li>Microsoft SharePoint</li>
                <li>Microsoft Power BI</li>
                <li>Tableau</li>
                <li>Microsoft Power Automate</li>
                <li>GitHub</li>
                <li>WordPress</li>
              </ul>
              </div>
              <div className="right-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>TypeScript</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Django</li>
                <li>RESTful APIs</li>
                <li>NextJS</li>
                <li>Node.js</li>
              </ul>
              <h3>Project Management & Collaboration</h3>
              <ul>
                  <li>Agile Methodology</li>
                  <li>SDLC</li>
                  <li>Jira</li>
                  <li>SAP (Basic)</li>
              </ul>
              <h3>DevOps & Cloud</h3>
              <ul>
                <li>Azure OpenAI</li>
                  <li>CI/CD</li>
                  <li>ETL Pipelines</li>
                  <li>SaaS (Basic)</li>
              </ul>
              </div>
          </div>
        </section>

        {/* Training and certifications section */}
        <section id="training-and-certifications" className="training-and-certifications container">
          <h2>
            <small>- - - - -</small>
            Training & Certifications
          </h2>
          <div className="certifications">
            <article>
              <figure>
                <div>
                  <a href="https://www.linkedin.com/learning/certificates/1c934e67f8728020c7c994888817d70f4aa923d20a0b7d443da304af62c1146b?u=2174970" target="_blank">
                    <img src="./images/certificate-6.jpg" alt="Certification 6" width="100%" />
                  </a>
                </div>
              </figure>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://www.linkedin.com/learning/certificates/07629f5ae994a014cc3b8a66124826290ef5d0796777f59c905f2888733f517f?u=2174970" target="_blank">
                    <img src="./images/certificate-5.jpg" alt="Certification 5" width="100%" />
                  </a>		
                </div>
              </figure>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://www.linkedin.com/learning/certificates/4494d01de528f1f374c903931ceee7ef765a0a1ea23d5d7971bdf67a2c86e70b?u=2174970" target="_blank">
                    <img src="./images/certificate-4.jpg" alt="Certification 4" width="100%" />
                  </a>
                </div>
              </figure>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://www.linkedin.com/learning/certificates/d204ac5845e49042f8b755c7c6fb358d4444dbe2fdd51bedc4e0dd194941ff1d?u=2174970" target="_blank">
                    <img src="./images/certificate-3.jpg" alt="Certification 3" width="100%" />
                  </a>
                </div>
              </figure>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://www.linkedin.com/learning/certificates/aa17a33db65274f5852540a00e832a49b6274ce15c7ffb1b3941de3a6cba8f20?u=2174970" target="_blank">
                    <img src="./images/certificate-2.jpg" alt="Certification 2" width="100%" />
                  </a>
                </div>
              </figure>
            </article>
            <article>
              <figure>
                <div>
                  <a href="https://courses.edx.org/certificates/bc171d5cd6f345c280214c3c49749ea7" target="_blank">
                    <img src="./images/certificate-1.jpg" alt="Certification 1" width="100%" />
                  </a>
                </div>
              </figure>
            </article>
          </div>
        </section>
      </main>
      <div className="copyright-notice">
        <p>This project is in the public domain. Feel free to use, modify, and distribute it!</p>
      </div>
    </>
  );
}