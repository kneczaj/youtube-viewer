import { Component, OnInit } from '@angular/core';
import {Video} from '../models/video';
import {Observable} from 'rxjs';
import {VideosProviderService} from '../services/videos-provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'yv-details-page',
  template: `
    <div *ngIf="(video$ | async) as video">
      <yv-video-player [video]="video"></yv-video-player>
      <h2>{{video.title}}</h2>
      <h4>Tags</h4>
      <div>
        <span *ngFor="let tag of video.tags">
          {{tag}}
        </span>
      </div>
      <h4>Description</h4>
      <div>{{ video.description }}</div>
    </div>
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
