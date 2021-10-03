import ICON_BASE64 from './icon-base64';
import { SiteItem, HeaderInfo } from './types';
import { getStorageSites, getStorageEnable, debug } from './utils';
import { DEFAULT_EXTENSION_ACTIVE } from './constants';

const GITHUB_SOURCE_CODE_URL = 'https://github.com/yes1am/Outline';
const HEADER_CLASS_PREFIX = 'CHROME_ESSAY_OUTLINE_EXTENSION_CLASS';
const CONTAINER_ID = 'CHROME_ESSAY_OUTLINE_EXTENSION_CONTAINER';
const CONTAINER_HEADER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_HEADER';
const CONTAINER_BODY_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_BODY';
const CONTAINER_FOOTER_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_FOOTER';
const TOGGLE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_TOGGLE';
const ACTIVE_CLASS = 'CHROME_ESSAY_OUTLINE_EXTENSION_ACTIVE';
const HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6';
const HEADER_TEXT = '目录';

let isActive = DEFAULT_EXTENSION_ACTIVE;

function getOffsetToDocumentTop(ele: HTMLElement): number {
  return ele.getBoundingClientRect().top + document.documentElement.scrollTop;
}

function removeContainerIfAlreadyExist() {
  let prevContainer = document.querySelector(`.${CONTAINER_ID}`);
  if (!!prevContainer && prevContainer.parentNode) {
    // if already exist
    prevContainer.parentNode.removeChild(prevContainer);
    prevContainer = null;
  }
}

/**
 *
 * @param tagNum header 标签的数字部分，比如 h1 标签，则 level 为 1
 * @returns 返回比当前 level 小的数的数字，比如 level 为 3，则返回 [2,1,0]
 */
function getParent(level: number): number[] {
  const arr = [];
  for (let i = level - 1; i >= 0; i -= 1) {
    arr.push(i);
  }
  return arr;
}

// 将 [{ h1, ... }, { h2, ... }, ...] 转为 [{ h1, ..., children: [{ h2, ... }] }, ...]
function convertArrToTree(data: HeaderInfo[]): HeaderInfo {
  const result: HeaderInfo[] = JSON.parse(JSON.stringify(data));
  result.forEach((item1, index1) => {
    if (item1.parents.length) {
      // 从当前位置往前面找，比如当前索引是 3，则父级可能为 2 或 1
      const previousHeaders = result.slice(0, index1).reverse();
      // find 会在找到后不继续往下找
      item1.parents.find((level) => {
        const parent = previousHeaders.find((item2) => item2.level === level);
        if (parent) {
          parent.children.push(item1);
          return true;
        }
        return false;
      });
    }
  });
  return result[0];
}

function renderTree(obj: HeaderInfo): string {
  if (obj.children.length) {
    let str = '';
    obj.children.forEach((item) => {
      let ele = `<div data-top="${item.top}" title="${item.text}">${item.text}</div>`;
      if (item.children?.length) {
        ele += renderTree(item as HeaderInfo);
      }
      str += `<li class="${HEADER_CLASS_PREFIX}_${item.level}">${ele}</li>`;
    });
    return `<ul>${str}</ul>`;
  }
  return '';
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
      debug('Outline extension fail, no config');
      return;
    }

    const { document } = window;
    const markdownBody = document.querySelector(matchedSite!.markdownBodySelector);
    if (!markdownBody) {
      debug(`Outline extension fail, no ${matchedSite!.markdownBodySelector} found`);
      return;
    }

    const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
    if (!headers.length) {
      debug(`Outline extension fail, no header tag under ${matchedSite!.markdownBodySelector}`);
      return;
    }

    const headersInfos: HeaderInfo[] = [];

    Array.from(headers).forEach((header: HTMLDivElement) => {
      const level = Number(header.tagName.slice(1));
      headersInfos.push({
        text: header.innerText,
        level,
        top: getOffsetToDocumentTop(header),
        children: [],
        parents: getParent(level),
      });
    });

    // 插入 h0
    headersInfos.unshift({
      text: '',
      level: 0,
      top: 0,
      children: [],
      parents: [],
    });

    const renderTreeInfo = convertArrToTree(headersInfos);

    const container = document.createElement('div');
    container.classList.add(CONTAINER_ID);
    if (isActive) {
      container.classList.add(ACTIVE_CLASS);
    }
    const fragment = document.createDocumentFragment();

    // header
    const containerHeader = document.createElement('div');
    containerHeader.innerHTML = `<a title="Fork Me On Github" href="${GITHUB_SOURCE_CODE_URL}" target="_blank">${HEADER_TEXT}</a>`;
    containerHeader.classList.add(CONTAINER_HEADER_CLASS);

    // body
    const containerBody = document.createElement('div');
    containerBody.classList.add(CONTAINER_BODY_CLASS);
    containerBody.innerHTML = renderTree(renderTreeInfo);

    // footer
    const containerFooter = document.createElement('div');
    containerFooter.classList.add(CONTAINER_FOOTER_CLASS);

    // toggle element
    const toggle = document.createElement('div');
    toggle.classList.add(TOGGLE_CLASS);
    toggle.title = 'Outline';
    toggle.innerHTML = ICON_BASE64;

    // append
    fragment.appendChild(toggle);
    fragment.appendChild(containerHeader);
    fragment.appendChild(containerBody);
    fragment.appendChild(containerFooter);

    container.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      const { top } = (e.target as HTMLElement)?.dataset;
      if (top) {
        document.documentElement.scrollTop = Number(top);
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

    container.appendChild(fragment);
    document.body.appendChild(container);
  });
}

function main() {
  getStorageEnable((enabled) => {
    if (enabled) {
      generateDom();
    }
  });

  // support pjax:
  // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
  document.addEventListener('pjax:end', () => {
    getStorageEnable((enabled) => {
      if (enabled) {
        generateDom();
      }
    });
  });
}

window.addEventListener('load', () => {
  main();
});
