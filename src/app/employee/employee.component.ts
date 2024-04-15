import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/employee.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModelPopupComponent } from '../model-popup/model-popup.component';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, ModelPopupComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  showDeletePopup:boolean = false
  message:string = ''
  employees:any;

  constructor(
    private employeeService:  EmployeeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.updateEmployee()
  }

  onDetail(employee:IEmployee) {
    this.router.navigate([`/employee/${employee.id}`])
  }

  onDelete(employee:IEmployee) {
    console.log('onDelete')
    this.message = `Do you want to delete employee with ID: ${employee.id}`
    this.showDeletePopup = true
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: value => {
        this.updateEmployee()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onNew() {
    this.router.navigate(['/new-employee'])
  }

  onDecisionMade(value: Boolean) {
    console.log('onDecisionMade', value);
    this.showDeletePopup = false;
  }

  private updateEmployee() {
    this.employeeService.getEmplyees().subscribe(employees => {
      this.employees = employees
    })
  }

}
