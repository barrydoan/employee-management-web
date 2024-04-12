import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeeLineItemComponent } from '../employee-line-item/employee-line-item.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, EmployeeLineItemComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:any;

  constructor(
    private employeeService:  EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService.getEmplyees().subscribe(employees => {
      console.log("employees", employees)
      this.employees = employees
    })
  }

}
