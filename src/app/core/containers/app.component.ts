import { Component } from '@angular/core';

@Component({
  selector: 'yv-root',
  template: `
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container justify-content-between">
          <a href="" class="navbar-brand align-items-center">
            <strong>Youtube Viewer</strong>
          </a>
        </div>
      </div>
    </header>
    <main role="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {}
