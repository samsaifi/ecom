import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { IProduct } from './iproduct';
@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    @Output() dataEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() cartCountEmitter: EventEmitter<number> =
        new EventEmitter<number>();
    products: any = [];
    product: any = {
        id: '',
        title: '',
        price: 0,
        discountPercentage: 0,
        qty: 0,
        sku: '',
        thumbnail: '',
    };
    hideCart() {
        this.dataEmitter.emit(false);
    }
    constructor(public productService: CartService) {}
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
    createProduct(product: IProduct): void {
        this.productService.createProduct(product).subscribe(
            (data) => {
                console.log('Product created', data);
                this.getProducts();
                this.cartTotalProduct();
            },
            (error) => console.error('Error creating product', error)
        );
    }
    updateProduct(): void {
        this.productService.updateProduct(this.product).subscribe(
            (data) => {
                console.log('Product updated', data);
                this.getProducts();
                this.cartTotalProduct();
            },
            (error) => console.error('Error updating product', error)
        );
    }
    deleteProduct(id: number): void {
        this.productService.deleteProduct(id).subscribe(
            () => {
                console.log('Product deleted');
                // this.getProducts();
                this.products = this.products.filter((p: any) => p.id !== id);
                this.cartTotalProduct();
            },
            (error) => console.error('Error deleting product', error)
        );
    }
    cartTotal() {
        const totalSum = this.products.reduce(
            (sum: number, product: IProduct) =>
                sum + product.price * product.qty,
            0
        );
        return totalSum.toFixed(2);
    }
    cartTotalProduct() {
        this.cartCountEmitter.emit(this.products.length);
    }
}
