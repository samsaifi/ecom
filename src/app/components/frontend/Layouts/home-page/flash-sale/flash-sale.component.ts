import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../products/service/product.service';
import { FlashProductComponent } from './flash-product/flash-product.component';
import { IProduct } from '../../assit/header/cart/iproduct';
@Component({
    standalone: true,
    selector: 'app-flash-sale',
    templateUrl: './flash-sale.component.html',
    styleUrls: ['./flash-sale.component.css'],
    imports: [FlashProductComponent],
})
export class FlashSaleComponent {
    products: IProduct[] | any = [];
    loop: boolean = false;
    constructor(private _product: ProductService) {}
    ngOnInit(): void {
        this._product.flashSale().subscribe((data) => {
            this.products = data;
        });
        this.loop = true;
    }
}
