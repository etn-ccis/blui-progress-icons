import { OnChanges } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export declare class PieComponent extends PxbProgressIconComponent implements OnChanges {
    ring: number;
    outlined: boolean;
    rv: (value: number, min: number, max: number) => number;
    outlineBase: string;
    twoToneBase: string;
    clipPath: string;
    iconStroke: number;
    stroke: number;
    centerX: number;
    centerY: number;
    outerRadiusLarge: number;
    innerRadiusLarge: number;
    outerRadiusSmall: number;
    innerRadiusSmall: number;
    getPath(): string;
    ngOnChanges(): void;
}
