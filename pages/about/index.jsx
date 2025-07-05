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
  FaJava, // Added Java icon
  FaPython, // Added Python icon
  FaAngular, // Added Angular icon
  FaAws, // Added AWS icon
  FaFileDownload, // Added FaFileDownload icon
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiSpringboot, // Added Spring Boot icon
  SiTensorflow, // Added TensorFlow icon for ML
  SiPytorch, // Added PyTorch icon for AI
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data (This data is for the tabs, not directly for the counters below)
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

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Adjusted xl:pt to ensure content is below the header */}
      <div className="w-full h-full flex flex-col xl:flex-row items-center xl:pt-[180px]" style={{margin: 0, padding: 0}}> {/* Adjusted xl:pt for better spacing */}
        {/* Avatar on the left */}
        <div className="hidden xl:flex flex-1 h-full">
          <Avatar />
        </div>
        {/* text content on the right */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Unlocking Potential, <span className="text-accent">Engineering Tomorrow</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            My journey in software engineering is driven by a passion for innovation and a commitment to crafting robust, scalable, and user-centric solutions. I thrive on transforming complex ideas into tangible digital realities that make a real impact.
          </motion.p>

          {/* counters and skill logos */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> {/* Changed to 4 years */}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* AWS Certified Logo */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 flex flex-col items-center justify-center">
                <FaAws className="text-2xl xl:text-4xl text-accent mb-2" />
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center max-w-[100px]">
                  AWS Certified
                </div>
              </div>

              {/* Programming Languages/Frameworks */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 flex flex-col items-center justify-center">
                <div className="flex gap-x-2 mb-2">
                  <FaJava className="text-2xl xl:text-4xl text-accent" />
                  <FaPython className="text-2xl xl:text-4xl text-accent" />
                  <FaJs className="text-2xl xl:text-4xl text-accent" />
                </div>
                <div className="flex gap-x-2">
                  <FaAngular className="text-2xl xl:text-4xl text-accent" />
                  <SiSpringboot className="text-2xl xl:text-4xl text-accent" />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center max-w-[100px] mt-2">
                  Core Skills
                </div>
              </div>

              {/* ML/AI Skills */}
              <div className="relative flex-1 flex flex-col items-center justify-center">
                <div className="flex gap-x-2 mb-2">
                  <SiTensorflow className="text-2xl xl:text-4xl text-accent" />
                  <SiPytorch className="text-2xl xl:text-4xl text-accent" />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center max-w-[100px] mt-2">
                  ML/AI
                </div>
              </div>
            </div>
          </motion.div> {/* Corrected closing tag for this motion.div */}

          {/* Download Resume Tile - Moved to its own section, now after the counters */}
          <motion.div
            variants={fadeIn("right", 0.7)} // Adjusted delay to appear after skills
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col items-center justify-center mx-auto mt-8 mb-8 xl:mx-0" // Centered and added margin
          >
            <a
              href="/ManognaCheekoti_Resume.pdf" // Placeholder for your resume file
              download="ManognaCheekoti_Resume.pdf" // Suggested filename for download
              className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 cursor-pointer hover:text-white transition-colors duration-300"
              title="Download Resume"
            >
              <FaFileDownload className="text-4xl xl:text-6xl" /> {/* Download icon */}
            </a>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] text-center max-w-[100px] mt-2">
              Download Resume
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
