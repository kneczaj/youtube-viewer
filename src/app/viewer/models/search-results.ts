import {Video} from './video';

export class SearchResults {
  videos: Video[];
  nextPageToken: string;

  constructor(payload: any) {
    this.nextPageToken = payload.nextPageToken;
    this.videos = (payload.items && payload.items.map(itemPayload => new Video(itemPayload))) || [];
  }

  /**
   * Use this to add search results of a next page
   */
  update(newResults: SearchResults) {
    this.nextPageToken = newResults.nextPageToken;
    this.videos = this.videos.concat(newResults.videos);
  }
}
