import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteEquipmentInfoComponent } from './concrete-equipment-info.component';

describe('ConcreteEquipmentInfoComponent', () => {
  let component: ConcreteEquipmentInfoComponent;
  let fixture: ComponentFixture<ConcreteEquipmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteEquipmentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteEquipmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
