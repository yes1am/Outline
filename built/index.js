var HEADER_CLASS_PREFIX = 'CHROME_OUTLINE_EXTENSION_CLASS';
var CONTAINER_ID = 'CHROME_OUTLINE_EXTENSION_CONTAINER';
var HEADER_SELECTOR_STRING = 'h1,h2,h3,h4,h5,h6';
var CONFIG_SITES = [
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
];
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
    removeContainerIfAlreadyExist();
    var currentSite = window.location.href;
    var matchedSite = null;
    CONFIG_SITES.forEach(function (site) {
        if (site.urlRegExp.test(currentSite)) {
            matchedSite = site;
        }
    });
    if (!matchedSite) {
        console.debug('chrome outline extension fail, no config');
        return;
    }
    var document = root.document;
    var markdownBody = document.querySelector(matchedSite.markdownBodySelector);
    if (!markdownBody) {
        console.debug("chrome outline extension fail, no " + matchedSite.markdownBodySelector + " found");
        return;
    }
    var headers = markdownBody.querySelectorAll(HEADER_SELECTOR_STRING);
    if (!headers) {
        console.debug("chrome outline extension fail, no header tag under " + matchedSite.markdownBodySelector);
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
            document.documentElement.scrollTop = top_1 - matchedSite.stickyHeight;
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
window.addEventListener('load', function () {
    main();
});
