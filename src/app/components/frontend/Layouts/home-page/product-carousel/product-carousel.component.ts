import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsCategoryService } from '../../../products/service/products-category.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
    selector: 'app-product-carousel',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
})
export class ProductCarouselComponent {
    categories: any = [];
    itemnum: number = 0;
    constructor(private cat: ProductsCategoryService) {}
    ngOnInit(): void {
        this.getList();
        console.log(this.categories);
    }
    getList = () => {
        this.cat.getAll().subscribe((data) => {
            this.categories = data;
        });
    };
}
