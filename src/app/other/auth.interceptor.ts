import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../modules/auth/auth.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const authService = inject(AuthService);
    if (!authService.isLoggedIn()) return next(req);

    const apiReq = req.clone({ headers: req.headers.append('Authorization', `Bearer ${authService.jwt}`)});
    return next(apiReq);
}