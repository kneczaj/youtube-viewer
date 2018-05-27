import { Component } from '@angular/core';

@Component({
  selector: 'yv-empty-results-page',
  template: `
    <div class="container">
      <p class="mt-3">
        No query -> no results :) Please use the search field on top.
      </p>
    </div>
  `,
  styles: []
})
export class EmptyResultsPageComponent {}
