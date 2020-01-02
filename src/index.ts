interface HeaderInfo {
  html:string;
  level:string;
  top: number;
}

interface StorageItem {
  enabled: boolean;
}

interface SiteItem {
  urlRegExp: RegExp;
  markdownBodySelector: string;
  stickyHeight: number;
}


const HEADER_CLASS_PREFIX = 'CHROME_OUTLINE_EXTENSION_CLASS'
const CONTAINER_ID = 'CHROME_OUTLINE_EXTENSION_CONTAINER'
const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6'

const CONFIG_SITES:SiteItem[] = [
  {
      urlRegExp: /^https\:\/\/github\.com/,
      markdownBodySelector: '.markdown-body',
      stickyHeight: 0,
  },
  {
    urlRegExp: /^https\:\/\/github\.com\/.*\/issues/,
    markdownBodySelector: '.markdown-body',
    // in issues page, the issues title will be sticky, so we need to minus its height
    stickyHeight: 60,
  },
  {
    urlRegExp: /https\:\/\/confluence\.shopee\.io\/pages\/viewpage\.action/,
    markdownBodySelector: '#main-content',
    stickyHeight: 100
  },
  {
    urlRegExp: /https\:\/\/www\.cnblogs\.com\/.*\.html/,
    markdownBodySelector: '#cnblogs_post_body',
    stickyHeight: 0
  },
]

function getOffsetToDocumentTop(ele: HTMLElement):number {
  return ele.getBoundingClientRect().top + document.documentElement.scrollTop
}

function getEleDataTopAttribute(ele: HTMLElement):number {
  let result = ele.dataset.top;
  while (!result && ele.parentElement) {
    result = ele.parentElement.dataset.top;
    ele = ele.parentElement
  }
  return Number(result)
}

function removeContainerIfAlreadyExist() {
  let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
  if(!!prevContainer && prevContainer.parentNode) {
    // if already exist
    prevContainer.parentNode.removeChild(prevContainer);
    prevContainer = null;
  }
}

function generateDom(root: any) {
  removeContainerIfAlreadyExist()
  const currentSite = window.location.href
  let matchedSite:SiteItem | null = null;
  CONFIG_SITES.forEach(site => {
    if(site.urlRegExp.test(currentSite)) {
      matchedSite = site;
    
    }
  })

  if(!matchedSite) {
    console.debug('chrome outline extension fail, no config');
    return;
  }

  const document = root.document
  const markdownBody = document.querySelector(matchedSite!.markdownBodySelector)
  if (!markdownBody) {
    console.debug(`chrome outline extension fail, no ${matchedSite!.markdownBodySelector} found`);
    return
  }

  const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING)
  if (!headers) {
    console.debug(`chrome outline extension fail, no header tag under ${matchedSite!.markdownBodySelector}`);
    return
  }

  const headersInfos:HeaderInfo[] = []

  Array.from(headers).forEach(function (header: HTMLDivElement) {
    headersInfos.push({
      html: header.innerHTML,
      level: header.tagName,
      top: getOffsetToDocumentTop(header)
    })
  })

  const container = document.createElement('div')
  container.classList.add(CONTAINER_ID)
  const fragment = document.createDocumentFragment()
  let element:HTMLDivElement;

  headersInfos.forEach(function ({ html, level, top }) {
    element = document.createElement('div')
    element.classList.add(`${HEADER_CLASS_PREFIX}_${level}`)
    element.setAttribute('data-top', String(top))
    element.innerHTML = html
    fragment.appendChild(element)
  })

  container.addEventListener('click', function (e: MouseEvent) {
    const { target } = e
    if(target) {
      const top = getEleDataTopAttribute(target as HTMLElement)
      document.documentElement.scrollTop = top - matchedSite!.stickyHeight  
    }
  })

  container.appendChild(fragment)
  document.body.appendChild(container)
}

function getEnable(callback?:(enabled:boolean) => void):void {
  // get enabled, default value is true
  chrome.storage.sync.get({ enabled: true }, function (item:StorageItem) {
    const { enabled } = item
    if (callback) {
      callback(enabled)
    }
  })
}

function main() {
  getEnable(function (this: Window,enabled){
    if (enabled) {
      generateDom(this)
    }
  })

  // support pjax: 
  // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
  document.addEventListener("pjax:end", function() {
    getEnable(function (this: Window,enabled){
      if (enabled) {
        generateDom(this)
      }
    })
  })
}


window.addEventListener('load', function(){
  main()
});



