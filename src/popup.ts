import { getStorageEnable, setStorageEnable } from './utils';

const EXTENSION_ENABLED_TEXT = '插件已启用 (点击关闭)';
const EXTENSION_DISABLED_TEXT = '插件已关闭 (点击启用)';
const enableBtn = document.getElementById('EnableExtension');
const reloadBtn = document.getElementById('Reload');

function initWhenPageLoad() {
  getStorageEnable((enabled) => {
    if (enabled) {
      enableBtn!.classList.add('item-select');
      enableBtn!.innerHTML = EXTENSION_ENABLED_TEXT;
    } else {
      enableBtn!.classList.remove('item-select');
      enableBtn!.innerHTML = EXTENSION_DISABLED_TEXT;
    }
  });
}

if (reloadBtn) {
  reloadBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id !== undefined) {
        chrome.tabs.sendMessage(tabs[0].id, { cmd: 'reload' });
      }
    });
  });
}

if (enableBtn) {
  enableBtn.addEventListener('click', () => {
    getStorageEnable((enabled) => {
      if (enabled) {
        // if storage is true, click change into false
        setStorageEnable(false, () => {
          // remove class and change html
          enableBtn.classList.remove('item-select');
          enableBtn.innerHTML = EXTENSION_DISABLED_TEXT;
        });
      } else {
        // if storage is false, click change into true
        setStorageEnable(true, () => {
          // add class and change html
          enableBtn.classList.add('item-select');
          enableBtn.innerHTML = EXTENSION_ENABLED_TEXT;
        });
      }
    });
  });

  initWhenPageLoad();
}
