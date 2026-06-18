export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10  bg-black/20 relative z-10  ">
      <div
        className="
          mx-auto
          max-w-6xl
          px-4
          py-14
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-5
            text-center
          "
        >
          {/* Logo */}
          <div
            className="
              font-mono
              text-xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            {"<"}MK /{">"}
          </div>

          {/* Tagline */}
          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-zinc-500
            "
          >
            Building products, solving problems,
            and continuously learning.
          </p>

          {/* Status */}
          <div
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-emerald-500/15

              bg-emerald-500/5

              px-3
              py-1.5

              text-xs
              text-emerald-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span>Currently Available</span>
          </div>

          {/* Divider */}
          <div
            className="
              mt-2
              h-px
              w-24
              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          {/* Copyright */}
          <p
            className="
              text-xs
              tracking-wide
              text-zinc-600
            "
          >
            © {new Date().getFullYear()} Mukesh Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}