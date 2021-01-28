import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiSerieService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllSerieByKeyword(keyword: string): Observable<AllSeries> {
    return this.http.get<AllSeries>(`${this.apiUrl}search/tv?api_key=${this.key}&query=${keyword}`)
  }
}
