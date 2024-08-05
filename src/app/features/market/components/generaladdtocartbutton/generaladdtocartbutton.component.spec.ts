import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAddToCartbuttonComponent } from './generaladdtocartbutton.component';

describe('GeneralAddToCartbuttonComponent', () => {
  let component: GeneralAddToCartbuttonComponent;
  let fixture: ComponentFixture<GeneralAddToCartbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralAddToCartbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralAddToCartbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
