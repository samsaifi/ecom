import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from './iproduct';
@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartBoxOpen: boolean = false;
    apiUrl: string = 'http://localhost:8000/carts';
    constructor(private http: HttpClient) {}
    // Create
    createProduct(product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>(this.apiUrl, product);
    }
    // Read
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.apiUrl);
    }
    getProduct(id: number): Observable<IProduct | null> {
        return this.http.get<IProduct>(`${this.apiUrl}/${id}`).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 404) {
                    return of(null); // Return null if product is not found
                }
                console.error('Error fetching product:', error);
                throw error; // Re-throw other errors
            })
        );
    }
    // Update
    updateProduct(product: IProduct): Observable<IProduct> {
        return this.http.put<IProduct>(`${this.apiUrl}/${product.id}`, product);
    }
    // Delete
    deleteProduct(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
