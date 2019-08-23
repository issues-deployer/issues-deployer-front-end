import {TestBed} from '@angular/core/testing';

import {SuperGroupService} from './super-group.service';

describe('SuperGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperGroupService = TestBed.get(SuperGroupService);
    expect(service).toBeTruthy();
  });
});
