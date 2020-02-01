import ICON_BASE64 from './icon-base64';
import { SiteItem, HeaderInfo, StorageItem } from './types';
import { getStorageSites } from './utils';
import { DEFAULT_EXTENSION_ACTIVE } from './constants';

const GITHUB_SOURCE_CODE_URL = 'https://github.com/yes1am/essay-outline';
const HEADER_CLASS_PREFIX = 'CHROME_ESSAY_OUTLINE_EXTENSION_CLASS';
const CONTAINER_ID = 'CHROME_ESSAY_OUTLINE_EXTENSION_CONTAINER';
const CONTAINER_HEADER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_HEADER';
const CONTAINER_BODY_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_BODY';
const CONTAINER_FOOTER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_FOOTER';
const TOGGLE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_TOGGLE';
const ACTIVE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_ACTIVE';
const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6';
const TOGGLE_TEXT = 'essay-outline';

let isActive = DEFAULT_EXTENSION_ACTIVE;

function getOffsetToDocumentTop(ele: HTMLElement): number {
  return ele.getBoundingClientRect().top + document.documentElement.scrollTop;
}

function getEleDataTopAttribute(ele: HTMLElement): number {
  let result = ele.dataset.top;
  while (!result && ele.parentElement) {
    result = ele.parentElement.dataset.top;
    // eslint-disable-next-line no-param-reassign
    ele = ele.parentElement;
  }
  return Number(result);
}

function removeContainerIfAlreadyExist() {
  let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
  if (!!prevContainer && prevContainer.parentNode) {
    // if already exist
    prevContainer.parentNode.removeChild(prevContainer);
    prevContainer = null;
  }
}

function generateDom() {
  removeContainerIfAlreadyExist();
  const currentSite = window.location.href;
  let matchedSite: SiteItem | null = null;

  getStorageSites((configSites) => {
    configSites.forEach((site) => {
      if (new RegExp(site.urlRegExp as string).test(currentSite)) {
        matchedSite = site;
      }
    });
    if (!matchedSite) {
      console.debug('essay-outline extension fail, no config');
      return;
    }

    const { document } = window;
    const markdownBody = document.querySelector(matchedSite!.markdownBodySelector);
    if (!markdownBody) {
      console.debug(`essay-outline extension fail, no ${matchedSite!.markdownBodySelector} found`);
      return;
    }

    const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
    if (!headers.length) {
      console.debug(`essay-outline extension fail, no header tag under ${matchedSite!.markdownBodySelector}`);
      return;
    }

    const headersInfos: HeaderInfo[] = [];

    Array.from(headers).forEach((header: HTMLDivElement) => {
      headersInfos.push({
        html: header.innerHTML,
        level: header.tagName,
        top: getOffsetToDocumentTop(header),
      });
    });

    const container = document.createElement('div');
    container.classList.add(CONTAINER_ID);
    if (isActive) {
      container.classList.add(ACTIVE_CLASS);
    }
    const fragment = document.createDocumentFragment();

    // header
    const containerHeader = document.createElement('div');
    containerHeader.innerHTML = `<a href="${GITHUB_SOURCE_CODE_URL}" target="_blank">${TOGGLE_TEXT}</a>`;
    containerHeader.classList.add(CONTAINER_HEADER_CLASS);

    // body
    const containerBody = document.createElement('div');
    containerBody.classList.add(CONTAINER_BODY_CLASS);
    let element: HTMLDivElement;
    headersInfos.forEach(({ html, level, top }) => {
      element = document.createElement('div');
      element.classList.add(`${HEADER_CLASS_PREFIX}_${level}`);
      element.setAttribute('data-top', String(top));
      element.innerHTML = html;
      containerBody.appendChild(element);
    });

    // footer
    const containerFooter = document.createElement('div');
    containerFooter.classList.add(CONTAINER_FOOTER_CLASS);

    // toggle element
    const toggle = document.createElement('div');
    toggle.classList.add(TOGGLE_CLASS);
    toggle.innerHTML = ICON_BASE64;

    // append
    fragment.appendChild(toggle);
    fragment.appendChild(containerHeader);
    fragment.appendChild(containerBody);
    fragment.appendChild(containerFooter);

    container.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      const { target } = e;
      if (target) {
        const top = getEleDataTopAttribute(target as HTMLElement);
        document.documentElement.scrollTop = top - matchedSite!.stickyHeight;
      }
    });

    toggle.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      if (isActive) {
        container.classList.remove(ACTIVE_CLASS);
      } else {
        container.classList.add(ACTIVE_CLASS);
      }
      isActive = !isActive;
    });

    document.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      if (!(e.target as HTMLElement).contains(container) && isActive) {
        container.classList.remove(ACTIVE_CLASS);
        isActive = !isActive;
      }
    });

    container.appendChild(fragment);
    document.body.appendChild(container);
  });
}

function getEnable(callback?: (enabled: boolean) => void): void {
  // get enabled, default value is true
  chrome.storage.sync.get({ enabled: true }, (item: StorageItem) => {
    const { enabled } = item;
    if (callback) {
      callback(enabled);
    }
  });
}

function main() {
  getEnable((enabled) => {
    if (enabled) {
      generateDom();
    }
  });

  // support pjax:
  // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
  document.addEventListener('pjax:end', () => {
    getEnable((enabled) => {
      if (enabled) {
        generateDom();
      }
    });
  });
}

window.addEventListener('load', () => {
  main();
});
