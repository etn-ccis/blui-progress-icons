/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
import { rangeValue } from '../utilities';
export class BatteryComponent extends PxbProgressIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUE0RTFDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSx3QkFBd0I7SUExRTlEOztRQTJFYSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFPMUIsT0FBRSxHQUFHLFVBQVUsQ0FBQztRQUVoQixhQUFRLEdBQ0osdUhBQXVILENBQUM7UUFDNUgsZUFBVSxHQUNOLDZOQUE2TixDQUFDO1FBQ2xPLGlCQUFZLEdBQ1Isc0pBQXNKLENBQUM7UUFDM0osV0FBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzVCLGFBQVEsR0FBRyx5QkFBeUIsQ0FBQztJQXFCekMsQ0FBQzs7OztJQW5CRyxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsS0FBSztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2RCxDQUFDOzs7WUFoSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcUVUOzthQUVKOzs7dUJBRUksS0FBSzt1QkFDTCxLQUFLOzs7O0lBRE4sb0NBQTBCOztJQUMxQixvQ0FBMEI7O0lBRTFCLHNDQUFtQjs7SUFDbkIsdUNBQW9COztJQUNwQixrQ0FBZTs7SUFDZixxQ0FBa0I7O0lBRWxCLDhCQUFnQjs7SUFFaEIsb0NBQzRIOztJQUM1SCxzQ0FDa087O0lBQ2xPLHdDQUMySjs7SUFDM0osa0NBQTRCOztJQUM1QixvQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFB4YlByb2dyZXNzSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL3B4Yi1wcm9ncmVzcy1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdiYXR0ZXJ5LXByb2dyZXNzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cHhiLXByb2dyZXNzLWljb25cbiAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXG4gICAgICAgICAgICBbcGVyY2VudF09XCJwZXJjZW50XCJcbiAgICAgICAgICAgIFtzaG93UGVyY2VudExhYmVsXT1cInNob3dQZXJjZW50TGFiZWxcIlxuICAgICAgICAgICAgW2xhYmVsQ29sb3JdPVwibGFiZWxDb2xvclwiXG4gICAgICAgICAgICBbbGFiZWxTaXplXT1cImxhYmVsU2l6ZVwiXG4gICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiXG4gICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICA8bWFzayAqbmdJZj1cIm91dGxpbmVkXCIgW2F0dHIuaWRdPVwibWFza0lEbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPVwiYmxhY2tcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTMgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICAgICAgICA8bWFzayAqbmdJZj1cIm91dGxpbmVkXCIgW2F0dHIuaWRdPVwibWFza0lEcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci54XT1cInN0YXJ0WFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiKHJ2KHBlcmNlbnQsIDAsIDEwMCkgLyAxMDApICogZmlsbFdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBbaWRdPVwiZ2V0SUQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggb3ZlcmZsb3c9XCJ2aXNpYmxlXCIgW2F0dHIuZF09XCJnZXRDbGlwUGF0aCgpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJiYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5kXT1cImJhc2VQYXRoXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5jbGlwLXBhdGhdPVwib3V0bGluZWQgPyB1bmRlZmluZWQgOiAndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cIighb3V0bGluZWQgJiYgYmFja2dyb3VuZENvbG9yKSB8fCBjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCB8fCAoIW91dGxpbmVkICYmIGJhY2tncm91bmRDb2xvcikgPyAnMScgOiAnMC4zJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRdPVwiZ2V0QmFzZVBhdGgoKVwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxnIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIueF09XCJzdGFydFhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cIihydihwZXJjZW50LCAwLCAxMDApIC8gMTAwKSAqIGZpbGxXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5tYXNrXT1cIm91dGxpbmVkICYmIGNoYXJnaW5nID8gJ3VybCgjJyArIG1hc2tJRGxlZnQgKyAnKScgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb25cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3V0bGluZWQgJiYgY2hhcmdpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLm1hc2tdPVwiJ3VybCgjJyArIG1hc2tJRHJpZ2h0ICsgJyknXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9weGItcHJvZ3Jlc3MtaWNvbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuLi9weGItcHJvZ3Jlc3MtaWNvbi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgZXh0ZW5kcyBQeGJQcm9ncmVzc0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGNoYXJnaW5nID0gZmFsc2U7XG4gICAgQElucHV0KCkgb3V0bGluZWQgPSBmYWxzZTtcblxuICAgIG1hc2tJRGxlZnQ6IHN0cmluZztcbiAgICBtYXNrSURyaWdodDogc3RyaW5nO1xuICAgIHN0YXJ0WDogbnVtYmVyO1xuICAgIGZpbGxXaWR0aDogbnVtYmVyO1xuXG4gICAgcnYgPSByYW5nZVZhbHVlO1xuXG4gICAgYmFzZVBhdGggPVxuICAgICAgICAnTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6JztcbiAgICBjaGFyZ2VQYXRoID1cbiAgICAgICAgJ00yMCwxMFY4LjMzYTEuMzE5LDEuMzE5LDAsMCwwLTEtMS4yNjNBMS4yNTcsMS4yNTcsMCwwLDAsMTguNjcsN0gzLjM0QTEuMzM4LDEuMzM4LDAsMCwwLDIsOC4zM3Y3LjMzQTEuMzM4LDEuMzM4LDAsMCwwLDMuMzMsMTdIMTguNjdhMS4yNTcsMS4yNTcsMCwwLDAsLjMzLS4wNjcsMS4zMTksMS4zMTksMCwwLDAsMS0xLjI2M1YxNGgyVjEwWm0tOC41LDN2Mkw0LDExSDkuNVY5TDE3LDEzWic7XG4gICAgb3V0bGluZWRQYXRoID1cbiAgICAgICAgJ00xOCw5djZINFY5SDE4bS43LTJIMy4zQTEuMzI0LDEuMzI0LDAsMCwwLDIsOC4zdjcuM0ExLjM0NywxLjM0NywwLDAsMCwzLjMsMTdIMTguNmExLjMyNCwxLjMyNCwwLDAsMCwxLjMtMS4zVjE0aDJWMTBIMjBWOC4zQTEuMzI0LDEuMzI0LDAsMCwwLDE4LjcsN1onO1xuICAgIGJhc2VJRCA9ICdweGItYmF0dGVyeS1jbGlwJztcbiAgICBjaGFyZ2VJRCA9ICdweGItYmF0dGVyeS1jbGlwLWNoYXJnZSc7XG5cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXNrSURsZWZ0ID0gYG1hc2tMZWZ0LSR7dGhpcy5wZXJjZW50fWA7XG4gICAgICAgIHRoaXMubWFza0lEcmlnaHQgPSBgbWFza1JpZ2h0LSR7dGhpcy5wZXJjZW50fWA7XG5cbiAgICAgICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMy45IDogMjtcbiAgICAgICAgdGhpcy5maWxsV2lkdGggPSB0aGlzLm91dGxpbmVkID8gMTQuMiA6IDE4O1xuICAgIH1cblxuICAgIGdldEJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dGxpbmVkID8gdGhpcy5vdXRsaW5lZFBhdGggOiB0aGlzLmJhc2VQYXRoO1xuICAgIH1cblxuICAgIGdldENsaXBQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aDtcbiAgICB9XG5cbiAgICBnZXRJRCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlSUQgOiB0aGlzLmJhc2VJRDtcbiAgICB9XG59XG4iXX0=