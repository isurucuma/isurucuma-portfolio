"use client";

import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useIsMobile } from "@/hooks/use-mobile";

const personalInfo = {
  name: "Isuru Cumaranathunga",
  title: "Software Engineer",
  location: "Colombo, Sri Lanka",
  phone: "+94 77 379 3214",
  email: "isurucuma@gmail.com",
  github: "https://github.com/isurucuma",
  medium: "https://medium.com/@isurucuma",
  linkedin: "https://linkedin.com/in/isurucuma",
};

const summary = `
A software engineer with 2+ years of experience developing cloud-native applications in Kubernetes. Skilled at
thriving in dynamic, challenging environments as part of Agile and Scrum teams. Passionate about sharing
knowledge and fostering innovation. Author of an engaging Medium blog, where I share insights and lessons from
my industry-level experiences in computer science and software engineering.
`;

const experience = [
  {
    title: "Software Engineer",
    company: "DMSL (Pickme)",
    dates: "September 2024 - Present",
    responsibilities: [
      "Revamped the legacy PickMe Golang microservice platform to support multi-tenancy, enhancing scalability and maintainability.",
      "Engineered a token exchange mechanism to ensure seamless user migration during the transition, enabling older mobile app users to authenticate without disruption.",
      "Researched, integrated, and deployed the APISIX API Gateway into the platform, ensuring compatibility with existing system. Developed custom extensions in Golang and Lua to enhance gateway functionality, leading to significant cost savings and improved system security.",
      "Redesigned the authentication service by integrating it with Keycloak for streamlined and secure identity management.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Axiata Digital Labs",
    dates: "August 2023 - September 2024",
    responsibilities: [
      "Designed and developed a distributed API Gateway with a Java-based control plane and a C++ data plane, delivering scalable and efficient API management.",
      "Enhanced security by implementing fine-grained access controls with Keycloak as the identity provider and OpenFGA for authorization, based on Google's Zanzibar model.",
      "Built a mission-control service using Prometheus, Jaeger, and Kubernetes API Server to collect real-time data on CPU, memory, and network usage, as well as microservice health, leveraging WebSockets for live monitoring and improved operational insights.",
      "Conducted client demonstrations to showcase product features, driving adoption and customer satisfaction.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Axiata Digital Labs",
    dates: "February 2023 - August 2023",
    responsibilities: [
      "Gained hands-on experience in writing clean, maintainable code by adhering to SOLID principles.",
      "Developed microservices using Java and C++ in a Linux environment, ensuring robust and scalable solutions",
      "Wrote integration tests with Python, leveraging Pytest and Testcontainers to ensure reliability and seamless deployment",
      "Worked with OpenTelemetry and Prometheus to add metrics to services, enhancing observability and performance monitoring",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. (Hons.) in Engineering (Computer Engineering)",
    university: "University of Jaffna",
    dates: "2018 - 2023",
    gpa: "3.40 / 4.00 (Second class upper division)",
  },
];

const personalProjects = [
  {
    title: "Go-Hit Load tester (GoLang)",
    description: [
      "Developed a lightweight CLI tool for load testing web servers, supporting configurable concurrency levels using Fan-In/Fan-Out patterns.",
      "Implemented features for sending HTTP GET requests, setting request-per-second (RPS) thresholds, and applying timeouts with context management for enhanced reliability.",
    ],
    githubLink: "https://github.com/isurucuma/go-hit",
  },
  {
    title: "Job Application Management System (Java)",
    description: [
      "Developed a robust backend using Spring Boot and MongoDB, ensuring scalability and efficient data management.",
      "Utilized AWS S3 buckets for secure storage of application documents, enabling seamless file handling and retrieval.",
      "Integrated Keycloak for authentication and single sign-on (SSO) with Google accounts, enhancing user convenience and security.",
      "Automated CI pipelines using GitHub Actions for efficient development workflows.",
    ],
    githubLink: "https://github.com/career-opz/portal-backend",
  },
];

const skills = {
  programmingLanguages: ["Java", "GoLang", "Python", "JavaScript"],
  frameworksAndTools: ["SpringBoot", "Kafka", "Keycloak"],
  storages: [
    "Relational Databases (MySQL, PostgreSQL)",
    "Non Relational (MongoDB)",
    "Redis",
  ],
  deployment: [
    "Docker",
    "Kubernetes GKE",
    "CICD (Github Actions, Jenkins)",
    "Monitoring (Prometheus, Jaeger)",
  ],
  apiProtocols: ["REST", "GRPC"],
  softwareDevelopmentPractices: ["Agile"],
};

const certifications = [
  {
    title: "Google Cloud Core Infrastructure",
    authority: "Google Cloud",
    date: "April 2024",
  },
  {
    title: "AWS Cloud Technical Essentials",
    authority: "AWS",
    date: "February 2024",
  },
  {
    title: "Microsoft Certified Azure Fundamentals (AZ900)",
    authority: "Microsoft",
    date: "September 2022",
  },
];

const interests =
  "Actively writing technical articles about concurrency, network protocols, design principles on Medium";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto p-4 bg-background text-foreground">
      {/* Personal Information */}
      <header
        className={`py-8 border-b border-border ${
          isMobile ? "text-center" : "text-left"
        }`}
      >
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <h2 className="text-xl">{personalInfo.title}</h2>

        {/* Contact Details */}
        <div
          className={`flex flex-col ${
            isMobile ? "items-center" : "items-start md:flex-col"
          } `}
        >
          <div
            className={`flex items-center mt-2 ${
              isMobile ? "justify-center" : ""
            }`}
          >
            <FaMapMarkerAlt className="mr-2 social-icon" />
            <span>{personalInfo.location}</span>
            {!isMobile && (
              <div className="flex flex-col ml-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <FaGithub size={16} className="mr-1 social-icon" />
                  <span>github.com/isurucuma</span>
                </a>
              </div>
            )}
          </div>
          <div
            className={`flex items-center mt-2 ${
              isMobile ? "justify-center" : ""
            }`}
          >
            <FaPhone className="mr-2 social-icon" />
            <span>{personalInfo.phone}</span>
            {!isMobile && (
              <div className="flex flex-col ml-4">
                <a
                  href={personalInfo.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <FaMedium size={16} className="mr-1 social-icon" />
                  <span>medium.com/@isurucuma</span>
                </a>
              </div>
            )}
          </div>
          <div
            className={`flex items-center mt-2 ${
              isMobile ? "justify-center" : ""
            }`}
          >
            <FaEnvelope className="mr-2 social-icon" />
            <span>{personalInfo.email}</span>
            {!isMobile && (
              <div className="flex flex-col ml-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline flex items-center"
                >
                  <FaLinkedin size={16} className="mr-1 social-icon" />
                  <span>linkedin.com/in/isurucuma</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Social Media Links */}
        {isMobile && (
          <div className={`flex space-x-4 mt-4 justify-center`}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="social-icon" />
            </a>
            <a
              href={personalInfo.medium}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={24} className="social-icon" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="social-icon" />
            </a>
          </div>
        )}
      </header>

      {/* Summary Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>{summary}</p>
      </section>

      {/* Experience Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-muted-foreground">
              {exp.company} - {exp.dates}
            </p>
            <ul className="list-disc ml-6 mt-2">
              {exp.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-muted-foreground">
              {edu.university} - {edu.dates}
            </p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

      {/* Personal Projects Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>
        {personalProjects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
            <ul className="list-disc ml-6 mt-2">
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div>
          <h3 className="font-semibold">Programming Languages</h3>
          <p className="text-muted-foreground">
            {skills.programmingLanguages.join(", ")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mt-2">Frameworks and tools</h3>
          <p className="text-muted-foreground">
            {skills.frameworksAndTools.join(", ")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mt-2">Storages</h3>
          <p className="text-muted-foreground">{skills.storages.join(", ")}</p>
        </div>
        <div>
          <h3 className="font-semibold mt-2">Deployment</h3>
          <p className="text-muted-foreground">
            {skills.deployment.join(", ")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mt-2">API Protocols</h3>
          <p className="text-muted-foreground">
            {skills.apiProtocols.join(", ")}
          </p>
        </div>
        <div>
          <h3 className="font-semibold mt-2">Software Development Practices</h3>
          <p className="text-muted-foreground">
            {skills.softwareDevelopmentPractices.join(", ")}
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-6 border-b border-border">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-muted-foreground">
              {cert.authority} - {cert.date}
            </p>
          </div>
        ))}
      </section>

      {/* Interests Section */}
      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <p>
          {interests}{" "}
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Medium
          </a>
        </p>
      </section>
    </div>
  );
}
