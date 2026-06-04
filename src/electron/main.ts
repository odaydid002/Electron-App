import {app, BrowserWindow, Tray} from 'electron';
import { ipcMainHandle, ipcWebContentsSend, isDev } from './util.js';
import { getAssetsPath, getPreloadPath, getUIPath } from './pathResolver.js';
import path from 'path';

app.on('ready', ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        }
    });
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    }else{
        mainWindow.loadFile(getUIPath())
    }

    pollTest(mainWindow);

    ipcMainHandle('getStatic', () => {
        return staticTest();
    })

    const trayIcon =
        process.platform === 'win32'
            ? 'trayIcon.ico'
            : process.platform === 'darwin'
            ? 'trayIconTemplate.png'
            : 'trayIcon.png';

    const tray = new Tray(path.join(getAssetsPath(), trayIcon));

    tray.setToolTip('Electron App');
})

function pollTest(mainWindow: BrowserWindow) {
    setInterval(async ()=>{
        ipcWebContentsSend('test', mainWindow.webContents, {
            message: "this is message from backend"
        })
    }, 500)
}

function staticTest(){
    return 'This is message from backend'
}