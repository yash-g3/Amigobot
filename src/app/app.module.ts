import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SignComponent } from './components/sign/sign.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    SignComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
