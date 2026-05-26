import type {
  AppId,
  OpenedApp,
} from "@/types/app";

export const openAppInStack = (
  apps: OpenedApp[],
  id: AppId
): OpenedApp[] => {

  const existingApp = apps.find(
    (app) => app.id === id
  );

  // App already opened
  if (existingApp) {

    // Move app to top
    return [
      ...apps.filter(
        (app) => app.id !== id
      ),

      {
        ...existingApp,
        hidden: false,
      },
    ];
  }

  // Open new app
  return [
    ...apps,

    {
      id,
      hidden: false,
    },
  ];
};
