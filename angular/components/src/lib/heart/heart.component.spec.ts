import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartComponent } from './heart.component';
import { BluiProgressIconComponent } from '../blui-progress-icon.component';

describe('HeartComponent', () => {
    let component: HeartComponent;
    let fixture: ComponentFixture<HeartComponent>;

    beforeEach(async((): void => {
        void TestBed.configureTestingModule({
            declarations: [BluiProgressIconComponent, HeartComponent],
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(HeartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        void expect(component).toBeTruthy();
    });
});
