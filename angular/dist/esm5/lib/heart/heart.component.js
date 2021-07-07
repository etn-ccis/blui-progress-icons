/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { rangeValue } from '../utilities';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
var HeartComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeartComponent, _super);
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
export { HeartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9oZWFydC9oZWFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTFFO0lBNkNvQywwQ0FBd0I7SUE3QzVEO1FBQUEscUVBZ0VDO1FBbEJZLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFHMUIsUUFBRSxHQUFHLFVBQVUsQ0FBQztRQUVoQixjQUFRLEdBQ0osZ0xBQWdMLENBQUM7UUFDckwsa0JBQVksR0FDUiwyWUFBMlksQ0FBQzs7SUFVcFosQ0FBQzs7OztJQVJHLG9DQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdELENBQUM7O2dCQS9ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDZ2REF3Q1Q7O2lCQUVKOzs7MkJBRUksS0FBSzs7SUFrQlYscUJBQUM7Q0FBQSxBQWhFRCxDQTZDb0Msd0JBQXdCLEdBbUIzRDtTQW5CWSxjQUFjOzs7SUFDdkIsa0NBQTBCOztJQUMxQixnQ0FBZTs7SUFDZixvQ0FBbUI7O0lBQ25CLDRCQUFnQjs7SUFFaEIsa0NBQ3FMOztJQUNyTCxzQ0FDZ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgUHhiUHJvZ3Jlc3NJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vcHhiLXByb2dyZXNzLWljb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWFydC1wcm9ncmVzcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHB4Yi1wcm9ncmVzcy1pY29uXG4gICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxuICAgICAgICAgICAgW3BlcmNlbnRdPVwicGVyY2VudFwiXG4gICAgICAgICAgICBbc2hvd1BlcmNlbnRMYWJlbF09XCJzaG93UGVyY2VudExhYmVsXCJcbiAgICAgICAgICAgIFtsYWJlbENvbG9yXT1cImxhYmVsQ29sb3JcIlxuICAgICAgICAgICAgW2xhYmVsU2l6ZV09XCJsYWJlbFNpemVcIlxuICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic2l6ZSArICdweCdcIlxuICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIlxuICAgICAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCAqbmdJZj1cIm91dGxpbmVkICYmIGJhY2tncm91bmRDb2xvclwiIFthdHRyLmRdPVwiYmFzZVBhdGhcIiBbYXR0ci5maWxsXT1cImJhY2tncm91bmRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCIoIW91dGxpbmVkICYmIGJhY2tncm91bmRDb2xvcikgfHwgY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsLW9wYWNpdHldPVwib3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDAgfHwgKCFvdXRsaW5lZCAmJiBiYWNrZ3JvdW5kQ29sb3IpID8gJzEnIDogJzAuMydcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5kXT1cImdldFBhdGgoKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJweGItaGVhcnQtY2xpcFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCJcbiAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoPVwidXJsKCNweGItaGVhcnQtY2xpcClcIlxuICAgICAgICAgICAgICAgICAgICB4PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLnldPVwic3RhcnRZIC0gKHJ2KHBlcmNlbnQsIDAsIDEwMCkgKiBmaWxsSGVpZ2h0KSAvIDEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3B4Yi1wcm9ncmVzcy1pY29uPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJy4uL3B4Yi1wcm9ncmVzcy1pY29uLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhcnRDb21wb25lbnQgZXh0ZW5kcyBQeGJQcm9ncmVzc0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG91dGxpbmVkID0gZmFsc2U7XG4gICAgc3RhcnRZOiBudW1iZXI7XG4gICAgZmlsbEhlaWdodDogbnVtYmVyO1xuICAgIHJ2ID0gcmFuZ2VWYWx1ZTtcblxuICAgIGJhc2VQYXRoID1cbiAgICAgICAgJ00xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eic7XG4gICAgb3V0bGluZWRQYXRoID1cbiAgICAgICAgJ00xNi41LDVBMy40NjIsMy40NjIsMCwwLDEsMjAsOC41YzAsMi44ODUtMy4xMjUsNS43MjUtNy44NTYsMTAuMDI0bC0uMDM1LjAzMi0uMS4wOTQtLjEyNC0uMTEzQzcuMTM1LDE0LjIzNCw0LDExLjM5MSw0LDguNUEzLjQ2MiwzLjQ2MiwwLDAsMSw3LjUsNWEzLjk2LDMuOTYsMCwwLDEsMi45NzcsMS4zODdMMTIsOC4xNzVsMS41MjMtMS43ODhBMy45NiwzLjk2LDAsMCwxLDE2LjUsNW0wLTJBNS45ODgsNS45ODgsMCwwLDAsMTIsNS4wOSw1Ljk4OCw1Ljk4OCwwLDAsMCw3LjUsMyw1LjQ0Nyw1LjQ0NywwLDAsMCwyLDguNWMwLDMuNzgsMy40LDYuODYsOC41NSwxMS41M0wxMiwyMS4zNWwxLjQ1LTEuMzFDMTguNiwxNS4zNiwyMiwxMi4yOCwyMiw4LjVBNS40NDcsNS40NDcsMCwwLDAsMTYuNSwzWic7XG5cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydFkgPSB0aGlzLm91dGxpbmVkID8gMTguMzUgOiAyMS4zNTtcbiAgICAgICAgdGhpcy5maWxsSGVpZ2h0ID0gdGhpcy5vdXRsaW5lZCA/IDEzLjM1IDogMTguMzU7XG4gICAgfVxuXG4gICAgZ2V0UGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aDtcbiAgICB9XG59XG4iXX0=