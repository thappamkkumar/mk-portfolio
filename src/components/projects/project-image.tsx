// components/projects/project-image.tsx

import Image from "next/image";

interface ProjectImageProps {
  image: string;
  title: string;
}

export default function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
      "
    >
      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        className="
          h-auto
          w-full
          transition-transform
          duration-500
          hover:scale-105
        "
      />
    </div>
  );
}