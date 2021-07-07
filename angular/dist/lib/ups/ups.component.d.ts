import { OnChanges } from '@angular/core';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';
export declare class UpsComponent extends PxbProgressIconComponent implements OnChanges {
    outlined: boolean;
    rangedPercent: number;
    startY: number;
    fillHeight: number;
    basePath: string;
    ngOnChanges(): void;
}
