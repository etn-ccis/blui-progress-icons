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
exports.Heart = void 0;
var react_1 = __importDefault(require("react"));
var utilities_1 = require("./utilities");
var ProgressIcon_1 = require("./ProgressIcon");
var basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
var outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
var getPath = function (outlined) { return (outlined ? outlinedPath : basePath); };
var Heart = function (props) {
    var backgroundColor = props.backgroundColor, _a = props.outlined, outlined = _a === void 0 ? false : _a, _b = props.size, size = _b === void 0 ? 24 : _b, _c = props.percent, percent = _c === void 0 ? 100 : _c, _d = props.color, color = _d === void 0 ? 'inherit' : _d, labelSize = props.labelSize, labelColor = props.labelColor, showPercentLabel = props.showPercentLabel, labelPosition = props.labelPosition, classes = props.classes, svgProps = __rest(props, ["backgroundColor", "outlined", "size", "percent", "color", "labelSize", "labelColor", "showPercentLabel", "labelPosition", "classes"]);
    var startY = outlined ? 18.35 : 21.35;
    var fillHeight = outlined ? 13.35 : 18.35;
    return (react_1.default.createElement(ProgressIcon_1.ProgressIcon, { color: color, percent: percent, labelColor: labelColor, labelSize: labelSize, size: size, showPercentLabel: showPercentLabel, labelPosition: labelPosition, classes: classes },
        react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24" }, svgProps),
            outlined && backgroundColor && react_1.default.createElement("path", { d: basePath, fill: backgroundColor }),
            react_1.default.createElement("path", { fill: (!outlined && backgroundColor) || color || 'currentColor', fillOpacity: outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3', d: getPath(outlined) }),
            react_1.default.createElement("clipPath", { id: "pxb-heart-clip" },
                react_1.default.createElement("path", { d: basePath })),
            percent > 0 && (react_1.default.createElement("rect", { fill: color || 'currentColor', clipPath: "url(#pxb-heart-clip)", x: "2", y: startY - (utilities_1.rangeValue(percent, 0, 100) * fillHeight) / 100, width: "20", height: "20" })))));
};
exports.Heart = Heart;
