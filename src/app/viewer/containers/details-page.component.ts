import { Component, OnInit } from '@angular/core';
import {Video} from '../models/video';
import {Observable} from 'rxjs';
import {VideosProviderService} from '../services/videos-provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'yv-details-page',
  template: `
    <div class="container">
      <div *ngIf="(video$ | async) as video">
        <section class="my-3">
          <yv-video-player [video]="video"></yv-video-player>
          <h2>{{video.title}}</h2>
        </section>
        <hr>
        <section class="my-2">
          <h4 class="mb-2">Tags</h4>
          <div>
            <span *ngFor="let tag of video.tags" class="badge">
              {{tag}}
            </span>
          </div>
        </section>
        <hr>
        <section class="my-2">
          <h4 class="mb-2">Description</h4>
          <div>{{ video.description }}</div>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .badge {
      color: #fff;
      background-color: #777;
      margin-right: 0.3rem;
      cursor: default;
    }
  `]
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
