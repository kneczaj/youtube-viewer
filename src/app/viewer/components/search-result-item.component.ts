import {Component, HostListener, Input} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-result-item',
  template: `
    <div class="d-flex flex-row result">
      <a [routerLink]="detailsRouterLink" class="item">
        <img src="{{item.thumbnailUrl}}"/>
      </a>
      <a [routerLink]="detailsRouterLink" class="item">
        <h6>{{item.title}}</h6>
      </a>
    </div>
  `,
  styleUrls: ['./search-result-item.component.sass']
})
export class SearchResultItemComponent {
  @Input() item: Video;

  get detailsRouterLink() {
    return ['/', 'viewer', 'details', this.item.id];
  }
}
