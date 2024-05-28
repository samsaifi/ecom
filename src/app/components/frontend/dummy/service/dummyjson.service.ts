import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DummyjsonService {
    url: string = environment.apiUrl;
    constructor(private http: HttpClient) {}

    loadProdcut() {
        const prodcutUrl = this.url + '/' + environment.product.productApiUrl;
        return this.http.get(prodcutUrl);
    }
}
