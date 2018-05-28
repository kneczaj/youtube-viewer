import {Component, OnInit} from '@angular/core';
import {Credentials} from '../models/credentials';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'yv-login-page',
  template: `
    <div class="container login-container d-flex flex-column text-center">
      <h1 class="mb-4 login-header">Login</h1>
      <div *ngIf="loginFailed" class="alert alert-warning">
        Login failed, please try again.
      </div>
      <form [formGroup]="form">
        <div *ngIf="step === 0" class="form-group">
          <input
            type="text"
            class="form-control"
            formControlName="login"
            placeholder="User"
            (keydown.enter)="next()"
            yvFocus
          />
        </div>
        <div *ngIf="step === 1" class="form-group">
          <input
            type="password"
            class="form-control"
            formControlName="password"
            placeholder="Password"
            (keydown.enter)="next()"
            yvFocus
          />
        </div>
        <div *ngIf="!isValid()" class="alert alert-danger">
            The field is required.
        </div>
      </form>
      <button class="btn btn-primary" [disabled]="!isValid()" (click)="next()">{{!step ? 'Next' : 'Login'}}</button>
    </div>
  `,
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  protected step = 0;
  protected loginFailed = false;

  protected form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const fb = new FormBuilder();
    this.form = fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  next() {
    if (!this.isValid()) {
      return;
    }
    if (this.step < 1) {
      this.step++;
      return;
    }
    this.loginFailed = !this.authenticationService.login(this.form.value);
    this.step = 0;
    this.form.reset();
    if (!this.loginFailed) {
      this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '']);
    }
  }

  isValid() {
    return !['login', 'password']
      .map(path => this.form.get(path))
      .some(control => control.invalid && (control.dirty || control.touched));
  }
}
