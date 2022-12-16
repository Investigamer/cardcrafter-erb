import { Channels } from 'main/preload';

declare global {
  interface Window {
    storage: {
      get: (key: string) => unknown;
      set: (key: string, value: unknown) => void;
    };
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: Channels,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: Channels, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
