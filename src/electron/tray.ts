import path from "path";
import { getAssetsPath } from "./utils/pathResolver.js";
import { app, BrowserWindow, Menu, Tray } from "electron";

export function createTray(mainWindow: BrowserWindow){
    const trayIcon =
            process.platform === 'win32'
                ? 'trayIcon.ico'
                : process.platform === 'darwin'
                ? 'trayIconTemplate.png'
                : 'trayIcon.png';
    
        const tray = new Tray(path.join(getAssetsPath(), trayIcon));
        tray.setToolTip('Electron System Monitor');

        tray.setContextMenu(Menu.buildFromTemplate([
            {
                label: "Show",
                click: ()=> {
                    mainWindow.show();
                    if(app.dock){
                        app.dock.show()
                    }
                }
            },
            {
                label: "Quit",
                click: ()=> app.quit()
            },
        ]))

        tray.on("double-click", () => {
            mainWindow.show();
            if(app.dock){
                app.dock.show()
            }
        })
}