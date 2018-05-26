import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './containers/search-results-page.component';
import {RouterModule} from '@angular/router';
import {VideosProviderService} from './services/videos-provider.service';
import { SearchResultItemComponent } from './components/search-result-item.component';
import {HttpClientModule} from '@angular/common/http';
import { VideoPlayerComponent } from './components/video-player.component';
import { DetailsPageComponent } from './containers/details-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: SearchResultsPageComponent
    }, {
      path: ':id',
      component: DetailsPageComponent
    }]),
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    SearchResultsPageComponent,
    SearchResultItemComponent,
    VideoPlayerComponent,
    DetailsPageComponent
  ],
  providers: [VideosProviderService]
})
export class ViewerModule {}
