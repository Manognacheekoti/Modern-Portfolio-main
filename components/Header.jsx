import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials"; // This import remains the same

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[120px]"> {/* Increased header height */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={550} // Increased width to accommodate the larger SVG content
              height={100}  // Increased height to accommodate the larger SVG content
              priority
            />
          </Link>

          {/* socials */}
          <Socials /> {/* This will now render the updated social icons */}
        </div>
      </div>
    </header>
  );
};

export default Header;
