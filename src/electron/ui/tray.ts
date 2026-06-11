/**
 * System Tray
 * Creates and manages the system tray icon and context menu
 */

import path from "path";
import { getAssetsPath } from "../utils/paths.js";
import { app, BrowserWindow, Menu, Tray } from "electron";

export function createSystemTray(mainWindow: BrowserWindow): Tray {
  const trayIcon = getTrayIcon();
  const tray = new Tray(path.join(getAssetsPath(), trayIcon));
  tray.setToolTip('Electron System Monitor');

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: "Show",
      click: () => {
        mainWindow.show();
        if (app.dock) {
          app.dock.show();
        }
      }
    },
    {
      label: "Quit",
      click: () => app.quit()
    },
  ]));

  tray.on("double-click", () => {
    mainWindow.show();
    if (app.dock) {
      app.dock.show();
    }
  });

  return tray;
}

function getTrayIcon(): string {
  if (process.platform === 'win32') {
    return 'trayIcon.ico';
  } else if (process.platform === 'darwin') {
    return 'trayIconTemplate.png';
  } else {
    return 'trayIcon.png';
  }
}
