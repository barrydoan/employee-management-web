import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(
    private http:HttpClient
  ) { }

  getEmplyees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`/employeemanagement/employees`)
  }

  getEmployeeById(id:number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`/employeemanagement/employees/${id}`)
  }
}
