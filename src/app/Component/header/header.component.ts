import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/Services/userdata.service';
import { AuthService } from './../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDataList: any[] = []
  constructor(private AuthService: AuthService, private router: Router, public userData: UserdataService) { }

  ngOnInit(): void {

    this.userData.getData().subscribe(data => {
      this.userDataList = data

    });
  }
  Logout() {

    this.AuthService.Logout().then(() => { })
    this.router.navigate(['admin/login'])

  }
}
