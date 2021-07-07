/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import color from 'color';
export class PxbProgressIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhiLXByb2dyZXNzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9weGItcHJvZ3Jlc3MtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQThCMUIsTUFBTSxPQUFPLHdCQUF3QjtJQTVCckM7UUE2QmEsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBbUQsUUFBUSxDQUFDO0lBb0N0RixDQUFDOzs7O0lBNUJHLFdBQVc7UUFDUCxJQUFJLEtBQUssRUFBRTtZQUNQLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakY7SUFDTCxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDN0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUM5RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNaLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxLQUFLLENBQUM7WUFDakIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sYUFBYSxDQUFDO1lBQ3pCLEtBQUssS0FBSztnQkFDTixPQUFPLFFBQVEsQ0FBQztZQUNwQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQztZQUM1QjtnQkFDSSxPQUFPLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7OztZQW5FSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCVDs7YUFFSjs7O21CQUVJLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQVBOLHdDQUFtQjs7SUFDbkIsMkNBQXVCOztJQUN2QixvREFBa0M7O0lBQ2xDLGlEQUFrRjs7SUFDbEYseUNBQXVCOztJQUN2Qiw4Q0FBNEI7O0lBQzVCLDZDQUEyQjs7SUFDM0IsbURBQWlDOztJQUVqQyw0Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBjb2xvciBmcm9tICdjb2xvcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncHhiLXByb2dyZXNzLWljb24nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cInB4Yi1wcm9ncmVzcy1pY29uXCJcbiAgICAgICAgICAgIFtzdHlsZS5mbGV4RGlyZWN0aW9uXT1cImdldEZsZXhEaXJlY3Rpb24oKVwiXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJsYWJlbFBvc2l0aW9uID09PSAnY2VudGVyJyA/ICcnIDogJ2lubGluZS1mbGV4J1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93UGVyY2VudExhYmVsXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB4Yi1wcm9ncmVzcy1pY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuaW52ZXJ0ZWRdPVwiaW52ZXJ0ZWRcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5jZW50ZXJdPVwibGFiZWxQb3NpdGlvbiA9PT0gJ2NlbnRlcidcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5jb2xvcl09XCJsYWJlbENvbG9yXCJcbiAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7ICctd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoLnB4JzogbGFiZWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyBzaXplIC8gNjAgOiAwIH1cIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5mb250U2l6ZS5weF09XCJsYWJlbFNpemUgfHwgc2l6ZSAvIDRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwibGFiZWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyBzaXplIDogJ3Vuc2V0J1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInID8gc2l6ZSA6ICd1bnNldCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5saW5lSGVpZ2h0LnB4XT1cImxhYmVsUG9zaXRpb24gPT09ICd0b3AnIHx8IGxhYmVsUG9zaXRpb24gPT09ICdib3R0b20nID8gJ3Vuc2V0JyA6IHNpemVcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53ZWJraXRUZXh0U3Ryb2tlQ29sb3JdPVwiZ2V0U3Ryb2tlQ29sb3IoKVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndlYmtpdFRleHRGaWxsQ29sb3JdPVwibGFiZWxDb2xvclwiXG4gICAgICAgICAgICAgICAgPnt7IHBlcmNlbnQgfX0lPC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWycuL3B4Yi1wcm9ncmVzcy1pY29uLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHhiUHJvZ3Jlc3NJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBzaXplID0gMjQ7XG4gICAgQElucHV0KCkgcGVyY2VudCA9IDEwMDtcbiAgICBASW5wdXQoKSBzaG93UGVyY2VudExhYmVsID0gZmFsc2U7XG4gICAgQElucHV0KCkgbGFiZWxQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFiZWxDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsU2l6ZTogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gICAgaW52ZXJ0ZWQ6IGJvb2xlYW47XG5cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAvLyBJbnZlcnRlZCBjbGFzcyBhcHBsaWVzIG9ubHkgdG8gY2VudGVyLWFsaWduZWQgbGFiZWwuXG4gICAgICAgICAgICB0aGlzLmludmVydGVkID0gdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnY2VudGVyJyAmJiBjb2xvcih0aGlzLmNvbG9yKS5pc0RhcmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInICYmIHRoaXMubGFiZWxDb2xvciAmJiBjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbG9yKHRoaXMubGFiZWxDb2xvcikuaXNEYXJrKCkgPyAnd2hpdGUnIDogJ2JsYWNrJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0RmxleERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFiZWxQb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyb3cnO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAncm93LXJldmVyc2UnO1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NvbHVtbic7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnY29sdW1uLXJldmVyc2UnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=