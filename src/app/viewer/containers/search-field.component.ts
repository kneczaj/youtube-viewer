import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'yv-search-field',
  template: `
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search" [(ngModel)]="query">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" (click)="search()">
          <img width="24px" src="assets/img/search.svg">
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class SearchFieldComponent implements OnInit {

  protected query: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.query = this.route.parent.snapshot.children
      .find(child => child.outlet === 'primary')
      .params['query'];
  }

  search() {
    if (!this.query) {
      return;
    }
    this.router.navigate(['viewer', 'search', this.query]);
  }
}
