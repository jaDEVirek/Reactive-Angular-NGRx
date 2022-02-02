import {Component} from '@angular/core';
import {Movie, MoviesService} from "../services/services";
import {Observable, async} from "rxjs";
import {Store} from "@ngrx/store";


@Component({
  template: `
    <li *ngFor="let movie of movies$ | async">
      {{ movie.name }}
    </li>
  `
})

export class MoviesPageComponent {
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }
}
