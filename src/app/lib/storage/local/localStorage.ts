import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorage {
    ls: any;
    constructor() {
        this.ls = window.localStorage;
    }
    setItem(name: string, param: any, encrypt = false) {
        if (encrypt) {
            param = this.handleVariableType(param);
        }
        localStorage.setItem(name, param);
    }
    getItem(name: string, encrypt = false) {
        let data: any = localStorage.getItem(name);

        return data;
    }

    handleVariableType(param: any) {
        if (Array.isArray(param)) {
            return JSON.stringify(param);
        }
        switch (typeof param) {
            case 'object':
                return JSON.stringify(param);
                break;

            case 'function':
                return JSON.stringify(param);
                break;
            default:
                return typeof param;
        }
    }
}
