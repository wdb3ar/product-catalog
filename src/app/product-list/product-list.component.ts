import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { Category } from '../category';
import { FormModalProductComponent } from '../form-modal-product/form-modal-product.component';
import { DateClass } from '../date';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild(FormModalProductComponent) modal: FormModalProductComponent;

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getData();
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.products[index] = product;
    }
  }

  getData(): void {
    this.catalogService.getCatalog().subscribe(data => {
      this.products = data.products;
      this.categories = data.categories;
    });
  }

  getDateSting(dateObj: DateClass) {
    return dateObj ? `${dateObj.year}-${dateObj.month.toString().padStart(2, '0')}-${dateObj.day.toString().padStart(2, '0')}` : ``;
  }

  getCategoryNameById(id: number): string {
    const category = this.categories.find(item => item.id === id);
    return category ? category.name : '';
  }

  onClickEditBtn(product: Product) {
    this.modal.open(product);
  }

  onClickRemoveBtn(product: Product) {
    if (confirm(`Вы действительно хотите удалить "${product.name}"?`)) {
      this.catalogService.removeProduct(product.id).subscribe(result => {
        if (result) {
          const index = this.products.findIndex(item => item.id === product.id);
          if (index > -1) {
            this.products.splice(index, 1);
          }
        }
      });
    }
  }

}
