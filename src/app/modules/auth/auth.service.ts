import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { login, logout } from "./auth.actions";

// auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
    auth$: Observable<{ jwt: string, role: string }>;
    role$: Observable<string>;
    _jwt = null;
    role = 'usr';

    constructor(private readonly httpClient: HttpClient, private readonly authStore: Store<{ auth: { jwt: string, role: string }}>) {
        this.auth$ = authStore.select('auth');
        this.auth$.subscribe(x => {
            this._jwt = x.jwt;
            this.role = x.role;
        });
    }

    isLoggedIn() {
        return !!this.jwt;
    }

    public get jwt() {
        return this._jwt;
    }

    logout() {
        this.authStore.dispatch(logout());
    }

    login(data: {
        email: string,
        password: string,
    }) {
        const { email, password } = data;

        this.httpClient.post('login', { email, password }).subscribe((x: Array<any>) => {
            const jwt = x[0].id;
            const role = x[0].role;
            this.authStore.dispatch(login({ jwt, role }));
        }, (x) => alert(x.error.text));
    }

    register(data: {
        name: string,
        email: string,
        password: string,
        phone: string,
    }) {
        const { name, email, password, phone } = data;

        this.httpClient.post('reg', { name, email, password, phone }).subscribe(x => {
            this.login({ email, password })
        }, (x) => alert(x.error.text));
    }
}