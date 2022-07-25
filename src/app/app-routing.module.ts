import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './Component/add-product/add-product.component';
import { MainComponent } from './Component/main/main.component';
import { ProductlistComponent } from './Component/productlist/productlist.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { UpdateProductComponent } from './Component/update-product/update-product.component';
import { AuthGuard } from './Guard/auth.guard';



const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('src/app/Component/admin-registration/admin-registration.module').then(m => m.AdminRegistrationModule)
  },
  {
    path: '', component: MainComponent,canActivate:[AuthGuard] ,children: [
      {path: 'profile' , component:ProfilePageComponent},
      { path: 'products', component: ProductlistComponent },
      { path: 'add', component: EditProductComponent },
      { path: 'edit/:prdID', component: UpdateProductComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
