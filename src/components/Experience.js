import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: "Web Developer (Full-Time)",
    company: "Express IT Solution",
    location: "Dockyard East, Mazgaon, Mumbai, Maharashtra, India",
    duration: "April 2022 – April 2026",
    badge: "4 Years Experience",
    summary: "Led frontend and full-stack web development for client projects, building high-performance websites, dynamic applications, and RESTful APIs.",
    responsibilities: [
      "Developed and maintained responsive, scalable, and high-performance websites and web applications using HTML5, CSS3, JavaScript, React.js, Bootstrap, WordPress, and Shopify.",
      "Designed and developed dynamic front-end components with modern UI/UX principles, ensuring responsive layouts and seamless user experiences.",
      "Developed, integrated, and maintained RESTful APIs using Node.js, Express.js, and Python for efficient client-server communication.",
      "Managed databases using MongoDB, PostgreSQL, and Supabase, including CRUD operations, data management, and backend integration.",
      "Customized WordPress themes, plugins, WooCommerce stores, and Shopify storefronts based on client requirements.",
      "Implemented authentication, API integrations, form validation, and dynamic data handling to enhance application functionality.",
      "Optimized website performance, loading speed, SEO, mobile responsiveness, and cross-browser compatibility.",
      "Used Git and GitHub for version control, code management, and collaborative development.",
      "Collaborated with UI/UX designers, backend developers, and QA teams to deliver reliable, user-friendly applications.",
      "Troubleshot technical issues, debugged applications, and maintained clean, reusable, and maintainable code.",
      "Managed multiple projects, coordinated client requirements, and ensured timely delivery within project deadlines."
    ]
  }
];

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "1st Year – Pursuing (Academic Year: 2026–2027)",
    institution: "Maharishi University of Information Technology (MUIT)",
    location: "Lucknow, Uttar Pradesh",
    status: "Currently Pursuing",
    highlight: "Post Graduation"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Graduated in 2024",
    institution: "U.P. Rajarshi Tandon Open University (UPRTOU), Prayagraj, Uttar Pradesh",
    studyCentre: "Study Centre: Kamla Nehru Institute of Physical and Social Sciences (KNIPSS), Sultanpur, Uttar Pradesh",
    status: "71% | First Division",
    highlight: "Graduation"
  },
  {
    degree: "Intermediate (12th)",
    specialization: "Year: 2021",
    institution: "S S D A I C Basha, Dostpur, Sultanpur, Uttar Pradesh",
    board: "Uttar Pradesh Madhyamik Shiksha Parishad (UP Board)",
    status: "65.40% | First Division",
    highlight: "Higher Secondary"
  },
  {
    degree: "High School (10th)",
    specialization: "Year: 2019",
    institution: "S S D A I C Basha, Dostpur, Sultanpur, Uttar Pradesh",
    board: "Uttar Pradesh Madhyamik Shiksha Parishad (UP Board)",
    status: "80.17% | First Division",
    highlight: "Secondary School"
  }
];

const certificationsData = [
  {
    title: "HTML Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "92%",
    date: "October 2023",
    type: "Web Development"
  },
  {
    title: "CSS Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "84%",
    date: "November 2023",
    type: "Web Styling"
  },
  {
    title: "Basic Computer Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "90%",
    date: "November 2023",
    type: "Foundations"
  },
  {
    title: "Advanced Excel Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "88%",
    date: "October 2023",
    type: "Data & Productivity"
  },
  {
    title: "Adobe Photoshop Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "76%",
    date: "November 2023",
    type: "Graphic Design"
  },
  {
    title: "Microsoft Office Certification",
    issuer: "STP Computer Education, New Delhi",
    score: "84%",
    date: "January 2024",
    type: "Office Suite"
  },
  {
    title: "Course on Computer Concepts (CCC)",
    issuer: "NIELIT, Disha Institute, Sultanpur, Uttar Pradesh",
    score: "D Grade",
    date: "May 2020",
    type: "Govt. Recognized"
  },
  {
    title: "Diploma in Computer Applications (DCA)",
    issuer: "Newnielit Computer Institute",
    score: "A+ Grade",
    date: "2019",
    type: "Diploma"
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header-exp">
          <span className="subtitle-exp">Career Journey & Background</span>
          <h2 className="title-exp">Experience, Education & Certifications</h2>
          <p className="desc-exp">
            A comprehensive overview of my professional work experience, academic milestones,
            and certified technical qualifications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="exp-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} />
            <span>Work Experience</span>
            <span className="tab-pill">4 Years</span>
          </button>

          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} />
            <span>Education</span>
            <span className="tab-pill">MCA & BCA</span>
          </button>

          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <Award size={18} />
            <span>Certifications</span>
            <span className="tab-pill">8 Verified</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content" ref={contentRef}>
          {/* 1. Work Experience Tab */}
          {activeTab === 'experience' && (
            <div className="experience-wrapper">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="experience-card">
                  <div className="exp-card-header">
                    <div className="role-company">
                      <div className="role-icon">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="role-title">{exp.role}</h3>
                        <h4 className="company-title">{exp.company}</h4>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-duration">
                        <Calendar size={15} /> {exp.duration}
                      </span>
                      <span className="exp-badge">{exp.badge}</span>
                    </div>
                  </div>

                  <div className="exp-location">
                    <MapPin size={15} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="exp-summary">{exp.summary}</p>

                  <div className="responsibilities-block">
                    <h5 className="resp-heading">Key Roles & Responsibilities:</h5>
                    <ul className="resp-list">
                      {exp.responsibilities.map((item, rIdx) => (
                        <li key={rIdx} className="resp-item">
                          <CheckCircle2 size={16} className="bullet-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. Education Tab */}
          {activeTab === 'education' && (
            <div className="education-grid">
              {educationData.map((edu, idx) => (
                <div key={idx} className="education-card">
                  <div className="edu-badge">{edu.highlight}</div>
                  <div className="edu-icon">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-spec">{edu.specialization}</div>
                  <div className="edu-institution">{edu.institution}</div>
                  {edu.studyCentre && <div className="edu-sub">{edu.studyCentre}</div>}
                  {edu.board && <div className="edu-sub">{edu.board}</div>}
                  {edu.location && (
                    <div className="edu-location">
                      <MapPin size={14} /> {edu.location}
                    </div>
                  )}
                  <div className="edu-status-pill">
                    <CheckCircle2 size={15} />
                    <span>{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="certifications-grid">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-top">
                    <div className="cert-icon-wrapper">
                      <Award size={22} />
                    </div>
                    <span className="cert-type">{cert.type}</span>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <div className="cert-footer">
                    <span className="cert-score">Score: <strong>{cert.score}</strong></span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
