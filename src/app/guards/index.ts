import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@services/auth.service";

export const isLoggedIn: CanActivateFn = (
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentToken ? router.createUrlTree(['system']) : true;
}

export const authGuard: (checkForLoggedIn: boolean) => CanActivateFn = (checkForLoggedIn: boolean) => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (checkForLoggedIn) {
      return authService.currentToken ? true : router.createUrlTree(['sign-in']);
    } else {
      return authService.currentToken ? router.createUrlTree(['system']) : true;
    }
  }
}
