import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../assit/header/cart/cart.service';
import { IProduct } from '../../../assit/header/cart/iproduct';
@Component({
    standalone: true,
    imports: [RatingComponent, CommonModule],
    selector: 'app-flash-product',
    templateUrl: './flash-product.component.html',
    styleUrls: ['./flash-product.component.css'],
})
export class FlashProductComponent implements OnInit {
    @Input() product: any;
    math: any;
    productInCart: boolean = false;
    constructor(private _cart: CartService) {
        this.math = Math;
    }
    originalArray = [1.3, 1.2, 1.63, 1.54, 1.95];
    ngOnInit() {
        // console.log(this.product);
    }
    negelate(price: number) {
        const shuffledArray = this.shuffleArray(this.originalArray);
        return price * shuffledArray[0];
    }
    shuffleArray<T>(array: T[]): T[] {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }
    addToCart() {
        let id_ = `${this.product.id}`;
        let cartProduct: IProduct = {
            id: id_,
            title: this.product.title,
            price: this.product.price,
            discountPercentage: this.product.discountPercentage,
            qty: 1,
            sku: this.product.sku,
            thumbnail: this.product.thumbnail,
        };
        this._cart.getProduct(this.product.id).subscribe(
            (data) => {
                if (data) {
                    // If the product already exists in the cart, update its quantity
                    console.log('Product already in cart, updating quantity.');
                    cartProduct.qty += data.qty; // Increment the quantity
                    this._cart.updateProduct(cartProduct).subscribe(
                        (updateData) => {
                            console.log('Product updated in cart:', updateData);
                        },
                        (updateError) =>
                            console.error(
                                'Error updating product in cart:',
                                updateError
                            )
                    );
                } else {
                    // If the product does not exist in the cart, add it
                    console.log('Product not in cart, adding new product.');
                    this._cart.createProduct(cartProduct).subscribe(
                        (createData) =>
                            console.log('Product added to cart:', createData),
                        (createError) =>
                            console.error(
                                'Error adding product to cart:',
                                createError
                            )
                    );
                }
            },
            (error) => {
                // Handle error when trying to get the product from the cart
                console.error('Error fetching product from cart:', error);
            }
        );
    }
}
