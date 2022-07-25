import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/models/products/products.module';
import { FirestoreHandlerService } from './../../Services/firestore-handler.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  searchPrd:string =''
  prdList:any[] = []
  constructor(private firestore:FirestoreHandlerService,private Router:Router) { 
  
  }

  ngOnInit(): void {
    this.firestore.getItems().subscribe(products =>{this.prdList=products
      console.log(products);})

    
  }
  ngOnChanges():void{

  }
  deleteItem(id:string){
    this.firestore.deleteData(id)
    console.log(id);
    
  }
  updateItem(id:string){
    this.Router.navigateByUrl(`edit/${id}`)
  }
  editItem(){
    this.Router.navigateByUrl('/edit')
  }

}
