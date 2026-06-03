import { ipcMain, WebContents, WebFrameMain } from "electron"
import { getUIPath } from "./pathResolver.js";
import { pathToFileURL } from "url";

export function isDev(): boolean {
    return process.env.NODE_ENV === "development"
}

export function ipcMainHandle<Key extends keyof EventPayLoadMapping>(key: Key, handler: ()=> EventPayLoadMapping[Key]) {
    ipcMain.handle(key, (event) => {
        validateEventFrame(event.senderFrame);
        return handler();
    })
}

export function ipcWebContentsSend<Key extends keyof EventPayLoadMapping> (
    key: Key,
    webContents: WebContents,
    payload: EventPayLoadMapping[Key]
) {
    webContents.send(key, payload);
}

export function validateEventFrame(frame: WebFrameMain | null) {
    if (!frame) {
        throw new Error('Maicious event');
    }
    if(isDev() && new URL(frame.url).host === `localhost:5123`) {
        return;
    }
    if (frame.url !== pathToFileURL(getUIPath()).toString()){
        throw new Error('Maicious event');
    }
}