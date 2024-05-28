import { logo } from '../../constants/layouts.constant';
import { LocalStorage } from './localStorage';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DefualtLocalStorage {
    constructor(public lc: LocalStorage) {
        this.setup();
    }
    setup() {
        this.lc.setItem('logo', logo, false);
    }
}
