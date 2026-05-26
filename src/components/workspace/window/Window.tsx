"use client";

import type {
  WindowProps,
} from "@/types/window";

const Window = ({
  app,
  zIndex,
  closeApp,
  hideApp,
  children,
}: WindowProps) => {

  return (
    <section
      className="
        absolute
        inset-0
        flex
        flex-col
        overflow-hidden
        bg-neutral-950
      "
      style={{
        zIndex,
      }}
    >

      {/* Header */}
      <header
        className="
          flex
          h-14
          items-center
          justify-between
          border-b
          border-white/10
          px-5
        "
      >

        {/* Left */}
        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          {/* Close */}
          <button
            onClick={() =>
              closeApp(app.id)
            }
            className="
              h-3
              w-3
              rounded-full
              bg-red-500
            "
          />

          {/* Hide */}
          <button
            onClick={() =>
              hideApp(app.id)
            }
            className="
              h-3
              w-3
              rounded-full
              bg-yellow-500
            "
          />

        </div>

        {/* Title */}
        <p
          className="
            text-sm
            capitalize
            text-white/70
          "
        >
          {app.id}
        </p>

        <div />
      </header>

      {/* Content */}
      <div
        className="
          flex-1
          overflow-y-auto
        "
      >
        {children}
      </div>

    </section>
  );
};

export default Window;
