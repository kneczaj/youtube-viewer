import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {VideosProviderService} from '../services/videos-provider.service';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, scan, switchMap, tap} from 'rxjs/operators';
import {SearchResults} from '../models/search-results';
import {Video} from '../models/video';

@Component({
  selector: 'yv-search-results-page',
  template: `
    <div class="container">
      <div *ngFor="let result of results$ | async" class="my-3">
        <yv-search-result-item [item]="result"></yv-search-result-item>
      </div>
      <div *ngIf="loading" class="mt-1"><p>Loading...</p></div>
    </div>
  `,
  styles: [`
    :host {
      overflow-y: auto;
    }
  `]
})
export class SearchResultsPageComponent implements OnInit {

  private loadRequest: Subject<void> = new ReplaySubject<void>(1);

  protected results$: Observable<Video[]>;
  protected loading = false;
  private nextPageToken = null;

  get query() {
    return this.route.snapshot.params['query'];
  }

  constructor(
    private videosProvider: VideosProviderService,
    private route: ActivatedRoute,
    private element: ElementRef
  ) {
    this.results$ = this.loadRequest.pipe(
      tap(() => this.loading = true),
      switchMap(() => this.loadMore()),
      scan((allResults: SearchResults, newResults: SearchResults) => {
        allResults.update(newResults);
        return allResults;
      }, new SearchResults({})),
      tap(results => this.nextPageToken = results.nextPageToken),
      map(results => results.videos),
      tap(() => this.loading = false)
    );
  }

  ngOnInit() {
    this.loadRequest.next();
  }

  @HostListener('scroll')
  onScroll() {
    const element = this.element.nativeElement;
    const scrollToBottomDistance = element.scrollHeight - (element.scrollTop + element.offsetHeight);
    if (scrollToBottomDistance === 0 && !this.loading) {
      this.loadRequest.next();
    }
  }

  private loadMore(): Observable<SearchResults> {
    return this.videosProvider.search(this.query, this.nextPageToken);
  }
}
