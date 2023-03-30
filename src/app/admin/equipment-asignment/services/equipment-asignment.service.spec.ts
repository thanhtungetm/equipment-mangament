import { TestBed } from '@angular/core/testing';

import { EquipmentAsignmentService } from './equipment-asignment.service';

describe('EquipmentAsignmentService', () => {
  let service: EquipmentAsignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentAsignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
