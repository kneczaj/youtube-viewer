import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import {FocusDirective} from './directives/focus.directive';
import {CenteredComponent} from './components/centered.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CenteredComponent,
    FocusDirective,
    SanitizeUrlPipe
  ],
  exports: [
    CenteredComponent,
    FocusDirective,
    SanitizeUrlPipe
  ]
})
export class SharedModule { }
