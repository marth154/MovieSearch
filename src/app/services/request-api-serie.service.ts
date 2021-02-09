import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllSeries, Serie } from '../model/series.model';

@Injectable({
  providedIn: 'root'
})
export class RequestApiSerieService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllSerieByKeyword(keyword: string): Observable<Serie[]> {
    return this.http.get<AllSeries>(`${this.apiUrl}search/tv?api_key=${this.key}&query=${keyword}`).pipe(
      map((allSeries: AllSeries) => allSeries.results)
    )
  }

  findSerieById(id: number): Observable<Serie> {
    return this.http.get<Serie>(`${this.apiUrl}tv/${id}?api_key=${this.key}`) 
  }

  getPopularSeries(): Observable<Serie[]>{
    return this.http.get<AllSeries>(`${this.apiUrl}tv/popular?api_key=${this.key}`).pipe(
      map((allSeries: AllSeries) => allSeries.results)
    )
  }

  getTopRatedSeries(): Observable<Serie[]>{
    return this.http.get<AllSeries>(`${this.apiUrl}tv/top_rated?api_key=${this.key}`).pipe(
      map((allSeries: AllSeries) => allSeries.results)
    )
  }

  getAiringTodaySeries(): Observable<Serie[]>{
    return this.http.get<AllSeries>(`${this.apiUrl}tv/airing_today?api_key=${this.key}`).pipe(
      map((allSeries: AllSeries) => allSeries.results)
    )
  }

  getAiringNowSeries(): Observable<Serie[]>{
    return this.http.get<AllSeries>(`${this.apiUrl}tv/on_the_air?api_key=${this.key}`).pipe(
      map((allSeries: AllSeries) => allSeries.results)
    )
  }
}
