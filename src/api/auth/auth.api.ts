import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthAPI {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    constructor(private _http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {}

    login(data: { username: string; password: string }): Observable<any> {
        return this._http.post<any>(this.baseUrl + "/auth/login", data);
    }
    //   createUser(user: UserDTO): Observable<UserDTO> {
    //     return this._http.post<UserDTO>('http://localhost:3000/users', user, this.httpOptions);
    //   }

    //   updateUser(user: UserDTO): Observable<UserDTO> {
    //     return this._http.put<UserDTO>(`http://localhost:3000/users/${user.id}`, user, this.httpOptions);
    //   }

    //   deleteUser(id: string): any {
    //     return this._http.delete(`http://localhost:3000/users/${id}`);
    //   }
}
