/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlashProductComponent } from './flash-product.component';

describe('FlashProductComponent', () => {
  let component: FlashProductComponent;
  let fixture: ComponentFixture<FlashProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
