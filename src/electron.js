// this is the entry point for the app

const { app, BrowserWindow } = require('electron');
const path = require('path');

try {
  const electronReloader = require('electron-reloader');
  electronReloader(module, {
    ignore: [
      __dirname
    ]
  });
} catch {
  console.log('electron reloader failed');
};

// console.log(path.join(__dirname, '..', 'dist', 'index.html'));

const createWindow = () => {
  // create a browser window
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });


  // load the index.html into it
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
}

// when electron is finished initializing, and the 'ready' event is
// emitted, run createWindow
app.on('ready', createWindow);