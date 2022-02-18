import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
    selector : 'app-login',
    template : `
        <h3>Login</h3>
        <input type="button" value="Login" (click)="onBtnLoginClick()"/>
    `
})
export class LoginComponent {
    constructor(private userService : UserService, private router : Router){
    }

    onBtnLoginClick(){
        this.userService.login();
        this.router.navigate(['/bugs']);
    }
}