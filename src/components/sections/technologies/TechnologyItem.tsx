import Image from "next/image";

import { Technology } from "@/types/technology";

interface TechnologyItemProps {
  technology: Technology;
}

export default function TechnologyItem({
  technology,
}: TechnologyItemProps) {
  return (
    <li
      className="
        group
        relative
        flex-shrink-0 
        transition-all
        duration-300 
      "
    >
       

      <div className="relative flex items-center gap-3 px-4  ">
        <div
          className="
            flex 
            items-center
            justify-center            
          "
        >
          <Image
            src={technology.logo}
            alt={technology.name}
            width={16}
            height={16}
            className="
              opacity-60
              grayscale
              transition-all
              duration-300
              group-hover:opacity-100
            "
          />
        </div>

        <span
          className="
            whitespace-nowrap
            text-sm
            font-medium
            tracking-wide
            text-zinc-400
            transition-colors
            duration-300
            group-hover:text-zinc-200
          "
        >
          {technology.name}
        </span>
      </div>
    </li>
  );
}
