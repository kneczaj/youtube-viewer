import {Component, Input} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-result-item',
  template: `
    <div class="d-flex flex-row result">
      <a [routerLink]="item.id" class="item">
        <img src="{{item.thumbnailUrl}}"/>
      </a>
      <a [routerLink]="item.id" class="item">
        <h6>{{item.title}}</h6>
      </a>
    </div>
  `,
  styleUrls: ['./search-result-item.component.sass']
})
export class SearchResultItemComponent {
  @Input() item: Video;
}
