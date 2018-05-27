import { Component } from '@angular/core';
import {Credentials} from '../models/credentials';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'yv-login-page',
  template: `
    <h1>Login</h1>
    <form>
      <div *ngIf="step === 0" class="form-group">
        <label>User</label>
        <input
          type="text"
          class="form-control"
          name="user"
          (keydown.enter)="next()"
          [(ngModel)]="credentials.login"
          yvFocus
        />
      </div>
      <div *ngIf="step === 1" class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          (keydown.enter)="next()"
          [(ngModel)]="credentials.password"
          yvFocus
        />
      </div>
    </form>
    <button (click)="next()">Next</button>
  `,
  styles: []
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
