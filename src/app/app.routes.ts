import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Home" },
    { path: 'employee', component: EmployeeComponent, title: "Employee" },
];
