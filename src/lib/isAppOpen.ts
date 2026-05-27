import type {
  AppId,
  OpenedApp,
} from "@/types/app";

export const isAppOpen = (
  openedApps: OpenedApp[],
  id: AppId
) => {
  return openedApps.some(
    (app) => app.id === id
  );
};
