import { Component } from '@angular/core';
import {VideosProviderService} from '../services/videos-provider.service';
import {Observable} from 'rxjs';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-results-page',
  template: `
    <div class="container">
      <div *ngFor="let result of results$ | async" class="my-3">
        <yv-search-result-item [item]="result"></yv-search-result-item>
      </div>
    </div>
  `,
  styles: []
})
export class SearchResultsPageComponent {

  results$: Observable<Video[]>;

  constructor(private videosProvider: VideosProviderService) {
    this.results$ = this.videosProvider.search('stub');
  }
}
