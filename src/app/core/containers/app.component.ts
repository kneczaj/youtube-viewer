import { Component } from '@angular/core';

@Component({
  selector: 'yv-root',
  template: `
    <div class="main-container d-flex flex-column">
      <header class="flex-shrink-0">
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container justify-content-between">
            <a href="" class="navbar-brand align-items-center">
              <strong>Youtube Viewer</strong>
            </a>
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
