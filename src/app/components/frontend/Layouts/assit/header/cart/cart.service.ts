import { product } from './../../../../products/interface/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    qty: number;
    sku: string;
    thumbnail: string;
}
@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartBoxOpen: boolean = false;
    apiUrl: string = 'http://localhost:8000/carts';
    constructor(private http: HttpClient) {}
    // Create
    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, product);
    }
    // Read
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }
    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }
    // Update
    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
    }
    // Delete
    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
