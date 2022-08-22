import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser/iuser';
import { UsersService } from 'src/app/Services/users.service';
import { AuthService } from './../../../Services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  errormessage: string = ''

  constructor(private AuthService: AuthService, private UsersService: UsersService, private Router: Router) { }

  Register(form: any) {
    let info: Iuser = form.value
    console.log(info)
    this.AuthService.Register(info.email, info.password)
      .then(fire => {
        console.log(fire);
        this.errormessage = ''
        this.UsersService.AddUser(fire.user!.uid, info.username).then(() => {
          this.Router.navigate(['/admin/login'])
        })
      })
      .catch(e => {
        console.log(e);
        this.errormessage = e.message
      })
  }


  ngOnInit(): void {
  }

}