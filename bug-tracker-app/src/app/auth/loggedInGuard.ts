import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
    providedIn: "root"
})
export class LoggedInGuard implements CanActivate {
    constructor(private userService: UserService, private router : Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const loggedIn = this.userService.isLoggedIn()
        if (!loggedIn) {
            this.router.navigate(['/login'])
        }
        return loggedIn;
    }
}