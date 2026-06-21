"use client";

import {
  useSearchParams,
} from "next/navigation";

import MainHeader from "./main-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  const searchParams =
    useSearchParams();

  const isSearchNavigation =   
  searchParams.has("skill") || 
  searchParams.has("project") ||   
  searchParams.has("experience");

  return isSearchNavigation ? (
    <SecondaryHeader />
  ) : (
    <MainHeader />
  );
}