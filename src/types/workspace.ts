 

import type { AppId, OpenedApp }
  from "./app";

export interface WorkspaceProps {
  openedApps: OpenedApp[];

  openApp: (id: AppId) => void;

  closeApp: (id: AppId) => void;

  hideApp: (id: AppId) => void;
   
  closeAllApps: () => void;
}
