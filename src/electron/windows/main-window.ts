/**
 * Main Window Manager
 * Handles main window creation, lifecycle, and event management
 */

import { app, BrowserWindow } from 'electron';
import { getPreloadPath, getUIPath } from '../utils/paths.js';
import { isDev } from '../ipc/index.js';

export function createMainWindow(): BrowserWindow {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
    frame: true,
  });

  // Load application URL
  if (isDev()) {
    mainWindow.loadURL('http://localhost:5123');
  } else {
    mainWindow.loadFile(getUIPath());
  }

  return mainWindow;
}

/**
 * Handle close event to minimize to tray on macOS and Linux
 */
export function handleMainWindowCloseEvent(mainWindow: BrowserWindow): void {
  let willClose = false;

  mainWindow.on('close', (event) => {
    if (willClose) {
      return;
    }

    event.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on('before-quit', () => {
    willClose = true;
  });

  mainWindow.on('show', () => {
    willClose = false;
  });
}
