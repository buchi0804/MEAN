import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByRegionChart } from './sales-by-region-chart';

describe('SalesByRegionChart', () => {
  let component: SalesByRegionChart;
  let fixture: ComponentFixture<SalesByRegionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesByRegionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesByRegionChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
