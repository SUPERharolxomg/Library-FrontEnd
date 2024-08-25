import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interfaces';
import { UserService } from './services/user.service';
import { AuthService } from '../../login/services/auth.service';
import { Router } from '@angular/router';

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
  userId: string | null = null;
  showDeleteDialog: boolean = false;

  constructor(
    private userService: UserService, 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.authService.getUserId();
    if (this.userId) {
      this.getUserInfo(this.userId);
    } else {
      console.error('No se pudo encontrar el ID del usuario.');
    }
  }

  getUserInfo(userId: string) {
    this.userService.getUserInfo(userId).subscribe(
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
    if (this.userId) {
      this.userService.updateUserInfo(this.userId, this.user).subscribe(
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
  confirmDeleteAccount() {
    const confirmDelete = confirm('¿Eliminar cuenta?');
    if (confirmDelete) {
      this.deleteAccount();
    }
  }
  
  deleteAccount() {
    if(this.userId){
    this.userService.deleteUser(this.userId).subscribe(() => {
      alert('Cuenta eliminada exitosamente.');
      this.router.navigate(['/Login']);
    }, error => {
      alert('Error al eliminar la cuenta.');
    });
  }
} 
}
