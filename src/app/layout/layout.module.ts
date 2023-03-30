import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TogglenavDirective } from './directive/toggle-nav.directive';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowCloseBtnDirective } from './directive/show-close-btn.directive';
import { ToggleOverplayDirective } from './directive/toggle-overplay.directive';



@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, NavBarComponent, TogglenavDirective, ShowCloseBtnDirective, ToggleOverplayDirective],
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [AuthLayoutComponent, MainLayoutComponent, NavBarComponent, TogglenavDirective, ShowCloseBtnDirective]
})
export class LayoutModule { }
