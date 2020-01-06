const _DEFAULT_CONFIG_SITES: SiteItem[] = [
  {
    urlRegExp: "^https://github.com",
    markdownBodySelector: '.markdown-body',
    stickyHeight: 0,
  },
  {
    urlRegExp: "^https://github.com/.*/issues/",
    markdownBodySelector: '.markdown-body',
    // in issues page, the issues title will be sticky, so we need to minus its height
    stickyHeight: 60,
  },
  {
    urlRegExp: "^https://www.cnblogs.com/.*.html/",
    markdownBodySelector: '#cnblogs_post_body',
    stickyHeight: 0
  },
  {
    markdownBodySelector: ".Post-RichText",
    stickyHeight: 52,
    urlRegExp: "^https://zhuanlan.zhihu.com/p/"
  }
]

const KEYS_ARR:string[] = ["urlRegExp","markdownBodySelector","stickyHeight"]

function _getConfigSites(callback?: (configSites: SiteItem []) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ configSites: _DEFAULT_CONFIG_SITES }, function (item: StorageItem) {
    const { configSites } = item
    if (callback) {
      callback(configSites)
    }
  })
}

function _setConfigSites (configSites:SiteItem [], callback?:Function) {
  chrome.storage.sync.set({ configSites }, function () {
    console.log(`set configSites: ${JSON.stringify(configSites)}`)
    if (callback) {
      callback()
    }
  })
}

window.addEventListener('load',() => {
  const configArea = document.querySelector('#config-area');
  let isClicked = false
  const addConfigBtn = document.querySelector('#add-config-btn');
  if(configArea) {
    _getConfigSites((configSites) =>{
      try {
        (configArea as HTMLInputElement).value = JSON.stringify(configSites,null,2)
      } catch (e) {
        console.debug(`options.js, JSON.stringify(configSites,null,2) error`);
      }
    })
  }

  if(addConfigBtn && configArea) {
    addConfigBtn.addEventListener('click',() =>{
      if(isClicked) {
        return;
      }
      isClicked = true;
      const textareaArea = (configArea as HTMLInputElement).value;
      let newConfigValue = null;
      try {
        newConfigValue = JSON.parse(textareaArea)
        newConfigValue.some((item:SiteItem) => {
          return KEYS_ARR.some(key =>{
            if(!(item.hasOwnProperty(key))) {
              throw new Error(`every item should has key: ${key}`)
            }
            return false;
          })
        })
      } catch (e) {
        alert(`textarea value format error: ${e}`)
        isClicked = false;
        return;
      }
      _setConfigSites(newConfigValue,() => {
        isClicked = false;
        alert('config save success')
      })
    })
  }
})