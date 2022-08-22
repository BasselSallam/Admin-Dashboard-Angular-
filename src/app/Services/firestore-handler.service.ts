import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreHandlerService {
  items: Observable<any[]>
  constructor(public firestore: AngularFirestore) {
    this.items = firestore.collection('Mobile').valueChanges({ idField: 'eventId' });
  }

  getItems() {
    return this.items;
  }

  getItemByID(id:string){
    return this.firestore.doc(`Mobile/${id}`).valueChanges();
  }
    

  addData(obj:{},id: string) {
    const create = this.firestore.collection('Mobile').doc(id)
    create.set(obj)
  }

  updateData(id: string , value:{}) {
    const create = this.firestore.collection('Mobile');
    create.doc(id).update(value)
  }


  deleteData(id: string) {
    const create = this.firestore.collection('Mobile');
    create.doc(id).delete()

  }
}
