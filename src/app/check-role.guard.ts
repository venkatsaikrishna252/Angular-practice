import { CanActivateFn } from '@angular/router';

export const checkRoleGuard: CanActivateFn = (route, state) => {
  
  // logic tto check role 
  return true;
};
