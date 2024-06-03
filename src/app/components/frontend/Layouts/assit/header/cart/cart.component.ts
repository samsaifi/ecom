import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { CartService } from './cart.service';
@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    cart: any = [];
    @Input() cartStatus: boolean = false;
    constructor(private _cart: CartService) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this._cart.getCart());
    }
    hideCart() {}
}
