/**
 * Main Electron Application Entry Point
 * Initializes the application, creates windows, and registers IPC handlers
 */

import { app } from 'electron';
import { createMainWindow, handleMainWindowCloseEvent } from './windows/index.js';
import { createApplicationMenu, createSystemTray } from './ui/index.js';
import { registerAllHandlers } from './ipc/handlers/index.js';

/**
 * Application ready event handler
 * Initializes main window and UI components
 */
app.on('ready', () => {
  // Create main application window
  const mainWindow = createMainWindow();

  // Register all IPC handlers (window, system, etc.)
  registerAllHandlers(mainWindow);

  // Setup close event handling (minimize to tray)
  handleMainWindowCloseEvent(mainWindow);

  // Create application menu
  createApplicationMenu(mainWindow);

  // Create system tray
  createSystemTray(mainWindow);
});

/**
 * Quit app when all windows are closed (except on macOS)
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});