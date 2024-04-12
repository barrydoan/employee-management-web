import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../services/employee.model';
import { EmployeeViewComponent } from '../employee-view/employee-view.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [EmployeeViewComponent, EmployeeEditComponent, CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {
  id!: number;
  employee!: IEmployee;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) 
  {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (paramMap) => {
        this.id = Number(paramMap.get("id"))
        this.employeeService.getEmployeeById(this.id).subscribe(e => {
          this.employee = e;
          console.log("employee", this.employee)
        });
      }
    })
  }

  onEdit(): void {
    this.isEdit = true;
  }

  onBack(): void {
    this.router.navigate(['/employee']);
  }
  
  onCancel():void {
    this.isEdit = false
  }

}
