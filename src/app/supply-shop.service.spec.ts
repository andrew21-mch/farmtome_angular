import { TestBed } from '@angular/core/testing';

import { SupplyShopService } from './supply-shop.service';

describe('SupplyShopService', () => {
  let service: SupplyShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
