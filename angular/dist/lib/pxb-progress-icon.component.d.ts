import { OnChanges } from '@angular/core';
export declare class PxbProgressIconComponent implements OnChanges {
    size: number;
    percent: number;
    showPercentLabel: boolean;
    labelPosition: 'top' | 'bottom' | 'left' | 'right' | 'center';
    color: string;
    labelColor: string;
    labelSize: number;
    backgroundColor: string;
    inverted: boolean;
    ngOnChanges(): void;
    getStrokeColor(): string;
    getFlexDirection(): string;
}
