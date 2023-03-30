import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatisticComponent } from './components/statistic/statistic.component';
import { DashboardComponent } from './dashboard.component';
import { RecentRequestComponent } from './components/recent-request/recent-request.component';



@NgModule({
  declarations: [DashboardComponent, StatisticComponent, RecentRequestComponent,],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
