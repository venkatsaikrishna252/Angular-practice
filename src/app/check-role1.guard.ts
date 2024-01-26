import { CanActivateFn } from '@angular/router';

export const checkRole1Guard: CanActivateFn = (route, state) => {
  return true;
};
