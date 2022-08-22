import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  errormessage: string = ''
  constructor(private AuthService: AuthService, private Router: Router) { }

  ngOnInit(): void {
  }
  Login(form: any) {
    this.AuthService.Login(form.value.email, form.value.password).then((x) => {
      console.log(x);
      this.Router.navigate(['products'])
    }).catch((e) => {
      console.log(e);
      this.errormessage = "The password is invalid or the user does not have a password"
    })
  }
  switch(){
    this.Router.navigateByUrl('admin/register')
  }
  

}
