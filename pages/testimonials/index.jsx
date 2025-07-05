import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useEffect, useState } from "react"; // Import useState and useEffect
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
// import dynamic from 'next/dynamic'; // No longer needed as QRCode is removed

// Dynamically import QRCode component with SSR disabled
// Explicitly access the .default export for qrcode.react
// const QRCode = dynamic(() => import('qrcode.react').then(mod => mod.default), { ssr: false }); // No longer needed

const Testimonials = () => {
  const [viewCount, setViewCount] = useState(0);
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null); // Keep userId state for Firebase logic, but not display
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // New state for scroll progress
  // const [pageUrl, setPageUrl] = useState(''); // No longer needed as QR code is removed

  useEffect(() => {
    // Initialize Firebase
    try {
      const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const firebaseAuth = getAuth(app);

      setDb(firestore);
      setAuth(firebaseAuth);

      // Listen for auth state changes
      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          // Sign in anonymously if no user is authenticated
          try {
            if (typeof __initial_auth_token !== 'undefined') {
              await signInWithCustomToken(firebaseAuth, __initial_auth_token);
            } else {
              await signInAnonymously(firebaseAuth);
            }
            setUserId(firebaseAuth.currentUser?.uid || crypto.randomUUID());
          } catch (error) {
            console.error("Firebase anonymous sign-in failed:", error);
            setUserId(crypto.randomUUID()); // Fallback to a random ID if sign-in fails
          }
        }
        setIsAuthReady(true);
      });

      return () => unsubscribe(); // Cleanup auth listener
    } catch (error) {
      console.error("Firebase initialization failed:", error);
      setIsAuthReady(true); // Ensure auth ready is set even on error to avoid blocking
      setUserId(crypto.randomUUID()); // Fallback to a random ID
    }
  }, []);

  useEffect(() => {
    if (db && isAuthReady) {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const docRef = doc(db, `artifacts/${appId}/public/data/pageViews`, 'testimonialsPage');

      // Set up a real-time listener for the view count
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const currentCount = docSnap.data().count;
          setViewCount(currentCount);
        } else {
          // If document doesn't exist, initialize it to 0
          setViewCount(0);
        }
      }, (error) => {
        console.error("Error listening to view count:", error);
      });

      // Increment view count on page load
      const incrementViewCount = async () => {
        try {
          const docSnap = await getDoc(docRef);
          let newCount = 1;
          if (docSnap.exists()) {
            newCount = docSnap.data().count + 1;
          }
          await setDoc(docRef, { count: newCount }, { merge: true });
        } catch (error) {
          console.error("Error incrementing view count:", error);
        }
      };

      incrementViewCount(); // Call to increment on mount

      return () => unsubscribe(); // Cleanup snapshot listener
    }
  }, [db, isAuthReady]); // Depend on db and isAuthReady

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
          className="h2 mb-8 xl:mb-16"
        >
          My Approach to <span className="text-accent">Technical Excellence.</span>
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
