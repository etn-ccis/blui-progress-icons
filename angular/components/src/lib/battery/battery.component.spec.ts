import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryComponent } from './battery.component';
import { BluiProgressIconComponent } from '../blui-progress-icon.component';

describe('BatteryComponent', () => {
    let component: BatteryComponent;
    let fixture: ComponentFixture<BatteryComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [BluiProgressIconComponent, BatteryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BatteryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
