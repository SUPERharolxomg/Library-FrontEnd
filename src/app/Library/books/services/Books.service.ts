import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.URL_Back; 

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/Books`).pipe(
      catchError(error => {
        console.error('Error en la solicitud de libros:', error);
        return throwError(() => new Error('Error en la solicitud de libros'));
      })
    );
  }
}
