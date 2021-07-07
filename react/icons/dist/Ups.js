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
exports.Ups = void 0;
var react_1 = __importDefault(require("react"));
var utilities_1 = require("./utilities");
var ProgressIcon_1 = require("./ProgressIcon");
var basePath = 'M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z';
var Ups = function (props) {
    var backgroundColor = props.backgroundColor, _a = props.outlined, outlined = _a === void 0 ? false : _a, _b = props.size, size = _b === void 0 ? 24 : _b, _c = props.percent, percent = _c === void 0 ? 100 : _c, _d = props.color, color = _d === void 0 ? 'inherit' : _d, labelSize = props.labelSize, labelColor = props.labelColor, showPercentLabel = props.showPercentLabel, labelPosition = props.labelPosition, classes = props.classes, svgProps = __rest(props, ["backgroundColor", "outlined", "size", "percent", "color", "labelSize", "labelColor", "showPercentLabel", "labelPosition", "classes"]);
    var rangedPercent = utilities_1.rangeValue(percent, 0, 100);
    var startY = outlined ? ((100 - rangedPercent) / 100) * 16 + 4 : ((100 - rangedPercent) / 100) * 20 + 2;
    var fillHeight = outlined ? (rangedPercent / 100) * 16 : (rangedPercent / 100) * 20;
    return (react_1.default.createElement(ProgressIcon_1.ProgressIcon, { color: color, percent: percent, labelColor: labelColor, labelSize: labelSize, size: size, showPercentLabel: showPercentLabel, labelPosition: labelPosition, classes: classes },
        react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: 0, y: 0, viewBox: "0 0 24 24" }, svgProps),
            !outlined && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("path", { opacity: backgroundColor ? 1 : 0.3, d: basePath, fill: backgroundColor || color || 'currentColor' }),
                react_1.default.createElement("mask", { id: "mask-filled", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 2, y: 2, width: 20, height: 20 },
                    react_1.default.createElement("path", { d: basePath, fill: color || 'currentColor' })),
                react_1.default.createElement("g", { mask: "url(#mask-filled)" },
                    react_1.default.createElement("rect", { x: 2, y: startY, width: 20, height: fillHeight, fill: color })))),
            outlined && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("clipPath", { id: "outlined-progress-clip" },
                        react_1.default.createElement("path", { d: "M4 8V4H20V8H17V9H20V12H17V13H20V16H17V17H20V20H4V17H7V16H4V13H7V12H4V9H7V8H4Z" })),
                    react_1.default.createElement("clipPath", { id: "outlined-border-clip-" + rangedPercent },
                        react_1.default.createElement("rect", { x: "2", y: "2", width: "20", height: startY - 2 }))),
                backgroundColor && react_1.default.createElement("rect", { x: 4, y: 4, width: 16, height: 16, fill: backgroundColor }),
                react_1.default.createElement("path", { fillRule: "evenodd", d: "M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z", clipPath: "url(#outlined-border-clip-" + rangedPercent + ")", clipRule: "evenodd", fill: color }),
                react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V20H20V4Z", fill: color }),
                react_1.default.createElement("rect", { x: "4", y: startY, width: "16", height: fillHeight, clipPath: "url(#outlined-progress-clip)", fill: color }))))));
};
exports.Ups = Ups;
