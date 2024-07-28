import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOAuthButtonComponent } from './general-oauth-button.component';

describe('GeneralOAuthButtonComponent', () => {
  let component: GeneralOAuthButtonComponent;
  let fixture: ComponentFixture<GeneralOAuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralOAuthButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralOAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
