interface HeaderInfo {
  html:string;
  level:string;
  top: number;
}

interface StorageItem {
  enabled: boolean;
}

const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6'
const GITHUB_MARKDOWN_BODY_CLASS = '.markdown-body'
const HEADER_CLASS_PREFIX = 'GITHUB_ISSUE_BLOG_EXTENSION_CLASS'
const CONTAINER_ID = 'GITHUB_ISSUE_BLOG_EXTENSION_CONTAINER'

// in issues page, the issues title will be sticky, so we need to minus its height
function isIssuesPage(): boolean {
  return window.location.href.includes('/issues/')
}

const GITHUB_STICKY_HEIGHT: number = isIssuesPage() ? 60 : 0

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

function generateDom(root: any) {
  const document = root.document

  const markdownBody = document.querySelector(GITHUB_MARKDOWN_BODY_CLASS)
  if (!markdownBody) {
    console.log('this extension only works in github page with markdown, exit')
    return
  }

  const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING)
  if (!headers) {
    console.log('cant find header tag, exit')
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

  let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
  if(!!prevContainer) {
    // if already exist
    prevContainer.parentNode.removeChild(prevContainer);
    prevContainer = null;
  }

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
      document.documentElement.scrollTop = top - GITHUB_STICKY_HEIGHT  
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

main()


