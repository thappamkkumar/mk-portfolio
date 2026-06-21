import {
  Mail,
  MapPin,
  Phone,
  Briefcase,
} from "lucide-react";

import type { AboutInfo } from "@/types/about";

interface AboutInfoCardProps {
  aboutInfo: AboutInfo;
  className?: string;
}

export default function AboutInfoCard({
  aboutInfo,
  className,
}: AboutInfoCardProps) {
  const items = [
    {
      icon: MapPin,
      label: "Location",
      value: aboutInfo.location,
    },
    {
      icon: Mail,
      label: "Email",
      value: aboutInfo.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: aboutInfo.phone,
    },
    {
      icon: Briefcase,
      label: "Availability",
      value: aboutInfo.availability,
    },
  ];

  return (
    <section
      className={`
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/2
        ${className}
      `}
    >
      <div
        className="
          border-b
          border-white/10
          px-6
          py-5
        "
      >
        <h2
          className="
            font-medium
          "
        >
          Quick Information
        </h2>
      </div>

      <div>
        {items.map(
          (
            {
              icon: Icon,
              label,
              value,
            },
            index
          ) => (
            <div
              key={label}
              className={`
                flex
                gap-4
                px-6
                py-5
                transition-colors
                duration-300
                hover:bg-white/2

                ${
                  index !==
                  items.length - 1
                    ? "border-b border-white/10"
                    : ""
                }
              `}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-emerald-400/5
                "
              >
                <Icon
                  size={18}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-white/40
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-white/80
                  "
                >
                  {value}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}