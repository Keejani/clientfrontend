import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainsComponent } from './bargains.component';

describe('BargainsComponent', () => {
  let component: BargainsComponent;
  let fixture: ComponentFixture<BargainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BargainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BargainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
