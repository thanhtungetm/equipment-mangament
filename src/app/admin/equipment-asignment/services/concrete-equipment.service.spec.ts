import { TestBed } from '@angular/core/testing';

import { ConcreteEquipmentService } from './concrete-equipment.service';

describe('ConcreteEquipmentService', () => {
  let service: ConcreteEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcreteEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
