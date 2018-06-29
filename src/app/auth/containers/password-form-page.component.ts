import { Component } from '@angular/core';
import {CredentialsFormService} from '../services/credentials-form.service';

@Component({
  selector: 'yv-password-form-page',
  template: `
    <form [formGroup]="formService.form">
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          formControlName="password"
          placeholder="Password"
          (keydown.enter)="next()"
          yvFocus
        />
      </div>
    </form>
    <p>Hint: type "password"</p>
    <div *ngIf="showValidationError" class="alert alert-danger">
      The field is required.
    </div>
    <button class="btn btn-primary w-100" [disabled]="showValidationError" (click)="next()">Login</button>
  `,
  styles: []
})
export class PasswordFormPageComponent {

  constructor(
    protected formService: CredentialsFormService
  ) {}

  get control() {
    return this.formService.form.get('password');
  }

  get showValidationError() {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  next() {
    if (!this.control.invalid) {
      this.formService.login();
    }
  }
}
