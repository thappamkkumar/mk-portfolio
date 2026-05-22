import {
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import Container from "../ui/container";

const education = [
  {
    title:
      "Bachelor of Technology - Computer Science",

    institute:
      "Sri Sai College of Engineering & Technology (PTU)",

    year: "2018 – 2022",
  },

  {
    title: "PHP Web Development Training",

    institute:
      "4-Month Industrial Training Program",

    year: "2022",
  },
];

export default function About() {
  return (
    <section className="pb-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* Heading */}
            <div className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <div className="h-4 w-4 rounded-full border-2 border-red-500" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  About Me
                </h2>

                <p className="mt-1 text-gray-500">
                  A quick introduction
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="mt-10 flex flex-col items-start gap-10 lg:flex-row lg:items-end">
              
              {/* Text */}
              <div className="max-w-sm">
                <p className="leading-8 text-gray-500">
                  I'm a Full Stack Developer who enjoys
                  building scalable, user-focused web
                  applications.
                </p>

                <p className="mt-5 leading-8 text-gray-500">
                  My focus is on clean code,
                  performance and creating impactful
                  digital experiences.
                </p>

                {/* Button */}
                <button className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                  Know More About Me
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Image Area */}
              <div className="relative">
                
                {/* Background Shape */}
                <div className="absolute inset-0 rounded-full bg-red-100 blur-2xl" />

                {/* Profile */}
                <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm">
                  
                  {/* Replace with image later */}
                  <span className="text-sm text-gray-400">
                    Profile Image
                  </span>
                </div>

                {/* Small Curve Decoration */}
                <div className="absolute -left-10 top-1/2 hidden h-10 w-10 rounded-full border border-gray-300 lg:block" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            
            {/* Heading */}
            <div className="flex items-center gap-3">
              
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                <GraduationCap
                  size={18}
                  className="text-red-500"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Education & Training
                </h2>

                <p className="mt-1 text-gray-500">
                  Academic background
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative mt-12 border-l border-gray-200 pl-8">
              {education.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative ${
                    index !== education.length - 1
                      ? "pb-12"
                      : ""
                  }`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[38px] top-2 h-4 w-4 rounded-full border-4 border-white bg-red-500 shadow-sm" />

                  {/* Row */}
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    
                    {/* Left */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        {item.institute}
                      </p>
                    </div>

                    {/* Right */}
                    <span className="text-sm font-medium text-gray-500">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
