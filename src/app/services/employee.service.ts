import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  HOST:string = 'http://localhost:8080';

  constructor(
    private http:HttpClient
  ) { }

  getEmplyees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.HOST}/employeemanagement/employees`)
  }
}
