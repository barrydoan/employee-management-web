import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/employee.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
  filter: string = '';

  constructor(
    private employeeService:  EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateEmployee()
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
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

  getFilteredEmployee() {
    console.log(this.employees)
    if (!this.employees) {
      return;
    }
    return this.filter === ''
      ? this.employees
      : this.employees.filter(
        (employee: any) => employee.department.id === Number(this.filter)
      );
  }

}
