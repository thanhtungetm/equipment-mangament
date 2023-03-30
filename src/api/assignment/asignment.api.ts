import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { UserDTO } from "./user.dto";
import { DepartmentDTO } from "./department.dto";

@Injectable({
    providedIn: "root"
})
export class AsignmentAPI {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    constructor(private _http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {}

    assignEquipment(data: any): Observable<any> {
        return this._http.post<any>(this.baseUrl + "/borrowings", data);
    }
    revokeEquipment(id: number): Observable<any> {
        return this._http.put<any>(this.baseUrl + "/borrowings/return/" + id, {});
    }
    getConcreteInfo(id: number) {
        return this._http.get<any>(this.baseUrl + "/borrowings/concrete-equipments/" + id);
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
