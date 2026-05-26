// hooks/use-mobile.ts

"use client"

import { useEffect, useState } from "react"

const MOBILE_QUERY = "(max-width: 768px)"

export default function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches)
    }

    updateIsMobile()

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener(
        "change",
        updateIsMobile
      )
    } else {
      // Older Safari
      mediaQuery.addListener(updateIsMobile)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener(
          "change",
          updateIsMobile
        )
      } else {
        mediaQuery.removeListener(updateIsMobile)
      }
    }
  }, [])

  return isMobile
}
