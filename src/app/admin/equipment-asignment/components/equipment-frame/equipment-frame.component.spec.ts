import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFrameComponent } from './equipment-frame.component';

describe('EquipmentFrameComponent', () => {
  let component: EquipmentFrameComponent;
  let fixture: ComponentFixture<EquipmentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
