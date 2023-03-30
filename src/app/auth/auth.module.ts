import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms'
import { InValidDirective } from '../shared/directive/in-valid.directive';
import { LoginAcceptionGuard } from '../shared/guard/login-acception.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent, pathMatch:'full',}
]


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
