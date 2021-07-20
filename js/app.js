let changeColor = document.getElementById('changeColor');

changeColor.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var file = document.getElementsByClassName("el-input__inner")[0].value
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'var file = ' + JSON.stringify(file)
        }, function () {
            chrome.tabs.executeScript(tabs[0].id, { file: 'js/test.js' });
        });
    });
};


