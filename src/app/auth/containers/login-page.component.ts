import {Component} from '@angular/core';

@Component({
  selector: 'yv-login-page',
  template: `
    <div class="container login-container d-flex flex-column text-center">
      <h1 class="mb-4 login-header">Login</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {}
