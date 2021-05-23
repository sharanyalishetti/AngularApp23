import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ApiComponent } from './Api/Api.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewmobilesComponent } from './viewmobiles/viewmobiles.component';
import { AddnewmobileComponent } from './addnewmobile/addnewmobile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FooterComponent,
    LaptopsComponent,
    MobilesComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    ApiComponent,
    UsersComponent,
    UserDetailsComponent,
    ViewmobilesComponent,
    AddnewmobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
