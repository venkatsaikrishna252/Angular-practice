import { CanActivateFn } from '@angular/router';

export const checkRole2Guard: CanActivateFn = (route, state) => {
  console.log('can deactivate exec...');
  
  return false;
};
