import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaJava,
  FaPython,
  FaAngular,
  FaAws,
  FaFileDownload,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiSpringboot,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

export const experienceDetails = [
  {
    company: "Goldman Sachs",
    role: "Java Developer",
    duration: "March 2025 - Present",
    performanceSummary: "Delivered scalable REST APIs, improved issue resolution by 30%, and reduced deployment time by 40%.",
    description: [
      "Developed and maintained full-stack Java-based applications using Spring framework, delivering secure and scalable REST APIs to support core banking operations within a cloud-native architecture on AWS (EC2, Lambda, S3).",
      "Engineered backend services focused on resiliency, scalability, and performance, incorporating distributed tracing with AWS X-Ray and observability with Datadog, improving issue resolution time by 30%.",
      "Designed and implemented authentication and authorization mechanisms using Spring Security and OAuth2, ensuring robust security compliance with internal and industry standards.",
      "Participated in system design consultations, collaborated closely with product managers and cross-functional teams, and led architectural decisions to modernize legacy services into microservices-based solutions.",
      "Leveraged Terraform to provision and manage infrastructure as code, enabling reproducible cloud deployments and reducing environment setup time by 40%.",
      "Optimized data storage by architecting solutions using PostgreSQL for relational data and MongoDB/DynamoDB for high-throughput NoSQL use cases, achieving up to 25% performance gains in read-heavy services.",
      "Developed runbooks and documentation for CI/CD pipelines, API usage, and infrastructure practices, contributing to improved onboarding and knowledge transfer across the engineering team.",
      "Applied deep knowledge of data structures, algorithms, and system design to solve high-throughput transactional challenges within a distributed system.",
      "Managed concurrent priorities in a fast-paced agile environment, regularly delivering production-ready features within two-week sprint cycles, with strong ownership from development through deployment.",
      "Conducted performance testing and code reviews, and contributed to engineering best practices to improve code quality, maintainability, and team productivity.",
    ],
  },
  {
    company: "PrimeSoft",
    role: "Software Engineer",
    duration: "Jan 2023 - Feb 2025",
    performanceSummary: "Enhanced system observability by 30%, led modernization to event-driven architectures, and automated MQ deployments.",
    description: [
      "Engineered and supported enterprise-grade middleware solutions, collaborating with cross-functional teams to integrate IBM MQ and other messaging platforms (e.g., Kafka, RabbitMQ) into distributed applications that adhere to firm-wide messaging and security standards.",
      "Configured, deployed, and maintained secure, production-ready MQ environments, including queue managers and channels, with a strong focus on message durability, system uptime, and compliance with TLS-based encryption and authentication protocols (OAuth2, Kerberos).",
      "Designed automated monitoring and alerting solutions using Datadog, Prometheus, and Grafana, enhancing system observability, reducing manual intervention, and improving incident response times by over 30%.",
      "Analyzed and remediated messaging system vulnerabilities and operational risks, applying root cause analysis to production incidents and contributing to resilient design of messaging pipelines for cloud-native applications on AWS (EC2, S3, Lambda).",
      "Led modernization efforts to transition legacy synchronous services into decoupled, event-driven architectures leveraging Spring Boot, JMS, and secure integration with MQ-based messaging infrastructure, improving scalability and system performance.",
      "Developed and maintained infrastructure-as-code solutions using Terraform for repeatable deployment of MQ components, networking configurations, and supporting cloud resources, ensuring traceability and audit readiness.",
      "Created runbooks, system documentation, and onboarding materials to support production operations, facilitate knowledge sharing across engineering teams, and support compliance with internal technology governance policies.",
      "Collaborated with application owners and infrastructure teams to define reliable, secure messaging patterns, providing guidance on best practices for queue design, high availability, and failover strategies.",
      "Performed data and message flow analysis across PostgreSQL, MongoDB, and distributed messaging layers, identifying integration risks and aligning with enterprise risk management frameworks and compliance standards.",
      "Communicated technical guidance and messaging-related risk findings to stakeholders, supporting alignment with regulatory standards and promoting the adoption of secure, resilient enterprise messaging practices.",
    ],
  },
  {
    company: "TCS",
    role: "Software Engineer",
    duration: "Jun 2020 - July 2022",
    performanceSummary: "Implemented Spring MVC, developed interactive front-ends, and led scalable API design with TDD.",
    description: [
      "Implemented Spring MVC architecture to effectively separate presentation, business, and data access layers.",
      "Integrated components using Spring Dependency Injection (DI) for loose coupling and maintainability.",
      "Developed user interface screens and Java Beans using Spring Form classes and controllers.Connected UI with backend services using Spring’s model-view-controller flow.",
      "Used Hibernate and JPA for object-relational mapping and database platforms operations in the DAO layer.Wrote optimized queries to access and manipulate relational data effectively.",
      "Demonstrated a strong passion for technology and engineering, using exceptional analytical and decision-making skills to create innovative, commercially viable software solutions.",
      "Developed interactive front-end features using Redux, Vue, and TypeScript, enhancing application responsiveness and scalability while ensuring maintainable and modular code architecture.",
      "Built SOAP-based web services using WSDL and JAXB to support service-oriented architecture (SOA).Developed and consumed reusable web service clients for external and internal integrations.",
      "Led the design and development of scalable, event-driven applications using GraphQL APIs and reactive architecture, incorporating Test Driven Development (TDD) practices and building robust unit/integration test suites to ensure high-quality releases.",
      "Implemented Core Java features including Multithreading, Exception Handling, and Collections API.Enhanced performance and functionality of backend modules with robust Java code.",
      "Wrote complex SQL queries to analyze data flows across multiple databases for business insights.Provided weekly client updates with key accomplishments, delivery status, and progress reports.",
      "Worked extensively with UNIX-based systems, implementing Infrastructure as Code (e.g. AWS CDK, Terraform, CloudFormation) using Terraform to provision and manage cloud infrastructure, while ensuring secure and reliable networking across services.",
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [clickedExperience, setClickedExperience] = useState(null);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:justify-start xl:pt-[0px]"> {/* Removed xl:pt-[80px] and added xl:justify-start */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-8 xl:mt-0" // Added mt-8 for mobile, xl:mt-0 to override for desktop
          >
            My <span className="text-accent">Experience</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto xl:mx-0 mb-6 px-2 xl:px-0 text-white/70"
          >
            As a **Software Engineer** with a strong background in **scalable backend systems** and **cloud-native development**, I specialize in building robust, high-performance solutions that drive business impact. My expertise lies in **System Design, Distributed Systems, and optimizing performance** in complex environments.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Here's a detailed overview of my professional journey, highlighting key roles,
            responsibilities, and achievements across various organizations. **Click** on each
            experience to learn more about my contributions.
          </motion.p>

          {/* Experience Cards */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6"
          >
            {experienceDetails.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="relative group flex flex-col items-center justify-center h-auto min-h-[280px] p-6 rounded-lg cursor-pointer
                           bg-secondary/20 hover:bg-accent/20 transition-all duration-300"
                onClick={() => setClickedExperience(itemIndex)}
              >
                {/* Initial visible content */}
                <div className={`text-center transition-opacity duration-300 ${clickedExperience === itemIndex ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-full'}`}>
                  <h3 className="text-xl font-bold text-accent mb-1">{item.company}</h3>
                  <p className="text-lg text-white/80 mb-1">{item.role}</p>
                  <p className="text-sm text-white/60 mb-2">{item.duration}</p>
                  {/* Display performance summary */}
                  {item.performanceSummary && (
                    <p className="text-sm text-white/90 mt-2 font-semibold">
                      {item.performanceSummary}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Download Resume Tile */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col items-center justify-center mx-auto mt-8 mb-8 xl:mx-0"
          >
            <a
              href="/ManognaCheekoti_Resume.pdf"
              download="ManognaCheekoti_Resume.pdf"
              className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 cursor-pointer hover:text-white transition-colors duration-300"
              title="Download Resume"
            >
              <FaFileDownload className="text-4xl xl:text-6xl" />
            </a>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center max-w-[100px] mt-2">
              Download Resume
            </div>
          </motion.div>
        </div>
      </div>

      {/* Render the clicked experience as a fixed overlay (modal-like) */}
      <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/70
                       transition-opacity duration-300
                       ${clickedExperience !== null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
           onMouseLeave={() => setClickedExperience(null)}
           onClick={() => setClickedExperience(null)}
      >
        <div className="relative w-[95%] md:w-[80%] xl:w-[65%] max-w-[1000px] max-h-[90vh]
                        flex flex-col p-8 rounded-lg bg-secondary/95 text-white/90
                        overflow-y-auto transform scale-100 opacity-100 transition-all duration-300 ease-out"
             onClick={(e) => e.stopPropagation()}
             onMouseEnter={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setClickedExperience(null)}
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer hover:text-accent transition-colors duration-200"
          >
            &times;
          </button>
          {clickedExperience !== null && (
            <>
              <h3 className="text-2xl font-bold text-accent mb-3 text-center">{experienceDetails[clickedExperience].company} - {experienceDetails[clickedExperience].role}</h3>
              <p className="text-base text-white/70 mb-4 text-center">{experienceDetails[clickedExperience].duration}</p>
              <ul className="list-disc list-inside text-left text-base space-y-2 px-4">
                {experienceDetails[clickedExperience].description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;