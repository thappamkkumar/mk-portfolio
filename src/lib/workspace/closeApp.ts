

import type {
  AppId,
  OpenedApp,
} from "@/types/app";

export const closeAppInStack = (
  apps: OpenedApp[],
  id: AppId
): OpenedApp[] => {
  return apps.filter(
    (app) => app.id !== id
  );
};

