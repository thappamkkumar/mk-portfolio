import type {
  AppId,
  OpenedApp,
} from "./app";

export interface SidebarProps {
  openedApps: OpenedApp[];

  openApp: (id: AppId) => void;
}
