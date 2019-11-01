import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TreatAsNumberDirective } from './directives/treat-as-number.directive';
import { ProductFormEditComponent } from './components/product-form-edit/product-form-edit.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { UserGuard } from './guard/user.guard';
import { TokenService } from './inteceptor/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductFormComponent,
    TreatAsNumberDirective,
    ProductFormEditComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
  ],
  providers: [
		ProductService,
		UserService,
		UserGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenService,
			multi: true
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
