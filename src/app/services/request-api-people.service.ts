import { People, AllPeople } from './../model/people.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestApiPeopleService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllPeopleByKeyword(keyword: string): Observable<People[]> {
    return this.http.get<AllPeople>(`${this.apiUrl}search/person?api_key=${this.key}&query=${keyword}`).pipe(
      map((allPeople: AllPeople) => allPeople.results)
    );
  }

  findPeopleById(id: number): Observable<People> {
    return this.http.get<People>(`${this.apiUrl}person/${id}?api_key=${this.key}`);
  }

  getPopularPeople(): Observable<People[]> {
    return this.http.get<AllPeople>(`${this.apiUrl}person/popular?api_key=${this.key}&language=fr-FR`).pipe(
      map((allPeople: AllPeople) => allPeople.results)
    );
  }
}
