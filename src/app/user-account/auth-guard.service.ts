import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserAccountService } from "app/user-account/user-account.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAccountService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.setRedirectUrl(url);

    // Navigate to the login page with extras
    this.router.navigate(['account/login']);
    return false;
  }
}