import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { ABOUT_INFO } from "@/data/about";

export default function ProfileCard() {
  return (
    <aside
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/2
        p-6
        backdrop-blur-sm
      "
    >
      <div className="space-y-6">
        <div
          className="
            relative
            mx-auto
            aspect-square
            w-full
            max-w-md
            overflow-hidden
            rounded-2xl
          "
        >
          <Image
            fill
            priority
            src={ABOUT_INFO.image}
            alt={ABOUT_INFO.name}
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            {ABOUT_INFO.name}
          </h2>

          <p className="mt-1 text-zinc-400">
            {ABOUT_INFO.role}
          </p>
        </div>

        <div className="space-y-4 text-sm text-zinc-400">
          <div className="flex items-center gap-3">
            <MapPin size={16} />
            <span>{ABOUT_INFO.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>{ABOUT_INFO.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} />
            <span>{ABOUT_INFO.phone}</span>
          </div>
        </div>

        
      </div>
    </aside>
  );
}