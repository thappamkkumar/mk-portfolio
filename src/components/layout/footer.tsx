export default function Footer() {
  return (
    <footer
      className="
        relative
        z-10
        mt-16
        border-t
        border-white/10
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          px-4
          py-16
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <div
            className="
              font-mono
              text-xl
              font-semibold
              tracking-tight
            "
          >
            {"<"}MK /{">"}
          </div>

          <p
            className="
              mt-5
              max-w-md
              text-sm
              leading-relaxed
              text-white/60
            "
          >
            Building products, solving
            problems, and continuously
            learning.
          </p>

          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-emerald-400/15

              bg-emerald-400/5

              px-4
              py-2

              text-sm
              text-emerald-400
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
              "
            />

            Available for Opportunities
          </div>

          <div
            className="
              mt-8
              h-px
              w-24
              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          <p
            className="
              mt-8
              text-xs
              tracking-wide
              text-white/40
            "
          >
            © {new Date().getFullYear()} Mukesh Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}