'use strict';

var React = require('react');
var moment = require('moment');

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

var CalenderIcon = function () {
    return (React.createElement("svg", { width: "29", height: "29", viewBox: "0 0 29 29", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { clipPath: "url(#clip0_161_2588)" },
            React.createElement("path", { d: "M22.7956 2.72786H21.6289V1.5612C21.6289 1.25178 21.506 0.955032 21.2872 0.73624C21.0684 0.517448 20.7717 0.394531 20.4622 0.394531C20.1528 0.394531 19.8561 0.517448 19.6373 0.73624C19.4185 0.955032 19.2956 1.25178 19.2956 1.5612V2.72786H9.96224V1.5612C9.96224 1.25178 9.83932 0.955032 9.62053 0.73624C9.40174 0.517448 9.10499 0.394531 8.79557 0.394531C8.48615 0.394531 8.18941 0.517448 7.97062 0.73624C7.75182 0.955032 7.62891 1.25178 7.62891 1.5612V2.72786H6.46224C4.91571 2.72972 3.43306 3.34489 2.3395 4.43845C1.24594 5.53202 0.630759 7.01467 0.628906 8.5612L0.628906 22.5612C0.630759 24.1077 1.24594 25.5904 2.3395 26.6839C3.43306 27.7775 4.91571 28.3927 6.46224 28.3945H22.7956C24.3421 28.3927 25.8248 27.7775 26.9183 26.6839C28.0119 25.5904 28.6271 24.1077 28.6289 22.5612V8.5612C28.6271 7.01467 28.0119 5.53202 26.9183 4.43845C25.8248 3.34489 24.3421 2.72972 22.7956 2.72786ZM2.96224 8.5612C2.96224 7.63294 3.33099 6.7427 3.98737 6.08632C4.64374 5.42995 5.53398 5.0612 6.46224 5.0612H22.7956C23.7238 5.0612 24.6141 5.42995 25.2704 6.08632C25.9268 6.7427 26.2956 7.63294 26.2956 8.5612V9.72787H2.96224V8.5612ZM22.7956 26.0612H6.46224C5.53398 26.0612 4.64374 25.6925 3.98737 25.0361C3.33099 24.3797 2.96224 23.4895 2.96224 22.5612V12.0612H26.2956V22.5612C26.2956 23.4895 25.9268 24.3797 25.2704 25.0361C24.6141 25.6925 23.7238 26.0612 22.7956 26.0612Z", fill: "#676767" }),
            React.createElement("path", { d: "M14.6289 19.6445C15.5954 19.6445 16.3789 18.861 16.3789 17.8945C16.3789 16.928 15.5954 16.1445 14.6289 16.1445C13.6624 16.1445 12.8789 16.928 12.8789 17.8945C12.8789 18.861 13.6624 19.6445 14.6289 19.6445Z", fill: "#676767" }),
            React.createElement("path", { d: "M8.79559 19.6445C9.76209 19.6445 10.5456 18.861 10.5456 17.8945C10.5456 16.928 9.76209 16.1445 8.79559 16.1445C7.82909 16.1445 7.04559 16.928 7.04559 17.8945C7.04559 18.861 7.82909 19.6445 8.79559 19.6445Z", fill: "#676767" }),
            React.createElement("path", { d: "M20.4622 19.6445C21.4287 19.6445 22.2122 18.861 22.2122 17.8945C22.2122 16.928 21.4287 16.1445 20.4622 16.1445C19.4957 16.1445 18.7122 16.928 18.7122 17.8945C18.7122 18.861 19.4957 19.6445 20.4622 19.6445Z", fill: "#676767" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_161_2588" },
                React.createElement("rect", { width: "28", height: "28", fill: "white", transform: "translate(0.628906 0.394531)" })))));
};

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


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Button = function (_a) {
    var title = _a.title, options = _a.options, name = _a.name, props = __rest(_a, ["title", "options", "name"]);
    return (React.createElement("div", null,
        React.createElement("select", __assign({ name: name }, props, { defaultValue: title }),
            React.createElement("option", { disabled: true, value: title, hidden: true }, title), options === null || options === void 0 ? void 0 :
            options.map(function (item) { return (React.createElement("option", { value: item.value, key: item.value }, item.title)); }))));
};

var sinceYears = function (back, calenderType) {
    var year = new Date().getFullYear();
    if (calenderType === "jalali") {
        return Array.from({ length: back }, function (v, i) { return year - 621 - back + i + 1; }).reverse();
    }
    else {
        return Array.from({ length: back }, function (v, i) { return year - back + i + 1; }).reverse();
    }
};
var daysOfMonth = function () {
    var m = moment();
    var count = 0;
    var daysInMonth = m.daysInMonth();
    return Array.from({ length: daysInMonth }, function (v, i) { return count + i + 1; });
};
var convertToJalali = {
    "1": { name: "فروردین" },
    "2": { name: "اردیبهشت" },
    "3": { name: "خرداد" },
    "4": { name: "تیر" },
    "5": { name: "مرداد" },
    "6": { name: "شهریور" },
    "7": { name: "مهر" },
    "8": { name: "آبان" },
    "9": { name: "آذر" },
    "10": { name: "دی" },
    "11": { name: "بهمن" },
    "12": { name: "اسفند" },
};
var MonthMapper = function (calenderType) {
    if (calenderType === "jalali") {
        return Object.keys(convertToJalali).map(function (item) {
            return { title: convertToJalali[item].name, value: String(item) };
        });
    }
    else {
        return moment.months().map(function (item) {
            return { title: String(item), value: String(item) };
        });
    }
};

var ButtonGroup = function (_a) {
    var buttonGroupClassName = _a.buttonGroupClassName, daysValue = _a.daysValue, monthValue = _a.monthValue, yearValue = _a.yearValue, buttonClassName = _a.buttonClassName, calenderType = _a.calenderType, onChangeHandler = _a.onChangeHandler;
    return (React.createElement("div", { className: buttonGroupClassName ? buttonGroupClassName : "Calender_button_group" },
        React.createElement(Button, { value: daysValue, onChange: onChangeHandler, className: buttonClassName, name: "days", options: daysOfMonth().map(function (item) {
                return { title: String(item), value: String(item) };
            }), title: calenderType === "jalali" ? "روز" : "day" }),
        React.createElement(Button, { value: monthValue, onChange: onChangeHandler, className: buttonClassName, name: "month", options: MonthMapper(calenderType), title: calenderType === "jalali" ? "ماه" : "month" }),
        React.createElement(Button, { value: yearValue, onChange: onChangeHandler, className: buttonClassName, name: "year", options: sinceYears(50, calenderType).map(function (item) {
                return { title: String(item), value: String(item) };
            }), title: calenderType === "jalali" ? "سال" : "year" })));
};

var CalenderWrapper = function (_a) {
    var calenderType = _a.calenderType, title = _a.title, isRequired = _a.isRequired, buttonGroupClassName = _a.buttonGroupClassName, buttonClassName = _a.buttonClassName, daysValue = _a.daysValue, monthValue = _a.monthValue, yearValue = _a.yearValue, onChangeCalender = _a.onChangeCalender;
    var onChangeHandler = function (event) {
        onChangeCalender && onChangeCalender(event);
    };
    return (React.createElement("div", { className: "CalenderWrapper", dir: "rtl" },
        React.createElement("div", { className: "CalenderWrapper_header" },
            React.createElement("div", { className: "CalenderWrapper_icon " },
                React.createElement(CalenderIcon, null)),
            React.createElement("div", { className: "CalenderWrapper_header_title" },
                title,
                isRequired && React.createElement("span", null, "*"))),
        React.createElement(ButtonGroup, { buttonClassName: buttonClassName, calenderType: calenderType, buttonGroupClassName: buttonGroupClassName, daysValue: daysValue, monthValue: monthValue, yearValue: yearValue, onChangeHandler: onChangeHandler })));
};
CalenderWrapper.defaultProps = {
    calenderType: "default",
};

exports.CalenderWrapper = CalenderWrapper;
//# sourceMappingURL=index.js.map
