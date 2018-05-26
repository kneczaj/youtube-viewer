import { Component, OnInit } from '@angular/core';
import {Video} from '../models/video';
import {Observable} from 'rxjs';
import {VideosProviderService} from '../services/videos-provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'yv-details-page',
  template: `
    <yv-video-player *ngIf="video$" [video]="video$ | async"></yv-video-player>
  `,
  styles: []
})
export class DetailsPageComponent implements OnInit {

  video$: Observable<Video>;

  constructor(
    private route: ActivatedRoute,
    private videoProvider: VideosProviderService
  ) {}

  ngOnInit() {
    this.video$ = this.videoProvider.details(this.route.snapshot.params['id']);
  }
}
