import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '', redirectTo: 'videos', pathMatch: 'full'
}, {
  path: 'videos',
  loadChildren: './viewer/viewer.module#ViewerModule'
}, {
  path: '**', redirectTo: 'videos', pathMatch: 'full'
}];
