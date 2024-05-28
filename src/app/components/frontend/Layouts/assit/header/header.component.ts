import { Component } from '@angular/core';
import { DefualtLocalStorage } from '../../../../../lib/storage/local/defualt';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    logo: string = '';
    constructor(private ls: DefualtLocalStorage) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.logo = this.ls.lc.getItem('logo');
    }
}
