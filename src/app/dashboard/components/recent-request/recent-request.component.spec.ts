import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRequestComponent } from './recent-request.component';

describe('RecentRequestComponent', () => {
  let component: RecentRequestComponent;
  let fixture: ComponentFixture<RecentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
