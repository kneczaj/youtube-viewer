export declare class VideoPayload {
  snippet: any;
  id: {} | string;
}

export class Video {
  id: string;
  title: string;
  thumbnailUrl: string;

  constructor(payload: VideoPayload) {
    this.id = payload.id['videoId'] || payload.id;
    this.title = payload.snippet.title;
    this.thumbnailUrl = payload.snippet.thumbnails.default.url;
  }
}
