"use client";

import { useRef } from "react";

import { technologies } from "@/data/technologies";

import   TechnologyItem   from "./TechnologyItem";

export default function TechnologyGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!scrollRef.current) return;

    isDown = true;

    startX =
      event.pageX - scrollRef.current.offsetLeft;

    scrollLeft = scrollRef.current.scrollLeft;

    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown = false;

    if (!scrollRef.current) return;

    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown = false;

    if (!scrollRef.current) return;

    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDown || !scrollRef.current) return;

    event.preventDefault();

    const x =
      event.pageX - scrollRef.current.offsetLeft;

    const walk = (x - startX) * 1.2;

    scrollRef.current.scrollLeft =
      scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="
        scrollbar-hide
        relative
        overflow-x-auto
        overflow-y-hidden
        cursor-grab
        select-none

      "
    >
      <ul className="flex w-max items-center gap-3 pr-4 sm:gap-4">
        {technologies.map((technology) => (
          <TechnologyItem
            key={technology.id}
            technology={technology}
          />
        ))}
      </ul>
    </div>
  );
}
