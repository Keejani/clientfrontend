import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRetailersComponent } from './saved-retailers.component';

describe('SavedRetailersComponent', () => {
  let component: SavedRetailersComponent;
  let fixture: ComponentFixture<SavedRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedRetailersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
