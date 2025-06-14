import { Component } from '@angular/core';
import { SummaryCards } from '../summary-cards/summary-cards';
import { SalesByCategoryChart } from '../sales-by-category-chart/sales-by-category-chart';
import { SalesByRegionChart } from '../sales-by-region-chart/sales-by-region-chart';
import { RecentSalesTable } from '../recent-sales-table/recent-sales-table';
import { AddSaleForm } from '../add-sale-form/add-sale-form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SummaryCards,
    SalesByCategoryChart,
    SalesByRegionChart,
    RecentSalesTable,
    AddSaleForm
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {}
