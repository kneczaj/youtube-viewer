import { Component } from '@angular/core';

@Component({
  selector: 'yv-empty-results-page',
  template: `
    <yv-centered>
      <h1 class="mb-4">What you're looking for?</h1>
      <yv-search-field></yv-search-field>
    </yv-centered>
  `,
  styles: [`:host { flex-basis: 100%; }`]
})
export class EmptyResultsPageComponent {}
