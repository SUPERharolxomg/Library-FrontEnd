import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interfaces';
import { environment } from '../../../../environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.URL_Back;

  constructor(private http: HttpClient) {}

  getUserInfo(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  updateUserInfo(userId: string, userData: User): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/${userId}`, userData);
  }
  deleteUser(userId: string) {
    return this.http.delete(`${this.apiUrl}/users/${userId}`);
  }  
}
