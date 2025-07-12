import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine, // Import LinkedIn icon
  RiMailLine, // Import Mail icon for email
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manogna-cheekoti-103ab0157/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Manognacheekoti",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:manognacheekoti@gmail.com", // Mailto link for email
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
