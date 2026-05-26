"use client";

import { APPS }
  from "@/constants/apps";

import { isAppOpen }
  from "@/lib/isAppOpen";

import type { SidebarProps }
  from "@/types/sidebar";

const SideBar = ({
  openedApps,
  openApp,
}: SidebarProps) => {

  return (
    <aside
      className="
        flex
        w-20
        flex-col
        items-center
        gap-4
        border-r
        border-white/10
        bg-black/40
        py-6
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
            onClick={() =>
              openApp(app.id)
            }
            className="
              group
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              transition-all
              duration-200
            "
          >
            {/* Active Dot */}
            {active && (
              <span
                className="
                  absolute
                  -right-1
                  top-1/2
                  h-1.5
                  w-1.5
                  -translate-y-1/2
                  rounded-full
                  bg-green-500
                "
              />
            )}

            {/* Label */}
            <span
              className="
                text-xs
                text-white/80
                transition-opacity
                group-hover:text-white
              "
            >
              {app.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default SideBar;
