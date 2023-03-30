import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { AuthAPI } from "src/api/auth/auth.api";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private _user: any = null;
    constructor(private authApi: AuthAPI) {
        this._user = JSON.parse(localStorage.getItem("user_data") as string);
    }

    login(data: { username: string; password: string }) {
        return this.authApi.login(data).pipe(tap((user) => this.saveUser(user[0])));
    }

    logout() {
        this._user = null;
        localStorage.removeItem("user_data");
    }

    isAuthenticated() {
        return this._user ? true : false;
    }

    saveUser(user: any) {
        this._user = user;
        localStorage.setItem("user_data", JSON.stringify(this._user));
    }
    isUserRole(): boolean {
        // console.log(this._user[0].roles);

        return this._user.roles.includes("User");
    }

    getId() {
        return this._user.userId;
    }
    getName() {
        return this._user.fullName;
    }
}
