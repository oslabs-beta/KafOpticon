// this is the entry point for the app

const { app, BrowserWindow } = require('electron');
const path = require('path');

// electron reloader documentation recommends using a try/catch block to avoid
// crashin the app is node environment is in production
try {
  const electronReloader = require('electron-reloader');
  electronReloader(module, {
    ignore: [path.join(__dirname, '..', 'src')],
  });
} catch {
  console.log('electron reloader failed');
}

const createWindow = () => {
  // create a browser window
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // load the index.html into it
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
};

// when electron is finished initializing, and the 'ready' event is
// emitted, run createWindow
app.on('ready', createWindow);
