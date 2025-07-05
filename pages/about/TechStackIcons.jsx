import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaAws, FaReact, FaAngular } from 'react-icons/fa';
import { SiSpringboot, SiNextdotjs } from 'react-icons/si';

// Define your core tech stack icons
const techIcons = [
  { Icon: FaJava, name: 'Java' },
  { Icon: FaPython, name: 'Python' },
  { Icon: FaAws, name: 'AWS' },
  { Icon: FaReact, name: 'React' },
  { Icon: FaAngular, name: 'Angular' },
  { Icon: SiSpringboot, name: 'Spring Boot' },
  { Icon: SiNextdotjs, name: 'Next.js' },
];

const TechStackIcons = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    // Cycle through icons every few seconds
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % techIcons.length);
    }, 3000); // Change icon every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentIcon = techIcons[currentIconIndex];

  return (
    <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
      <motion.div
        key={currentIcon.name} // Key is important for Framer Motion to re-animate
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute text-3xl text-accent" // Icon styling
        title={currentIcon.name} // Tooltip on hover
      >
        <currentIcon.Icon />
      </motion.div>
    </div>
  );
};

export default TechStackIcons; 