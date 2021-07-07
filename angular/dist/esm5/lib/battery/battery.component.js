/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
import { rangeValue } from '../utilities';
var BatteryComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BatteryComponent, _super);
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
export { BatteryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDO0lBMEVzQyw0Q0FBd0I7SUExRTlEO1FBQUEscUVBaUhDO1FBdENZLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQU8xQixRQUFFLEdBQUcsVUFBVSxDQUFDO1FBRWhCLGNBQVEsR0FDSix1SEFBdUgsQ0FBQztRQUM1SCxnQkFBVSxHQUNOLDZOQUE2TixDQUFDO1FBQ2xPLGtCQUFZLEdBQ1Isc0pBQXNKLENBQUM7UUFDM0osWUFBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzVCLGNBQVEsR0FBRyx5QkFBeUIsQ0FBQzs7SUFxQnpDLENBQUM7Ozs7SUFuQkcsc0NBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFZLElBQUksQ0FBQyxPQUFTLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFhLElBQUksQ0FBQyxPQUFTLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsZ0NBQUs7OztJQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7O2dCQWhISixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHVsR0FxRVQ7O2lCQUVKOzs7MkJBRUksS0FBSzsyQkFDTCxLQUFLOztJQXFDVix1QkFBQztDQUFBLEFBakhELENBMEVzQyx3QkFBd0IsR0F1QzdEO1NBdkNZLGdCQUFnQjs7O0lBQ3pCLG9DQUEwQjs7SUFDMUIsb0NBQTBCOztJQUUxQixzQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsa0NBQWU7O0lBQ2YscUNBQWtCOztJQUVsQiw4QkFBZ0I7O0lBRWhCLG9DQUM0SDs7SUFDNUgsc0NBQ2tPOztJQUNsTyx3Q0FDMko7O0lBQzNKLGtDQUE0Qjs7SUFDNUIsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQeGJQcm9ncmVzc0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9weGItcHJvZ3Jlc3MtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmF0dGVyeS1wcm9ncmVzcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHB4Yi1wcm9ncmVzcy1pY29uXG4gICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxuICAgICAgICAgICAgW3BlcmNlbnRdPVwicGVyY2VudFwiXG4gICAgICAgICAgICBbc2hvd1BlcmNlbnRMYWJlbF09XCJzaG93UGVyY2VudExhYmVsXCJcbiAgICAgICAgICAgIFtsYWJlbENvbG9yXT1cImxhYmVsQ29sb3JcIlxuICAgICAgICAgICAgW2xhYmVsU2l6ZV09XCJsYWJlbFNpemVcIlxuICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2l6ZSArICdweCdcIlxuICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIlxuICAgICAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgPG1hc2sgKm5nSWY9XCJvdXRsaW5lZFwiIFthdHRyLmlkXT1cIm1hc2tJRGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD1cImJsYWNrXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzIFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbWFzaz5cbiAgICAgICAgICAgICAgICAgICAgPG1hc2sgKm5nSWY9XCJvdXRsaW5lZFwiIFthdHRyLmlkXT1cIm1hc2tJRHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIueF09XCJzdGFydFhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cIihydihwZXJjZW50LCAwLCAxMDApIC8gMTAwKSAqIGZpbGxXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggW2lkXT1cImdldElEKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZF09XCJiYXNlUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuY2xpcC1wYXRoXT1cIm91dGxpbmVkID8gdW5kZWZpbmVkIDogJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCIoIW91dGxpbmVkICYmIGJhY2tncm91bmRDb2xvcikgfHwgY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsLW9wYWNpdHldPVwib3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDAgfHwgKCFvdXRsaW5lZCAmJiBiYWNrZ3JvdW5kQ29sb3IpID8gJzEnIDogJzAuMydcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5kXT1cImdldEJhc2VQYXRoKClcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZyBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnhdPVwic3RhcnRYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCI3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCIocnYocGVyY2VudCwgMCwgMTAwKSAvIDEwMCkgKiBmaWxsV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubWFza109XCJvdXRsaW5lZCAmJiBjaGFyZ2luZyA/ICd1cmwoIycgKyBtYXNrSURsZWZ0ICsgJyknIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm91dGxpbmVkICYmIGNoYXJnaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5tYXNrXT1cIid1cmwoIycgKyBtYXNrSURyaWdodCArICcpJ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvcHhiLXByb2dyZXNzLWljb24+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi4vcHhiLXByb2dyZXNzLWljb24uc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5Q29tcG9uZW50IGV4dGVuZHMgUHhiUHJvZ3Jlc3NJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBjaGFyZ2luZyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG91dGxpbmVkID0gZmFsc2U7XG5cbiAgICBtYXNrSURsZWZ0OiBzdHJpbmc7XG4gICAgbWFza0lEcmlnaHQ6IHN0cmluZztcbiAgICBzdGFydFg6IG51bWJlcjtcbiAgICBmaWxsV2lkdGg6IG51bWJlcjtcblxuICAgIHJ2ID0gcmFuZ2VWYWx1ZTtcblxuICAgIGJhc2VQYXRoID1cbiAgICAgICAgJ00yMCwxMFY4LjNDMjAsNy42LDE5LjQsNywxOC43LDdIMy4zQzIuNiw3LDIsNy42LDIsOC4zdjcuM0MyLDE2LjQsMi42LDE3LDMuMywxN2gxNS4zYzAuNywwLDEuMy0wLjYsMS4zLTEuM1YxNGgydi00SDIweic7XG4gICAgY2hhcmdlUGF0aCA9XG4gICAgICAgICdNMjAsMTBWOC4zM2ExLjMxOSwxLjMxOSwwLDAsMC0xLTEuMjYzQTEuMjU3LDEuMjU3LDAsMCwwLDE4LjY3LDdIMy4zNEExLjMzOCwxLjMzOCwwLDAsMCwyLDguMzN2Ny4zM0ExLjMzOCwxLjMzOCwwLDAsMCwzLjMzLDE3SDE4LjY3YTEuMjU3LDEuMjU3LDAsMCwwLC4zMy0uMDY3LDEuMzE5LDEuMzE5LDAsMCwwLDEtMS4yNjNWMTRoMlYxMFptLTguNSwzdjJMNCwxMUg5LjVWOUwxNywxM1onO1xuICAgIG91dGxpbmVkUGF0aCA9XG4gICAgICAgICdNMTgsOXY2SDRWOUgxOG0uNy0ySDMuM0ExLjMyNCwxLjMyNCwwLDAsMCwyLDguM3Y3LjNBMS4zNDcsMS4zNDcsMCwwLDAsMy4zLDE3SDE4LjZhMS4zMjQsMS4zMjQsMCwwLDAsMS4zLTEuM1YxNGgyVjEwSDIwVjguM0ExLjMyNCwxLjMyNCwwLDAsMCwxOC43LDdaJztcbiAgICBiYXNlSUQgPSAncHhiLWJhdHRlcnktY2xpcCc7XG4gICAgY2hhcmdlSUQgPSAncHhiLWJhdHRlcnktY2xpcC1jaGFyZ2UnO1xuXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWFza0lEbGVmdCA9IGBtYXNrTGVmdC0ke3RoaXMucGVyY2VudH1gO1xuICAgICAgICB0aGlzLm1hc2tJRHJpZ2h0ID0gYG1hc2tSaWdodC0ke3RoaXMucGVyY2VudH1gO1xuXG4gICAgICAgIHRoaXMuc3RhcnRYID0gdGhpcy5vdXRsaW5lZCA/IDMuOSA6IDI7XG4gICAgICAgIHRoaXMuZmlsbFdpZHRoID0gdGhpcy5vdXRsaW5lZCA/IDE0LjIgOiAxODtcbiAgICB9XG5cbiAgICBnZXRCYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aDtcbiAgICB9XG5cbiAgICBnZXRDbGlwUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlUGF0aCA6IHRoaXMuYmFzZVBhdGg7XG4gICAgfVxuXG4gICAgZ2V0SUQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmdpbmcgPyB0aGlzLmNoYXJnZUlEIDogdGhpcy5iYXNlSUQ7XG4gICAgfVxufVxuIl19