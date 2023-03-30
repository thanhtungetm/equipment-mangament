import { TestBed } from '@angular/core/testing';

import { LoginAcceptionGuard } from './login-acception.guard';

describe('LoginAcceptionGuard', () => {
  let guard: LoginAcceptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginAcceptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
