import { OnChanges } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export declare class BatteryComponent extends PxbProgressIconComponent implements OnChanges {
    charging: boolean;
    outlined: boolean;
    maskIDleft: string;
    maskIDright: string;
    startX: number;
    fillWidth: number;
    rv: (value: number, min: number, max: number) => number;
    basePath: string;
    chargePath: string;
    outlinedPath: string;
    baseID: string;
    chargeID: string;
    ngOnChanges(): void;
    getBasePath(): string;
    getClipPath(): string;
    getID(): string;
}
