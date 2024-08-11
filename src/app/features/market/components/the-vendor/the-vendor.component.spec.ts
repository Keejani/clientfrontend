import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVendorComponent } from './the-vendor.component';

describe('TheVendorComponent', () => {
  let component: TheVendorComponent;
  let fixture: ComponentFixture<TheVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheVendorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
