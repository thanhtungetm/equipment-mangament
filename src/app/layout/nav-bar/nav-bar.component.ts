import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { faTimes,faUser, faHouse, faSliders, faFileSignature, faUserGroup, faSignOut } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-nav-bar",
    templateUrl: "./nav-bar.component.html",
    styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {
    @Input() toggleNav!: boolean;
    @Output() close = new EventEmitter();

    faTimes = faTimes;
    faHome = faHouse;
    faUser=faUser
    faSliders = faSliders;
    faFileSignature = faFileSignature;
    faUserGroup = faUserGroup;
    faSignOut = faSignOut;

    isUser: boolean = true;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        console.log(this.authService.isUserRole());
        this.isUser = this.authService.isUserRole();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(["auth/login"]);
        // setTimeout(()=>this.router.navigate(['auth/login']),3000)
    }
}
