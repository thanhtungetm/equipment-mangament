import { Component } from '@angular/core';
import { faHouseLaptop,faUserGroup, faCheck, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  faHouseLaptop = faHouseLaptop
  faUserGroup = faUserGroup
  faCheck = faCheck
  faStore = faStore
} 
