import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteEquipmentTabComponent } from './concrete-equipment-tab.component';

describe('ConcreteEquipmentTabComponent', () => {
  let component: ConcreteEquipmentTabComponent;
  let fixture: ComponentFixture<ConcreteEquipmentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteEquipmentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteEquipmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
