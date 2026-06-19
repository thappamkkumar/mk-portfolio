import Image from "next/image";

interface ProfileImageProps {
  image: string;
  name: string;
}

export default function ProfileImage({
  image,
  name,
}: ProfileImageProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]

        min-h-[420px]
        md:min-h-[520px]
        backdrop-blur-sm
      "
    >
      <Image
        fill
        priority
        src={image}
        alt={name}
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="
          object-contain
          transition-transform
          duration-500
          group-hover:scale-[1.02]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-6
          bottom-6
          rounded-full
          border
          border-emerald-400/20
          bg-black/50
          px-4
          py-2
          backdrop-blur-sm
        "
      >
        <span
          className="
            text-sm
            text-emerald-400
          "
        >
          Full Stack Developer
        </span>
      </div>
    </div>
  );
}