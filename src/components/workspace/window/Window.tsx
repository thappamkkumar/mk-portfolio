"use client";

import {
  Minus,
  X,
} from "lucide-react";

import type {
  WindowProps,
} from "@/types/window";

const actionButtonClass = `
  flex
  h-8
  w-8
  items-center
  justify-center
  rounded-full
  transition-colors
`;

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
        bg-black
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
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          px-5
        "
      >

        {/* Title */}
        <p
          className="
           capitalize
            text-white/70
          "
        >
         <span className="font-bold  text-md		 " >Mukesh</span> /  
         <span className=" text-sm " > {app.id} </span>
        </p>

        {/* Actions */}
        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          {/* Hide */}
          <button
            type="button"
            onClick={() =>
              hideApp(app.id)
            }
            className={`
              ${actionButtonClass}
              bg-white/5
              hover:bg-white/10
            `}
          >
            <Minus
              size={16}
              className="
                text-white/70
              "
            />
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={() =>
              closeApp(app.id)
            }
            className={`
              ${actionButtonClass}
              bg-red-800 
              text-white
              hover:bg-red-500/25
            `}
          >
            <X
              size={16} 
            />
          </button>

        </div>

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
