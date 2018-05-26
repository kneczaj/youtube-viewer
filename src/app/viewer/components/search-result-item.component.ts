import {Component, Input} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-result-item',
  template: `
    <div class="row">
      <img src="{{item.thumbnailUrl}}"/>
      <div>{{item.title}}</div>
    </div>
  `,
  styles: []
})
export class SearchResultItemComponent {
  @Input() item: Video;
}
