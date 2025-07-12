import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react"; // Import useState and useEffect
// import dynamic from 'next/dynamic'; // No longer needed as QRCode is removed

// Dynamically import QRCode component with SSR disabled
// Explicitly access the .default export for qrcode.react
// const QRCode = dynamic(() => import('qrcode.react').then(mod => mod.default), { ssr: false }); // No longer needed

const Testimonials = () => {
  const [viewCount, setViewCount] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // New state for scroll progress
  // const [pageUrl, setPageUrl] = useState(''); // No longer needed as QR code is removed

  useEffect(() => {
    // Simple localStorage-based page view counter
    const incrementPageViews = () => {
      try {
        const currentViews = localStorage.getItem('testimonialsPageViews') || '0';
        const newViews = parseInt(currentViews) + 1;
        localStorage.setItem('testimonialsPageViews', newViews.toString());
        setViewCount(newViews);
      } catch (error) {
        console.error("Error updating page views:", error);
        // Fallback to a random number if localStorage fails
        setViewCount(Math.floor(Math.random() * 1000) + 100);
      }
    };

    // Get current view count
    try {
      const currentViews = localStorage.getItem('testimonialsPageViews') || '0';
      setViewCount(parseInt(currentViews));
    } catch (error) {
      console.error("Error getting page views:", error);
      setViewCount(0);
    }

    // Increment on page load
    incrementPageViews();
   
    // Add a small delay to ensure the increment happens after the initial render
    const timer = setTimeout(() => {
      incrementPageViews();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Effect for scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winHeightPx > 0) ? (scrollPx / winHeightPx) * 100 : 0; // Avoid division by zero
      setScrollProgress(scrolled);
    };

    // No longer setting pageUrl here as QR code is removed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl xl:text-4xl font-bold text-accent mb-8 xl:mb-16 max-w-4xl mx-auto px-4"
        >
          My Approach to Technical Excellence
        </motion.h2>

        {/* Display Viewer Count */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-8 text-white/80 flex flex-col items-center justify-center gap-y-4"
        >
          <p className="text-xl font-bold text-accent">
            Page Views: {viewCount.toLocaleString()}
          </p>

          {/* QR Code Section - Removed */}
        </motion.div>

        {/* Content for FAANG job seekers */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-y-8 xl:flex-row xl:gap-x-8 items-center"
        >
          {/* Section 1: Core Technical Strengths */}
          <div className="flex-1 bg-secondary/20 p-8 rounded-lg text-left max-w-[600px] mx-auto xl:mx-0">
            <h3 className="text-xl font-bold text-accent mb-4">Core Technical Strengths</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80 text-sm">
              <li>Strong foundation in **Data Structures & Algorithms** (DSA) for optimal problem-solving.</li>
              <li>Proficiency in **System Design** principles, including scalability, reliability, and distributed systems.</li>
              <li>Expertise in **Object-Oriented Programming (OOP)** and functional programming paradigms.</li>
              <li>Experience with **Cloud Computing Platforms** (AWS, GCP, Azure) and microservices architecture.</li>
              <li>Solid understanding of **Database Systems** (SQL/NoSQL) and efficient data modeling.</li>
              <li>Commitment to **Clean Code, Testing (Unit, Integration, E2E)**, and CI/CD practices.</li>
            </ul>
          </div>

          {/* Section 2: Problem-Solving & Impact */}
          <div className="flex-1 bg-secondary/20 p-8 rounded-lg text-left max-w-[600px] mx-auto xl:mx-0">
            <h3 className="text-xl font-bold text-accent mb-4">Problem-Solving & Real-World Impact</h3>
            <p className="text-white/80 mb-4 text-sm">
              My professional journey has been centered on tackling complex technical challenges and delivering high-impact solutions. I thrive in environments that demand:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 text-sm">
              <li>Breaking down ambiguous problems into manageable, actionable components.</li>
              <li>Designing efficient, scalable, and resilient architectures for high-throughput systems.</li>
              <li>Optimizing performance and resource utilization in large-scale applications.</li>
              <li>Collaborating effectively in cross-functional teams to drive product innovation.</li>
              <li>A continuous learning mindset to adapt to evolving technologies and best practices.</li>
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future Together?</h3>
          <p className="max-w-[700px] mx-auto text-white/70 mb-8">
            I am eager to contribute my skills and passion to innovative projects at leading technology companies. Let's connect to discuss how my expertise can drive your next big idea.
          </p>
          <a
            href="/contact" // Assuming you have a contact page
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Let's Connect
            </span>
            <span className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]">
              &#x27A4; {/* Right arrow character as a placeholder */}
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
