import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {CredentialsFormService} from '../services/credentials-form.service';

@Injectable()
export class PasswordGuard implements CanActivate {

  constructor(
    private formService: CredentialsFormService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.formService.form.value['login']) {
      return true;
    }
    this.router.navigate(['login', 'user']);
    return false;
  }
}
