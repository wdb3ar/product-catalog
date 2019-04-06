import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../category';
import { CatalogService } from '../catalog.service';


@Component({
  selector: 'app-form-modal-category',
  templateUrl: './form-modal-category.component.html',
  styleUrls: ['./form-modal-category.component.scss']
})
export class FormModalCategoryComponent {

  @ViewChild('content') content: ElementRef;

  category: Category;
  modalReference: any;

  @Output() onAdded = new EventEmitter<Category>();
  @Output() onUpdated = new EventEmitter<Category>();

  constructor(private modalService: NgbModal, private catalogService: CatalogService) { }

  open(category: Category = null): void {
    if (category) {
      this.category = {...category};
    } else {
      this.category = new Category();
    }
    this.modalReference = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save(): void {
    if (this.category.id) {
      this.catalogService.updateCategory(this.category).subscribe(resultCategory => {
        this.onUpdated.emit(resultCategory);
        this.modalReference.close();
      });
    } else {
      this.catalogService.addCategory(this.category).subscribe(resultCategory => {
        this.onAdded.emit(resultCategory);
        this.modalReference.close();
      });
    }
  }

}