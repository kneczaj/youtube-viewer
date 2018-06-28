import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'yv-profile-menu-page',
  template: `
    <div class="nav-item dropdown">
      <ng-template [ngIf]="!authService.user">
        <a class="nav-link" [routerLink]="['/login']" [queryParams]="{ returnUrl: router.url }">
          Login
        </a>
      </ng-template>
      <ng-template [ngIf]="authService.user">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
          Welcome {{authService.user}}!
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" (click)="authService.logout()">Logout</a>
        </div>
      </ng-template>
    </div>
  `,
  styles: []
})
export class ProfileMenuPageComponent implements OnInit {

  constructor(
    protected authService: AuthenticationService,
    protected router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
