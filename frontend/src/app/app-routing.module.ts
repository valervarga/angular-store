import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'store', component: ProductsComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
