import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, pluck} from 'rxjs/operators';
import {Video} from '../models/video';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosProviderService {

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Video[]> {
    return this.http.get<{}>('assets/stubs/search-query-results.json').pipe(
      pluck('items'),
      map((itemsPayload: Array<any>) => itemsPayload.map(itemPayload => new Video(itemPayload)))
    );
  }

  details(id: string): Observable<Video> {
    return this.http.get<{}>('assets/stubs/video-details.json').pipe(
      pluck('items'),
      map((itemsPayload: Array<any>) => new Video(itemsPayload[0]))
    );
  }
}
