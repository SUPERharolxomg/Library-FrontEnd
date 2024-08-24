import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/user.interfaces';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
  user: User = {
    client_name: '',
    phone: '',
    email: '',
    address: ''
  };
  isEditing: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    // Replace with your actual API endpoint to fetch user data
    this.http.get<User>('http://localhost:3000/users/1').subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  enableEditing() {
    this.isEditing = true;
  }

  saveChanges() {
    this.http.patch('http://localhost:3000/users/1', this.user).subscribe(
      (response) => {
        console.log('User information updated successfully', response);
        this.isEditing = false;
      },
      (error) => {
        console.error('Error updating user information', error);
      }
    );
  }
}
