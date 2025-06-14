import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleForm } from './add-sale-form';

describe('AddSaleForm', () => {
  let component: AddSaleForm;
  let fixture: ComponentFixture<AddSaleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSaleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
