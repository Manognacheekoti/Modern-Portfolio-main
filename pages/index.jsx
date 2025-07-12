import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
            style={{ fontSize: '4rem', lineHeight: '1.2' }} // Increased font size for prominence
          >
            <span className="text-white">Software</span>{" "} {/* First part in white */}
            <span className="text-accent">Engineer</span> {/* Second part in accent color */}
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I am a passionate Software Engineer with 4 years of experience in
            developing robust and scalable web applications. My interests lie in
            full-stack development, cloud technologies, and creating intuitive
            user experiences. I enjoy solving complex problems and continuously
            learning new technologies to build innovative solutions.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image and background pattern */}
      {/* Changed width to w-full and removed right-0 to span entire width */}
      <div className="w-full h-full absolute bottom-0">
        {/* bg img */}
        <div
          role="img"
          // Applied bg-explosion to cover the full width
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-center xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          // Adjusted avatar positioning for full-width background
          // Moved from -bottom-32 to -bottom-20, and lg:bottom-0 to lg:bottom-10
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-20 lg:bottom-10 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
