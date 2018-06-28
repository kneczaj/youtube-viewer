import { Component } from '@angular/core';

@Component({
  selector: 'yv-root',
  template: `
    <div class="main-container d-flex flex-column">
      <header class="flex-shrink-0">
        <div class="navbar navbar-dark bg-dark shadow-sm navbar-expand">
          <div class="container">
            <div class="navbar-nav mr-auto">
              <a [routerLink]="['/']" class="navbar-brand">
                <strong>Youtube Viewer</strong>
              </a>
            </div>
            <div class="navbar-nav">
              <div class="nav-item mr-3">
                <router-outlet name="navbar"></router-outlet>
              </div>
              <div class="nav-item">
                <router-outlet name="navbar2"></router-outlet>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main role="main" class="d-flex flex-column">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {}
