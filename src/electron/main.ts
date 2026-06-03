import {app, BrowserWindow} from 'electron';
import { ipcMainHandle, ipcWebContentsSend, isDev } from './util.js';
import { getPreloadPath, getUIPath } from './pathResolver.js';

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