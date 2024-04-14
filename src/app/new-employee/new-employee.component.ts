import { Component } from '@angular/core';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { Router } from '@angular/router';
import { IEmployee } from '../services/employee.model';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [EmployeeEditComponent],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  constructor(
    private router: Router,
  )
  {}


  onCancel(): void {
    this.router.navigate(['/employee'])
  }

  onUpdate(employee:IEmployee): void {
    this.router.navigate([`/employee/${employee.id}`])
  }

}
