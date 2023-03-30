import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteModalComponent } from './concrete-modal.component';

describe('ConcreteModalComponent', () => {
  let component: ConcreteModalComponent;
  let fixture: ComponentFixture<ConcreteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcreteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
