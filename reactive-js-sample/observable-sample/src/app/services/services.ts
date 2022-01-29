import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


export class Movie {

}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor (private http: HttpClient) {}

  getAll() {
    return this.http.get('/movies');
  }
}
