/**
 * Preload Script
 * Exposes secure API to renderer process for IPC communication
 */

import type { EventPayLoadMapping } from '../types/index.js';

const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
  subscribeTest: (callback) =>
    ipcOn('test', (msg) => {
      callback(msg);
    }),
  getStatic: () => ipcInvoke('getStatic'),
  sendFrameAction: (payload) => {
    ipcSend('sendFrameAction', payload);
  },
} satisfies Window['electron']);

function ipcInvoke<Key extends keyof EventPayLoadMapping>(
  key: Key
): Promise<EventPayLoadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayLoadMapping>(
  key: Key,
  callback: (payload: EventPayLoadMapping[Key]) => void
) {
  const cb = (_: any, payload: EventPayLoadMapping[Key]) => callback(payload);
  electron.ipcRenderer.on(key, cb);
  return () => electron.ipcRenderer.off(key, cb);
}

function ipcSend<Key extends keyof EventPayLoadMapping>(
  key: Key,
  payload: EventPayLoadMapping[Key]
) {
  electron.ipcRenderer.send(key, payload);
}
