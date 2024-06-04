import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    qty: number;
    sku: string;
    thumbnail: string;
}
@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    @Output() dataEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    products: any = [];
    product: any = {
        id: null,
        title: '',
        price: null,
        discountPercentage: null,
        qty: null,
        sku: '',
        thumbnail: '',
    };
    hideCart() {
        this.dataEmitter.emit(false);
    }
    constructor(private productService: CartService) {}
    ngOnInit(): void {
        this.getProducts();
    }
    getProducts(): void {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (error) => console.error('Error fetching products', error)
        );
    }
    getProduct(id: number): void {
        this.productService.getProduct(id).subscribe(
            (data) => (this.product = data),
            (error) => console.error('Error fetching product', error)
        );
    }
    createProduct(product: any): void {
        this.productService.createProduct(product).subscribe(
            (data) => {
                console.log('Product created', data);
                this.getProducts();
            },
            (error) => console.error('Error creating product', error)
        );
    }
    updateProduct(): void {
        this.productService.updateProduct(this.product).subscribe(
            (data) => {
                console.log('Product updated', data);
                this.getProducts();
            },
            (error) => console.error('Error updating product', error)
        );
    }
    deleteProduct(id: number): void {
        this.productService.deleteProduct(id).subscribe(
            () => {
                console.log('Product deleted');
                this.getProducts();
            },
            (error) => console.error('Error deleting product', error)
        );
    }
    cartTotal() {
        const totalSum = this.products.reduce(
            (sum: number, product: Product) =>
                sum + product.price * product.qty,
            0
        );
        console.log('Total Sum:', totalSum.toFixed(2));
        return totalSum.toFixed(2);
    }
}
