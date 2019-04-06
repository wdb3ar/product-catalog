import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalCategoryComponent } from './form-modal-category.component';

describe('FormModalCategoryComponent', () => {
  let component: FormModalCategoryComponent;
  let fixture: ComponentFixture<FormModalCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
