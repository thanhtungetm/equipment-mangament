import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthenticationGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLogin = this.authService.isAuthenticated()
        if(!isLogin){
            this.router.navigate(['auth/login'])
            return false
        }
        return isLogin;
    }
}
