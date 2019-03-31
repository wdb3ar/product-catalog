import { TestBed } from '@angular/core/testing';

import { NeedAuthGuard } from './need-auth.guard';

describe('NeedAuthGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeedAuthGuard = TestBed.get(NeedAuthGuard);
    expect(service).toBeTruthy();
  });
});
