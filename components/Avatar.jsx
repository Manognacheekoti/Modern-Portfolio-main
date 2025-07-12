import Image from "next/image"; // Keep using Next.js Image component

const Avatar = () => {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={600}
      height={600}
      priority
    />
  );
};

export default Avatar;
