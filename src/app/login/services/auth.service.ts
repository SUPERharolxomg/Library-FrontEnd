import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.URL_Back ; 
  private userId: string | null = null; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/auth/login', { email, password }).pipe(
      catchError(error => {
        if (error.status === 400) {
          alert(error.error.error);
        } else {
          console.error('Error en la solicitud:', error);
        }
        return throwError(() => new Error('Error en la solicitud de registro'));
      })
    );
  }

  getUserId(): string | null {
    return this.userId || localStorage.getItem('userId');
  }

  register(email: string, password: string, name: string, phone: string, address: string):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/auth/register', { email, password, name, phone, address
  }).pipe(
    catchError(error => {
      if (error.status === 400) {
        alert(error.error.error);
        } else {
          console.error('Error en la solicitud:', error);
          }
        return throwError(() => new Error('Error en la solicitud de registro'));
        })
      );
  }
}
