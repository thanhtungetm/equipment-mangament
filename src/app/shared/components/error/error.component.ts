import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  status : 'open'| 'close' = 'open'
  @Output()answer = new EventEmitter()


  handleClose(){
    this.status = 'close'
    this.answer.emit()
  }
}
