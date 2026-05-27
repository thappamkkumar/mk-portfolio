import type {
  AppId,
  OpenedApp,
} from "./app";

export interface MobileDockProps {
  openedApps: OpenedApp[];

  openApp: (id: AppId) => void;
  closeAllApps: () => void;
}
