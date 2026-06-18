export default function SiteBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="
          fixed
          inset-0
          z-1
          
          bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-size-[32px_32px]
           
        "
      />

      {/* Watermark */}
      <div
        className="
          pointer-events-none

          fixed
          inset-0
          
          z-2
          flex
          items-center
          justify-center

          overflow-hidden
          select-none
        "
      >
        <span
          className="
            font-black

            text-[5rem]
            sm:text-[8rem]
            md:text-[12rem]
            lg:text-[16rem]

            -tracking-widest

            text-zinc-900/20
          "
        >
          DEVELOPER
        </span>
      </div>
    </>
  );
}