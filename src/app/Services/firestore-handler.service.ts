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
    this.items = firestore.collection('Products').valueChanges({ idField: 'eventId' });
  }

  getItems() {
    return this.items;
  }

  getItemByID(id:string){
    return this.firestore.doc(`Products/${id}`).valueChanges();
  }
    

  addData(obj:{}) {
    const create = this.firestore.collection('Products')
    create.add(obj)
  }

  updateData(id: string , value:{}) {
    const create = this.firestore.collection('Products');
    create.doc(id).update(value)
  }


  deleteData(id: string) {
    const create = this.firestore.collection('Products');
    create.doc(id).delete()

  }
}
