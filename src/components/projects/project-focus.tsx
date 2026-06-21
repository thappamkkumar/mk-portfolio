// project-focus.tsx

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ProjectFocus() {
  const searchParams = useSearchParams();

  const projectId =
    searchParams.get("project");

  useEffect(() => {
    if (!projectId) {
      return;
    }

    const element =
      document.getElementById(projectId);

    if (!element) {
      return;
    }

    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 0);
  }, [projectId]);

  return null;
}