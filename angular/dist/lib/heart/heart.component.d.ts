import { OnChanges } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export declare class HeartComponent extends PxbProgressIconComponent implements OnChanges {
    outlined: boolean;
    startY: number;
    fillHeight: number;
    rv: (value: number, min: number, max: number) => number;
    basePath: string;
    outlinedPath: string;
    ngOnChanges(): void;
    getPath(): string;
}
