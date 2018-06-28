import { Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';

export const routes: Routes = [{
  path: '',
  redirectTo: 'viewer',
  pathMatch: 'full'
}, {
  path: 'viewer',
  loadChildren: './viewer/viewer.module#ViewerModule',
  canActivate: [AuthGuard]
}, {
  path: 'login',
  loadChildren: './auth/auth.module#AuthModule'
}, {
  path: '**', redirectTo: 'viewer', pathMatch: 'full'
}];
