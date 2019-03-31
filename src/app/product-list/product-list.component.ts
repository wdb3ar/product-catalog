import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { Category } from '../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.catalogService.getCatalog().subscribe(data => {
      this.products = data.products;
      this.categories = data.categories;
    });
  }

}
