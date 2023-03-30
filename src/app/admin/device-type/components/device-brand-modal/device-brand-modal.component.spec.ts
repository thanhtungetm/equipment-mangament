import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceBrandModalComponent } from './device-brand-modal.component';

describe('DeviceBrandModalComponent', () => {
  let component: DeviceBrandModalComponent;
  let fixture: ComponentFixture<DeviceBrandModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceBrandModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceBrandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
