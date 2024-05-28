import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private _http: HttpClient) {}
    getAll() {
        return this._http.get(
            `${environment.apiUrl}${environment.product.productApiUrl}`
        );
    }
    flashSale() {
        return this._http.get(
            `${environment.apiUrl}${environment.product.productApiUrl}?limit=10`
        );
    }
}
