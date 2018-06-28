import { Component } from '@angular/core';
import {Video} from '../models/video';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'yv-details-page',
  template: `
    <div class="container">
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
export class DetailsPageComponent {

  get video(): Video {
    return this.route.snapshot.data['video'];
  }

  constructor(
    private route: ActivatedRoute
  ) {}
}
