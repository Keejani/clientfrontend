import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralbuybuttonComponent } from './generalbuybutton.component';

describe('GeneralbuybuttonComponent', () => {
  let component: GeneralbuybuttonComponent;
  let fixture: ComponentFixture<GeneralbuybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralbuybuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralbuybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
