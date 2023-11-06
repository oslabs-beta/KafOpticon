// a preload script to test our ability to preload things into the renderer process

// require in contextBridge API
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('sayHi', {
  hello: () => {
    console.log('Hello');
  },
  connect: (data) => {
    ipcRenderer.send('connect', data);
  }
});