/**
 * Application Menu
 * Creates and manages the application menu
 */

import { app, BrowserWindow, Menu } from "electron";
import { isDev } from "../ipc/index.js";

export function createApplicationMenu(mainWindow: BrowserWindow): void {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: process.platform === 'darwin' ? undefined : 'App',
      type: 'submenu',
      submenu: [
        {
          label: 'DevTools',
          click: () => mainWindow.webContents.openDevTools(),
          visible: isDev()
        },
        {
          label: 'Quit',
          click: () => app.quit()
        },
      ]
    }
  ]));
}
