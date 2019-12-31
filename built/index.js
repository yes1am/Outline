var HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6';
var GITHUB_MARKDOWN_BODY_CLASS = '.markdown-body';
var HEADER_CLASS_PREFIX = 'GITHUB_ISSUE_BLOG_EXTENSION_CLASS';
var CONTAINER_ID = 'GITHUB_ISSUE_BLOG_EXTENSION_CONTAINER';
// in issues page, the issues title will be sticky, so we need to minus its height
function isIssuesPage() {
    return window.location.href.includes('/issues/');
}
var GITHUB_STICKY_HEIGHT = isIssuesPage() ? 60 : 0;
function getOffsetToDocumentTop(ele) {
    return ele.getBoundingClientRect().top + document.documentElement.scrollTop;
}
function getEleDataTopAttribute(ele) {
    var result = ele.dataset.top;
    while (!result && ele.parentElement) {
        result = ele.parentElement.dataset.top;
        ele = ele.parentElement;
    }
    return Number(result);
}
function removeContainerIfAlreadyExist() {
    var prevContainer = document.querySelector("." + CONTAINER_ID);
    if (!!prevContainer && prevContainer.parentNode) {
        // if already exist
        prevContainer.parentNode.removeChild(prevContainer);
        prevContainer = null;
    }
}
function generateDom(root) {
    var document = root.document;
    removeContainerIfAlreadyExist();
    var markdownBody = document.querySelector(GITHUB_MARKDOWN_BODY_CLASS);
    if (!markdownBody) {
        console.log('this extension only works in github page with markdown, exit');
        return;
    }
    var headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
    if (!headers) {
        console.log('cant find header tag, exit');
        return;
    }
    var headersInfos = [];
    Array.from(headers).forEach(function (header) {
        headersInfos.push({
            html: header.innerHTML,
            level: header.tagName,
            top: getOffsetToDocumentTop(header)
        });
    });
    var container = document.createElement('div');
    container.classList.add(CONTAINER_ID);
    var fragment = document.createDocumentFragment();
    var element;
    headersInfos.forEach(function (_a) {
        var html = _a.html, level = _a.level, top = _a.top;
        element = document.createElement('div');
        element.classList.add(HEADER_CLASS_PREFIX + "_" + level);
        element.setAttribute('data-top', String(top));
        element.innerHTML = html;
        fragment.appendChild(element);
    });
    container.addEventListener('click', function (e) {
        var target = e.target;
        if (target) {
            var top_1 = getEleDataTopAttribute(target);
            document.documentElement.scrollTop = top_1 - GITHUB_STICKY_HEIGHT;
        }
    });
    container.appendChild(fragment);
    document.body.appendChild(container);
}
function getEnable(callback) {
    // get enabled, default value is true
    chrome.storage.sync.get({ enabled: true }, function (item) {
        var enabled = item.enabled;
        if (callback) {
            callback(enabled);
        }
    });
}
function main() {
    getEnable(function (enabled) {
        if (enabled) {
            generateDom(this);
        }
    });
    // support pjax: 
    // pjax events fire order: pjax:start, pjax:success, pjax:complete, pjax:end
    document.addEventListener("pjax:end", function () {
        getEnable(function (enabled) {
            if (enabled) {
                generateDom(this);
            }
        });
    });
}
main();
