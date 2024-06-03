import { Component } from '@angular/core';
import { DefualtLocalStorage } from '../../../../../lib/storage/local/defualt';
import { CartComponent } from './cart/cart.component';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CartComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    logo: string = '';
    cartOpen: boolean = false;
    constructor(private ls: DefualtLocalStorage) {}
    ngOnInit(): void {
        this.logo = this.ls.lc.getItem('logo');
    }
    toggleCart(): void {
        this.cartOpen = !this.cartOpen;
    }
    closeCart(cartsts: any) {
        console.log(cartsts);
    }
}
