import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LandingComponent } from './components/pages/landing/landing.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'store', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
