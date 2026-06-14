import Image from "next/image";

import { ExperienceImage } from "@/types/experience";

interface ExperienceGalleryProps {
  images?: ExperienceImage[];
}

export default function ExperienceGallery({
  images,
}: ExperienceGalleryProps) {

  if (!images?.length) {
    return null;
  }
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.slice(0, 4).map((image) => (
        <div
          key={image.src}
          className="
            group
            relative
            aspect-4/3
            overflow-hidden
            rounded-xl
            border
            border-white/10
          "
        >
          <Image
            src={image.src}
            alt={image.label}
            priority
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
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
              bg-linear-to-t
              from-black/90
              to-transparent
              p-3
            "
          >
            <span className="text-xs">
              {image.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}