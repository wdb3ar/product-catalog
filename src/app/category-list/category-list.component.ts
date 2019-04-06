import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Category } from '../category';
import { FormModalCategoryComponent } from '../form-modal-category/form-modal-category.component';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @ViewChild(FormModalCategoryComponent) modal: FormModalCategoryComponent;

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

  onClickEditBtn(category: Category): void {
    this.modal.open(category);
  }

  onClickRemoveBtn(category: Category): void {
    if (confirm(`Вы действительно хотите удалить "${category.name}"?`)) {
      this.catalogService.removeCategory(category.id).subscribe(result => {
        if (result) {
          const index = this.categories.findIndex(item => item.id === category.id);
          if (index > -1) {
            this.categories.splice(index, 1);
          }
        }
      });
    }
  }


  addCategory(category: Category): void {
    this.categories.push(category);
  }

  updateCategory(category: Category): void {
    const index = this.categories.findIndex(item => item.id === category.id);
    if (index > -1) {
      this.categories[index] = category;
    }
  }

}
