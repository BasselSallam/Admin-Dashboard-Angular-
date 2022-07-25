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
  constructor(private firestore:FirestoreHandlerService,private router:Router,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }
  onSubmit(values:{}){
    this.firestore.addData(values)
    alert('Product Added Successfully!')
    this.router.navigateByUrl('/products')
    
  }

}
