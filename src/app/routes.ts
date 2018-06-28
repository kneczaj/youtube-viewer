import { Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {NotFoundPageComponent} from './core/containers/not-found-page.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'viewer',
  pathMatch: 'full'
}, {
  path: 'viewer',
  loadChildren: './viewer/viewer.module#ViewerModule',
  canActivate: [AuthGuard]
}, {
  path: 'not-found',
  component: NotFoundPageComponent
}, {
  path: '**',
  redirectTo: 'not-found',
  pathMatch: 'full'
}];
