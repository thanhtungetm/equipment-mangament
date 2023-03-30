import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentModalComponent } from './asignment-modal.component';

describe('AsignmentModalComponent', () => {
  let component: AsignmentModalComponent;
  let fixture: ComponentFixture<AsignmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignmentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
