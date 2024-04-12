import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/employee.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:any;

  constructor(
    private employeeService:  EmployeeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.employeeService.getEmplyees().subscribe(employees => {
      this.employees = employees
    })
  }

  onDetail(employee:IEmployee) {
    this.router.navigate([`/employee/${employee.id}`])
  }

  onDelete(employee:IEmployee) {
    console.log('onDelete')
  }

}
