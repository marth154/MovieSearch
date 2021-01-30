import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllMovies, Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class RequestApiMoviesService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllMoviesByKeyword(keyword: string): Observable<AllMovies> {
    return this.http.get<AllMovies>(`${this.apiUrl}search/movie?api_key=${this.key}&query=${keyword}&include_adult=true`)
  }

  findMoviesById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}movie/${id}?api_key=${this.key}`) 
  }
}
