import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllMovies } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class RequestApiMoviesService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly type = 'movie';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllMoviesByKeyword(keyword: string, searching: string): Observable<AllMovies> {
    return this.http.get<AllMovies>(`${this.apiUrl}search/${searching}?api_key=${this.key}&query=${keyword}`)
  }
}
