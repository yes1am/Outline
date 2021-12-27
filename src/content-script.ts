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

interface RefType {
  [key: string]: HTMLDivElement
}

let refs: RefType = {

};

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
      let ele = `<div data-index="${item.index}" title="${item.text}">${item.text}</div>`;
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
  // 清空 refs
  refs = {};
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
    // NOTE:
    // 如果有 iframeSelector, 则 outerDocument 即为最外层的 document,
    // 而 innerDocument 是内部 iframeSelector 的 document 对象
    // 创建的元素加到 outerDocument 上（加到 innerDocument 的话，插件的 css 不生效）
    // innerDocument 用来找到匹配的元素
    const outerDocument = window.document;
    let innerDocument = window.document;
    let innerWindow = window as Window;
    // 兼容 iframeSelector 的情况
    if (matchedSite.iframeSelector) {
      innerDocument = (outerDocument.querySelector(matchedSite.iframeSelector) as HTMLIFrameElement)
      ?.contentWindow?.document || innerDocument;
      innerWindow = (outerDocument.querySelector(matchedSite.iframeSelector) as HTMLIFrameElement)
      ?.contentWindow || innerWindow;
    }
    const markdownBody = innerDocument.querySelector(matchedSite!.markdownBodySelector);
    if (!markdownBody) {
      debug(`Outline extension fail, no ${matchedSite!.markdownBodySelector} found`);
      return;
    }

    const headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
    if (!headers.length) {
      debug(`Outline extension fail, no header tag under ${matchedSite!.markdownBodySelector}`);
      return;
    }

    Array.from(headers).forEach((item: HTMLDivElement, index: number) => {
      refs[String(index)] = item;
    });

    const headersInfos: HeaderInfo[] = [];

    Array.from(headers).forEach((header: HTMLDivElement, index: number) => {
      const level = Number(header.tagName.slice(1));
      headersInfos.push({
        text: header.innerText,
        level,
        index,
        children: [],
        parents: getParent(level),
      });
    });

    // 插入 h0
    headersInfos.unshift({
      text: '',
      level: 0,
      index: -1,
      children: [],
      parents: [],
    });

    const renderTreeInfo = convertArrToTree(headersInfos);

    const container = outerDocument.createElement('div');
    container.classList.add(CONTAINER_ID);
    if (isActive) {
      container.classList.add(ACTIVE_CLASS);
    }
    // overlay 时，滚动条不占据空间，要避免遮挡。滚动条宽度为 15px
    if (innerWindow.getComputedStyle(document.documentElement).overflowY === 'overlay') {
      container.style.right = '15px';
    } else {
      container.style.right = '0px';
    }

    const fragment = outerDocument.createDocumentFragment();

    // header
    const containerHeader = outerDocument.createElement('div');
    containerHeader.innerHTML = `<a title="Fork Me On Github" href="${GITHUB_SOURCE_CODE_URL}" target="_blank">${HEADER_TEXT}</a>`;
    containerHeader.classList.add(CONTAINER_HEADER_CLASS);

    // body
    const containerBody = outerDocument.createElement('div');
    containerBody.classList.add(CONTAINER_BODY_CLASS);
    containerBody.innerHTML = renderTree(renderTreeInfo);

    // footer
    const containerFooter = outerDocument.createElement('div');
    containerFooter.classList.add(CONTAINER_FOOTER_CLASS);

    // toggle element
    const toggle = outerDocument.createElement('div');
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
      const { index } = (e.target as HTMLElement)?.dataset;
      if (index !== undefined && refs[index]) {
        const y = refs[index].getBoundingClientRect().top
          + innerWindow.scrollY + (matchedSite!.navHeight || 0);
        innerWindow.scrollTo({ top: y, behavior: 'smooth' });
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
    outerDocument.body.appendChild(container);
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

// 监听 popup 消息
chrome.runtime.onMessage.addListener((request) => {
  if (request.cmd === 'reload') {
    getStorageEnable((enabled) => {
      if (enabled) {
        debug('Outline extension reload');
        generateDom();
      } else {
        debug('Outline extension reload failed, extension not enable');
      }
    });
  }
});

window.addEventListener('load', () => {
  main();
});
