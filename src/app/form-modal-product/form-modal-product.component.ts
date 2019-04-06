import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product';
import { Category } from '../category';
import { CatalogService } from '../catalog.service';


@Component({
  selector: 'app-form-modal-product',
  templateUrl: './form-modal-product.component.html',
  styleUrls: ['./form-modal-product.component.scss']
})
export class FormModalProductComponent {

  @ViewChild('content') content: ElementRef;

  product: Product;
  modalReference: any;

  @Input() categories: Category[];
  @Output() onAdded = new EventEmitter<Product>();
  @Output() onUpdated = new EventEmitter<Product>();

  constructor(private modalService: NgbModal, private catalogService: CatalogService) { }

  open(product: Product = null): void {
    if (product) {
      this.product = {...product};
    } else {
      this.product = new Product();
    }
    this.modalReference = this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' });
  }

  save(): void {
    if (this.product.id) {
      this.catalogService.updateProduct(this.product).subscribe(resultProduct => {
        this.onUpdated.emit(resultProduct);
        this.modalReference.close();
      });
    } else {
      this.catalogService.addProduct(this.product).subscribe(resultProduct => {
        this.onAdded.emit(resultProduct);
        this.modalReference.close();
      });
    }
  }

}