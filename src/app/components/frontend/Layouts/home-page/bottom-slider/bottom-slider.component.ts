import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
    standalone: true,
    imports: [],
    selector: 'app-bottom-slider',
    templateUrl: './bottom-slider.component.html',
    styleUrls: ['./bottom-slider.component.css'],
})
export class BottomSliderComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        initFlowbite();
    }
}
