import { TestBed, inject } from '@angular/core/testing';

import { SavedService } from './saved.service';

describe('SavedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedService]
    });
  });

  it('should be created', inject([SavedService], (service: SavedService) => {
    expect(service).toBeTruthy();
  }));
});
