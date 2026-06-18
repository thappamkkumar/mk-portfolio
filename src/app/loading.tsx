// app/loading.tsx

export default function Loading() {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div className="text-center">
        <h1
          className="
            text-5xl
            font-black
            tracking-[-0.08em]

            text-white/90

            md:text-7xl
          "
        >
          DEVELOPER
        </h1>

        <div
          className="
            mx-auto
            mt-6
            h-px
            w-32

            bg-linear-to-r
            from-transparent
            via-emerald-400
            to-transparent
          "
        />

        <p
          className="
            mt-4
            text-sm
            uppercase
            tracking-[0.3em]

            text-zinc-500
          "
        >
          Loading
        </p>
      </div>
    </div>
  );
}