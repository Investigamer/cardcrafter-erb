const { app, BrowserWindow } = require('electron')
const path = require('path')

// Creates our main window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences:  {
            preload: path.join(__dirname, 'preload.js')
        },
    })

    win.loadFile('main.html')
}

// Create window when app is loaded
app.whenReady().then(() => {
    createWindow()

    // macOS specific
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Close app when window is closed (except macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})