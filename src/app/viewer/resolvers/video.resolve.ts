import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Video} from '../models/video';
import {Observable, of} from 'rxjs';
import {VideosProviderService} from '../services/videos-provider.service';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';
import {isNull} from 'util';

@Injectable()
export class VideoResolve implements Resolve<Video> {
  constructor(
    private videoProvider: VideosProviderService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    snapshot: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.videoProvider.details(route.params['id']).pipe(
      tap(video => isNull(video) && this.router.navigate(['not-found']))
    );
  }
}
