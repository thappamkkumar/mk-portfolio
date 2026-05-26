
import type {
  AppId,
  OpenedApp,
} from "@/types/app";

export const hideAppInStack = (
  apps: OpenedApp[],
  id: AppId
): OpenedApp[] => {
  return apps.map((app) =>
    app.id === id
      ? {
          ...app,
          hidden: true,
        }
      : app
  );
};
