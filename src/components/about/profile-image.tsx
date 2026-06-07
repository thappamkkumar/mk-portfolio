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
        relative
          
        min-h-[350px]
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]

        md:min-h-[450px]
      "
    >
      <Image
        fill
        priority
        src={image}
        alt={name}
        sizes="(max-width: 768px) 100vw, 50vw"  
        className="object-contain"
      />
    </div>
  );
}