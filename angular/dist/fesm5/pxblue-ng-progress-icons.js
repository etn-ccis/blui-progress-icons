import { Component, Input, NgModule } from '@angular/core';
import color from 'color';
import { CommonModule } from '@angular/common';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PxbProgressIconComponent = /** @class */ (function () {
    function PxbProgressIconComponent() {
        this.size = 24;
        this.percent = 100;
        this.showPercentLabel = false;
        this.labelPosition = 'center';
    }
    /**
     * @return {?}
     */
    PxbProgressIconComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (color) {
            // Inverted class applies only to center-aligned label.
            this.inverted = this.labelPosition === 'center' && color(this.color).isDark();
        }
    };
    /**
     * @return {?}
     */
    PxbProgressIconComponent.prototype.getStrokeColor = /**
     * @return {?}
     */
    function () {
        if (this.labelPosition === 'center' && this.labelColor && color) {
            return color(this.labelColor).isDark() ? 'white' : 'black';
        }
        return '';
    };
    /**
     * @return {?}
     */
    PxbProgressIconComponent.prototype.getFlexDirection = /**
     * @return {?}
     */
    function () {
        switch (this.labelPosition) {
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
    PxbProgressIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pxb-progress-icon',
                    template: "\n        <span\n            class=\"pxb-progress-icon\"\n            [style.flexDirection]=\"getFlexDirection()\"\n            [style.display]=\"labelPosition === 'center' ? '' : 'inline-flex'\"\n        >\n            <span\n                *ngIf=\"showPercentLabel\"\n                class=\"pxb-progress-icon-label\"\n                [class.inverted]=\"inverted\"\n                [class.center]=\"labelPosition === 'center'\"\n                [style.color]=\"labelColor\"\n                [ngStyle]=\"{ '-webkit-text-stroke-width.px': labelPosition === 'center' ? size / 60 : 0 }\"\n                [style.fontSize.px]=\"labelSize || size / 4\"\n                [style.height.px]=\"labelPosition === 'center' ? size : 'unset'\"\n                [style.width.px]=\"labelPosition === 'center' ? size : 'unset'\"\n                [style.lineHeight.px]=\"labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : size\"\n                [style.webkitTextStrokeColor]=\"getStrokeColor()\"\n                [style.webkitTextFillColor]=\"labelColor\"\n                >{{ percent }}%</span\n            >\n            <ng-content></ng-content>\n        </span>\n    ",
                    styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
                }] }
    ];
    PxbProgressIconComponent.propDecorators = {
        size: [{ type: Input }],
        percent: [{ type: Input }],
        showPercentLabel: [{ type: Input }],
        labelPosition: [{ type: Input }],
        color: [{ type: Input }],
        labelColor: [{ type: Input }],
        labelSize: [{ type: Input }],
        backgroundColor: [{ type: Input }]
    };
    return PxbProgressIconComponent;
}());
if (false) {
    /** @type {?} */
    PxbProgressIconComponent.prototype.size;
    /** @type {?} */
    PxbProgressIconComponent.prototype.percent;
    /** @type {?} */
    PxbProgressIconComponent.prototype.showPercentLabel;
    /** @type {?} */
    PxbProgressIconComponent.prototype.labelPosition;
    /** @type {?} */
    PxbProgressIconComponent.prototype.color;
    /** @type {?} */
    PxbProgressIconComponent.prototype.labelColor;
    /** @type {?} */
    PxbProgressIconComponent.prototype.labelSize;
    /** @type {?} */
    PxbProgressIconComponent.prototype.backgroundColor;
    /** @type {?} */
    PxbProgressIconComponent.prototype.inverted;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
var getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius) {
    if (radius === void 0) { radius = 12; }
    return {
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BatteryComponent = /** @class */ (function (_super) {
    __extends(BatteryComponent, _super);
    function BatteryComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.charging = false;
        _this.outlined = false;
        _this.rv = rangeValue;
        _this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
        _this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
        _this.outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
        _this.baseID = 'pxb-battery-clip';
        _this.chargeID = 'pxb-battery-clip-charge';
        return _this;
    }
    /**
     * @return {?}
     */
    BatteryComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.maskIDleft = "maskLeft-" + this.percent;
        this.maskIDright = "maskRight-" + this.percent;
        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getBasePath = /**
     * @return {?}
     */
    function () {
        return this.outlined ? this.outlinedPath : this.basePath;
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getClipPath = /**
     * @return {?}
     */
    function () {
        return this.charging ? this.chargePath : this.basePath;
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.getID = /**
     * @return {?}
     */
    function () {
        return this.charging ? this.chargeID : this.baseID;
    };
    BatteryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'battery-progress',
                    template: "\n        <pxb-progress-icon\n            [size]=\"size\"\n            [labelPosition]=\"labelPosition\"\n            [percent]=\"percent\"\n            [showPercentLabel]=\"showPercentLabel\"\n            [labelColor]=\"labelColor\"\n            [labelSize]=\"labelSize\"\n            [color]=\"color\"\n        >\n            <svg\n                [attr.height]=\"size + 'px'\"\n                [attr.width]=\"size + 'px'\"\n                x=\"0px\"\n                y=\"0px\"\n                viewBox=\"0 0 24 24\"\n                style=\"enable-background:new 0 0 24 24;\"\n                xml:space=\"preserve\"\n            >\n                <defs>\n                    <mask *ngIf=\"outlined\" [attr.id]=\"maskIDleft\">\n                        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n                        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n                    </mask>\n                    <mask *ngIf=\"outlined\" [attr.id]=\"maskIDright\">\n                        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n                        <rect\n                            [attr.x]=\"startX\"\n                            y=\"7\"\n                            fill=\"black\"\n                            [attr.width]=\"(rv(percent, 0, 100) / 100) * fillWidth\"\n                            height=\"10\"\n                        />\n                    </mask>\n                    <clipPath [id]=\"getID()\">\n                        <path overflow=\"visible\" [attr.d]=\"getClipPath()\" />\n                    </clipPath>\n                </defs>\n                <path\n                    *ngIf=\"backgroundColor\"\n                    [attr.d]=\"basePath\"\n                    [attr.fill]=\"backgroundColor\"\n                    [attr.clip-path]=\"outlined ? undefined : 'url(#' + getID() + ')'\"\n                />\n                <path\n                    [attr.fill]=\"(!outlined && backgroundColor) || color || 'currentColor'\"\n                    [attr.fill-opacity]=\"outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'\"\n                    [attr.clip-path]=\"'url(#' + getID() + ')'\"\n                    [attr.d]=\"getBasePath()\"\n                />\n\n                <g [attr.fill]=\"color || 'currentColor'\">\n                    <rect\n                        [attr.fill]=\"color || 'currentColor'\"\n                        [attr.x]=\"startX\"\n                        y=\"7\"\n                        [attr.clip-path]=\"'url(#' + getID() + ')'\"\n                        [attr.width]=\"(rv(percent, 0, 100) / 100) * fillWidth\"\n                        height=\"10\"\n                        [attr.mask]=\"outlined && charging ? 'url(#' + maskIDleft + ')' : null\"\n                    />\n                    <polygon\n                        *ngIf=\"outlined && charging\"\n                        points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\"\n                        [attr.mask]=\"'url(#' + maskIDright + ')'\"\n                    />\n                </g>\n            </svg>\n        </pxb-progress-icon>\n    ",
                    styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
                }] }
    ];
    BatteryComponent.propDecorators = {
        charging: [{ type: Input }],
        outlined: [{ type: Input }]
    };
    return BatteryComponent;
}(PxbProgressIconComponent));
if (false) {
    /** @type {?} */
    BatteryComponent.prototype.charging;
    /** @type {?} */
    BatteryComponent.prototype.outlined;
    /** @type {?} */
    BatteryComponent.prototype.maskIDleft;
    /** @type {?} */
    BatteryComponent.prototype.maskIDright;
    /** @type {?} */
    BatteryComponent.prototype.startX;
    /** @type {?} */
    BatteryComponent.prototype.fillWidth;
    /** @type {?} */
    BatteryComponent.prototype.rv;
    /** @type {?} */
    BatteryComponent.prototype.basePath;
    /** @type {?} */
    BatteryComponent.prototype.chargePath;
    /** @type {?} */
    BatteryComponent.prototype.outlinedPath;
    /** @type {?} */
    BatteryComponent.prototype.baseID;
    /** @type {?} */
    BatteryComponent.prototype.chargeID;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeartComponent = /** @class */ (function (_super) {
    __extends(HeartComponent, _super);
    function HeartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outlined = false;
        _this.rv = rangeValue;
        _this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
        _this.outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
        return _this;
    }
    /**
     * @return {?}
     */
    HeartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.startY = this.outlined ? 18.35 : 21.35;
        this.fillHeight = this.outlined ? 13.35 : 18.35;
    };
    /**
     * @return {?}
     */
    HeartComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return this.outlined ? this.outlinedPath : this.basePath;
    };
    HeartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'heart-progress',
                    template: "\n        <pxb-progress-icon\n            [size]=\"size\"\n            [labelPosition]=\"labelPosition\"\n            [percent]=\"percent\"\n            [showPercentLabel]=\"showPercentLabel\"\n            [labelColor]=\"labelColor\"\n            [labelSize]=\"labelSize\"\n            [color]=\"color\"\n        >\n            <svg\n                [attr.height]=\"size + 'px'\"\n                [attr.width]=\"size + 'px'\"\n                x=\"0px\"\n                y=\"0px\"\n                viewBox=\"0 0 24 24\"\n                style=\"enable-background:new 0 0 24 24;\"\n                xml:space=\"preserve\"\n            >\n                <path *ngIf=\"outlined && backgroundColor\" [attr.d]=\"basePath\" [attr.fill]=\"backgroundColor\" />\n                <path\n                    [attr.fill]=\"(!outlined && backgroundColor) || color || 'currentColor'\"\n                    [attr.fill-opacity]=\"outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'\"\n                    [attr.d]=\"getPath()\"\n                />\n                <clipPath id=\"pxb-heart-clip\">\n                    <path\n                        d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"\n                    />\n                </clipPath>\n                <rect\n                    [attr.fill]=\"color || 'currentColor'\"\n                    clip-path=\"url(#pxb-heart-clip)\"\n                    x=\"2\"\n                    [attr.y]=\"startY - (rv(percent, 0, 100) * fillHeight) / 100\"\n                    width=\"20\"\n                    height=\"20\"\n                />\n            </svg>\n        </pxb-progress-icon>\n    ",
                    styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
                }] }
    ];
    HeartComponent.propDecorators = {
        outlined: [{ type: Input }]
    };
    return HeartComponent;
}(PxbProgressIconComponent));
if (false) {
    /** @type {?} */
    HeartComponent.prototype.outlined;
    /** @type {?} */
    HeartComponent.prototype.startY;
    /** @type {?} */
    HeartComponent.prototype.fillHeight;
    /** @type {?} */
    HeartComponent.prototype.rv;
    /** @type {?} */
    HeartComponent.prototype.basePath;
    /** @type {?} */
    HeartComponent.prototype.outlinedPath;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PieComponent = /** @class */ (function (_super) {
    __extends(PieComponent, _super);
    function PieComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ring = 10;
        _this.outlined = false;
        _this.rv = rangeValue;
        _this.iconStroke = 2;
        // Ring properties
        _this.centerX = 12;
        _this.centerY = 12;
        // Outer ring
        _this.outerRadiusLarge = 10;
        return _this;
    }
    /**
     * @return {?}
     */
    PieComponent.prototype.getPath = /**
     * @return {?}
     */
    function () {
        return "M 12,12 H 24 A 12,12,0," + (this.rv(this.percent, 0, 100) >= 50 ? 1 : 0) + ",1," + getCoordinates(this.rv(this.percent, 0, 100))['x'] + "," + getCoordinates(this.rv(this.percent, 0, 100))['y'] + "Z";
    };
    /**
     * @return {?}
     */
    PieComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
        this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
        this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
    };
    PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pie-progress',
                    template: "\n        <pxb-progress-icon\n            [size]=\"size\"\n            [labelPosition]=\"labelPosition\"\n            [percent]=\"percent\"\n            [showPercentLabel]=\"showPercentLabel\"\n            [labelColor]=\"labelColor\"\n            [labelSize]=\"labelSize\"\n            [color]=\"color\"\n        >\n            <svg\n                [attr.height]=\"size + 'px'\"\n                [attr.width]=\"size + 'px'\"\n                x=\"0px\"\n                y=\"0px\"\n                viewBox=\"0 0 24 24\"\n                style=\"transform: rotate(-.25turn)\"\n            >\n                <clipPath [attr.id]=\"'pxb-donut-clip-' + stroke\">\n                    <path [attr.d]=\"clipPath\" />\n                </clipPath>\n                <path\n                    *ngIf=\"outlined && backgroundColor\"\n                    [attr.d]=\"twoToneBase\"\n                    [attr.clip-path]=\"'url(#pxb-donut-clip-' + stroke + ')'\"\n                    [attr.fill]=\"backgroundColor\"\n                />\n                <path\n                    [attr.clip-path]=\"'url(#pxb-donut-clip-' + stroke + ')'\"\n                    [attr.fill]=\"(!outlined && backgroundColor) || color || 'currentColor'\"\n                    [attr.fill-opacity]=\"outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'\"\n                    [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n                />\n                <path\n                    *ngIf=\"rv(percent, 0, 100) > 0 && rv(percent, 0, 100) < 100\"\n                    [attr.fill]=\"color || 'currentColor'\"\n                    [attr.clip-path]=\"'url(#pxb-donut-clip-' + stroke + ')'\"\n                    [attr.d]=\"getPath()\"\n                />\n\n                <circle\n                    *ngIf=\"rv(percent, 0, 100) === 100 && outlined\"\n                    [attr.clip-path]=\"'url(#pxb-donut-clip-' + stroke + ')'\"\n                    cx=\"12\"\n                    cy=\"12\"\n                    r=\"10\"\n                    [attr.fill]=\"color || 'currentColor'\"\n                ></circle>\n            </svg>\n        </pxb-progress-icon>\n    ",
                    styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
                }] }
    ];
    PieComponent.propDecorators = {
        ring: [{ type: Input }],
        outlined: [{ type: Input }]
    };
    return PieComponent;
}(PxbProgressIconComponent));
if (false) {
    /** @type {?} */
    PieComponent.prototype.ring;
    /** @type {?} */
    PieComponent.prototype.outlined;
    /** @type {?} */
    PieComponent.prototype.rv;
    /** @type {?} */
    PieComponent.prototype.outlineBase;
    /** @type {?} */
    PieComponent.prototype.twoToneBase;
    /** @type {?} */
    PieComponent.prototype.clipPath;
    /** @type {?} */
    PieComponent.prototype.iconStroke;
    /** @type {?} */
    PieComponent.prototype.stroke;
    /** @type {?} */
    PieComponent.prototype.centerX;
    /** @type {?} */
    PieComponent.prototype.centerY;
    /** @type {?} */
    PieComponent.prototype.outerRadiusLarge;
    /** @type {?} */
    PieComponent.prototype.innerRadiusLarge;
    /** @type {?} */
    PieComponent.prototype.outerRadiusSmall;
    /** @type {?} */
    PieComponent.prototype.innerRadiusSmall;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsComponent = /** @class */ (function (_super) {
    __extends(UpsComponent, _super);
    function UpsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.outlined = false;
        _this.basePath = 'M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z';
        return _this;
    }
    /**
     * @return {?}
     */
    UpsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.rangedPercent = rangeValue(this.percent, 0, 100);
        this.startY = this.outlined
            ? ((100 - this.rangedPercent) / 100) * 16 + 4
            : ((100 - this.rangedPercent) / 100) * 20 + 2;
        this.fillHeight = this.outlined ? (this.rangedPercent / 100) * 16 : (this.rangedPercent / 100) * 20;
    };
    UpsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ups-progress',
                    template: "\n        <pxb-progress-icon\n            [size]=\"size\"\n            [labelPosition]=\"labelPosition\"\n            [percent]=\"percent\"\n            [showPercentLabel]=\"showPercentLabel\"\n            [labelColor]=\"labelColor\"\n            [labelSize]=\"labelSize\"\n            [color]=\"color\"\n        >\n            <svg [attr.height]=\"size + 'px'\" [attr.width]=\"size + 'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\">\n                <defs>\n                    <clipPath id=\"outlined-progress-clip\">\n                        <path d=\"M4 8V4H20V8H17V9H20V12H17V13H20V16H17V17H20V20H4V17H7V16H4V13H7V12H4V9H7V8H4Z\" />\n                    </clipPath>\n                    <clipPath [attr.id]=\"'outlined-border-clip-' + rangedPercent\">\n                        <rect x=\"2\" y=\"2\" width=\"20\" [attr.height]=\"startY - 2\" />\n                    </clipPath>\n                </defs>\n\n                <mask\n                    id=\"mask-filled\"\n                    mask-type=\"alpha\"\n                    maskUnits=\"userSpaceOnUse\"\n                    x=\"2\"\n                    y=\"2\"\n                    width=\"20\"\n                    height=\"20\"\n                    *ngIf=\"!outlined\"\n                >\n                    <path [attr.d]=\"basePath\" [attr.fill]=\"color || 'currentColor'\" />\n                </mask>\n                <g mask=\"url(#mask-filled)\" *ngIf=\"!outlined\">\n                    <path\n                        [attr.opacity]=\"backgroundColor ? 1 : 0.3\"\n                        [attr.d]=\"basePath\"\n                        [attr.fill]=\"backgroundColor || color || 'currentColor'\"\n                    />\n                    <rect\n                        x=\"2\"\n                        [attr.y]=\"startY\"\n                        width=\"20\"\n                        [attr.height]=\"fillHeight\"\n                        [attr.fill]=\"color || 'currentColor'\"\n                    />\n                </g>\n\n                <g [attr.fill]=\"color || 'currentColor'\" *ngIf=\"outlined\">\n                    <rect *ngIf=\"backgroundColor\" x=\"4\" y=\"4\" width=\"16\" height=\"16\" [attr.fill]=\"backgroundColor\" />\n                    <path\n                        fill-rule=\"evenodd\"\n                        d=\"M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z\"\n                        [attr.clip-path]=\"'url(#outlined-border-clip-' + rangedPercent + ')'\"\n                        clip-rule=\"evenodd\"\n                    />\n                    <path\n                        fill-rule=\"evenodd\"\n                        clip-rule=\"evenodd\"\n                        d=\"M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V20H20V4Z\"\n                    />\n                    <rect\n                        x=\"4\"\n                        [attr.y]=\"startY\"\n                        width=\"16\"\n                        [attr.height]=\"fillHeight\"\n                        clip-path=\"url(#outlined-progress-clip)\"\n                    />\n                </g>\n            </svg>\n        </pxb-progress-icon>\n    ",
                    styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
                }] }
    ];
    UpsComponent.propDecorators = {
        outlined: [{ type: Input }]
    };
    return UpsComponent;
}(PxbProgressIconComponent));
if (false) {
    /** @type {?} */
    UpsComponent.prototype.outlined;
    /** @type {?} */
    UpsComponent.prototype.rangedPercent;
    /** @type {?} */
    UpsComponent.prototype.startY;
    /** @type {?} */
    UpsComponent.prototype.fillHeight;
    /** @type {?} */
    UpsComponent.prototype.basePath;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgProgressIconsModule = /** @class */ (function () {
    function NgProgressIconsModule() {
    }
    NgProgressIconsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
                    exports: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
                },] }
    ];
    return NgProgressIconsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BatteryComponent, HeartComponent, NgProgressIconsModule, PieComponent, PxbProgressIconComponent, UpsComponent };
//# sourceMappingURL=pxblue-ng-progress-icons.js.map
