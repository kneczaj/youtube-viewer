import {Component, Input} from '@angular/core';
import {Video} from '../models/video';

@Component({
  selector: 'yv-video-player',
  template: `
    <iframe *ngIf="video" [src]="'https://www.youtube.com/embed/' + this.video.id | sanitizeUrl" width="600" height="450"></iframe>
  `,
  styles: []
})
export class VideoPlayerComponent {
  @Input() video: Video;
}
