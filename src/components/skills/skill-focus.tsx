"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SkillFocus() {
  const searchParams = useSearchParams();

  const skillId =
    searchParams.get("skill");

  useEffect(() => {
    if (!skillId) {
      return;
    }

    const element =
      document.getElementById(skillId);

    if (!element) {
      return;
    }

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }, [skillId]);

  return null;
}