import { TestBed, inject } from '@angular/core/testing';

import { HttpCommonGatewayService } from './http-common-gateway.service';

describe('HttpCommonGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCommonGatewayService]
    });
  });

  it('should be created', inject([HttpCommonGatewayService], (service: HttpCommonGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
