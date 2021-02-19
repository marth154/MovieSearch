import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './../model/email.model';

@Injectable({
  providedIn: 'root'
})
export class RequestEmailApiService {

  readonly apiUrl = 'http://apilayer.net/api/check';
  readonly key = '4337e20cdb201229c37ec722bf1ebd30';

  constructor(private http: HttpClient) { }

  findEmail(email: string): Observable<Email> {
    return this.http.get<Email>(`${this.apiUrl}?access_key=${this.key}&email=${email}`)
  }

}
