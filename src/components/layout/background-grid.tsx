const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Small Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top Light */}
      <div
        className="
          absolute
          left-1/2
          top-[-300px]
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white/[0.03]
          blur-3xl
        "
      />
    </div>
  );
};

export default BackgroundGrid;
