// this is the entry point for the app

const { app, BrowserWindow, ipcMain, net } = require('electron');
const path = require('path');

// require in express server so that it gets booted when electron app is ready
const expressServer = require('./expressServer');

// electron reloader documentation recommends using a try/catch block to avoid
// crashin the app is node environment is in production
try {
  const electronReloader = require('electron-reloader');
  electronReloader(module, {
    ignore: [
      path.join(__dirname),
      path.join(__dirname, '..', 'src')
    ]
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
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // load the index.html into it
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
};

// checking connection between main process and renderer process
const handleConnect = (event, data) => {
  // apparently we can change the title (and probably other things too) of the html from the main process
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(data);
  
}

// when electron is finished initializing and the 'ready' event is
// emitted, boot up express server, set up ipc apis, and run createWindow
app.on('ready', () => {
  expressServer.listen(3010, () => {
    console.log('Server listening on port 3010');
  });
  ipcMain.on('connect', handleConnect);
  createWindow();
});