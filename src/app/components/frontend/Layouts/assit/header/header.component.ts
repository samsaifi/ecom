import { Component } from '@angular/core';
import { DefualtLocalStorage } from '../../../../../lib/storage/local/defualt';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { log } from 'console';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CartComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    logo: string = '';
    cartOpen: boolean;
    childData?: string;
    cartdata: any = [];
    constructor(private ls: DefualtLocalStorage, private _cart: CartService) {
        this.cartOpen = this._cart.cartBoxOpen;
    }
    ngOnInit(): void {
        this.logo = this.ls.lc.getItem('logo');
        this.getCartProduct();
    }
    getCartProduct() {
        this._cart.getProducts().subscribe((data) => {
            this.cartdata = data;
        });
    }
    toggleCart(): void {
        this._cart.cartBoxOpen = !this._cart.cartBoxOpen;
        this.cartOpen = this._cart.cartBoxOpen;
    }
    receiveData(data: boolean) {
        this.cartOpen = data;
        this._cart.cartBoxOpen = data;
    }
    cartItemCount() {
        return this.cartdata.length;
    }
}
