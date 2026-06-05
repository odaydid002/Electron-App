import {app, BrowserWindow} from 'electron';
import {ipcMainHandle, ipcMainOn, ipcWebContentsSend, isDev } from './util.js';
import {getPreloadPath, getUIPath } from './pathResolver.js';
import { createTray } from './tray.js';
import { createMenu } from './menu.js';

//Menu.setApplicationMenu(null); //Disable Menu

app.on('ready', ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
        },
        frame: false, //disable default frame
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

    ipcMainOn("sendFrameAction", (payload) => {
        switch (payload) {
            case "CLOSE":
            break;
            case "MINIMIZE":
                mainWindow.minimize();
            break;
            case "MAXIMIZE":
                if(mainWindow.isMaximized()){
                    mainWindow.restore()
                }else{
                    mainWindow.maximize();
                }
            break;
            case "RESTORE":
                mainWindow.restore();
            break;
        }
    })

    createTray(mainWindow); 
    handleCloseEvent(mainWindow); 
    createMenu(mainWindow); //Create Custom Menu
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