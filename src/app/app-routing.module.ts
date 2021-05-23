import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { ApiComponent } from './Api/Api.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent },
  { path : 'contactus', component : ContactusComponent},
  { path : 'Api' , component : ApiComponent},
  { path : 'users', component : UsersComponent},
  { path : 'users/:id', component : UserDetailsComponent},
  { path : 'products', component : ProductsComponent, children : [
    {path: 'laptops',component : LaptopsComponent},
    {path: 'mobiles', component : MobilesComponent, children: [
      {path : 'viewmobiles', component : ViewmobilesComponent},
      {path : 'addnewmobile', component : AddnewmobileComponent},
      {path : '', redirectTo : '/products/mobiles/viewmobiles', pathMatch : 'full'}
    ]},
    {path: 'televisions', component : TelevisionsComponent},
    {path: '', redirectTo : '/products/laptops', pathMatch : 'full'}
  ]},
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path : "**", component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
