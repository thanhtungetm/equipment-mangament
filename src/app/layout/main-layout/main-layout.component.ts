import { Component } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent {
    toggleNav = false;
    faBars=faBars

    name : string = ''

    constructor(private authService: AuthService){
      this.name = this.authService.getName()
    }

    onToggleNav(){
      this.toggleNav = !this.toggleNav
    }
}
