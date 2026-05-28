import type {
  OpenedApp,
} from "@/types/app";

export const hideAllAppsInStack = (
  apps: OpenedApp[]
): OpenedApp[] => {

  return apps.map((app) => ({
    ...app,
    hidden: true,
  }));
};
