import { product } from './../../../../products/interface/iproduct';
import { Component, Input, OnInit } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [RatingComponent, CommonModule],
    selector: 'app-flash-product',
    templateUrl: './flash-product.component.html',
    styleUrls: ['./flash-product.component.css'],
})
export class FlashProductComponent implements OnInit {
    @Input() product: any;
    constructor() {}
    ngOnInit() {
        console.log(this.product);
    }
    negelate() {
        return this.product.price * 2 + Math.floor(Math.random() * 10);
    }
}
