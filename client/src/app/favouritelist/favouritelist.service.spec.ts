import { TestBed, inject } from '@angular/core/testing';

import { FavouritelistService } from './favouritelist.service';

describe('FavouritelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouritelistService]
    });
  });

  it('should be created', inject([FavouritelistService], (service: FavouritelistService) => {
    expect(service).toBeTruthy();
  }));
});
