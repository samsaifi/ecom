import { Component, OnInit } from '@angular/core';
import { DefualtLocalStorage } from '../../../../lib/storage/local/defualt';
import { FooterComponent } from '../assit/footer/footer.component';
import { HeaderComponent } from '../assit/header/header.component';

@Component({
    standalone: true,
    selector: 'app-full-width',
    templateUrl: './full-width.component.html',
    styleUrls: ['./full-width.component.css'],
    imports: [HeaderComponent, FooterComponent],
})
export class FullWidthComponent implements OnInit {
    logo: string = '';
    constructor(private ls: DefualtLocalStorage) {}
    ngOnInit(): void {
        this.logo = this.ls.lc.getItem('logo');
    }
}
