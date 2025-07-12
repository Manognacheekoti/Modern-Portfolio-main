import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials"; // This import remains the same

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[120px]"> {/* Increased header height */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 w-full">
          {/* GitHub-style profile header */}
          <div className="flex flex-col items-start">
            <span className="text-3xl xl:text-4xl font-bold flex items-center gap-2">
              Manogna Cheekoti <span className="animate-wave">👋</span>
            </span>
          </div>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
