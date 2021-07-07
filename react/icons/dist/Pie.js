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
exports.Pie = void 0;
var react_1 = __importDefault(require("react"));
var utilities_1 = require("./utilities");
var ProgressIcon_1 = require("./ProgressIcon");
var Pie = function (props) {
    var backgroundColor = props.backgroundColor, _a = props.outlined, outlined = _a === void 0 ? false : _a, _b = props.ring, ring = _b === void 0 ? 10 : _b, _c = props.style, style = _c === void 0 ? {} : _c, _d = props.size, size = _d === void 0 ? 24 : _d, _e = props.percent, percent = _e === void 0 ? 100 : _e, _f = props.color, color = _f === void 0 ? 'inherit' : _f, labelSize = props.labelSize, labelColor = props.labelColor, showPercentLabel = props.showPercentLabel, labelPosition = props.labelPosition, classes = props.classes, svgProps = __rest(props, ["backgroundColor", "outlined", "ring", "style", "size", "percent", "color", "labelSize", "labelColor", "showPercentLabel", "labelPosition", "classes"]);
    var stroke = Math.max(1, Math.min(10, Math.round(ring)));
    var iconStroke = 2;
    stroke = outlined ? Math.max(stroke, 2 * iconStroke + 1) : stroke;
    // Ring properties
    var centerX = 12;
    var centerY = 12;
    // Outer ring
    var outerRadiusLarge = 10;
    var innerRadiusLarge = 10 - iconStroke;
    // Inner ring
    var outerRadiusSmall = 10 - stroke + iconStroke;
    var innerRadiusSmall = 10 - stroke;
    if (innerRadiusSmall === 0) {
        outerRadiusSmall = 0;
    }
    var outlineBase = "\nM " + centerX + " " + (centerY - outerRadiusLarge) + "\nA " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY + outerRadiusLarge) + "\nA " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY - outerRadiusLarge) + "\nZ\nM " + centerX + " " + (centerY - innerRadiusLarge) + "\nA " + innerRadiusLarge + " " + innerRadiusLarge + " 0 1 1 " + centerX + " " + (centerY + innerRadiusLarge) + "\nA " + innerRadiusLarge + " " + innerRadiusLarge + " 0 1 1 " + centerX + " " + (centerY - innerRadiusLarge) + "\nZ\nM " + centerX + " " + (centerY - outerRadiusSmall) + "\nA " + outerRadiusSmall + " " + outerRadiusSmall + " 0 1 0 " + centerX + " " + (centerY + outerRadiusSmall) + "\nA " + outerRadiusSmall + " " + outerRadiusSmall + " 0 1 0 " + centerX + " " + (centerY - outerRadiusSmall) + "\nZ\nM " + centerX + " " + (centerY - innerRadiusSmall) + "\nA " + innerRadiusSmall + " " + innerRadiusSmall + " 0 1 1 " + centerX + " " + (centerY + innerRadiusSmall) + "\nA " + innerRadiusSmall + " " + innerRadiusSmall + " 0 1 1 " + centerX + " " + (centerY - innerRadiusSmall) + "\nZ\n";
    var twoToneBase = "\nM " + centerX + " " + (centerY - outerRadiusLarge) + "\nA " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY + outerRadiusLarge) + "\nA " + outerRadiusLarge + " " + outerRadiusLarge + " 0 1 0 " + centerX + " " + (centerY - outerRadiusLarge) + "\nZ\n";
    var clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - stroke) + " \nA " + (10 - stroke) + "," + (10 - stroke) + ",0,1,1," + (22 - stroke) + ",12,\n" + (10 - stroke) + "," + (10 - stroke) + ",0,0,1,12," + (22 - stroke) + "\nZ\n";
    var transform = style && style.transform ? style.transform + " rotate(-.25turn)" : "rotate(-.25turn)";
    return (react_1.default.createElement(ProgressIcon_1.ProgressIcon, { color: color, percent: percent, labelColor: labelColor, labelSize: labelSize, size: size, showPercentLabel: showPercentLabel, labelPosition: labelPosition, classes: classes },
        react_1.default.createElement("svg", __assign({ height: size + "px", width: size + "px", x: "0px", y: "0px", viewBox: "0 0 24 24", style: Object.assign(style, { transform: transform }) }, svgProps),
            react_1.default.createElement("clipPath", { id: "pxb-donut-clip-" + stroke },
                react_1.default.createElement("path", { d: clipPath })),
            outlined && backgroundColor && (react_1.default.createElement("path", { d: twoToneBase, clipPath: "url(#pxb-donut-clip-" + stroke + ")", fill: backgroundColor })),
            react_1.default.createElement("path", { clipPath: "url(#pxb-donut-clip-" + stroke + ")", fill: (!outlined && backgroundColor) || color || 'currentColor', fillOpacity: outlined || percent >= 100 || (!outlined && backgroundColor) ? 1 : 0.3, d: outlined ? outlineBase : twoToneBase }),
            utilities_1.rangeValue(percent, 0, 100) > 0 && utilities_1.rangeValue(percent, 0, 100) < 100 && (react_1.default.createElement("path", { fill: color || 'currentColor', clipPath: "url(#pxb-donut-clip-" + stroke + ")", d: "M 12,12 H 24 A 12,12,0," + (utilities_1.rangeValue(percent, 0, 100) >= 50 ? 1 : 0) + ",1," + utilities_1.getCoordinates(utilities_1.rangeValue(percent, 0, 100))['x'] + "," + utilities_1.getCoordinates(utilities_1.rangeValue(percent, 0, 100))['y'] + "Z" })),
            utilities_1.rangeValue(percent, 0, 100) === 100 && outlined && (react_1.default.createElement("circle", { clipPath: "url(#pxb-donut-clip-" + stroke + ")", cx: "12", cy: "12", r: "10", fill: color || 'currentColor' })))));
};
exports.Pie = Pie;
