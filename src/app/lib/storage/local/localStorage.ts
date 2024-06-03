import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MockStorage } from './MockStorage';
@Injectable({
    providedIn: 'root',
})
export class LocalStorage {
    private storage: Storage | MockStorage;
    constructor(@Inject(PLATFORM_ID) private platformId: object) {
        if (isPlatformBrowser(this.platformId)) {
            this.storage = window.localStorage;
        } else {
            this.storage = new MockStorage();
        }
    }
    setItem(name: string, param: any, encrypt = false) {
        if (encrypt) {
            param = this.handleVariableType(param);
        }
        this.storage.setItem(name, param);
    }
    getItem(name: string, encrypt = false) {
        let data: any = this.storage.getItem(name);
        return data;
    }
    private handleVariableType(param: any) {
        if (Array.isArray(param)) {
            return JSON.stringify(param);
        }
        switch (typeof param) {
            case 'object':
            case 'function':
                return JSON.stringify(param);
            default:
                return param;
        }
    }
}
