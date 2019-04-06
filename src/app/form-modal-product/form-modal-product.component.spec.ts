import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalProductComponent } from './form-modal-product.component';

describe('FormModalProductComponent', () => {
  let component: FormModalProductComponent;
  let fixture: ComponentFixture<FormModalProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
