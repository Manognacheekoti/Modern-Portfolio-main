import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Import useState
import Circles from "../../components/Circles";
import Project3DIcon from "./Project3DIcon"; // Corrected import path for Project3DIcon

import { fadeIn } from "../../variants";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Dynamically import Project3DIcon with SSR disabled
// This ensures three.js specific code runs only on the client
const Project3DIconDynamic = dynamic(() => import('./Project3DIcon'), { ssr: false });

// Data for Education
export const educationData = [
  {
    degree: "Master in Computer Science",
    university: "University of South Florida",
    
    description: "Focused on advanced topics in software engineering, data science, and artificial intelligence, gaining expertise in designing and implementing complex systems.",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Gitam University",
    
    description: "Developed a strong foundation in computer science fundamentals, including algorithms, data structures, and programming paradigms, with practical experience in various software development projects.",
  },
];

// Data for Academic Projects
export const academicProjects = [
  {
    name: "Bull Runner",
    technologies: ["GPS", "Mobile Development", "Real-time Tracking", "Java", "Android"],
    description: "Developed a live bus tracking application for university transportation using GPS technology. The system provides real-time location updates of buses, allowing students to efficiently plan their commute and reduce waiting times. It features a user-friendly interface for easy navigation and accurate bus predictions.",
    ai_ml_relevance: "Could integrate predictive analytics for bus arrival times based on traffic patterns (future enhancement).",
    icon_hint: "bus", // Hint for a 3D icon
  },
  {
    name: "AI-Powered Health Monitoring System",
    technologies: ["Python", "TensorFlow", "Keras", "IoT", "Wearable Sensors", "Data Visualization", "Machine Learning", "Deep Learning"],
    description: "Designed and implemented an AI-powered health monitoring system that collects data from wearable sensors (e.g., heart rate, activity levels). The system uses machine learning models to analyze health metrics, detect anomalies, and predict potential health risks, providing personalized insights and early warnings to users. This project aims to promote proactive health management and prevent chronic diseases.",
    real_world_problem: "Addresses the challenge of early disease detection and personalized health management by leveraging continuous data monitoring and AI-driven insights.",
    icon_hint: "heartbeat", // Hint for a 3D icon
  },
  {
    name: "Decentralized Finance (DeFi) Lending Platform",
    technologies: ["Solidity", "Ethereum", "React.js", "Web3.js", "Smart Contracts", "Blockchain", "Decentralized Applications (DApps)"],
    description: "Developed a decentralized lending platform on the Ethereum blockchain, enabling users to lend and borrow cryptocurrencies without intermediaries. The platform utilizes smart contracts to automate loan agreements, collateral management, and interest calculations, ensuring transparency and security. This project aims to provide accessible and trustless financial services, reducing reliance on traditional banking systems.",
    real_world_problem: "Solves the problem of limited access to credit and high transaction fees in traditional finance by offering a transparent, secure, and permissionless lending environment.",
    icon_hint: "money", // Hint for a 3D icon
  },
];

const Work = () => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null); // State to track hovered project

  // Ensure three.js is loaded when the component mounts
  // This useEffect is still needed to make THREE globally available for the Project3DIcon's internal logic
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto h-full"> {/* Ensure container takes full height */}
        <div className="flex flex-col xl:flex-row gap-x-8 h-full"> {/* Make this row take full height */}
          {/* Left Half: Education Section */}
          <div className="text-center flex xl:w-1/2 flex-col lg:text-left mb-4 xl:mb-0 xl:pr-4"> {/* Adjusted width and added padding */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My <span className="text-accent">Education</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              A summary of my academic background and key projects that showcase my skills and interests in software engineering, AI, ML, and real-world problem-solving.
            </motion.p>

            {/* Education Details */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-4 mt-8"
            >
              <h3 className="h3 text-accent text-center xl:text-left">Degrees</h3>
              {educationData.map((edu, eduIndex) => (
                <div
                  key={eduIndex}
                  className="bg-secondary/20 p-6 rounded-lg transition-all duration-300
                             hover:bg-accent/20 hover:scale-105 cursor-pointer" // Added hover effects
                >
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-lg text-white/80 mb-1">{edu.university}</p>
                  <p className="text-sm text-white/60 mb-2">{edu.duration}</p>
                  <p className="text-sm text-white/70">{edu.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Half: Academic Projects Section */}
          <div className="flex flex-col xl:w-1/2 xl:pl-4"> {/* Adjusted width and added padding */}
            <motion.h3
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-accent text-center xl:text-left xl:mt-12"
            >
              Academic <span className="text-accent">Projects</span>.
            </motion.h3>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Explore some of my academic projects, demonstrating practical application of technologies and problem-solving skills.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col gap-y-4 mt-8 overflow-y-auto max-h-[calc(100vh-250px)]" // Added max-height and overflow for scrollability
            >
              {academicProjects.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="bg-secondary/20 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-4
                             transition-all duration-300 hover:scale-105 hover:bg-accent/20 cursor-pointer" // Added hover effects
                  onMouseEnter={() => setHoveredProjectIndex(projectIndex)} // Set hovered index
                  onMouseLeave={() => setHoveredProjectIndex(null)} // Clear hovered index
                >
                  {/* 3D Icon Component is used here */}
                  {/* Pass isHovered prop based on current hover state */}
                  <Project3DIconDynamic
                    iconHint={project.icon_hint}
                    isHovered={hoveredProjectIndex === projectIndex}
                  />

                  {/* Project Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold text-white mb-1">{project.name}</h4>
                    <p className="text-lg text-white/80 mb-1">
                      <span className="font-semibold">Technologies:</span> {project.technologies.join(", ")}
                    </p>
                    <p className="text-sm text-white/70 mb-2">{project.description}</p>
                    {project.ai_ml_relevance && (
                      <p className="text-xs text-white/50 italic">
                        <span className="font-semibold">AI/ML Relevance:</span> {project.ai_ml_relevance}
                      </p>
                    )}
                    {project.real_world_problem && (
                      <p className="text-xs text-white/50 italic">
                        <span className="font-semibold">Real-world Problem:</span> {project.real_world_problem}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
