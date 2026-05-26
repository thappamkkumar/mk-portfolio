"use client";

import type { WorkspaceProps }  from "@/types/workspace";
import SideBar from './navigation/SideBar';
import WindowManager from './window/WindowManager';

const DesktopWorkspace = ({
	  openedApps,
		openApp,
		closeApp,
		hideApp,
}: WorkspaceProps) => {

	return (
		<div className="h-screen w-full bg-black  ">
			<div className="flex h-full">
				
				{/*Navigation*/}
				<SideBar 
				  openedApps={openedApps}
				  openApp={openApp}
				  closeApp={closeApp}
				  hideApp={hideApp}
				/>
				
				 {/* Workspace */}
				<main className="relative   flex-1 overflow-hidden">
					
					{/*also add hero section here*/}
					<div className="bg-white text-black">
					Hero
					</div>
					<WindowManager
						openedApps={openedApps}
						closeApp={closeApp}
						hideApp={hideApp}
  				/>
				</main>
			</div>
			Desktop
		</div>
	)
}

export default DesktopWorkspace
