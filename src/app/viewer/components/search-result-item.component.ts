import {Component, Input} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-result-item',
  template: `
    <a [routerLink]="item.id">
      <img src="{{item.thumbnailUrl}}"/>
      <div>{{item.title}}</div>
    </a>
  `,
  styles: []
})
export class SearchResultItemComponent {
  @Input() item: Video;
}
