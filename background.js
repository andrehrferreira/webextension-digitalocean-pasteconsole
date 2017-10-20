/**
 * @see https://gist.github.com/srsudar/e9a41228f06f32f272a2
 */

'use strict';

function getContentFromClipboard() {
    var result = '';
    var sandbox = document.getElementById('sandbox');
    sandbox.value = '';
    sandbox.select();
    
    if(document.execCommand('paste'))
        result = sandbox.value;
   
    sandbox.value = '';
    return result;
}

chrome.runtime.onInstalled.addListener(function(details) {
    chrome.contextMenus.create({"title": "Paste in Console", "onclick": function(info, tab){
        var clipboardContent = getContentFromClipboard();

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: clipboardContent});
        });
    }});
});