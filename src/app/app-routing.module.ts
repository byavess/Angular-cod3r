import { ProducDeleteComponent } from './components/product/produc-delete/produc-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { BebidasCrudComponent } from './views/bebidas-crud/bebidas-crud.component';
import { BebidasDeleteComponent } from './components/bebidas/bebidas-delete/bebidas-delete.component';
import { BebidasUpdateComponent } from './components/bebidas/bebidas-update/bebidas-update.component';
import { BebidastCreatComponent } from './components/bebidas/bebidas-creat/bebidas-creat.component';


const routes: Routes = [
  {
  path:"",
  component: HomeComponent

},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreatComponent
  
},
{
  path: "products/update/:id",
component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
component: ProducDeleteComponent
},



{
  path:"bebidas",
  component: BebidasCrudComponent
},
{
  path: "bebidas/create",
  component: BebidastCreatComponent
  
},
{
  path: "bebidas/update/:id",
component: BebidasUpdateComponent
},
{
  path: "bebidas/delete/:id",
component: BebidasDeleteComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
    
})
export class AppRoutingModule { }

