import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // User:Observable<firebase.default.User>
  User: Observable<firebase.default.User | null>

  constructor(private Fireauth: AngularFireAuth) {

    this.User = Fireauth.user

  }

  Register(email: string, password: string) {

    return this.Fireauth.createUserWithEmailAndPassword(email, password)

  }

  Login(email: string, password: string) {

    return this.Fireauth.signInWithEmailAndPassword(email, password)

  }

  Logout() {

    return this.Fireauth.signOut()

  }

}