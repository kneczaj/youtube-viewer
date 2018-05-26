import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './containers/app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
