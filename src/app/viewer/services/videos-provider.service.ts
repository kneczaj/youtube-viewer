import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, pluck} from 'rxjs/operators';
import {Video} from '../models/video';
import {Observable} from 'rxjs';
import {SearchResults} from '../models/search-results';
import {isNull} from 'util';

@Injectable({
  providedIn: 'root'
})
export class VideosProviderService {

  constructor(private http: HttpClient) { }

  search(query: string, pageToken: string | null = null): Observable<SearchResults> {
    const pageTokenStr = isNull(pageToken) ? '' : `-${pageToken}`;
    return this.http.get<{}>(`assets/stubs/search-query-results${pageTokenStr}.json`).pipe(
      map(payload => new SearchResults(payload))
    );
  }

  details(id: string): Observable<Video> {
    return this.http.get<{}>('assets/stubs/video-details.json').pipe(
      pluck('items'),
      map((itemsPayload: Array<any>) => new Video(itemsPayload[0]))
    );
  }
}
