import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Library/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './Library/cart/cart.component';
import { UserComponent } from './Library/users/users.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent }, 
  { path: 'Sign-in', component: SignInComponent }, 
  { path: 'Cart', component: CartComponent },
  { path: 'User',component:UserComponent},
  { path: '**', redirectTo: 'Login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
