import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormModalProductComponent } from './form-modal-product/form-modal-product.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { FormModalCategoryComponent } from './form-modal-category/form-modal-category.component';

import { AboveZeroValidator } from './above-zero.directive';
import { DateMoreToday } from './date-more-today.directive';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductListComponent,
    FormModalProductComponent,
    CategoryListComponent,
    CatalogPageComponent,
    FormModalCategoryComponent,
    AboveZeroValidator,
    DateMoreToday
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(faEdit, faTrashAlt);
  }
}
