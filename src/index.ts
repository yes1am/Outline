interface HeaderInfo {
  html: string;
  level: string;
  top: number;
}

interface StorageItem {
  enabled: boolean;
  configSites: SiteItem [];
}

interface SiteItem {
  urlRegExp: String;
  markdownBodySelector: string;
  stickyHeight: number;
}

const ICON_PNG_BASE64 = `<img src='data:img/jpg;base64,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
TkSuQmCC'/>`

const GITHUB_SOURCE_CODE_URL = 'https://github.com/yes1am/essay-outline';
const HEADER_CLASS_PREFIX = 'CHROME_ESSAY_OUTLINE_EXTENSION_CLASS'
const CONTAINER_ID = 'CHROME_ESSAY_OUTLINE_EXTENSION_CONTAINER'
const CONTAINER_HEADER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_HEADER'
const CONTAINER_BODY_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_BODY'
const CONTAINER_FOOTER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_FOOTER'
const TOGGLE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_TOGGLE'
const ACTIVE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_ACTIVE'
const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6'
const TOGGLE_TEXT = 'essay-outline'
let isActive = true;

const DEFAULT_CONFIG_SITES: SiteItem[] = [
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

function getConfigSites(callback?: (configSites: SiteItem []) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ configSites: DEFAULT_CONFIG_SITES }, function (item: StorageItem) {
    const { configSites } = item
    if (callback) {
      callback(configSites)
    }
  })
}

function getOffsetToDocumentTop(ele: HTMLElement): number {
  return ele.getBoundingClientRect().top + document.documentElement.scrollTop
}

function getEleDataTopAttribute(ele: HTMLElement): number {
  let result = ele.dataset.top;
  while (!result && ele.parentElement) {
    result = ele.parentElement.dataset.top;
    ele = ele.parentElement
  }
  return Number(result)
}

function removeContainerIfAlreadyExist() {
  let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
  if (!!prevContainer && prevContainer.parentNode) {
    // if already exist
    prevContainer.parentNode.removeChild(prevContainer);
    prevContainer = null;
  }
}

function generateDom(root: any) {
  removeContainerIfAlreadyExist()
  const currentSite = window.location.href
  let matchedSite: SiteItem | null = null;

  getConfigSites((configSites) =>{
    configSites.forEach(site => {
      if (new RegExp(site.urlRegExp as string).test(currentSite)) {
        matchedSite = site;
      }
    })
    if (!matchedSite) {
      console.debug('essay-outline extension fail, no config');
      return;
    }
  
    const document = root.document
    const markdownBody = document.querySelector(matchedSite!.markdownBodySelector)
    if (!markdownBody) {
      console.debug(`essay-outline extension fail, no ${matchedSite!.markdownBodySelector} found`);
      return
    }
  
    const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING)
    if (!headers.length) {
      console.debug(`essay-outline extension fail, no header tag under ${matchedSite!.markdownBodySelector}`);
      return
    }
  
    const headersInfos: HeaderInfo[] = []
  
    Array.from(headers).forEach(function (header: HTMLDivElement) {
      headersInfos.push({
        html: header.innerHTML,
        level: header.tagName,
        top: getOffsetToDocumentTop(header)
      })
    })
  
    const container = document.createElement('div')
    container.classList.add(CONTAINER_ID)
    if(isActive){
      container.classList.add(ACTIVE_CLASS)
    }
    const fragment = document.createDocumentFragment()
  
    // header
    const containerHeader = document.createElement('div')
    containerHeader.innerHTML = `<a href="${GITHUB_SOURCE_CODE_URL}" target="_blank">${TOGGLE_TEXT}</a>`
    containerHeader.classList.add(CONTAINER_HEADER_CLASS)
  
    // body
    const containerBody = document.createElement('div')
    containerBody.classList.add(CONTAINER_BODY_CLASS)
    let element: HTMLDivElement;
    headersInfos.forEach(function ({ html, level, top }) {
      element = document.createElement('div')
      element.classList.add(`${HEADER_CLASS_PREFIX}_${level}`)
      element.setAttribute('data-top', String(top))
      element.innerHTML = html
      containerBody.appendChild(element)
    })
  
    // footer
    const containerFooter = document.createElement('div')
    containerFooter.classList.add(CONTAINER_FOOTER_CLASS)
  
    // toggle element
    const toggle = document.createElement('div');
    toggle.classList.add(TOGGLE_CLASS);
    toggle.innerHTML = ICON_PNG_BASE64;
  
    // append
    fragment.appendChild(toggle)
    fragment.appendChild(containerHeader)
    fragment.appendChild(containerBody)
    fragment.appendChild(containerFooter)
  
    container.addEventListener('click', function (e: MouseEvent) {
      const { target } = e
      if (target) {
        const top = getEleDataTopAttribute(target as HTMLElement)
        document.documentElement.scrollTop = top - matchedSite!.stickyHeight
      }
    })
    
    toggle.addEventListener('click', function (e: MouseEvent) {
      e.stopPropagation();
      if (isActive) {
        container.classList.remove(ACTIVE_CLASS);
      } else {
        container.classList.add(ACTIVE_CLASS);
      }
      isActive = !isActive
    })
  
    container.appendChild(fragment)
    document.body.appendChild(container)
  })  
}

function getEnable(callback?: (enabled: boolean) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ enabled: true }, function (item: StorageItem) {
    const { enabled } = item
    if (callback) {
      callback(enabled)
    }
  })
}

function main() {
  getEnable(function (this: Window, enabled) {
    if (enabled) {
      generateDom(this)
    }
  })

  // support pjax: 
  // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
  document.addEventListener("pjax:end", function () {
    getEnable(function (this: Window, enabled) {
      if (enabled) {
        generateDom(this)
      }
    })
  })
}


window.addEventListener('load', function () {
  main()
});