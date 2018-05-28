import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './containers/search-results-page.component';
import {RouterModule} from '@angular/router';
import {VideosProviderService} from './services/videos-provider.service';
import { SearchResultItemComponent } from './components/search-result-item.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { VideoPlayerComponent } from './components/video-player.component';
import { DetailsPageComponent } from './containers/details-page.component';
import {SharedModule} from '../shared/shared.module';
import { SearchFieldComponent } from './containers/search-field.component';
import {FormsModule} from '@angular/forms';
import { EmptyResultsPageComponent } from './containers/empty-results-page.component';

export function videoProviderFactory(http: HttpClient) {
  return new VideosProviderService('AIzaSyBNIenM9jEVoDDg2_ik6JKdS_KR0RQw-5Y', http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      outlet: 'navbar',
      component: SearchFieldComponent
    }, {
      path: 'search', component: EmptyResultsPageComponent
    }, {
      path: 'search/', component: EmptyResultsPageComponent
    }, {
      path: 'search/:query', component: SearchResultsPageComponent
    }, {
      path: 'details/:id',
      component: DetailsPageComponent
    }, {
      path: '**', redirectTo: 'search', pathMatch: 'full'
    }]),
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    SearchResultsPageComponent,
    SearchResultItemComponent,
    VideoPlayerComponent,
    DetailsPageComponent,
    SearchFieldComponent,
    EmptyResultsPageComponent
  ],
  providers: [{
    provide: VideosProviderService,
    useFactory: videoProviderFactory,
    deps: [HttpClient]
  }]
})
export class ViewerModule {}
