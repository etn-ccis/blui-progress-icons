/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import color from 'color';
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
export { PxbProgressIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhiLXByb2dyZXNzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9weGItcHJvZ3Jlc3MtaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUUxQjtJQUFBO1FBNkJhLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGtCQUFhLEdBQW1ELFFBQVEsQ0FBQztJQW9DdEYsQ0FBQzs7OztJQTVCRyw4Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLEtBQUssRUFBRTtZQUNQLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakY7SUFDTCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRTtZQUM3RCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsbURBQWdCOzs7SUFBaEI7UUFDSSxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssT0FBTztnQkFDUixPQUFPLGFBQWEsQ0FBQztZQUN6QixLQUFLLEtBQUs7Z0JBQ04sT0FBTyxRQUFRLENBQUM7WUFDcEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sZ0JBQWdCLENBQUM7WUFDNUI7Z0JBQ0ksT0FBTyxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDOztnQkFuRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxzcENBdUJUOztpQkFFSjs7O3VCQUVJLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7SUFnQ1YsK0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQXhDWSx3QkFBd0I7OztJQUNqQyx3Q0FBbUI7O0lBQ25CLDJDQUF1Qjs7SUFDdkIsb0RBQWtDOztJQUNsQyxpREFBa0Y7O0lBQ2xGLHlDQUF1Qjs7SUFDdkIsOENBQTRCOztJQUM1Qiw2Q0FBMkI7O0lBQzNCLG1EQUFpQzs7SUFFakMsNENBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3B4Yi1wcm9ncmVzcy1pY29uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJweGItcHJvZ3Jlc3MtaWNvblwiXG4gICAgICAgICAgICBbc3R5bGUuZmxleERpcmVjdGlvbl09XCJnZXRGbGV4RGlyZWN0aW9uKClcIlxuICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwibGFiZWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyAnJyA6ICdpbmxpbmUtZmxleCdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd1BlcmNlbnRMYWJlbFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJweGItcHJvZ3Jlc3MtaWNvbi1sYWJlbFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmludmVydGVkXT1cImludmVydGVkXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuY2VudGVyXT1cImxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuY29sb3JdPVwibGFiZWxDb2xvclwiXG4gICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aC5weCc6IGxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInID8gc2l6ZSAvIDYwIDogMCB9XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwibGFiZWxTaXplIHx8IHNpemUgLyA0XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImxhYmVsUG9zaXRpb24gPT09ICdjZW50ZXInID8gc2l6ZSA6ICd1bnNldCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJsYWJlbFBvc2l0aW9uID09PSAnY2VudGVyJyA/IHNpemUgOiAndW5zZXQnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUubGluZUhlaWdodC5weF09XCJsYWJlbFBvc2l0aW9uID09PSAndG9wJyB8fCBsYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJyA/ICd1bnNldCcgOiBzaXplXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUud2Via2l0VGV4dFN0cm9rZUNvbG9yXT1cImdldFN0cm9rZUNvbG9yKClcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53ZWJraXRUZXh0RmlsbENvbG9yXT1cImxhYmVsQ29sb3JcIlxuICAgICAgICAgICAgICAgID57eyBwZXJjZW50IH19JTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9weGItcHJvZ3Jlc3MtaWNvbi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFB4YlByb2dyZXNzSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgc2l6ZSA9IDI0O1xuICAgIEBJbnB1dCgpIHBlcmNlbnQgPSAxMDA7XG4gICAgQElucHV0KCkgc2hvd1BlcmNlbnRMYWJlbCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGxhYmVsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgPSAnY2VudGVyJztcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGxhYmVsQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBsYWJlbFNpemU6IG51bWJlcjtcbiAgICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICAgIGludmVydGVkOiBib29sZWFuO1xuXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgLy8gSW52ZXJ0ZWQgY2xhc3MgYXBwbGllcyBvbmx5IHRvIGNlbnRlci1hbGlnbmVkIGxhYmVsLlxuICAgICAgICAgICAgdGhpcy5pbnZlcnRlZCA9IHRoaXMubGFiZWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgJiYgY29sb3IodGhpcy5jb2xvcikuaXNEYXJrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAnY2VudGVyJyAmJiB0aGlzLmxhYmVsQ29sb3IgJiYgY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvcih0aGlzLmxhYmVsQ29sb3IpLmlzRGFyaygpID8gJ3doaXRlJyA6ICdibGFjayc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGdldEZsZXhEaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhYmVsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAncm93JztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Jvdy1yZXZlcnNlJztcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjb2x1bW4nO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19