import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }


  getCatalog(): Observable<{categories: Category[], products: Product[]}> {
    return this.http.get<{categories: Category[], products: Product[]}>(`${environment.apiUrl}/db`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }

  removeProduct(id) {
    return this.http.delete(`${environment.apiUrl}/products/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, category);
  }

  removeCategory(id) {
    return this.http.delete(`${environment.apiUrl}/categories/${id}`);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(`${environment.apiUrl}/categories/${category.id}`, category);
  }
}
