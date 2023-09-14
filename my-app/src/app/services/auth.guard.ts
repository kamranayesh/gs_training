import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../user/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // return boolean
  const status = inject(AuthService).isLoggedIn();
  const router = inject(Router);
  if (!status) {
    router.navigate(['/user', 'login'], { queryParams: { ret: state.url } });
  }
  return status;
};
