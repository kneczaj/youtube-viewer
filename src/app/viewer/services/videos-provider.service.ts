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

  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private apiKey: string, private http: HttpClient) { }

  search(query: string, pageToken: string | null = null): Observable<SearchResults> {
    const pageTokenStr = isNull(pageToken) ? '' : `&pageToken=${pageToken}`;
    const url = `${this.baseUrl}/search?part=snippet&maxResults=50&q=${query}&type=video&key=${this.apiKey}${pageTokenStr}`;
    return this.http.get<{}>(url).pipe(
      map(payload => new SearchResults(payload))
    );
  }

  details(id: string): Observable<Video> {
    return this.http.get<{}>(`${this.baseUrl}/videos?part=snippet&id=${id}&key=${this.apiKey}`).pipe(
      pluck('items'),
      map((itemsPayload: Array<any>) => itemsPayload[0] ? new Video(itemsPayload[0]) : null)
    );
  }
}
