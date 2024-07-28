import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralbuttonComponent } from './generalbutton.component';

describe('GeneralbuttonComponent', () => {
  let component: GeneralbuttonComponent;
  let fixture: ComponentFixture<GeneralbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
