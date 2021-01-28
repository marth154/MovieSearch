import { AllPeople } from './../models/people.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestApiPeopleService {

  readonly apiUrl = 'https://api.themoviedb.org/3/';
  readonly key = '89481d4469f0f699ac04327380e53f95';

  constructor(private http: HttpClient) { }

  findAllPeopleByKeyword(keyword: string): Observable<AllPeople> {
    return this.http.get<AllPeople>(`${this.apiUrl}search/person?api_key=${this.key}&query=${keyword}`)
  }
}
