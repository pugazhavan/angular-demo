import { TestBed, inject } from '@angular/core/testing';

import { RolePermisionsService } from './role-permisions.service';

describe('RolePermisionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolePermisionsService]
    });
  });

  it('should be created', inject([RolePermisionsService], (service: RolePermisionsService) => {
    expect(service).toBeTruthy();
  }));
});
