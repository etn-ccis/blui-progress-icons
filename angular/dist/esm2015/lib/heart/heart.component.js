/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { rangeValue } from '../utilities';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export class HeartComponent extends PxbProgressIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9oZWFydC9oZWFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUErQzFFLE1BQU0sT0FBTyxjQUFlLFNBQVEsd0JBQXdCO0lBN0M1RDs7UUE4Q2EsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUcxQixPQUFFLEdBQUcsVUFBVSxDQUFDO1FBRWhCLGFBQVEsR0FDSixnTEFBZ0wsQ0FBQztRQUNyTCxpQkFBWSxHQUNSLDJZQUEyWSxDQUFDO0lBVXBaLENBQUM7Ozs7SUFSRyxXQUFXO1FBQ1AsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdELENBQUM7OztZQS9ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBd0NUOzthQUVKOzs7dUJBRUksS0FBSzs7OztJQUFOLGtDQUEwQjs7SUFDMUIsZ0NBQWU7O0lBQ2Ysb0NBQW1COztJQUNuQiw0QkFBZ0I7O0lBRWhCLGtDQUNxTDs7SUFDckwsc0NBQ2daIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IFB4YlByb2dyZXNzSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL3B4Yi1wcm9ncmVzcy1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVhcnQtcHJvZ3Jlc3MnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxweGItcHJvZ3Jlc3MtaWNvblxuICAgICAgICAgICAgW3NpemVdPVwic2l6ZVwiXG4gICAgICAgICAgICBbbGFiZWxQb3NpdGlvbl09XCJsYWJlbFBvc2l0aW9uXCJcbiAgICAgICAgICAgIFtwZXJjZW50XT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgW3Nob3dQZXJjZW50TGFiZWxdPVwic2hvd1BlcmNlbnRMYWJlbFwiXG4gICAgICAgICAgICBbbGFiZWxDb2xvcl09XCJsYWJlbENvbG9yXCJcbiAgICAgICAgICAgIFtsYWJlbFNpemVdPVwibGFiZWxTaXplXCJcbiAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwic2l6ZSArICdweCdcIlxuICAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCJcbiAgICAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggKm5nSWY9XCJvdXRsaW5lZCAmJiBiYWNrZ3JvdW5kQ29sb3JcIiBbYXR0ci5kXT1cImJhc2VQYXRoXCIgW2F0dHIuZmlsbF09XCJiYWNrZ3JvdW5kQ29sb3JcIiAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiKCFvdXRsaW5lZCAmJiBiYWNrZ3JvdW5kQ29sb3IpIHx8IGNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIm91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwIHx8ICghb3V0bGluZWQgJiYgYmFja2dyb3VuZENvbG9yKSA/ICcxJyA6ICcwLjMnXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZF09XCJnZXRQYXRoKClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwicHhiLWhlYXJ0LWNsaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aD1cInVybCgjcHhiLWhlYXJ0LWNsaXApXCJcbiAgICAgICAgICAgICAgICAgICAgeD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN0YXJ0WSAtIChydihwZXJjZW50LCAwLCAxMDApICogZmlsbEhlaWdodCkgLyAxMDBcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9weGItcHJvZ3Jlc3MtaWNvbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuLi9weGItcHJvZ3Jlc3MtaWNvbi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYXJ0Q29tcG9uZW50IGV4dGVuZHMgUHhiUHJvZ3Jlc3NJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBvdXRsaW5lZCA9IGZhbHNlO1xuICAgIHN0YXJ0WTogbnVtYmVyO1xuICAgIGZpbGxIZWlnaHQ6IG51bWJlcjtcbiAgICBydiA9IHJhbmdlVmFsdWU7XG5cbiAgICBiYXNlUGF0aCA9XG4gICAgICAgICdNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXonO1xuICAgIG91dGxpbmVkUGF0aCA9XG4gICAgICAgICdNMTYuNSw1QTMuNDYyLDMuNDYyLDAsMCwxLDIwLDguNWMwLDIuODg1LTMuMTI1LDUuNzI1LTcuODU2LDEwLjAyNGwtLjAzNS4wMzItLjEuMDk0LS4xMjQtLjExM0M3LjEzNSwxNC4yMzQsNCwxMS4zOTEsNCw4LjVBMy40NjIsMy40NjIsMCwwLDEsNy41LDVhMy45NiwzLjk2LDAsMCwxLDIuOTc3LDEuMzg3TDEyLDguMTc1bDEuNTIzLTEuNzg4QTMuOTYsMy45NiwwLDAsMSwxNi41LDVtMC0yQTUuOTg4LDUuOTg4LDAsMCwwLDEyLDUuMDksNS45ODgsNS45ODgsMCwwLDAsNy41LDMsNS40NDcsNS40NDcsMCwwLDAsMiw4LjVjMCwzLjc4LDMuNCw2Ljg2LDguNTUsMTEuNTNMMTIsMjEuMzVsMS40NS0xLjMxQzE4LjYsMTUuMzYsMjIsMTIuMjgsMjIsOC41QTUuNDQ3LDUuNDQ3LDAsMCwwLDE2LjUsM1onO1xuXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhcnRZID0gdGhpcy5vdXRsaW5lZCA/IDE4LjM1IDogMjEuMzU7XG4gICAgICAgIHRoaXMuZmlsbEhlaWdodCA9IHRoaXMub3V0bGluZWQgPyAxMy4zNSA6IDE4LjM1O1xuICAgIH1cblxuICAgIGdldFBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0bGluZWQgPyB0aGlzLm91dGxpbmVkUGF0aCA6IHRoaXMuYmFzZVBhdGg7XG4gICAgfVxufVxuIl19