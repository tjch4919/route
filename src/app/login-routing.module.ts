import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd }            from './auth-gaurd.service';
import { AuthService }          from './auth.service';
import { LoginComponent }       from './login/login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGaurd,
    AuthService
  ]
})
export class LoginRoutingModule {}
