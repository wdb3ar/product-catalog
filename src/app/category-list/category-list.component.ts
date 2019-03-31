import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  categories: Category[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.catalogService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
