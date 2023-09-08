import 'react';
import 'moment';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".CalenderWrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.CalenderWrapper_header {\n  display: flex;\n  gap: 10px;\n  color: #676767;\n}\n.CalenderWrapper_icon {\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.CalenderWrapper_header_title {\n  display: flex;\n  gap: 6px;\n}\n.CalenderWrapper_header_title span {\n  color: #f2634c;\n}\n.Calender_button_group {\n  display: flex;\n  gap: 10px;\n}\n.default_select_style {\n  display: flex;\n  width: 120px;\n  height: 60px;\n  justify-content: center;\n  align-items: center;\n  padding-right: 10px;\n  color: #0db39f;\n  border-radius: 14px;\n  border: 1px solid #0db39f;\n  font-size: 18px;\n}\n";
styleInject(css_248z);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
//# sourceMappingURL=index.es.js.map
