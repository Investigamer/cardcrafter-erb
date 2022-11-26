const { contextBridge, ipcRenderer, dialog } = require('electron');
const smalltalk = require('smalltalk');

contextBridge.exposeInMainWorld('electron', {
    // Prompt user for an input
    promptUser (title, msg, val) {
        smalltalk
            .prompt(title, msg, val)
            .then((value) => {
                return value
            })
            .catch(() => {
                return null
            });
    }
})