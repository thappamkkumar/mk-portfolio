"use client";

import { useState, useCallback } from "react";

import useMobile from "@/hooks/useMobile";

import MobileWorkspace from "./MobileWorkspace";
import DesktopWorkspace from "./DesktopWorkspace";

import type {  AppId,  OpenedApp,} from "@/types/app";

import {  closeAppInStack} from "@/lib/workspace/closeApp";
import {   hideAppInStack} from "@/lib/workspace/hideApp";
import {  openAppInStack} from "@/lib/workspace/openApp"; 


const Workspace = () => {
  const [openedApps, setOpenedApps] =
    useState<OpenedApp[]>([]);

  const isMobile = useMobile(); 
  
  const openApp = useCallback(
    (id: AppId) => {
      setOpenedApps((prev) =>
        openAppInStack(prev, id)
      );
    },
    []
  );

  const closeApp = useCallback(
    (id: AppId) => {
      setOpenedApps((prev) =>
        closeAppInStack(prev, id)
      );
    },
    []
  );
  
	 const closeAllApps = useCallback(
		() => {
		  setOpenedApps([]);
		},
		[]
	);;



  const hideApp = useCallback(
    (id: AppId) => {
      setOpenedApps((prev) =>
        hideAppInStack(prev, id)
      );
    },
    []
  );

  if (isMobile === null) {
    return null;
  }

  return isMobile ? (
    <MobileWorkspace
      openedApps={openedApps}
      openApp={openApp}
      closeApp={closeApp}
      hideApp={hideApp}
      closeAllApps={closeAllApps}
    />
  ) : (
    <DesktopWorkspace
      openedApps={openedApps}
      openApp={openApp}
      closeApp={closeApp}
      hideApp={hideApp} 
    />
  );
};

export default Workspace;
