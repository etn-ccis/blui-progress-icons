/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { rangeValue } from '../utilities';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export class UpsComponent extends PxbProgressIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvdXBzL3Vwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUE2RTFFLE1BQU0sT0FBTyxZQUFhLFNBQVEsd0JBQXdCO0lBM0UxRDs7UUE0RWEsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU0xQixhQUFRLEdBQ0osdUxBQXVMLENBQUM7SUFTaE0sQ0FBQzs7OztJQVBHLFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEcsQ0FBQzs7O1lBM0ZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0VUOzthQUVKOzs7dUJBRUksS0FBSzs7OztJQUFOLGdDQUEwQjs7SUFFMUIscUNBQXNCOztJQUN0Qiw4QkFBZTs7SUFDZixrQ0FBbUI7O0lBRW5CLGdDQUM0TCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBQeGJQcm9ncmVzc0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9weGItcHJvZ3Jlc3MtaWNvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Vwcy1wcm9ncmVzcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHB4Yi1wcm9ncmVzcy1pY29uXG4gICAgICAgICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgICAgICAgIFtsYWJlbFBvc2l0aW9uXT1cImxhYmVsUG9zaXRpb25cIlxuICAgICAgICAgICAgW3BlcmNlbnRdPVwicGVyY2VudFwiXG4gICAgICAgICAgICBbc2hvd1BlcmNlbnRMYWJlbF09XCJzaG93UGVyY2VudExhYmVsXCJcbiAgICAgICAgICAgIFtsYWJlbENvbG9yXT1cImxhYmVsQ29sb3JcIlxuICAgICAgICAgICAgW2xhYmVsU2l6ZV09XCJsYWJlbFNpemVcIlxuICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSArICdweCdcIiBbYXR0ci53aWR0aF09XCJzaXplICsgJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJvdXRsaW5lZC1wcm9ncmVzcy1jbGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQgOFY0SDIwVjhIMTdWOUgyMFYxMkgxN1YxM0gyMFYxNkgxN1YxN0gyMFYyMEg0VjE3SDdWMTZINFYxM0g3VjEySDRWOUg3VjhINFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgICAgICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ291dGxpbmVkLWJvcmRlci1jbGlwLScgKyByYW5nZWRQZXJjZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMlwiIHk9XCIyXCIgd2lkdGg9XCIyMFwiIFthdHRyLmhlaWdodF09XCJzdGFydFkgLSAyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG5cbiAgICAgICAgICAgICAgICA8bWFza1xuICAgICAgICAgICAgICAgICAgICBpZD1cIm1hc2stZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgbWFzay10eXBlPVwiYWxwaGFcIlxuICAgICAgICAgICAgICAgICAgICBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgICAgICAgICAgIHg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgeT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImJhc2VQYXRoXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICAgIDxnIG1hc2s9XCJ1cmwoI21hc2stZmlsbGVkKVwiICpuZ0lmPVwiIW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5vcGFjaXR5XT1cImJhY2tncm91bmRDb2xvciA/IDEgOiAwLjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZF09XCJiYXNlUGF0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cImJhY2tncm91bmRDb2xvciB8fCBjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN0YXJ0WVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJmaWxsSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZz5cblxuICAgICAgICAgICAgICAgIDxnIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiAqbmdJZj1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyZWN0ICpuZ0lmPVwiYmFja2dyb3VuZENvbG9yXCIgeD1cIjRcIiB5PVwiNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIFthdHRyLmZpbGxdPVwiYmFja2dyb3VuZENvbG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMiA0QzIyIDIuODk1NDMgMjEuMTA0NiAyIDIwIDJINEMyLjg5NTQzIDIgMiAyLjg5NTQzIDIgNFYyMEMyIDIxLjEwNDYgMi44OTU0MyAyMiA0IDIySDIwQzIxLjEwNDYgMjIgMjIgMjEuMTA0NiAyMiAyMFY0Wk00IDRWOEg3VjlINFYxMkg3VjEzSDRWMTZIN1YxN0g0VjIwSDIwVjE3SDE3VjE2SDIwVjEzSDE3VjEySDIwVjlIMTdWOEgyMFY0SDRaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNvdXRsaW5lZC1ib3JkZXItY2xpcC0nICsgcmFuZ2VkUGVyY2VudCArICcpJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQgMkMyLjg5NTQzIDIgMiAyLjg5NTQzIDIgNFYyMEMyIDIxLjEwNDYgMi44OTU0MyAyMiA0IDIySDIwQzIxLjEwNDYgMjIgMjIgMjEuMTA0NiAyMiAyMFY0QzIyIDIuODk1NDMgMjEuMTA0NiAyIDIwIDJINFpNMjAgNEg0VjIwSDIwVjRaXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnldPVwic3RhcnRZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImZpbGxIZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoPVwidXJsKCNvdXRsaW5lZC1wcm9ncmVzcy1jbGlwKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvcHhiLXByb2dyZXNzLWljb24+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi4vcHhiLXByb2dyZXNzLWljb24uc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBVcHNDb21wb25lbnQgZXh0ZW5kcyBQeGJQcm9ncmVzc0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG91dGxpbmVkID0gZmFsc2U7XG5cbiAgICByYW5nZWRQZXJjZW50OiBudW1iZXI7XG4gICAgc3RhcnRZOiBudW1iZXI7XG4gICAgZmlsbEhlaWdodDogbnVtYmVyO1xuXG4gICAgYmFzZVBhdGggPVxuICAgICAgICAnTTIgNEMyIDIuODk1NDMgMi44OTU0MyAyIDQgMkgyMEMyMS4xMDQ2IDIgMjIgMi44OTU0MyAyMiA0VjZIMTlWOEgyMlYxMUgxOVYxM0gyMlYxNkgxOVYxOEgyMlYyMEMyMiAyMS4xMDQ2IDIxLjEwNDYgMjIgMjAgMjJINEMyLjg5NTQzIDIyIDIgMjEuMTA0NiAyIDIwVjE4SDVWMTZIMlYxM0g1VjExSDJWOEg1VjZIMlY0Wic7XG5cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yYW5nZWRQZXJjZW50ID0gcmFuZ2VWYWx1ZSh0aGlzLnBlcmNlbnQsIDAsIDEwMCk7XG4gICAgICAgIHRoaXMuc3RhcnRZID0gdGhpcy5vdXRsaW5lZFxuICAgICAgICAgICAgPyAoKDEwMCAtIHRoaXMucmFuZ2VkUGVyY2VudCkgLyAxMDApICogMTYgKyA0XG4gICAgICAgICAgICA6ICgoMTAwIC0gdGhpcy5yYW5nZWRQZXJjZW50KSAvIDEwMCkgKiAyMCArIDI7XG4gICAgICAgIHRoaXMuZmlsbEhlaWdodCA9IHRoaXMub3V0bGluZWQgPyAodGhpcy5yYW5nZWRQZXJjZW50IC8gMTAwKSAqIDE2IDogKHRoaXMucmFuZ2VkUGVyY2VudCAvIDEwMCkgKiAyMDtcbiAgICB9XG59XG4iXX0=