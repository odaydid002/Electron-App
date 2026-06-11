/**
 * Window-related IPC Handlers
 * Handles frame actions like minimize, maximize, close, restore
 */

import { BrowserWindow } from 'electron';
import { ipcMainOn } from '../index.js';
import type { EventPayLoadMapping } from '../../types/index.js';

export function registerWindowHandlers(mainWindow: BrowserWindow) {
  ipcMainOn<'sendFrameAction'>('sendFrameAction', (payload: EventPayLoadMapping['sendFrameAction']) => {
    handleFrameAction(mainWindow, payload);
  });
}

function handleFrameAction(
  mainWindow: BrowserWindow,
  action: EventPayLoadMapping['sendFrameAction']
) {
  switch (action) {
    case 'CLOSE':
      mainWindow.close();
      break;
    case 'MINIMIZE':
      mainWindow.minimize();
      break;
    case 'MAXIMIZE':
      if (mainWindow.isMaximized()) {
        mainWindow.restore();
      } else {
        mainWindow.maximize();
      }
      break;
    case 'RESTORE':
      mainWindow.restore();
      break;
  }
}
