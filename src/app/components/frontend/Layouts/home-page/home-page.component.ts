import { Component } from '@angular/core';
import { FullWidthComponent } from '../full-width/full-width.component';
import { BannerComponent } from './banner/banner.component';
import { FlashSaleComponent } from './flash-sale/flash-sale.component';
import { BottomSliderComponent } from './bottom-slider/bottom-slider.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        FullWidthComponent,
        BannerComponent,
        FlashSaleComponent,
        BottomSliderComponent,
    ],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
