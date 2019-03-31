import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductListComponent,
    FormModalComponent,
    CategoryListComponent,
    CatalogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
