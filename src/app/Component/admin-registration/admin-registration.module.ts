import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



const Routes: Routes = [

  { path: 'login', component: AdminLoginComponent },
  { path: 'register', component: AdminRegisterComponent },

]

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    FormsModule
  ]
})
export class AdminRegistrationModule { }
