// components/layout/top-navbar.tsx

import {
Home,
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
    title: "Home",
    icon: Home,
    link:'/',
    active: true,
  },
  {
    title: "About",
    icon: User, 
     link:'/about',
  },
  {
    title: "Skills",
    icon: Code2,
     link:'/skills',
  },
  {
    title: "Experience",
    icon: BriefcaseBusiness,
     link:'/experience',
  },
  {
    title: "Contact",
    icon: Mail,
     link:'/contact',
  },
];

const TopNavbar = () => {
  return (
    <header
      className=" 
        bg-zinc-900/50
        backdrop-blur-2xl
      "
    >
      <div
        className="
          relative
          flex
          h-full
          items-center
          justify-start
          gap-10
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
              flex
              pt-3 
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <a
                key={tab.title}
                href={tab.link}
                className={`
                  group
                  relative
                  flex 
                  items-center
                  gap-3
                 
                  px-4
                  py-3
                  text-sm
                  transition-all
                  duration-300
                overflow-hidden	

                  ${
                    tab.active
                      ? ` 
                      text-white 
                      `
                      : `
                        bg-transparent
                        text-zinc-500
                        hover:text-white
                         
                      `
                  }
                `}
              >
                <Icon className="h-4 w-4  " />

                <span>{tab.title}</span>
								
								<button	className="ml-10 transition-all duration-300 hover:bg-white/10 hover:text-white/50 p-[1px] rounded-full ">
		              <X
		                className="
		                 
		                  h-4
		                  w-4
		                   
		                  
		                "
		              />
		            </button>
		            {
                    tab.active &&
		            		<div className=" absolute inset-[-1]   z-[-1]  bg-gradient-to-b
												from-white/15 
            						to-zinc-900 
                        rounded-t-xl" />
		            }
              </a>
            );
          })}

          {/* Add Tab */}
          <button
            className="
              flex
              border-l
              border-white/10
              px-3
              items-center
              justify-center
              text-zinc-500
              transition-all
              duration-300
              hover:text-white
            "
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

         
      </div>
    </header>
  );
};

export default TopNavbar;
