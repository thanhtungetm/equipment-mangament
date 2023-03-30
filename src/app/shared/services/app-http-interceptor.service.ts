import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, filter, map, Observable, of, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AppHttpInterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Add token here!");

        return next.handle(req).pipe(
            filter((event) => event instanceof HttpResponse),
            map((event) => {
                if (event instanceof HttpResponse) return event.clone({ body: event.body.data });
                return event;
            }),
            catchError(e=>throwError(e.error.message))
        );
    }
}
