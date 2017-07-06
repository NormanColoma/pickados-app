import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UserAccountService } from "app/user-account/user-account.service";


@Injectable()
export class AnonimousGuard implements CanActivate {
  constructor(private authService: UserAccountService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = '/home';

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLogged()) { 
        debugger;
        this.router.navigate([url]);
        return false;
    }

    return true;
  }
}