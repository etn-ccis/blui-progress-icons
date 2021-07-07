"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressIcon = void 0;
var react_1 = __importDefault(require("react"));
var react_jss_1 = require("react-jss");
var clsx_1 = __importDefault(require("clsx"));
var color_1 = __importDefault(require("color"));
var useStyles = react_jss_1.createUseStyles({
    progressIcon: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressIconLabel: {
        display: 'flex',
        textAlign: 'center',
        zIndex: 2,
        color: '#424e54',
    },
    centered: {
        fontWeight: 900,
        display: 'block',
        position: 'absolute',
    },
});
var ProgressIcon = function (props) {
    var _a;
    var showPercentLabel = props.showPercentLabel, _b = props.labelPosition, labelPosition = _b === void 0 ? 'center' : _b, children = props.children, percent = props.percent, _c = props.classes, classes = _c === void 0 ? {} : _c;
    var defaultClasses = useStyles();
    var propsProgressIconLabelStyles = {
        fontSize: props.labelSize || props.size / 4,
        color: props.labelColor,
    };
    var propsCenteredStyles = {
        WebkitTextFillColor: props.labelColor,
        WebkitTextStrokeColor: color_1.default && color_1.default(props.labelColor).isDark() ? 'white' : 'black',
        WebkitTextStrokeWidth: props.size / 60 + "px",
        width: props.size,
        height: props.size,
        lineHeight: props.size + "px",
    };
    var getFlexDirection = function () {
        switch (labelPosition) {
            case 'left':
                return 'row';
            case 'right':
                return 'row-reverse';
            case 'top':
                return 'column';
            case 'bottom':
                return 'column-reverse';
            default:
                return '';
        }
    };
    var isCentered = function () { return labelPosition === 'center'; };
    return (react_1.default.createElement("span", { className: defaultClasses.progressIcon, style: { display: isCentered() ? 'inline-block' : 'inline-flex', flexDirection: getFlexDirection() } },
        showPercentLabel && (react_1.default.createElement("span", { style: Object.assign(propsProgressIconLabelStyles, isCentered() ? propsCenteredStyles : {}), className: clsx_1.default(defaultClasses.progressIconLabel, classes.progressIconLabel, (_a = {},
                _a[defaultClasses.centered] = isCentered(),
                _a[classes.centered] = isCentered(),
                _a)) },
            percent,
            "%")),
        children));
};
exports.ProgressIcon = ProgressIcon;
