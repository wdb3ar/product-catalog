import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

const catalogRoutes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'category-list', component: CategoryListComponent }
];

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'catalog', component: CatalogPageComponent, children: catalogRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
