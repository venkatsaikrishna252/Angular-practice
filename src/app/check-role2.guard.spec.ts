import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkRole2Guard } from './check-role2.guard';

describe('checkRole2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkRole2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
