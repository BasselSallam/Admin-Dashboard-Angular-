import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class UserdataService {

  postsCollection: AngularFirestoreCollection<any>;

  data: Observable<any[]>;

  posts: Observable<any[]>;

  constructor(private readonly firestore: AngularFirestore) {

    this.postsCollection = firestore.collection<any>('User');

    this.data = firestore.collection('User').valueChanges({ idField: 'eventId' });

    this.posts = firestore.collection('User').valueChanges({ idField: 'eventId' });

  }

  getData() {

    return this.data;

  }

  getPosts() {

    return this.posts;

  }

  addPost(postData: string, id: any) {

    this.postsCollection.doc(id).update({ postData: postData });

  }

}
