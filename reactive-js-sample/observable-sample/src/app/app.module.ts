import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxjsSamplerComponent} from './rxjs-sampler/rxjs-sampler.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RxjsSamplerComponent,
    MoviePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
