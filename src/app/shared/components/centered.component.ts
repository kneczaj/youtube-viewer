import {Component} from '@angular/core';

@Component({
  selector: 'yv-centered',
  template: `
    <div class="container justify-content-center">
      <div class="yv-content row justify-content-center text-center">
        <div class="col-md-8">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .yv-content {
      margin-top: 20%;
    }
  `]
})
export class CenteredComponent {}
