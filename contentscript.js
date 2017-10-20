/**
 * @see https://stackoverflow.com/questions/38826503/copy-paste-is-not-working-in-command-prompt-neither-right-click-or-keyboard-shor
 */

'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {   
    var c = document.createElement("script");
    c.innerHTML = "! function() {"+
                  "      function t() {"+
                  "          function n(t, e) {"+
                  "              s = s.concat(RFB.messages.keyEvent(t, e))"+
                  "          }"+
                  "          var o = e.shift(),"+
                  "              s = [],"+
                  "              i = o.charCodeAt(),"+
                  "              c = -1 !== '!@#$%^&*()_+{}:\"<>?~|'.indexOf(o),"+
                  "              r = 65505;"+
                  "          c && n(r, 1), n(i, 1), n(i, 0), c && n(r, 0), rfb._sock.send(s), e.length > 0 && setTimeout(t, 10)"+
                  "      }"+
                  "      var e = \"" + request.data + "\".split(\"\");"+
                  "      t()"+
                  "  }();";
          
    document.body.appendChild(c);
});