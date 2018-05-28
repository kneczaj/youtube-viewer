import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class CredentialsFormService {

  private _loginFailed = false;

  get loginFailed() {
    return this._loginFailed;
  }

  public form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    const fb = new FormBuilder();
    this.form = fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login() {
    this._loginFailed = !this.authenticationService.login(this.form.value);
    this.form.reset();
    if (!this._loginFailed) {
      this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
