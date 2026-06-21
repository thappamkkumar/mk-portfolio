"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "./main-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  const pathname = usePathname();

  const [isSearchNavigation, setIsSearchNavigation] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsSearchNavigation(window.location.hash !== "");
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, [pathname]);

  return isSearchNavigation ? (
    <SecondaryHeader />
  ) : (
    <MainHeader />
  );
}