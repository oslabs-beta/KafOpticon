// this is the entry point for the app

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// electron reloader documentation recommends using a try/catch block to avoid
// crashin the app is node environment is in production
try {
  const electronReloader = require('electron-reloader');
  electronReloader(module, {
    ignore: [
      path.join(__dirname, '..', 'src')
    ]
  });
} catch {
  console.log('electron reloader failed');
};


const createWindow = () => {
  // create a browser window
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });


  // load the index.html into it
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
}

// checking connection between main process and renderer process
const handleConnect = (event, data) => {
  console.log('got here');
  
  // apparently we can change the title (and probably other things too) of the html from the main process
  const webContents = event.sender;
  console.log('handleConnect ~ webContents:', webContents);
  const win = BrowserWindow.fromWebContents(webContents);
  console.log('handleConnect ~ win:', win);
  win.setTitle(data);
  
}

// when electron is finished initializing, and the 'ready' event is
// emitted, run createWindow
app.on('ready', () => {
  ipcMain.on('connect', handleConnect)
  createWindow();
});