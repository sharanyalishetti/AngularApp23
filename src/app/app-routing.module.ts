import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent },
  { path : 'contactus', component : ContactusComponent},
  { path : 'products', component : ProductsComponent, children : [
    {path: 'laptops',component : LaptopsComponent},
    {path: 'mobiles', component : MobilesComponent},
    {path: 'televisions', component : TelevisionsComponent},
    {path: '', redirectTo : '/products/laptops', pathMatch : 'full'}
  ]},
  {path : '' , redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
