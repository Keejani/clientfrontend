import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKindsComponent } from './all-kinds.component';

describe('AllKindsComponent', () => {
  let component: AllKindsComponent;
  let fixture: ComponentFixture<AllKindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllKindsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllKindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
