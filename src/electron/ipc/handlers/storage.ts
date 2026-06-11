import { ipcMain } from "electron";
import { StorageService } from "../../services/storage.js";
import { validateEventFrame } from "../index.js";

const storage = new StorageService();

export function registerStorageIpc() {
  ipcMain.handle("getStorage", (event, key: keyof AppStoreSchema) => {
    try{
      validateEventFrame(event.senderFrame);
      return storage.get(key);
    }catch(err){
      console.error(err)
    }
  });

  ipcMain.handle("setStorage", (event, payload: Store) => {
    validateEventFrame(event.senderFrame);
    try {
      storage.set(payload.key, payload.value);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  });
}