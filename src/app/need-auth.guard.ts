import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable({
  providedIn: 'root'
})
export class NeedAuthGuard implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.loginService.isLogged()) {
            return true;
        }

        this.router.navigateByUrl('/login');

        return false;
    }
}