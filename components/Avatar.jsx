import Image from "next/image"; // Keep using Next.js Image component

const Avatar = () => {
  return (
    <div
      className="flex items-center justify-center w-[320px] h-[320px] rounded-full overflow-hidden bg-transparent"
      style={{ position: "relative" }}
    >
      <Image
        src="/avatar.png"
        alt="avatar"
        width={320}
        height={320}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 2 }}
        className="w-full h-full"
        priority
      />
    </div>
  );
};

export default Avatar;
