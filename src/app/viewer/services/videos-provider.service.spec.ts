import { TestBed, inject } from '@angular/core/testing';
import { VideosProviderService } from './videos-provider.service';

describe('VideosProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosProviderService]
    });
  });

  it('should be created', inject([VideosProviderService], (service: VideosProviderService) => {
    expect(service).toBeTruthy();
  }));
});
