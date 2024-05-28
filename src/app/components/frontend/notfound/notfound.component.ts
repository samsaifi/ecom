import { Component } from '@angular/core';
import { FullWidthComponent } from '../Layouts/full-width/full-width.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [FullWidthComponent, RouterLink],
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.css',
})
export class NotfoundComponent {}
