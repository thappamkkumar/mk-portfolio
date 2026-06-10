import Image from "next/image";

import { ProjectImage } from "@/types/project";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.slice(0, 4).map((image) => (
        <div
          key={image.src}
          className="
            group
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
          "
        >
          <Image
            src={image.src}
            alt={image.label}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-gradient-to-t
              from-black/80
              to-transparent
              p-3
            "
          >
            <span
              className="
                text-xs
                font-medium
                text-white/90
              "
            >
              {image.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
