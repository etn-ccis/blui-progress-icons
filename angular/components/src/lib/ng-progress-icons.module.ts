import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryComponent } from './battery/battery.component';
import { HeartComponent } from './heart/heart.component';
import { PieComponent } from './pie/pie.component';
import { UpsComponent } from './ups/ups.component';
import { BluiProgressIconComponent } from './blui-progress-icon.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BluiProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
    exports: [BluiProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
})
export class NgProgressIconsModule {}
