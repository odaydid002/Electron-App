import {app, BrowserWindow, Tray} from 'electron';
import { ipcMainHandle, ipcWebContentsSend, isDev } from './util.js';
import { getAssetsPath, getPreloadPath, getUIPath } from './pathResolver.js';
import path from 'path';
import { createTray } from './tray.js';

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

    createTray(mainWindow); 
    handleCloseEvent(mainWindow); 
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

function handleCloseEvent(mainWindow: BrowserWindow){

    let willClose = false;

    mainWindow.on('close', (event) => {

        if (willClose) {
            return;
        }

        event.preventDefault();
        mainWindow.hide();
        if (app.dock) {
            app.dock.hide();
        }
    });

    app.on('before-quit', () => {
        willClose = true;
    });

    mainWindow.on('show', () => {
        willClose = false;
    });
}