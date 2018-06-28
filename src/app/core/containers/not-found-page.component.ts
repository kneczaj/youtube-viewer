import { Component } from '@angular/core';

@Component({
  selector: 'yv-not-found-page',
  template: `
    <yv-centered>
      <h1 class="mb-4">Something has gone wrong</h1>
      <h2 class="mb-4">404: Not found</h2>
      <p class="mb-5">Sorry, this page does not exist!</p>
      <a yvFocus routerLink="/" class="btn btn-primary">
        Go to the main page
      </a>
    </yv-centered>
  `,
  styles: [`:host { flex-basis: 100%; }`]
})
export class NotFoundPageComponent {}
