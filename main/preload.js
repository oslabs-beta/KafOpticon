// a preload script to test our ability to preload things into the renderer process

// require in contextBridge API
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('sayHi', {
  hello: () => {
    console.log('hello');
  },
});
