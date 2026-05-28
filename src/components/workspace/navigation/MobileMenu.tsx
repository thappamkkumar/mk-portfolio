"use client";

import { APPS }
  from "@/constants/apps";

import { isAppOpen }
  from "@/lib/isAppOpen";

import type {
  MobileMenuProps,
} from "@/types/navigation";

const MobileMenu = ({
  openedApps,
  handleOpenApp,
}: MobileMenuProps) => {

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
        p-5
      "
    >

      {APPS.map((app) => {
        const active = isAppOpen(
          openedApps,
          app.id
        );

        return (
          <button
            key={app.id}
            type="button"
            onClick={() =>
              handleOpenApp(app.id)
            }
            className="
              relative
              flex
              h-24
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/5
              transition-all
              duration-200
              hover:bg-white/10
            "
          >

            {/* Active Indicator */}
            {active && (
              <span
                className="
                  absolute
                  right-3
                  top-3
                  h-2
                  w-2
                  rounded-full
                  bg-green-500
                "
              />
            )}

            {/* Icon */}
            <div
              className="
                mb-2
                h-10
                w-10
                rounded-2xl
                bg-white/10
              "
            />

            {/* Label */}
            <span
              className="
                text-sm
                text-white/80
              "
            >
              {app.label}
            </span>

          </button>
        );
      })}

    </div>
  );
};

export default MobileMenu;
