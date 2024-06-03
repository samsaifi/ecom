import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})
export class ProductsCategoryService {
    constructor(private _http: HttpClient) {}
    getAll() {
        return this._http.get(
            `${environment.apiUrl}${environment.product.categoryApiUrl}`
        );
    }
}
