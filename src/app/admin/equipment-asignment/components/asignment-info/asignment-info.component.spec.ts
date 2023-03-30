import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentInfoComponent } from './asignment-info.component';

describe('AsignmentInfoComponent', () => {
  let component: AsignmentInfoComponent;
  let fixture: ComponentFixture<AsignmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignmentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
