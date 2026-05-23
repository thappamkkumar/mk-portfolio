import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-md
        border
        border-white/10
        bg-white/[0.03]
        text-xl
        font-bold
        tracking-tight
        text-white
      "
      >
        MK
      </div>

      <div className="hidden sm:block leading-tight">
        <h2 className="text-sm font-medium text-white">
          Mukesh Kumar
        </h2>

        <p className="text-xs text-zinc-500">
          Full Stack Developer
        </p>
      </div>
    </Link>
  );
}
