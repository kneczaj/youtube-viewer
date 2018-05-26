import { Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';

export const routes: Routes = [{
  path: '', redirectTo: 'videos', pathMatch: 'full'
}, {
  path: 'videos',
  loadChildren: './viewer/viewer.module#ViewerModule',
  canActivate: [AuthGuard]
}, {
  path: 'login',
  loadChildren: './auth/auth.module#AuthModule'
}, {
  path: '**', redirectTo: 'videos', pathMatch: 'full'
}];
