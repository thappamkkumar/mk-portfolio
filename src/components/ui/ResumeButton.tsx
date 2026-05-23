import { ArrowDown } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume/Mukesh_Kumar_Resume.pdf"
      target="_blank"
      className="
      hidden md:flex
      items-center
      gap-2
      rounded-md
      border
      border-lime-300/30
      bg-lime-300/5
      px-5
      py-3
      text-sm
      font-medium
      text-white
      transition-all
      duration-300
      hover:border-lime-300
      hover:bg-lime-300
      hover:text-black
    "
    >
      View Resume

      <ArrowDown size={16} />
    </a>
  );
}
