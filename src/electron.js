// this is the entry point for the app

const { app, BrowserWindow } = require('electron');

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
  win.loadFile('index.html');
}

// when electron is finished initializing, and the 'ready' event is
// emitted, run createWindow
app.on('ready', createWindow);