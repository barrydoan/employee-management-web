import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../services/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  @Input() employee: IEmployee = {
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
    console.log('save clicked')
  }
}
