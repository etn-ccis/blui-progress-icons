"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battery = void 0;
var react_1 = __importDefault(require("react"));
var utilities_1 = require("./utilities");
var ProgressIcon_1 = require("./ProgressIcon");
var basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
var chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
var outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
var baseID = 'pxb-battery-clip';
var chargeID = 'pxb-battery-clip-charge';
var getBasepath = function (outlined) { return (outlined ? outlinedPath : basePath); };
var getClipPath = function (charging) { return (charging ? chargePath : basePath); };
var getID = function (charging) { return (charging ? chargeID : baseID); };
var Battery = function (props) {
    var backgroundColor = props.backgroundColor, _a = props.outlined, outlined = _a === void 0 ? false : _a, _b = props.charging, charging = _b === void 0 ? false : _b, _c = props.size, size = _c === void 0 ? 24 : _c, _d = props.percent, percent = _d === void 0 ? 100 : _d, _e = props.color, color = _e === void 0 ? 'inherit' : _e, labelSize = props.labelSize, labelColor = props.labelColor, showPercentLabel = props.showPercentLabel, labelPosition = props.labelPosition, classes = props.classes, svgProps = __rest(props, ["backgroundColor", "outlined", "charging", "size", "percent", "color", "labelSize", "labelColor", "showPercentLabel", "labelPosition", "classes"]);
    var maskIDleft = "maskLeft-" + percent;
    var maskIDright = "maskRight-" + percent;
    var startX = outlined ? 3.9 : 2;
    var fillWidth = outlined ? 14.2 : 18;
    return (react_1.default.createElement(ProgressIcon_1.ProgressIcon, { color: color, percent: percent, labelColor: labelColor, labelSize: labelSize, size: size, showPercentLabel: showPercentLabel, labelPosition: labelPosition, classes: classes },
        react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24" }, svgProps),
            react_1.default.createElement("defs", null,
                outlined && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("mask", { id: maskIDleft },
                        react_1.default.createElement("rect", { width: "100%", height: "100%", fill: "white" }),
                        react_1.default.createElement("polygon", { fill: "black", points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " })),
                    react_1.default.createElement("mask", { id: maskIDright },
                        react_1.default.createElement("rect", { width: "100%", height: "100%", fill: "white" }),
                        react_1.default.createElement("rect", { x: startX, y: "7", fill: "black", width: "" + Math.min((utilities_1.rangeValue(percent, 0, 100) * fillWidth) / 100, fillWidth), height: "10" })))),
                react_1.default.createElement("clipPath", { id: getID(charging || utilities_1.defaultProps.charging) },
                    react_1.default.createElement("path", { overflow: "visible", d: getClipPath(charging) }))),
            backgroundColor && (react_1.default.createElement("path", { d: basePath, fill: backgroundColor, clipPath: outlined ? undefined : "url(#" + getID(charging) + ")" })),
            react_1.default.createElement("path", { fill: (!outlined && backgroundColor) || color || 'currentColor', fillOpacity: outlined || percent >= 100 || (!outlined && backgroundColor) ? 1 : 0.3, clipPath: "url(#" + getID(charging) + ")", d: getBasepath(outlined) }),
            react_1.default.createElement("g", { fill: color || 'currentColor' },
                react_1.default.createElement("rect", { x: startX, y: "7", clipPath: "url(#" + getID(charging) + ")", width: "" + Math.min((utilities_1.rangeValue(percent, 0, 100) * fillWidth) / 100, fillWidth), height: "10", mask: outlined && charging ? "url(#" + maskIDleft + ")" : undefined }),
                outlined && charging && (react_1.default.createElement("polygon", { points: "11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13", mask: "url(#" + maskIDright + ")" }))))));
};
exports.Battery = Battery;
