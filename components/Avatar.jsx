import Image from "next/image"; // Keep using Next.js Image component

const Avatar = () => {
  return (
    <div
      className="hidden xl:flex h-full w-full"
      style={{
        // Removed explicit backgroundColor here to allow the parent's background to show through.
        // The overall site background (from index.jsx) will now be visible behind the avatar.
        position: "relative", // Essential for 'fill' prop of Next.js Image
        overflow: "hidden", // Prevents image content from spilling out
      }}
    >
      {/*
        Use the Next.js Image component with 'fill'.
        This is crucial for proper image optimization and handling of transparency.
      */}
      <Image
        src="/avatar.png" // Ensure this is a truly transparent PNG file
        alt="avatar"
        fill // Makes the image fill the parent div (which is sized by the motion.div in index.jsx)
        style={{
          objectFit: "cover", // Scales the image to cover the container while maintaining aspect ratio
          objectPosition: "left top", // Positions the image from the left top within the covered area
          // Removed backgroundColor here. Now, transparent pixels in avatar.png
          // will reveal the actual background from index.jsx.
          zIndex: 2, // Places the image above other potential elements if any
        }}
        className="w-full h-full"
        priority // Optimizes image loading for LCP
      />
    </div>
  );
};

export default Avatar;
