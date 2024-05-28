import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Encrypt {
    key: string = '';
    constructor() {
        this.key = environment.secretkey;
    }
    encryptData(data: any, key: any) {
        return CryptoJS.AES.encrypt(data, this.key).toString();
    }

    decryptData(data: any, key: any) {
        const bytes = CryptoJS.AES.decrypt(data, this.key);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
