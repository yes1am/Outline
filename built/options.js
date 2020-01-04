var _DEFAULT_CONFIG_SITES = [
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
        "markdownBodySelector": ".Post-RichText",
        "stickyHeight": 52,
        "urlRegExp": "^https://zhuanlan.zhihu.com/p/"
    }
];
var KEYS_ARR = ["urlRegExp", "markdownBodySelector", "stickyHeight"];
function _getConfigSites(callback) {
    // get enabled, default value is true
    chrome.storage.sync.get({ configSites: _DEFAULT_CONFIG_SITES }, function (item) {
        var configSites = item.configSites;
        if (callback) {
            callback(configSites);
        }
    });
}
function _setConfigSites(configSites, callback) {
    chrome.storage.sync.set({ configSites: configSites }, function () {
        console.log("set configSites: " + JSON.stringify(configSites));
        if (callback) {
            callback();
        }
    });
}
window.addEventListener('load', function () {
    var configArea = document.querySelector('#config-area');
    var isClicked = false;
    var addConfigBtn = document.querySelector('#add-config-btn');
    if (configArea) {
        _getConfigSites(function (configSites) {
            try {
                configArea.value = JSON.stringify(configSites, null, 2);
            }
            catch (e) {
                console.debug("options.js, JSON.stringify(configSites,null,2) error");
            }
        });
    }
    if (addConfigBtn && configArea) {
        addConfigBtn.addEventListener('click', function () {
            if (isClicked) {
                return;
            }
            isClicked = true;
            var textareaArea = configArea.value;
            var newConfigValue = null;
            try {
                newConfigValue = JSON.parse(textareaArea);
                newConfigValue.some(function (item) {
                    return KEYS_ARR.some(function (key) {
                        if (!(item.hasOwnProperty(key))) {
                            throw new Error("every item should has key: " + key);
                        }
                        return false;
                    });
                });
            }
            catch (e) {
                alert("textarea value format error: " + e);
                isClicked = false;
                return;
            }
            _setConfigSites(newConfigValue, function () {
                isClicked = false;
                alert('config save success');
            });
        });
    }
});
