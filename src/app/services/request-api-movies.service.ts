import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllMovies, Movie } from '../model/movie.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestApiMoviesService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllMoviesByKeyword(keyword: string): Observable<Movie[]> {
    return this.http.get<AllMovies>(`${this.apiUrl}search/movie?api_key=${this.key}&query=${keyword}&include_adult=true`).pipe(
      map((allMovies: AllMovies) => allMovies.results)
    );
  }

  findMoviesById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}movie/${id}?api_key=${this.key}`);
  }

  findMovieByGenre(id: number): Observable<AllMovies> {
    return this.http.get<AllMovies>(`${this.apiUrl}discover/movie?api_key=${this.key}&with_genres=${id}`);
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<AllMovies>(`${this.apiUrl}movie/popular?api_key=${this.key}`).pipe(
      map((allMovies: AllMovies) => allMovies.results)
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<AllMovies>(`${this.apiUrl}movie/top_rated?api_key=${this.key}`).pipe(
      map((allMovies: AllMovies) => allMovies.results)
    );
  }

  getNowMovies(): Observable<Movie[]> {
    return this.http.get<AllMovies>(`${this.apiUrl}movie/now_playing?api_key=${this.key}`).pipe(
      map((allMovies: AllMovies) => allMovies.results)
    );
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<AllMovies>(`${this.apiUrl}movie/upcoming?api_key=${this.key}`).pipe(
      map((allMovies: AllMovies) => allMovies.results)
    );
  }
}
