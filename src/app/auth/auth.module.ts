import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: LoginPageComponent
    }])
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class AuthModule { }
