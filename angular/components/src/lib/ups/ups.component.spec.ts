import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsComponent } from './ups.component';
import { BluiProgressIconComponent } from '../blui-progress-icon.component';

describe('UPSComponent', () => {
    let component: UpsComponent;
    let fixture: ComponentFixture<UpsComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [BluiProgressIconComponent, UpsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
