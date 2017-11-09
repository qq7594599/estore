import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { UserService } from './user.service';
import { SessionService } from './session.service';
import { ProductService } from './product.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { PricePipe } from './price.pipe';
import { ScmdPipe } from './scmd.pipe';
import { ShoppingCartService } from './shopping-cart.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products/:category', component: ProductsComponent },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ProductsComponent,
    FooterComponent,
    PricePipe,
    ScmdPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [UserService, SessionService, ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
