import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentSelectionComponent } from './department-selection.component';

describe('DepartmentSelectionComponent', () => {
  let component: DepartmentSelectionComponent;
  let fixture: ComponentFixture<DepartmentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
