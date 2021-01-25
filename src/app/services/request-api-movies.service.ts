import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllMovies } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class RequestApiMoviesService {

  constructor(private http: HttpClient) { }

  findAllMoviesByKeyword(keyword: string): Observable<AllMovies> {
    return this.http.get<AllMovies>(`https://api.themoviedb.org/3/search/movie?api_key=89481d4469f0f699ac04327380e53f95&query=${keyword}`)
  }

}
