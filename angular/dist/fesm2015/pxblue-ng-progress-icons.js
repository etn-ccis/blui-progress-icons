import { Component, Input, NgModule } from '@angular/core';
import color from 'color';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PxbProgressIconComponent {
    constructor() {
        this.size = 24;
        this.percent = 100;
        this.showPercentLabel = false;
        this.labelPosition = 'center';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (color) {
            // Inverted class applies only to center-aligned label.
            this.inverted = this.labelPosition === 'center' && color(this.color).isDark();
        }
    }
    /**
     * @return {?}
     */
    getStrokeColor() {
        if (this.labelPosition === 'center' && this.labelColor && color) {
            return color(this.labelColor).isDark() ? 'white' : 'black';
        }
        return '';
    }
    /**
     * @return {?}
     */
    getFlexDirection() {
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
    }
}
PxbProgressIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'pxb-progress-icon',
                template: `
        <span
            class="pxb-progress-icon"
            [style.flexDirection]="getFlexDirection()"
            [style.display]="labelPosition === 'center' ? '' : 'inline-flex'"
        >
            <span
                *ngIf="showPercentLabel"
                class="pxb-progress-icon-label"
                [class.inverted]="inverted"
                [class.center]="labelPosition === 'center'"
                [style.color]="labelColor"
                [ngStyle]="{ '-webkit-text-stroke-width.px': labelPosition === 'center' ? size / 60 : 0 }"
                [style.fontSize.px]="labelSize || size / 4"
                [style.height.px]="labelPosition === 'center' ? size : 'unset'"
                [style.width.px]="labelPosition === 'center' ? size : 'unset'"
                [style.lineHeight.px]="labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : size"
                [style.webkitTextStrokeColor]="getStrokeColor()"
                [style.webkitTextFillColor]="labelColor"
                >{{ percent }}%</span
            >
            <ng-content></ng-content>
        </span>
    `,
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
const rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
const getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius = 12) {
    return {
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    };
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BatteryComponent extends PxbProgressIconComponent {
    constructor() {
        super(...arguments);
        this.charging = false;
        this.outlined = false;
        this.rv = rangeValue;
        this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
        this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
        this.outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
        this.baseID = 'pxb-battery-clip';
        this.chargeID = 'pxb-battery-clip-charge';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.maskIDleft = `maskLeft-${this.percent}`;
        this.maskIDright = `maskRight-${this.percent}`;
        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    }
    /**
     * @return {?}
     */
    getBasePath() {
        return this.outlined ? this.outlinedPath : this.basePath;
    }
    /**
     * @return {?}
     */
    getClipPath() {
        return this.charging ? this.chargePath : this.basePath;
    }
    /**
     * @return {?}
     */
    getID() {
        return this.charging ? this.chargeID : this.baseID;
    }
}
BatteryComponent.decorators = [
    { type: Component, args: [{
                selector: 'battery-progress',
                template: `
        <pxb-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg
                [attr.height]="size + 'px'"
                [attr.width]="size + 'px'"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                style="enable-background:new 0 0 24 24;"
                xml:space="preserve"
            >
                <defs>
                    <mask *ngIf="outlined" [attr.id]="maskIDleft">
                        <rect width="100%" height="100%" fill="white" />
                        <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
                    </mask>
                    <mask *ngIf="outlined" [attr.id]="maskIDright">
                        <rect width="100%" height="100%" fill="white" />
                        <rect
                            [attr.x]="startX"
                            y="7"
                            fill="black"
                            [attr.width]="(rv(percent, 0, 100) / 100) * fillWidth"
                            height="10"
                        />
                    </mask>
                    <clipPath [id]="getID()">
                        <path overflow="visible" [attr.d]="getClipPath()" />
                    </clipPath>
                </defs>
                <path
                    *ngIf="backgroundColor"
                    [attr.d]="basePath"
                    [attr.fill]="backgroundColor"
                    [attr.clip-path]="outlined ? undefined : 'url(#' + getID() + ')'"
                />
                <path
                    [attr.fill]="(!outlined && backgroundColor) || color || 'currentColor'"
                    [attr.fill-opacity]="outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'"
                    [attr.clip-path]="'url(#' + getID() + ')'"
                    [attr.d]="getBasePath()"
                />

                <g [attr.fill]="color || 'currentColor'">
                    <rect
                        [attr.fill]="color || 'currentColor'"
                        [attr.x]="startX"
                        y="7"
                        [attr.clip-path]="'url(#' + getID() + ')'"
                        [attr.width]="(rv(percent, 0, 100) / 100) * fillWidth"
                        height="10"
                        [attr.mask]="outlined && charging ? 'url(#' + maskIDleft + ')' : null"
                    />
                    <polygon
                        *ngIf="outlined && charging"
                        points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13"
                        [attr.mask]="'url(#' + maskIDright + ')'"
                    />
                </g>
            </svg>
        </pxb-progress-icon>
    `,
                styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
            }] }
];
BatteryComponent.propDecorators = {
    charging: [{ type: Input }],
    outlined: [{ type: Input }]
};
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
class HeartComponent extends PxbProgressIconComponent {
    constructor() {
        super(...arguments);
        this.outlined = false;
        this.rv = rangeValue;
        this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
        this.outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.startY = this.outlined ? 18.35 : 21.35;
        this.fillHeight = this.outlined ? 13.35 : 18.35;
    }
    /**
     * @return {?}
     */
    getPath() {
        return this.outlined ? this.outlinedPath : this.basePath;
    }
}
HeartComponent.decorators = [
    { type: Component, args: [{
                selector: 'heart-progress',
                template: `
        <pxb-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg
                [attr.height]="size + 'px'"
                [attr.width]="size + 'px'"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                style="enable-background:new 0 0 24 24;"
                xml:space="preserve"
            >
                <path *ngIf="outlined && backgroundColor" [attr.d]="basePath" [attr.fill]="backgroundColor" />
                <path
                    [attr.fill]="(!outlined && backgroundColor) || color || 'currentColor'"
                    [attr.fill-opacity]="outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'"
                    [attr.d]="getPath()"
                />
                <clipPath id="pxb-heart-clip">
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </clipPath>
                <rect
                    [attr.fill]="color || 'currentColor'"
                    clip-path="url(#pxb-heart-clip)"
                    x="2"
                    [attr.y]="startY - (rv(percent, 0, 100) * fillHeight) / 100"
                    width="20"
                    height="20"
                />
            </svg>
        </pxb-progress-icon>
    `,
                styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
            }] }
];
HeartComponent.propDecorators = {
    outlined: [{ type: Input }]
};
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
class PieComponent extends PxbProgressIconComponent {
    constructor() {
        super(...arguments);
        this.ring = 10;
        this.outlined = false;
        this.rv = rangeValue;
        this.iconStroke = 2;
        // Ring properties
        this.centerX = 12;
        this.centerY = 12;
        // Outer ring
        this.outerRadiusLarge = 10;
    }
    /**
     * @return {?}
     */
    getPath() {
        return `M 12,12 H 24 A 12,12,0,${this.rv(this.percent, 0, 100) >= 50 ? 1 : 0},1,${getCoordinates(this.rv(this.percent, 0, 100))['x']},${getCoordinates(this.rv(this.percent, 0, 100))['y']}Z`;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
        this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
        this.innerRadiusLarge = 10 - this.iconStroke;
        this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
        this.innerRadiusSmall = 10 - this.stroke;
        if (this.innerRadiusSmall === 0) {
            this.outerRadiusSmall = 0;
        }
        this.outlineBase = `
  M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
  A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusLarge}
  A ${this.innerRadiusLarge} ${this.innerRadiusLarge} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusLarge}
  Z
  M ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusSmall}
  A ${this.outerRadiusSmall} ${this.outerRadiusSmall} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusSmall}
  Z
  M ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY + this.innerRadiusSmall}
  A ${this.innerRadiusSmall} ${this.innerRadiusSmall} 0 1 1 ${this.centerX} ${this.centerY - this.innerRadiusSmall}
  Z
`;
        this.twoToneBase = `
M ${this.centerX} ${this.centerY - this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY + this.outerRadiusLarge}
A ${this.outerRadiusLarge} ${this.outerRadiusLarge} 0 1 0 ${this.centerX} ${this.centerY - this.outerRadiusLarge}
Z
`;
        this.clipPath = `
M12,2
A10,10,0,1,0,22,12,
10,10,0,0,0,12,2
Z
m0,${20 - this.stroke} 
A ${10 - this.stroke},${10 - this.stroke},0,1,1,${22 - this.stroke},12,
${10 - this.stroke},${10 - this.stroke},0,0,1,12,${22 - this.stroke}
Z
`;
    }
}
PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'pie-progress',
                template: `
        <pxb-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg
                [attr.height]="size + 'px'"
                [attr.width]="size + 'px'"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                style="transform: rotate(-.25turn)"
            >
                <clipPath [attr.id]="'pxb-donut-clip-' + stroke">
                    <path [attr.d]="clipPath" />
                </clipPath>
                <path
                    *ngIf="outlined && backgroundColor"
                    [attr.d]="twoToneBase"
                    [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                    [attr.fill]="backgroundColor"
                />
                <path
                    [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                    [attr.fill]="(!outlined && backgroundColor) || color || 'currentColor'"
                    [attr.fill-opacity]="outlined || percent >= 100 || (!outlined && backgroundColor) ? '1' : '0.3'"
                    [attr.d]="outlined ? outlineBase : twoToneBase"
                />
                <path
                    *ngIf="rv(percent, 0, 100) > 0 && rv(percent, 0, 100) < 100"
                    [attr.fill]="color || 'currentColor'"
                    [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                    [attr.d]="getPath()"
                />

                <circle
                    *ngIf="rv(percent, 0, 100) === 100 && outlined"
                    [attr.clip-path]="'url(#pxb-donut-clip-' + stroke + ')'"
                    cx="12"
                    cy="12"
                    r="10"
                    [attr.fill]="color || 'currentColor'"
                ></circle>
            </svg>
        </pxb-progress-icon>
    `,
                styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
            }] }
];
PieComponent.propDecorators = {
    ring: [{ type: Input }],
    outlined: [{ type: Input }]
};
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
class UpsComponent extends PxbProgressIconComponent {
    constructor() {
        super(...arguments);
        this.outlined = false;
        this.basePath = 'M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V6H19V8H22V11H19V13H22V16H19V18H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V18H5V16H2V13H5V11H2V8H5V6H2V4Z';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.rangedPercent = rangeValue(this.percent, 0, 100);
        this.startY = this.outlined
            ? ((100 - this.rangedPercent) / 100) * 16 + 4
            : ((100 - this.rangedPercent) / 100) * 20 + 2;
        this.fillHeight = this.outlined ? (this.rangedPercent / 100) * 16 : (this.rangedPercent / 100) * 20;
    }
}
UpsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ups-progress',
                template: `
        <pxb-progress-icon
            [size]="size"
            [labelPosition]="labelPosition"
            [percent]="percent"
            [showPercentLabel]="showPercentLabel"
            [labelColor]="labelColor"
            [labelSize]="labelSize"
            [color]="color"
        >
            <svg [attr.height]="size + 'px'" [attr.width]="size + 'px'" x="0px" y="0px" viewBox="0 0 24 24">
                <defs>
                    <clipPath id="outlined-progress-clip">
                        <path d="M4 8V4H20V8H17V9H20V12H17V13H20V16H17V17H20V20H4V17H7V16H4V13H7V12H4V9H7V8H4Z" />
                    </clipPath>
                    <clipPath [attr.id]="'outlined-border-clip-' + rangedPercent">
                        <rect x="2" y="2" width="20" [attr.height]="startY - 2" />
                    </clipPath>
                </defs>

                <mask
                    id="mask-filled"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    *ngIf="!outlined"
                >
                    <path [attr.d]="basePath" [attr.fill]="color || 'currentColor'" />
                </mask>
                <g mask="url(#mask-filled)" *ngIf="!outlined">
                    <path
                        [attr.opacity]="backgroundColor ? 1 : 0.3"
                        [attr.d]="basePath"
                        [attr.fill]="backgroundColor || color || 'currentColor'"
                    />
                    <rect
                        x="2"
                        [attr.y]="startY"
                        width="20"
                        [attr.height]="fillHeight"
                        [attr.fill]="color || 'currentColor'"
                    />
                </g>

                <g [attr.fill]="color || 'currentColor'" *ngIf="outlined">
                    <rect *ngIf="backgroundColor" x="4" y="4" width="16" height="16" [attr.fill]="backgroundColor" />
                    <path
                        fill-rule="evenodd"
                        d="M22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4ZM4 4V8H7V9H4V12H7V13H4V16H7V17H4V20H20V17H17V16H20V13H17V12H20V9H17V8H20V4H4Z"
                        [attr.clip-path]="'url(#outlined-border-clip-' + rangedPercent + ')'"
                        clip-rule="evenodd"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V20H20V4Z"
                    />
                    <rect
                        x="4"
                        [attr.y]="startY"
                        width="16"
                        [attr.height]="fillHeight"
                        clip-path="url(#outlined-progress-clip)"
                    />
                </g>
            </svg>
        </pxb-progress-icon>
    `,
                styles: [".pxb-progress-icon{position:relative;justify-content:center;align-items:center;display:inline-block}.pxb-progress-icon-label{text-align:center;z-index:2;display:flex}.pxb-progress-icon-label.center{display:unset;font-weight:900;position:absolute;-webkit-text-fill-color:#424e54;-webkit-text-stroke-color:#fff}.pxb-progress-icon-label.inverted{-webkit-text-fill-color:#fff;-webkit-text-stroke-color:#424e54}"]
            }] }
];
UpsComponent.propDecorators = {
    outlined: [{ type: Input }]
};
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
class NgProgressIconsModule {
}
NgProgressIconsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
                exports: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
            },] }
];

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
