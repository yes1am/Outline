import { StorageItem, SiteItem } from './types';
import { DEFAULT_CONFIG_SITES, DEFAULT_EXTENSION_ENABLE } from './constants';

// enable, 是否启用插件
export function getStorageEnable(callback?:(enabled:boolean) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ enabled: DEFAULT_EXTENSION_ENABLE }, (item: StorageItem) => {
    const { enabled } = item;
    console.log(`get enabled: ${enabled}`);
    if (callback) {
      callback(enabled);
    }
  });
}

export function setStorageEnable(enabled:boolean, callback:Function) {
  chrome.storage.sync.set({ enabled }, () => {
    console.log(`set enabled: ${enabled}`);
    if (callback) {
      callback();
    }
  });
}

export function getStorageSites(callback?: (configSites: SiteItem []) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ configSites: DEFAULT_CONFIG_SITES }, (item: StorageItem) => {
    const { configSites } = item;
    if (callback) {
      callback(configSites);
    }
  });
}

export function setStorageSites(configSites:SiteItem [], callback?:Function) {
  chrome.storage.sync.set({ configSites }, () => {
    console.log(`set configSites: ${JSON.stringify(configSites)}`);
    if (callback) {
      callback();
    }
  });
}
