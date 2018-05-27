import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import {FocusDirective} from './directives/focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FocusDirective,
    SanitizeUrlPipe
  ],
  exports: [
    FocusDirective,
    SanitizeUrlPipe
  ]
})
export class SharedModule { }
