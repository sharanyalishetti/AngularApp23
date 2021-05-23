import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AdminComponent,
    ViewproductsComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule

  ]
})
export class AdminModule { }
