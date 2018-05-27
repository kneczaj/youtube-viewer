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
import { SearchFieldComponent } from './containers/search-field.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      outlet: 'navbar',
      component: SearchFieldComponent
    }, {
      path: 'search/:query', component: SearchResultsPageComponent
    }, {
      path: 'details/:id',
      component: DetailsPageComponent
    }]),
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    SearchResultsPageComponent,
    SearchResultItemComponent,
    VideoPlayerComponent,
    DetailsPageComponent,
    SearchFieldComponent
  ],
  providers: [VideosProviderService]
})
export class ViewerModule {}
