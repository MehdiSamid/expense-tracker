import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(authService.isAuthenticated){

    return true;
  }else {
    return router.createUrlTree(['/login']);
    // return true ;
  }
};
