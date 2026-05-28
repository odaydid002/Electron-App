const electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
    //methodes
    testMethode: () => console.log("This is test"),
})