import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-model-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-popup.component.html',
  styleUrl: './model-popup.component.css'
})
export class ModelPopupComponent {
  @Input() isShow:boolean = false;
  @Input() message?:string;

  @Output() decisionMade = new EventEmitter<Boolean>()


  getDisplayStyle(): string {
    if (this.isShow) {
      return "block";
    }
    return "none";
  }

  yesSelected() { 
    this.isShow = false; 
    this.decisionMade.emit(true)
  } 
  noSelected() { 
    this.isShow = false; 
    this.decisionMade.emit(false)
  } 

}
