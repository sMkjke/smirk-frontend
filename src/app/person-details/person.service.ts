import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonModel } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPerson(id: number): Observable<PersonModel> {
    const url = `${this.baseUrl}/persons/${id}`;
    return this.http.get<PersonModel>(url);
  }
}
