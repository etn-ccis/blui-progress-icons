/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { rangeValue, getCoordinates } from '../utilities';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export class PieComponent extends PxbProgressIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvIiwic291cmNlcyI6WyJsaWIvcGllL3BpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBeUQxRSxNQUFNLE9BQU8sWUFBYSxTQUFRLHdCQUF3QjtJQXZEMUQ7O1FBd0RhLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCLE9BQUUsR0FBRyxVQUFVLENBQUM7UUFLaEIsZUFBVSxHQUFHLENBQUMsQ0FBQzs7UUFJZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7UUFHYixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUEwRDFCLENBQUM7Ozs7SUFuREcsT0FBTztRQUNILE9BQU8sMEJBQTBCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFDeEUsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQ3JELElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0lBQzlELENBQUM7Ozs7SUFFRCxXQUFX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YW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUsIGdldENvb3JkaW5hdGVzIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcbmltcG9ydCB7IFB4YlByb2dyZXNzSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL3B4Yi1wcm9ncmVzcy1pY29uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cHhiLXByb2dyZXNzLWljb25cbiAgICAgICAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXG4gICAgICAgICAgICBbcGVyY2VudF09XCJwZXJjZW50XCJcbiAgICAgICAgICAgIFtzaG93UGVyY2VudExhYmVsXT1cInNob3dQZXJjZW50TGFiZWxcIlxuICAgICAgICAgICAgW2xhYmVsQ29sb3JdPVwibGFiZWxDb2xvclwiXG4gICAgICAgICAgICBbbGFiZWxTaXplXT1cImxhYmVsU2l6ZVwiXG4gICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInNpemUgKyAncHgnXCJcbiAgICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJzaXplICsgJ3B4J1wiXG4gICAgICAgICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxjbGlwUGF0aCBbYXR0ci5pZF09XCIncHhiLWRvbnV0LWNsaXAtJyArIHN0cm9rZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImNsaXBQYXRoXCIgLz5cbiAgICAgICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib3V0bGluZWQgJiYgYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZF09XCJ0d29Ub25lQmFzZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nICsgc3Ryb2tlICsgJyknXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScgKyBzdHJva2UgKyAnKSdcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cIighb3V0bGluZWQgJiYgYmFja2dyb3VuZENvbG9yKSB8fCBjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCB8fCAoIW91dGxpbmVkICYmIGJhY2tncm91bmRDb2xvcikgPyAnMScgOiAnMC4zJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRdPVwib3V0bGluZWQgPyBvdXRsaW5lQmFzZSA6IHR3b1RvbmVCYXNlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwicnYocGVyY2VudCwgMCwgMTAwKSA+IDAgJiYgcnYocGVyY2VudCwgMCwgMTAwKSA8IDEwMFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJyArIHN0cm9rZSArICcpJ1wiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRdPVwiZ2V0UGF0aCgpXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInJ2KHBlcmNlbnQsIDAsIDEwMCkgPT09IDEwMCAmJiBvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nICsgc3Ryb2tlICsgJyknXCJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCJcbiAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9weGItcHJvZ3Jlc3MtaWNvbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuLi9weGItcHJvZ3Jlc3MtaWNvbi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBpZUNvbXBvbmVudCBleHRlbmRzIFB4YlByb2dyZXNzSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgcmluZyA9IDEwO1xuICAgIEBJbnB1dCgpIG91dGxpbmVkID0gZmFsc2U7XG5cbiAgICBydiA9IHJhbmdlVmFsdWU7XG5cbiAgICBvdXRsaW5lQmFzZTogc3RyaW5nO1xuICAgIHR3b1RvbmVCYXNlOiBzdHJpbmc7XG4gICAgY2xpcFBhdGg6IHN0cmluZztcbiAgICBpY29uU3Ryb2tlID0gMjtcbiAgICBzdHJva2U6IG51bWJlcjtcblxuICAgIC8vIFJpbmcgcHJvcGVydGllc1xuICAgIGNlbnRlclggPSAxMjtcbiAgICBjZW50ZXJZID0gMTI7XG5cbiAgICAvLyBPdXRlciByaW5nXG4gICAgb3V0ZXJSYWRpdXNMYXJnZSA9IDEwO1xuICAgIGlubmVyUmFkaXVzTGFyZ2U6IG51bWJlcjtcblxuICAgIC8vIElubmVyIFJpbmdcbiAgICBvdXRlclJhZGl1c1NtYWxsOiBudW1iZXI7XG4gICAgaW5uZXJSYWRpdXNTbWFsbDogbnVtYmVyO1xuXG4gICAgZ2V0UGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYE0gMTIsMTIgSCAyNCBBIDEyLDEyLDAsJHt0aGlzLnJ2KHRoaXMucGVyY2VudCwgMCwgMTAwKSA+PSA1MCA/IDEgOiAwfSwxLCR7XG4gICAgICAgICAgICBnZXRDb29yZGluYXRlcyh0aGlzLnJ2KHRoaXMucGVyY2VudCwgMCwgMTAwKSlbJ3gnXVxuICAgICAgICB9LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5ydih0aGlzLnBlcmNlbnQsIDAsIDEwMCkpWyd5J119WmA7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHRoaXMub3V0bGluZWQgPyBNYXRoLm1heCh0aGlzLnN0cm9rZSwgMiAqIHRoaXMuaWNvblN0cm9rZSArIDEpIDogdGhpcy5zdHJva2U7XG4gICAgICAgIHRoaXMuaW5uZXJSYWRpdXNMYXJnZSA9IDEwIC0gdGhpcy5pY29uU3Ryb2tlO1xuICAgICAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICAgICAgICB0aGlzLmlubmVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlO1xuICAgICAgICBpZiAodGhpcy5pbm5lclJhZGl1c1NtYWxsID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vdXRsaW5lQmFzZSA9IGBcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgKyB0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgKyB0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgKyB0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIFpcbiAgTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgKyB0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgLSB0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIFpcbmA7XG4gICAgICAgIHRoaXMudHdvVG9uZUJhc2UgPSBgXG5NICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSAtIHRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkgKyB0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZIC0gdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuWlxuYDtcbiAgICAgICAgdGhpcy5jbGlwUGF0aCA9IGBcbk0xMiwyXG5BMTAsMTAsMCwxLDAsMjIsMTIsXG4xMCwxMCwwLDAsMCwxMiwyXG5aXG5tMCwkezIwIC0gdGhpcy5zdHJva2V9IFxuQSAkezEwIC0gdGhpcy5zdHJva2V9LCR7MTAgLSB0aGlzLnN0cm9rZX0sMCwxLDEsJHsyMiAtIHRoaXMuc3Ryb2tlfSwxMixcbiR7MTAgLSB0aGlzLnN0cm9rZX0sJHsxMCAtIHRoaXMuc3Ryb2tlfSwwLDAsMSwxMiwkezIyIC0gdGhpcy5zdHJva2V9XG5aXG5gO1xuICAgIH1cbn1cbiJdfQ==