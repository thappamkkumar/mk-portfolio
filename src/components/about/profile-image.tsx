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
          
        min-h-87
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/2

        md:min-h-112
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