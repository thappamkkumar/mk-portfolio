// experience-focus.tsx

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ExperienceFocus() {
  const searchParams = useSearchParams();

  const experienceId =
    searchParams.get("experience");

  useEffect(() => {
    if (!experienceId) {
      return;
    }

    const element =
      document.getElementById(
        experienceId
      );

    if (!element) {
      return;
    }

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }, [experienceId]);

  return null;
}