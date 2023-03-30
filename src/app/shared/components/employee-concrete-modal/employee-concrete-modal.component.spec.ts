import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeConcreteModalComponent } from './employee-concrete-modal.component';

describe('EmployeeConcreteModalComponent', () => {
  let component: EmployeeConcreteModalComponent;
  let fixture: ComponentFixture<EmployeeConcreteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeConcreteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeConcreteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
