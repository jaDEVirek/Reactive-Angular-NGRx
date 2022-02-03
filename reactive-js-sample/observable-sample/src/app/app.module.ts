import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxjsSamplerComponent} from './rxjs-sampler/rxjs-sampler.component';
import { MoviesPageComponent } from './movie-page/movie-page.component';
import {EffectsModule} from "@ngrx/effects";
import {MovieEffects} from "./services/services";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    RxjsSamplerComponent,
    MoviesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([MovieEffects]),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
