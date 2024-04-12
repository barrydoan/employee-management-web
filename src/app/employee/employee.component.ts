import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  constructor(
    private employeeService:  EmployeeService
  ) {}

  ngOnInit() {
    this.employeeService.getEmplyees().subscribe(employees => {
      console.log("employees", employees)
    })
  }

}
