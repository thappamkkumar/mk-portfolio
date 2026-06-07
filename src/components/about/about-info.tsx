import {
  Mail,
  MapPin,
  Phone,
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
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-6
        h-auto
        ${className}
      `}
    >
      <h2 className="mb-6 text-xl font-semibold">
        Quick Information
      </h2>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <MapPin
            size={18}
            className="text-emerald-400"
          />

          <span>{aboutInfo.location}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail
            size={18}
            className="text-emerald-400"
          />

          <span>{aboutInfo.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone
            size={18}
            className="text-emerald-400"
          />

          <span>{aboutInfo.phone}</span>
        </div>
      </div>
    </div>
  );
}