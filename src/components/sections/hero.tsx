import Image from "next/image";

import {
  ArrowRight,
  Rocket,
  Code2,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";

import Container from "../ui/container";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: Rocket,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Problem Solver",
  },
];

export default function Hero() {
  return (
    <section
    	id="home"
      aria-label="Hero Section"
      className="relative   bg-[#ffffff] pb-20 pt-8 sm:pb-24 lg:pb-32 lg:pt-14"
    >
      
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]   ">
          
          {/* LEFT */}
          <div  >
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.05] bg-white/80 px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl">
              
              <div className="relative flex h-4 w-4 items-center justify-center">
  
			  {/* Animated Ring */}
			  <span
			    className="
				absolute inline-flex h-full w-full
				animate-ping rounded-full
				bg-green-500/20
			    "
			  />

			  {/* Solid Dot */}
			  <span
			    className="
				relative inline-flex h-2.5 w-2.5
				rounded-full bg-green-500
			    "
			  />
              </div>
              <span className="text-[12px] font-medium text-gray-600 sm:text-[13px]">
                Available for Full-time Opportunities
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8 sm:mt-10">
              
              <p className="text-[24px] font-medium tracking-[-0.03em] text-gray-700 sm:text-[30px]">
                Hi, I&apos;m
              </p>

              <h1
                className="
                  mt-2
                  max-w-[720px]

                  text-[48px]
                  font-extrabold
                  leading-[0.92]
                  tracking-[-0.07em]
                  text-[#111827]

                  sm:text-[72px]

                  lg:text-[88px]
                "
              >
                Mukesh Kumar
              </h1>

              {/* Role */}
              <div className="mt-5 flex items-center gap-2">
                
                <span
                  className="
                    text-[22px]
                    font-bold
                    tracking-[-0.04em]
                    text-red-600

                    sm:text-[30px]
                  "
                >
                  Full Stack Developer
                </span>
 
              </div>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-[580px]

                  text-[15px]
                  leading-[2]
                  text-gray-500

                  sm:text-[18px]
                "
              >
                I build scalable, production-ready web applications
                with modern technologies and clean code.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              
              {/* Primary */}
              <a
			href="#projects"
                className="
                  inline-flex items-center gap-2

                  rounded-md
                  bg-red-600

                  px-6 py-3.5

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_10px_30px_rgba(255,45,45,0.22)]

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-red-800
                "
              >
                View My Work

                <ArrowRight size={16} />
              </a>

              {/* Secondary */}
              <a
              href="#contact"
                className="
                  inline-flex items-center gap-2

                  rounded-md
                  border-3 border-black/[0.06]

                  bg-white

                  px-6 py-3.5

                  text-sm
                  font-semibold
                  text-zinc-950

                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]

                  backdrop-blur-xl

                  transition-all duration-300
                  hover:bg-gray-100
                "
              >
                Let&apos;s Connect
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    
                    <div className="flex items-center gap-2">
                      
                      <Icon
                        size={24}
                        className="text-red-600/50"
                      />

                      <span
                        className="
                          text-[24px]
                          font-bold
                          tracking-[-0.04em]
                          text-[#111827]

                          sm:text-[26px]
                        "
                      >
                        {item.value}
                      </span>
                    </div>

                    <p className="mt-2 text-[13px] text-gray-500 sm:text-[14px]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

		{/* RIGHT */}
<div  >
   
    
    {/* Main Column */}
    <div
    	className="
          relative  
          w-full 
          sm:max-w-[430px] 
 		mx-auto
        "
    >
      
      {/* Code Card */}
      <div
        className="
          relative  
          w-full
           
          rounded-2xl

          border border-black/[0.02]

          bg-gray-100/75

          shadow-[0_25px_70px_rgba(0,0,0,0.03)] 
 
        "
      >
        
        {/* Header */}
        <div
          className="
            flex items-center gap-2

            rounded-t-2xl

            border-b border-black/[0.02]

            bg-white

            px-6 py-5
          "
        >
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Body */}
        <div className="px-6 py-7 sm:px-8 sm:py-8 ">
          
          <div
            className="
              space-y-3

              font-mono

              text-sm
              leading-6

              text-zinc-600
 
              sm:leading-8
            "
          >
            <p>
              <span className="text-blue-500">
                const
              </span>{" "}
              developer = {"{"}
            </p>

            <p className="pl-4">
              <span className="text-blue-500">
                name
              </span>
              :
              <span className=" ">
                {" "} "Mukesh Kumar"
              </span>,
            </p>

            <p className="pl-4">
              <span className="text-blue-500">
                role
              </span>
              :
              <span className=" ">
                {" "} "Full Stack Developer"
              </span>,
            </p>

            <p className="pl-4">
              <span className="text-blue-500">
                passion
              </span>
              :
              <span className=" ">
                {" "} "Building products"
              </span>,
            </p>

            <p className="pl-4">
              <span className="text-blue-500">
                focus
              </span>
              : [
              <span className=" ">
                "Clean Code"
              </span>,
              <span className=" ">
                {" "} "Performance"
              </span>,
              <span className=" ">
                {" "} "Scalability"
              </span>
              ]
            </p>

            <p>{"}"}</p>
          </div>
        </div>
      </div>

      {/* Floating Card */}
      <div
        className="
          absolute z-20

          bottom-[-65px]
 
		w-full  
           
        "
      >
         	<div
		  className="
		    
			w-fit 
			mx-auto
		    rounded-2xl

		    border border-black/[0.04]

		    bg-white

		    p-5

		    shadow-[0_12px_35px_rgba(0,0,0,0.06)]
 
		      
		  "
		>
		  <div className="flex items-center gap-3">
		    
		    <div
		      className="
		        flex h-12 w-12 items-center justify-center

		        rounded-full

		        bg-red-50
		      "
		    >
		      <Rocket
		        size={20}
		        className="text-red-600"
		      />
		    </div>

		    <div>
		      <p className="text-[13px] font-semibold text-[#111827] sm:text-[14px]">
		        Building digital products
		      </p>

		      <p className="text-[12px] text-gray-500 sm:text-[13px]">
		        that make impact
		      </p>
		    </div>
		  </div>
        </div>
      </div>
    </div>
   
</div>

        </div>
      </Container>
    </section>
  );
}
