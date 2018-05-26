export declare class VideoPayload {
  snippet: any;
  id: {} | string;
}

export class Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  tags: string[];
  description: string;

  constructor(payload: VideoPayload) {
    this.id = payload.id['videoId'] || payload.id;
    this.title = payload.snippet.title;
    this.thumbnailUrl = payload.snippet.thumbnails.default.url;
    this.tags = payload.snippet.tags;
    this.description = payload.snippet.description;
  }
}
