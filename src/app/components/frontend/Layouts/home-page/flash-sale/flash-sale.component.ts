import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../products/service/product.service';
import { FlashProductComponent } from './flash-product/flash-product.component';
@Component({
    standalone: true,
    selector: 'app-flash-sale',
    templateUrl: './flash-sale.component.html',
    styleUrls: ['./flash-sale.component.css'],
    imports: [FlashProductComponent],
})
export class FlashSaleComponent {
    products: any = [];
    loop: boolean = false;
    constructor(private _product: ProductService) {
        this._product.flashSale().subscribe((data) => {
            this.products = data;
            this.loop = true;
        });
    }
}
