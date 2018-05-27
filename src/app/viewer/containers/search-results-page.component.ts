import {Component, OnInit} from '@angular/core';
import {VideosProviderService} from '../services/videos-provider.service';
import {Observable} from 'rxjs';
import {Video} from '../models/video';
import {ActivatedRoute} from '@angular/router';

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
export class SearchResultsPageComponent implements OnInit {

  results$: Observable<Video[]>;

  constructor(
    private videosProvider: VideosProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.results$ = this.videosProvider.search(this.route.snapshot.params['query']);
  }
}
