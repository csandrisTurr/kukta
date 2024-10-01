import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable, InjectionToken, inject } from "@angular/core";
import { Observable } from "rxjs";

export const BASE_API_URL = new InjectionToken<string>('BASE_API_URL');

export function baseUrlInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const baseUrl: string = inject(BASE_API_URL);

    const apiReq = req.clone({ url: `${baseUrl}/${req.url}` });
    return next(apiReq);
}