import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreHandlerService } from 'src/app/Services/firestore-handler.service';
import { IProducts } from 'src/app/models/products/products.module';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  id: string = ''
  itemByID: any
  colorsList: string[] = []
  storageList: string[] = []
  highlightsList: string[] = []
  resetColorValue: string = ''
  resetStorageValue: string = ''
  resetHighlightValue: string = ''
  constructor(private firestore: FirestoreHandlerService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(url => {
      this.id = url.get('prdID') ? (url.get('prdID')) as string : ''
      console.log(this.id);
      this.firestore.getItemByID(this.id).subscribe(item => {
        this.itemByID = item
        this.colorsList = this.itemByID.colors;
        this.storageList = this.itemByID.storage;
        this.highlightsList = this.itemByID.highlights;
      })
    })
    console.log(this.itemByID);
  }

  pushColors(color: string) {
    this.colorsList.push(color);
    this.resetColorValue = ''
    console.log(this.colorsList);
  }
  removeColors(color: string) {
    const create = this.colorsList.filter(data => data !== color);
    this.colorsList = create;
    this.resetColorValue = ''
    console.log(this.colorsList);
  }



  pushStorage(storage: string) {
    this.storageList.push(storage);
    this.resetStorageValue = ''
  }
  removeStorage(storage: string) {
    const create = this.storageList.filter(data => data !== storage);
    this.storageList = create;
    this.resetStorageValue = ''
    console.log(this.storageList);
  }


  pushHighlights(highlight: string) {
    this.highlightsList.push(highlight);
    this.resetHighlightValue = ''
  }
  removeHighlights(highlight: string) {
    const create = this.storageList.filter(data => data !== highlight);
    this.highlightsList = create;
    this.resetHighlightValue = ''
    console.log(this.highlightsList);
  }



  onSubmit(values: {}) {
    this.firestore.updateData(this.id, values)
    console.log(this.id);
    alert('Product Updated Successfully!')
    this.router.navigateByUrl('/products')

  }

}
