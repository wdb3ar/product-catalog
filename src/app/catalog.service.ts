import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Category } from './category';
import { Product } from './product';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  private handleError<T> (result?: T) {
    return (error: any): Observable<T> => {
      alert('Server Error');
      return of(result as T);
    };
  }


  getCatalog(): Observable<{categories: Category[], products: Product[]}> {
    return this.http.get<{categories: Category[], products: Product[]}>(`${environment.apiUrl}/db`)
    .pipe(
      catchError(this.handleError<{categories: Category[], products: Product[]}>({categories: [], products: []}))
    )
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`)
    .pipe(
      catchError(this.handleError<Category[]>())
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product)   
    .pipe(
      catchError(this.handleError<Product>())
    );
  }

  removeProduct(id: Number) {
    return this.http.delete(`${environment.apiUrl}/products/${id}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${environment.apiUrl}/products/${product.id}`, product)
    .pipe(
      catchError(this.handleError<Product>())
    );
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, category)
    .pipe(
      catchError(this.handleError<Category>())
    );
  }

  removeCategory(id) {
    return this.http.delete(`${environment.apiUrl}/categories/${id}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(`${environment.apiUrl}/categories/${category.id}`, category)
    .pipe(
      catchError(this.handleError<Category>())
    );
  }
}
