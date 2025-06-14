import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCategoryChart } from './sales-by-category-chart';

describe('SalesByCategoryChart', () => {
  let component: SalesByCategoryChart;
  let fixture: ComponentFixture<SalesByCategoryChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByCategoryChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByCategoryChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
