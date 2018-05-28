import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PasswordFormPageComponent} from './containers/password-form-page.component';
import {UserFormPageComponent} from './containers/user-form-page.component';
import {PasswordGuard} from './guards/password.guard';
import {CredentialsFormService} from './services/credentials-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      redirectTo: 'user',
      pathMatch: 'full'
    }, {
      path: '',
      component: LoginPageComponent,
      children: [{
        path: 'password',
        component: PasswordFormPageComponent,
        canActivate: [PasswordGuard]
      }, {
        path: 'user',
        component: UserFormPageComponent
      }]
    }]),
    SharedModule
  ],
  declarations: [
    LoginPageComponent,
    PasswordFormPageComponent,
    UserFormPageComponent
  ],
  providers: [CredentialsFormService, PasswordGuard]
})
export class AuthModule { }
