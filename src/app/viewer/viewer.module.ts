import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPageComponent } from './containers/search-results-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: SearchResultsPageComponent
    }]),
  ],
  declarations: [
    SearchResultsPageComponent
  ],
  providers: []
})
export class ViewerModule {}
