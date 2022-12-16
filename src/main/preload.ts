import {
  contextBridge,
  ipcRenderer,
  IpcRendererEvent,
} from 'electron';

export type Channels = 'ipc-example';

// Custom storage API
const STORAGE_API = {
  get: (key: string) => ipcRenderer.invoke('storage/get', key),
  set: (key: string, value: unknown) =>
    ipcRenderer.send('storage/set', key, value),
};

// window.storage
contextBridge.exposeInMainWorld('storage', STORAGE_API);

// window.electron
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
