/**
 * IPC Handlers Index
 * Registers all IPC handlers for the application
 */

import { BrowserWindow } from 'electron';
import { registerWindowHandlers } from './window.js';
import { registerSystemHandlers } from './system.js';
import { registerStorageIpc } from './storage.js';

export function registerAllHandlers(mainWindow: BrowserWindow) {
  registerWindowHandlers(mainWindow);
  registerSystemHandlers(mainWindow);
  registerStorageIpc()
}
