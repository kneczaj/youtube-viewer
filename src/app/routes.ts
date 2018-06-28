import { Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {NotFoundPageComponent} from './core/containers/not-found-page.component';
import {ProfileMenuPageComponent} from './auth/containers/profile-menu-page.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'viewer',
  pathMatch: 'full'
}, {
  path: 'viewer',
  canActivate: [AuthGuard],
  children: [{
    path: '',
    outlet: 'navbar2',
    component: ProfileMenuPageComponent
  }, {
    path: '',
    loadChildren: './viewer/viewer.module#ViewerModule',
  }]
}, {
  path: 'not-found',
  children: [{
    path: '',
    component: NotFoundPageComponent
  }, {
    path: '',
    outlet: 'navbar2',
    component: ProfileMenuPageComponent
  }]
}, {
  path: '**',
  redirectTo: 'not-found',
  pathMatch: 'full'
}];
