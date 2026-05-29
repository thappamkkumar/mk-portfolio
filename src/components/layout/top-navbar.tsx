// components/layout/top-navbar.tsx

import {
  BriefcaseBusiness,
  Code2,
  Mail,
  Plus,
  SunMedium,
  User,
  X,
} from "lucide-react";

const tabs = [
  {
    title: "About",
    icon: User,
    active: true,
  },
  {
    title: "Skills",
    icon: Code2,
  },
  {
    title: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contact",
    icon: Mail,
  },
];

const TopNavbar = () => {
  return (
    <header
      className="
        relative
        z-50
        h-20
        border-b
        border-white/10
        bg-black/40
        backdrop-blur-2xl
      "
    >
      <div
        className="
          relative
          flex
          h-full
          items-center
          justify-between
          px-6
        "
      >
        {/* Left Traffic Buttons */}
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />

          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />

          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Browser Tabs */}
        <div
          className="
            absolute
            left-36
            hidden
            h-full
            items-end
            md:flex
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.title}
                className={`
                  group
                  relative
                  flex
                  h-[62px]
                  min-w-[180px]
                  items-center
                  gap-3
                  rounded-t-2xl
                  border
                  border-b-0
                  border-white/10
                  px-6
                  text-sm
                  transition-all
                  duration-300

                  ${
                    tab.active
                      ? `
                        bg-gradient-to-b
                        from-white/[0.08]
                        to-transparent
                        text-white
                      `
                      : `
                        bg-white/[0.02]
                        text-zinc-500
                        hover:text-white
                      `
                  }
                `}
              >
                <Icon className="h-4 w-4" />

                <span>{tab.title}</span>

                <X
                  className="
                    ml-auto
                    h-4
                    w-4
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </button>
            );
          })}

          {/* Add Tab */}
          <button
            className="
              flex
              h-[62px]
              w-16
              items-center
              justify-center
              border-b
              border-white/10
              text-zinc-500
              transition-all
              duration-300
              hover:text-white
            "
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* Right Actions */}
        <div
          className="
            ml-auto
            flex
            items-center
            gap-5
          "
        >
          <button
            className="
              text-zinc-500
              transition-all
              duration-300
              hover:text-white
            "
          >
            <SunMedium className="h-5 w-5" />
          </button>

          {/* Profile */}
          <div className="relative">
            <div
              className="
                h-11
                w-11
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-zinc-900
              "
            >
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="
                absolute
                bottom-0
                right-0
                h-3
                w-3
                rounded-full
                border-2
                border-black
                bg-emerald-400
              "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
