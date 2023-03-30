import { Component ,Output, Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent {
  status : 'open'| 'close' = 'open'

  @Output()answer = new EventEmitter<boolean>()

  handleAnswer(choose : boolean){
    this.status = 'close'
    this.answer.emit(choose)
  }
}
