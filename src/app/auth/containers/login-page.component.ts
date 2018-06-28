import {Component} from '@angular/core';

@Component({
  selector: 'yv-login-page',
  template: `
    <yv-centered>
      <h1 class="mb-4">Login</h1>
      <router-outlet></router-outlet>
    </yv-centered>
  `,
  styles: [`:host { flex-basis: 100%; }`]
})
export class LoginPageComponent {}
