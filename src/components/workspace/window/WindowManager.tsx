"use client";

import Window from "./Window";

import { renderApp }
  from "@/lib/renderApp";

import type {
  WindowManagerProps,
} from "@/types/window";

const WindowManager = ({
  openedApps,
  closeApp,
  hideApp,
}: WindowManagerProps) => {

  return (
    <>
      {openedApps.map(
        (app, index) => {

          if (app.hidden) {
            return null;
          }

          return (
            <Window
              key={app.id}
              app={app}
              zIndex={index + 10}
              closeApp={closeApp}
              hideApp={hideApp}
            >
              {renderApp(app.id)}
            </Window>
          );
        }
      )}
    </>
  );
};

export default WindowManager;
