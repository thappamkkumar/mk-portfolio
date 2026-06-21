import Image from "next/image";

import { ProjectImage } from "@/types/project";

interface ProjectGalleryProps {
  images?: ProjectImage[];
}

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
   if (!images?.length) {
    return null;
  }
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/2
        p-4
        md:p-5
      "
    >
      <div className="grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={image.src}
            className="
              group
              relative
              aspect-4/3
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/3
              transition-all
              duration-300
              hover:border-emerald-400/20
            "
          >
            <Image
              src={image.src}
              alt={image.label}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              priority={index === 0}
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/0
                transition-all
                duration-300
                group-hover:bg-black/20
              "
            />

            {/* Label */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-linear-to-t
                from-black
                via-black/60
                to-transparent
                p-4
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
    </div>
  );
}