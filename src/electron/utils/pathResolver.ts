import path from "path";
import { app } from "electron";
import { isDev } from "../ipc/index.js";

export function getPreloadPath() {
    return path.join(
        app.getAppPath(),
        isDev()? ".": "..",
        '/dist-electron/preload/preload.cjs'
    )
}

export function getUIPath(){
    return path.join(app.getAppPath(), '/dist-react/index.html')
}

export function getAssetsPath(){
    return path.join(app.getAppPath(), isDev() ? '.' : '..', '/src/assets')
}