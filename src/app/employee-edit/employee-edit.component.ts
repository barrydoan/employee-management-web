import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../services/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { DepartmentSelectionComponent } from '../department-selection/department-selection.component';
import { CommonModule } from '@angular/common';
import { IDepartment } from '../services/department.model';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [FormsModule, DepartmentSelectionComponent],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  employee: IEmployee = {
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    department: {
      id: 0,
      name: ""
    }
  }

  @Output() cancel = new EventEmitter()
  @Output() update = new EventEmitter<IEmployee>()

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  )
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (paramMap) => {
        let id = Number(paramMap.get("id"));
        if (id) {
          this.employeeService.getEmployeeById(id).subscribe(e => {
            this.employee = e;
          });
        }
      }
    })
  }

  onCancel(): void {
    this.cancel.emit()
  }

  onSave():void {
    if (this.employee.id !== 0) {
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: value => {
          this.update.emit(this.employee)
          
        },
        error: err => console.log('error')
      })
    }
    else {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: value => {
          console.log('created', value)
          this.update.emit(value)
        },
        error: error => console.log('error')
      })
    }
  }

  onDepartmentChanged(department:IDepartment): void {
    console.log('onDepartmentChange', department)
    this.employee.department = department
  }
}
