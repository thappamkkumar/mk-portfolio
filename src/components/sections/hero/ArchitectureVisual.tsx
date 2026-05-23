import Image from "next/image";

export default function ArchitectureVisual() {
  return (
    <div
      className="
        relative
        hidden
        items-center
        justify-center
        overflow-hidden

        lg:flex
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-l
          from-lime-400/10
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-10
          h-40
          w-40
          rounded-full
          bg-lime-400/20
          blur-[100px]
        "
      />

      <Image
        src="/images/hero-bg.png"
        alt="System architecture illustration"
        width={420}
        height={640}
        priority
        className="
          relative
          z-10
          h-auto
          w-[280px]
          object-contain
          opacity-95
        "
      />
    </div>
  );
}
