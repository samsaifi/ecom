/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartService } from './CartService';

describe('Service: Cart', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CartService],
        });
    });

    it('should ...', inject([CartService], (service: CartService) => {
        expect(service).toBeTruthy();
    }));
});
