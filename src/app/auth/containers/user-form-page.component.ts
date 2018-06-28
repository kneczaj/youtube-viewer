import { Component } from '@angular/core';
import {CredentialsFormService} from '../services/credentials-form.service';
import {Router} from '@angular/router';

@Component({
  selector: 'yv-user-form-page',
  template: `
    <div *ngIf="formService.loginFailed" class="alert alert-warning">
      Login failed, please try again.
    </div>
    <form [formGroup]="formService.form">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          formControlName="login"
          placeholder="User"
          (keydown.enter)="next()"
          yvFocus
        />
      </div>
    </form>
    <div *ngIf="showValidationError" class="alert alert-danger">
      The field is required.
    </div>
    <button class="btn btn-primary w-100" [disabled]="showValidationError" (click)="next()">Next</button>
  `,
  styles: []
})
export class UserFormPageComponent {

  constructor(
    protected formService: CredentialsFormService,
    private router: Router
  ) {}

  get control() {
    return this.formService.form.get('login');
  }

  get showValidationError() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  next() {
    if (!this.control.invalid) {
      this.router.navigate(['login', 'password'], {
        queryParamsHandling: 'preserve'
      });
    }
  }
}
