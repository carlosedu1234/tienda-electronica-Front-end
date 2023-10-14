import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducListComponent } from './componets/produc-list/produc-list.component';
import { ProductFormComponent } from './componets/product-form/product-form.component';

const routes: Routes = [
  {
    title: 'lista-products',
    path:"",
    component: ProducListComponent
  }, 
  {
    title: 'lista-product',
    path:"product",
    component: ProducListComponent
  },
  {
    title: 'Crear',
    path:"product/create",
    component: ProductFormComponent
  }, 
  {
    title: 'Editar',
    path:"product/editar/:id",
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
