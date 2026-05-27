"use client";


import MobileDock from './navigation/MobileDock';

import WindowManager
  from "./window/WindowManager";

import type {
  WorkspaceProps,
} from "@/types/workspace";

const MobileWorkspace = ({
  openedApps,
  openApp,
  closeApp,
  hideApp,
  closeAllApps,
}: WorkspaceProps) => {

  return (
    <div
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* Workspace */}
      <main
        className="
          relative
          h-full
          overflow-hidden
        "
      >
				<div className="w-full h-full bg-red-900">hero</div>
        <WindowManager
          openedApps={openedApps}
          closeApp={closeApp}
          hideApp={hideApp}
        />

      </main>

      {/* Bottom Navigation */}
      <MobileDock
          openedApps={openedApps}
          openApp={openApp}
          closeAllApps={closeAllApps}
      />

      

    </div>
  );
};

export default MobileWorkspace;
