import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  status : 'open'| 'close' = 'open'
  @Output()answer = new EventEmitter()


  handleClose(){
    this.status = 'close'
    this.answer.emit()
  }
}
