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
    return this.http.get<IEmployee[]>('http://localhost:8080/employeemanagement/employees')
  }
}
