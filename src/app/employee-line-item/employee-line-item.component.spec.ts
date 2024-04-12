import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLineItemComponent } from './employee-line-item.component';

describe('EmployeeLineItemComponent', () => {
  let component: EmployeeLineItemComponent;
  let fixture: ComponentFixture<EmployeeLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeLineItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
