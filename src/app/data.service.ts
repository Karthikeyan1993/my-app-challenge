import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Data} from './shared/model';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly MOCK_URL = 'assets/mock.json';

  constructor(private http: HttpClient) {
  }

  getData = (): Observable<Data[]> => this.http.get<Data[]>(`${this.MOCK_URL}`)
    .pipe(map(response => response),
      catchError(err => {
        console.log('Error while retrieving data', err);
        return throwError(err);
      }))
}
