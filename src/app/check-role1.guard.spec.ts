import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkRole1Guard } from './check-role1.guard';

describe('checkRole1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkRole1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
