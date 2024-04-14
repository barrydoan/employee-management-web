import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { CommonModule } from '@angular/common';
import { IDepartment } from '../services/department.model';
import { IDepartmentSelection } from './department-selection.model';

@Component({
  selector: 'app-department-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-selection.component.html',
  styleUrl: './department-selection.component.css'
})
export class DepartmentSelectionComponent implements OnInit {
  departments?: IDepartmentSelection[]
  @Input() selectedDepartment?: IDepartment
  @Output() departmentChanged: EventEmitter<IDepartment> = new EventEmitter<IDepartment>();

  constructor(
    private departmentService: DepartmentService,
  )
  {}
  ngOnInit(): void {
    console.log('department load', this.selectedDepartment)
    this.departmentService.getDepartments().subscribe(
      departments => {
        this.departments = []
        for (const department of departments) {
          let departmentSelection:IDepartmentSelection = {
            id: department.id,
            name: department.name,
            isSelected: false
          }
          if (this.selectedDepartment && this.selectedDepartment.id === department.id) {
            console.log("selected = true", department)
            departmentSelection.isSelected = true
          }
          this.departments.push(departmentSelection)
        }
      }
    )
  }

  onSelectionChange(event : any):void {
    console.log('On Selection change', event.target.value)
    let selectedItem:IDepartment = {
      id: 0,
      name: ''
    };
    if (this.departments) {
      for(let item of this.departments) {
        console.log('item.id', item.id)
        if (Number(event.target.value) === item.id) {
          console.log('match id')
          selectedItem = {
            id: item.id,
            name: item.name
          };
          break;
        }
      }
    }
    console.log('emit selection change')
    this.departmentChanged.emit(selectedItem)
  }

}
