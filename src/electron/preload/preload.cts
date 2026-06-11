/**
 * Preload Script
 * Exposes secure API to renderer process for IPC communication
 */

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
  getStorage: (payload) => ipcInvoke('getStorage', payload),
  setStorage: (payload) => ipcInvoke('setStorage', payload),
} satisfies Window['electron']);

function ipcInvoke<Key extends keyof EventPayLoadMapping>(
  key: Key,
  ...args: unknown[]
): Promise<EventPayLoadMapping[Key]> {
  return electron.ipcRenderer.invoke(key, ...args);
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
