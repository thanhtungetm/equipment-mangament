import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentViewComponent } from './asignment-view.component';

describe('AsignmentViewComponent', () => {
  let component: AsignmentViewComponent;
  let fixture: ComponentFixture<AsignmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
