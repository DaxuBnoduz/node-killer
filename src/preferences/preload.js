const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nodeKillerPrefs', {
  get: () => ipcRenderer.invoke('prefs:get'),
  setAutoLaunch: (value) => ipcRenderer.invoke('prefs:set-autoLaunch', value),
  setRefresh: (value) => ipcRenderer.invoke('prefs:set-refresh', value),
  setAllUsers: (value) => ipcRenderer.invoke('prefs:set-allUsers', value),
  setDisplayMode: (value) => ipcRenderer.invoke('prefs:set-display', value),
  openExternal: (url) => ipcRenderer.invoke('prefs:openExternal', url),
});
