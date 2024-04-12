import { Component, Input } from '@angular/core';
import { IEmployee } from '../services/employee.model';

@Component({
  selector: 'app-employee-line-item',
  standalone: true,
  imports: [],
  templateUrl: './employee-line-item.component.html',
  styleUrl: './employee-line-item.component.css'
})
export class EmployeeLineItemComponent {
  @Input() employee!: IEmployee;

}
