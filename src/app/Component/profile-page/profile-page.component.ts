import { Component, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';

import { UserdataService } from 'src/app/Services/userdata.service';



@Component({

  selector: 'app-profile-page',

  templateUrl: './profile-page.component.html',

  styleUrls: ['./profile-page.component.scss']

})

export class ProfilePageComponent implements OnInit {

  userDataList: any[] = [];

  userPostsList: any[] = [];

  @ViewChild('newPost') newPost: ElementRef<HTMLInputElement> = {} as ElementRef;

  constructor(public userData: UserdataService) {



  }



  ngOnInit(): void {

    this.userData.getData().subscribe(data => {

      this.userDataList = data

      // console.log(data)

    });

    this.userData.getPosts().subscribe(post => {

      this.userPostsList = post

      // console.log(post)

    });



  }



  postData(text: any,id:any) {

    this.userData.addPost(text,id);

    this.newPost.nativeElement.value = '';

    console.log(id);

  }



}