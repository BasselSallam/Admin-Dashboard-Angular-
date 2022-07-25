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
  itemByID:any
  constructor(private firestore: FirestoreHandlerService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(url => {
      this.id = url.get('prdID') ? (url.get('prdID')) as string : ''
      console.log(this.id);
     this.firestore.getItemByID(this.id).subscribe(item =>{this.itemByID=item
      })
      console.log(this.itemByID);
      
     
      
    })
  }
  onSubmit(values: {}) {
    this.firestore.updateData(this.id, values)
    console.log(this.id);
    alert('Product Updated Successfully!')
    this.router.navigateByUrl('/products')

  }

}
