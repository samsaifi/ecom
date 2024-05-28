import { Component, Input, OnInit } from '@angular/core';
import { AbsPipe } from '../../../../../../../pipe/abs.pipe';

@Component({
    standalone: true,
    imports: [AbsPipe],
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
    @Input() rating: any;
    ngOnInit() {}

    range: number[];

    constructor() {
        this.range = this.createRange(5); // Create a range from 0 to 9
        this.rating = Math.abs(this.rating);
    }

    createRange(count: number): number[] {
        return Array.from({ length: count }, (_, i) => i);
    }
}
