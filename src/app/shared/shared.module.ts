import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SanitizeUrlPipe
  ],
  exports: [
    SanitizeUrlPipe
  ]
})
export class SharedModule { }
