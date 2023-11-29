// this is the entry point for the app

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const log = require('electron-log/main');
log.info('Log from the main process');
log.info('node environment: ', process.env.NODE_ENV);
// console.log(process.env.NODE_ENV);

// require in express server so that it gets booted when electron app is ready
const expressServer = require('./expressServer');

// electron reloader documentation recommends using a try/catch block to avoid
// crashin the app is node environment is in production
// try {
//   const electronReloader = require('electron-reloader');
//   electronReloader(module, {
//     ignore: [path.join(__dirname), path.join(__dirname, '..', 'src')],
//   });
// } catch {
//   console.log('electron reloader failed');
// }

const createWindow = () => {
  // create a browser window
  const win = new BrowserWindow({
    height: 600, // look into auto full-screen?
    width: 800,
    icon: path.join(__dirname, '../assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // load the index.html into it
  win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
};


// when electron is finished initializing and the 'ready' event is
// emitted, boot up express server and run createWindow
app.on('ready', () => {
  expressServer.listen(3010, () => {
    console.log('Server listening on port 3010');
    log.info('Server listening on port 3010');
  });
  createWindow();
});
