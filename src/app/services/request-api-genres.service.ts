import { map } from 'rxjs/operators';
import { Genre } from './../model/series.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllGenres } from '../model/genres.model';

@Injectable({
  providedIn: 'root'
})
export class RequestApiGenresService {
  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllGenresMovie(): Observable<Genre[]> {
    return this.http.get<AllGenres>(`${this.apiUrl}genre/movie/list?api_key=${this.key}&language=fr-FR`).pipe(
      map((allGenres: AllGenres) => allGenres.genres)
    )
  }

  findAllGenresSeries(): Observable<Genre[]> {
    return this.http.get<AllGenres>(`${this.apiUrl}genre/tv/list?api_key=${this.key}&language=fr-FR`).pipe(
      map((allGenres: AllGenres) => allGenres.genres)
    )
  }
}