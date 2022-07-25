import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './Component/blank/blank.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductlistComponent } from './Component/productlist/productlist.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EditProductComponent } from './Component/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './Component/update-product/update-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Component/main/main.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';



@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    HeaderComponent,
    ProductlistComponent,
    EditProductComponent,
    UpdateProductComponent,
    MainComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    Ng2SearchPipeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
