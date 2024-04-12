import { Component, Input } from '@angular/core';
import { IEmployee } from '../services/employee.model';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {
  @Input() employee?: IEmployee

}
