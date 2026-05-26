import type {
  AppId,
  OpenedApp,
} from "./app";

export interface WindowManagerProps {
  openedApps: OpenedApp[];

  closeApp: (id: AppId) => void;

  hideApp: (id: AppId) => void;
}

export interface WindowProps {
  app: OpenedApp;

  zIndex: number;

  closeApp: (id: AppId) => void;

  hideApp: (id: AppId) => void;

  children: React.ReactNode;
}
