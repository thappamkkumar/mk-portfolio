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
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
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
              aspect-[4/3]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              transition-all
              duration-300
              hover:border-emerald-400/20
            "
          >
            <Image
              src={image.src}
              alt={image.label}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 500px"
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
                inset-0
                bg-black/0
                transition-all
                duration-300
                group-hover:bg-black/20
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-gradient-to-t
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