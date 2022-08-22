import { Component, Input, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from '@firebase/util';
import { FirestoreHandlerService } from 'src/app/Services/firestore-handler.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class EditProductComponent implements OnInit {
  colorsList: string[] = []
  storageList: string[] = []
  highlightsList: string[] = []
  resetColorValue: string = ''
  resetStorageValue: string = ''
  resetHighlightValue: string = ''
  constructor(private firestore: FirestoreHandlerService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit(values: {}, id: string) {
    this.firestore.addData(values, id)
    alert('Product Added Successfully!')
    this.router.navigateByUrl('/products')
    this.colorsList = []

  }
  pushColors(color: string) {
    this.colorsList.push(color)
    console.log(this.colorsList);
    this.resetColorValue = ''

  }
  pushStorage(storage: string) {
    this.storageList.push(storage)
    console.log(this.storageList);
    this.resetStorageValue = ''

  }
  pushHighlights(highlight: string) {
    this.highlightsList.push(highlight)
    console.log(this.highlightsList);
    this.resetHighlightValue = ''

  }

}
