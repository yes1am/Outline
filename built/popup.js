var EXTENSION_ENABLED_TEXT = '插件已启用 (点击关闭)';
var EXTENSION_DISABLED_TEXT = '插件已关闭 (点击启用)';
function getEnableFun(callback) {
    // get enabled, default value is true
    chrome.storage.sync.get({ enabled: true }, function (item) {
        var enabled = item.enabled;
        console.log("get enabled: " + enabled);
        if (callback) {
            callback(enabled);
        }
    });
}
function setEnable(enabled, callback) {
    chrome.storage.sync.set({ enabled: enabled }, function () {
        console.log("set enabled: " + enabled);
        if (callback) {
            callback();
        }
    });
}
var enableBtn = document.getElementById('EnableExtension');
if (enableBtn) {
    enableBtn.addEventListener('click', function () {
        getEnableFun(function (enabled) {
            if (enabled) {
                // if storage is true, click change into false
                setEnable(false, function () {
                    // remove class and change html
                    enableBtn.classList.remove('item-select');
                    enableBtn.innerHTML = EXTENSION_DISABLED_TEXT;
                });
            }
            else {
                // if storage is false, click change into true
                setEnable(true, function () {
                    // add class and change html
                    enableBtn.classList.add('item-select');
                    enableBtn.innerHTML = EXTENSION_ENABLED_TEXT;
                });
            }
        });
    });
    function initWhenPageLoad() {
        getEnableFun(function (enabled) {
            if (enabled) {
                enableBtn.classList.add('item-select');
                enableBtn.innerHTML = EXTENSION_ENABLED_TEXT;
            }
            else {
                enableBtn.classList.remove('item-select');
                enableBtn.innerHTML = EXTENSION_DISABLED_TEXT;
            }
        });
    }
    initWhenPageLoad();
}
