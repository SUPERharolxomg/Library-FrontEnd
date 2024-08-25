// sign-in.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../login/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
  

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const { email, password, name, phone, address } = this.signInForm?.value;
      this.authService.register(email, password, name, phone, address)
      .subscribe({
        next:(response) => {
          alert("Usuario creado correctamente")
        this.router.navigate(['/Login']);
        },
        error:(error)=>{
          console.error('Login error',error);
        }
      });
    }
  }
}
