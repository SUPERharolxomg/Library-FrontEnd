import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Library/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './Library/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'Sign-in', component: SignInComponent }, 
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
