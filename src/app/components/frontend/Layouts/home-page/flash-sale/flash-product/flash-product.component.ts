import { product } from './../../../../products/interface/iproduct';
import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../assit/header/cart/cart.service';
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
        const cartProduct = {
            id: this.product.id,
            title: this.product.title,
            price: this.product.price,
            discountPercentage: this.product.discountPercentage,
            qty: 1,
            sku: this.product.sku,
            thumbnail: this.product.thumbnail,
        };
        this._cart.createProduct(cartProduct);
    }
}
