import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-bottom-slider',
    templateUrl: './bottom-slider.component.html',
    styleUrls: ['./bottom-slider.component.css'],
})
export class BottomSliderComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            initFlowbite();
        }
    }
}
