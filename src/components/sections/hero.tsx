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
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: Rocket,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Problem Solver",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-10 lg:pb-32 lg:pt-16">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT */}
          <div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-sm font-medium text-gray-600">
                Available for Full-time Opportunities
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8">
              <p className="text-2xl font-medium text-gray-700">
                Hi, I'm
              </p>

              <h1 className="mt-2 text-6xl font-black leading-none tracking-tight text-gray-900 lg:text-8xl">
                Mukesh
                <br />
                Kumar
              </h1>

              <div className="mt-6 inline-flex items-center">
                <span className="text-3xl font-bold text-red-500">
                  Full Stack Developer
                </span>

                <span className="ml-2 h-8 w-[2px] animate-pulse bg-red-500" />
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
                I build scalable, production-ready web
                applications with modern technologies
                and clean user experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              
              <button className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600">
                View My Work
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                Let's Connect
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label}>
                    <div className="flex items-center gap-2">
                      <Icon
                        size={18}
                        className="text-red-500"
                      />

                      <span className="text-2xl font-bold text-gray-900">
                        {item.value}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            
            {/* Background Blur */}
            <div className="absolute inset-0 rounded-full bg-red-100 blur-3xl" />

            {/* Main Card */}
            <div className="relative rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
              
              {/* Browser dots */}
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              {/* Code */}
              <div className="mt-8 space-y-4 font-mono text-sm leading-7 text-gray-600">
                <p>
                  <span className="text-blue-500">
                    const
                  </span>{" "}
                  developer = {"{"}
                </p>

                <p className="pl-4">
                  name:
                  <span className="text-green-600">
                    {" "}
                    "Mukesh Kumar"
                  </span>,
                </p>

                <p className="pl-4">
                  role:
                  <span className="text-green-600">
                    {" "}
                    "Full Stack Developer"
                  </span>,
                </p>

                <p className="pl-4">
                  passion:
                  <span className="text-green-600">
                    {" "}
                    "Building products"
                  </span>,
                </p>

                <p className="pl-4">
                  focus: [
                  <span className="text-green-600">
                    "Clean Code"
                  </span>
                  ,
                  <span className="text-green-600">
                    {" "}
                    "Performance"
                  </span>
                  ,
                  <span className="text-green-600">
                    {" "}
                    "Scalability"
                  </span>
                  ]
                </p>

                <p>{"}"}</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-10 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
                  <Rocket
                    size={18}
                    className="text-red-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Building digital products
                  </p>

                  <p className="text-xs text-gray-500">
                    that make impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
