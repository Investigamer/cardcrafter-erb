import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

/*
EXAMPLE --- Calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});

EXAMPLE --- Calling IPC #2
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

EXAMPLE --- Calling custom storage solution
value = await window.storage.get("Storage Key");
await window.storage.set(storageKey, "New Value");
*/
