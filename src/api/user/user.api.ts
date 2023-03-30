import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { UserDTO } from "./user.dto";
import { DepartmentDTO } from "./department.dto";

@Injectable({
    providedIn: "root"
})
export class UserAPI {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    constructor(private _http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {}

    getUsers(): Observable<UserDTO[]> {
        return this._http.get<UserDTO[]>(this.baseUrl + "/users");
    }
    getUser(id: number): Observable<UserDTO> {
        return this._http.get<UserDTO>(this.baseUrl + "/users/" + id).pipe(map((data: any) => data[0]));
    }
    getDepartments(): Observable<DepartmentDTO[]> {
        return this._http.get<DepartmentDTO[]>(this.baseUrl + "/departments");
    }
    getAssignedEquipments(userId: number): Observable<any> {
        return this._http.get<any>(this.baseUrl + `/users/${userId}/borrows`);
    }

    createEmployee(data: FormData): Observable<any> {
        return this._http.post<any>(this.baseUrl + "/auth/register", data);
    }
    updateEmployee(id: number, data: FormData): Observable<any> {
        return this._http.put<any>(this.baseUrl + "/users/" + id, data);
    }
    deleteEmployee(id: number): Observable<any> {
        return this._http.delete<any>(this.baseUrl + "/users/" + id);
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
