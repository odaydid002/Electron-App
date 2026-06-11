/**
 * System-related IPC Handlers
 * Handles system info and communication
 */

import { BrowserWindow } from 'electron';
import { ipcMainHandle, ipcWebContentsSend } from '../index.js';

export function registerSystemHandlers(mainWindow: BrowserWindow) {
  ipcMainHandle('getStatic', () => {
    return staticTest();
  });

  // Start polling test data
  startPollingTest(mainWindow);
}

function staticTest(): string {
  return 'This is message from backend';
}

function startPollingTest(mainWindow: BrowserWindow) {
  setInterval(async () => {
    ipcWebContentsSend('test', mainWindow.webContents, {
      message: 'this is message from backend',
    });
  }, 500);
}
