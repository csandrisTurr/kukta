import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private readonly httpClient: HttpClient) {}

    private _jwt: string | null = null;

    isLoggedIn() {
        return typeof this._jwt == 'string' && this._jwt.length > 0;
    }

    public get jwt() {
        return this._jwt;
    }

    login(data: {
        email: string,
        password: string,
    }) {
        const { email, password } = data;

        this.httpClient.post('login', { email, password }).subscribe((x: Array<any>) => {
            this._jwt = x[0].id;
        });
    }

    register(data: {
        name: string,
        email: string,
        password: string,
        phone: string,
    }) {
        const { name, email, password, phone } = data;

        this.httpClient.post('reg', { name, email, password, phone }).subscribe(x => {
            console.log(x);
        });
    }
}