interface StorageItem {
  enabled: boolean;
}

declare var chrome: any;

function getEnableFun (callback?:(enabled:boolean) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ enabled: true }, function (item: StorageItem) {
    const { enabled } = item
    console.log(`get enabled: ${enabled}`)
    if (callback) {
      callback(enabled)
    }
  })
}

function setEnable (enabled:boolean, callback:Function) {
  chrome.storage.sync.set({ enabled }, function () {
    console.log(`set enabled: ${enabled}`)
    if (callback) {
      callback()
    }
  })
}

const enableBtn = document.getElementById('EnableExtension')

if(enableBtn) {
  enableBtn.addEventListener('click', function () {
    getEnableFun((enabled) => {
      if (enabled) {
        // if storage is true, click change into false
        setEnable(false, () => {
          // remove class and change html
          enableBtn.classList.remove('item-select')
          enableBtn.innerHTML = '插件已关闭 (点击启用)'
        })
      } else {
        // if storage is false, click change into true
        setEnable(true, () => {
          // add class and change html
          enableBtn.classList.add('item-select')
          enableBtn.innerHTML = '插件已启用 (点击关闭)'
        })
      }
    })
  })

  function initWhenPageLoad () {
    getEnableFun((enabled) => {
      if (enabled) {
        enableBtn!.classList.add('item-select')
        enableBtn!.innerHTML = '插件已启用 (点击关闭)'
      } else {
        enableBtn!.classList.remove('item-select')
        enableBtn!.innerHTML = '插件已关闭 (点击启用)'
      }
    })
  }
  
  initWhenPageLoad()
}



