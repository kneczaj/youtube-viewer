import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './core/containers/app.component';
import {CoreModule} from './core/core.module';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RouterModule.forRoot(routes),
    AuthModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
