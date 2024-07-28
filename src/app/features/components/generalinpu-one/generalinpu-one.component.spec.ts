import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralinpuOneComponent } from './generalinpu-one.component';

describe('GeneralinpuOneComponent', () => {
  let component: GeneralinpuOneComponent;
  let fixture: ComponentFixture<GeneralinpuOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralinpuOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralinpuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
