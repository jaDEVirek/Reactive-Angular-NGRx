import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { ActualNewsComponent } from './actual-news/actual-news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const appRoutes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    ActualNewsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
