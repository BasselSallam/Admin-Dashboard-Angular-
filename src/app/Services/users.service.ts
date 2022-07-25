import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class UsersService {

  // User:Observable<any[]>
  constructor(private Firestore: AngularFirestore) {
    // this.User=Firestore.collection("Users").valueChanges()

  }

  AddUser(id: any, name: string) {

    return this.Firestore.doc("User/" + id).set({

      userName: name

    })

  }

}