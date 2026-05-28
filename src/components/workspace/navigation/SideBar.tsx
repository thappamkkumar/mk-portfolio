
"use client";

import {
  Home,
  LayoutGrid,
} from "lucide-react";

import { APPS }
  from "@/constants/apps";

import { isAppOpen }
  from "@/lib/isAppOpen";

import type {
  SidebarProps,
} from "@/types/sidebar";

const SideBar = ({
  openedApps,
  openApp,
  hideAllApps,
}: SidebarProps) => {

  return (
    <aside
      className="
        relative
        z-50
        flex
        h-screen
        w-24
        shrink-0
        flex-col
        border-r
        border-[#232323]
        bg-[#111111]
      "
    >

      {/* Top */}
      <div
        className="
          flex
          flex-1
          flex-col
          items-center
          gap-4
          overflow-y-auto
          py-6
        "
      >

        {/* Home */}
        <DockButton
          label="Home"
          active={false}
          onClick={hideAllApps}
        >

          <Home
            className="
              h-5
              w-5
            "
          />

        </DockButton>

        {/* Divider */}
        <div
          className="
            h-px
            w-10
            bg-[#262626]
          "
        />

        {/* Apps */}
        {APPS.map((app) => {
          const active = isAppOpen(
            openedApps,
            app.id
          );

          const Icon = app.icon;

          return (
            <DockButton
              key={app.id}
              label={app.label}
              active={active}
              onClick={() =>
                openApp(app.id)
              }
            >

              <Icon
                className="
                  h-5
                  w-5
                "
              />

            </DockButton>
          );
        })}

      </div>

      {/* Bottom */}
      <div
        className="
          border-t
          border-[#232323]
          p-4
        "
      >

        <DockButton
          label="Workspace"
          active={false}
        >

          <LayoutGrid
            className="
              h-5
              w-5
            "
          />

        </DockButton>

      </div>

    </aside>
  );
};

type DockButtonProps = {
  children: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const DockButton = ({
  children,
  label,
  active,
  onClick,
}: DockButtonProps) => {

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        relative
        flex
        h-16
        w-16
        shrink-0
        flex-col
        items-center
        justify-center
        gap-1
        rounded-xl
        border
        transition-all
        duration-200
        ${
          active
            ? `
              border-[#343434]
              bg-[#1d1d1d]
            `
            : `
              border-transparent
              bg-transparent
              hover:border-[#2a2a2a]
              hover:bg-[#181818]
            `
        }
      `}
    >

      {/* Active Indicator */}
      {active && (
        <span
          className="
            absolute
            -left-px
            h-8
            w-[3px]
            rounded-r-full
            bg-[#4ade80]
          "
        />
      )}

      {/* Icon */}
      <div
        className="
          text-[#d4d4d4]
          transition-all
          duration-200
          group-hover:text-white
        "
      >
        {children}
      </div>

      {/* Label */}
      <span
        className="
          text-[10px]
          font-medium
          leading-none
          text-[#8b8b8b]
          transition-colors
          duration-200
          group-hover:text-[#d4d4d4]
        "
      >
        {label}
      </span>

    </button>
  );
};

export default SideBar;

