import { Component } from '@angular/core';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [EmployeeEditComponent],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
  onCancel(): void {

  }

  onUpdate(): void {

  }

}
