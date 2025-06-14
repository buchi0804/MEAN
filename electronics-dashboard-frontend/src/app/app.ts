import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SummaryCards } from './summary-cards/summary-cards';
import { Dashboard } from './dashboard/dashboard';
import { SalesByCategoryChart } from './sales-by-category-chart/sales-by-category-chart';
import { SalesByRegionChart } from './sales-by-region-chart/sales-by-region-chart';
import { RecentSalesTable } from './recent-sales-table/recent-sales-table';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SummaryCards,
    Dashboard,
    SalesByCategoryChart,
    SalesByRegionChart,
    RecentSalesTable
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'dashboard';
}
