import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDepartment } from './department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http:HttpClient
  ) { }

  getDepartments(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`/employeemanagement/departments`)
  }
}
