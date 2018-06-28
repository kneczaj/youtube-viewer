import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  template: ``
})
export class LogoutPageComponent implements OnInit {

  get returnUrl(): string {
    return this.route.snapshot.queryParams['returnUrl'];
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigateByUrl(this.returnUrl || '/');
  }
}
