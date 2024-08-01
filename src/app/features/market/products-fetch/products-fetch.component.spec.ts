import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFetchComponent } from './products-fetch.component';

describe('ProductsFetchComponent', () => {
  let component: ProductsFetchComponent;
  let fixture: ComponentFixture<ProductsFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFetchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
