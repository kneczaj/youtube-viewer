import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './containers/search-results-page.component';
import {RouterModule} from '@angular/router';
import {VideosProviderService} from './services/videos-provider.service';
import { SearchResultItemComponent } from './components/search-result-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: SearchResultsPageComponent
    }]),
    HttpClientModule
  ],
  declarations: [
    SearchResultsPageComponent,
    SearchResultItemComponent
  ],
  providers: [VideosProviderService]
})
export class ViewerModule {}
