import { product } from './../../../../products/interface/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class CartService {
    carts: any;
    url: string = 'http://localhost:8000/carts';
    productInCartExits = false;
    constructor(private _http: HttpClient) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    getCart() {
        return this._http.get(this.url);
    }
    submitCart(product: any) {
        this._http
            .get(`${this.url}?id=${product.id}`)
            .subscribe((product: any) => {
                if (product.length > 0) {
                    const existingProduct = product[0];
                    existingProduct.qty += product.qty;
                    return this._http.put(
                        `${this.url}/${existingProduct.id}`,
                        existingProduct
                    );
                } else {
                    return this._http.post(this.url, product);
                }
            });
    }
}
