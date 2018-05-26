export class Video {
  title: string;
  thumbnailUrl: string;

  constructor(payload: any) {
    this.title = payload.snippet.title;
    this.thumbnailUrl = payload.snippet.thumbnails.default.url;
  }
}
