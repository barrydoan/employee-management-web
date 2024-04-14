import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Home" },
    { path: 'employee', component: EmployeeComponent, title: "Employee" },
    { path: 'employee/:id', component: EmployeeDetailComponent, title: "Employee Detail" },
    { path: 'new-employee', component: NewEmployeeComponent, title: "New Employee" },
];
