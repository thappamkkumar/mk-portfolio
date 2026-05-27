"use client";

import { useState, useCallback } from "react";

import MobileMenu
  from "./MobileMenu";

import type {
  MobileDockProps,
} from "@/types/mobileDock";
 

const MobileDock = ({
  openedApps,
  openApp,
  closeAllApps,
}: MobileDockProps) => {

  const [showMenu, setShowMenu] =
    useState(false);
	
	
	const handleCloseAllApps =useCallback(()=>{
		setShowMenu(false);
		closeAllApps();
	}, []);
	
  return (
    <>
      {/* Menu */}
      {showMenu && (
				<div
					className="
						absolute
						inset-x-4
						bottom-24
						z-40
						max-h-[calc(100dvh-120px)]
						overflow-y-auto
						rounded-3xl
						border
						border-white/10
						bg-black/90
						backdrop-blur-xl
					"
				>

					<MobileMenu
						openedApps={openedApps}
						openApp={openApp}
					/>

				</div>
			)}	

      {/* Dock */}
      <footer
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-white/10
          bg-black/80
          p-5
          backdrop-blur-xl
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          {/* Active App Button */}
          <button
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
            "
          >
            A
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() =>
              setShowMenu((prev) => !prev)
            }
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
            "
          >
            Menu
          </button>

          {/* Home */}
          <button
            onClick={handleCloseAllApps}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
            "
          >
            Home
          </button>

        </div>

      </footer>
    </>
  );
};

export default MobileDock;
