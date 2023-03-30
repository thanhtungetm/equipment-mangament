import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFrameComponent } from './employee-frame.component';

describe('EmployeeFrameComponent', () => {
  let component: EmployeeFrameComponent;
  let fixture: ComponentFixture<EmployeeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
