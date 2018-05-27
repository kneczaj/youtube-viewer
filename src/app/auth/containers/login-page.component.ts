import { Component } from '@angular/core';
import {Credentials} from '../models/credentials';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'yv-login-page',
  template: `
    <div class="container login-container d-flex flex-column text-center">
      <h1 class="mb-4 login-header">Login</h1>
      <form>
        <div *ngIf="step === 0" class="form-group">
          <input
            type="text"
            class="form-control"
            name="user"
            placeholder="User"
            (keydown.enter)="next()"
            [(ngModel)]="credentials.login"
            yvFocus
          />
        </div>
        <div *ngIf="step === 1" class="form-group">
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            (keydown.enter)="next()"
            [(ngModel)]="credentials.password"
            yvFocus
          />
        </div>
      </form>
      <button class="btn btn-primary" (click)="next()">{{!step ? 'Next' : 'Login'}}</button>
    </div>
  `,
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {

  protected step = 0;
  protected credentials: Credentials = new Credentials();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  next() {
    if (this.step < 1) {
      this.step++;
      return;
    }
    this.authenticationService.login(this.credentials);
    this.reset();
    this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '']);
  }

  reset(): void {
    this.step = 0;
    this.credentials = new Credentials();
  }
}
