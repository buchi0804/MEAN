import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../api';

@Component({
  selector: 'app-sales-by-category-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-by-category-chart.html',
  styleUrl: './sales-by-category-chart.scss'
})
export class SalesByCategoryChart implements OnInit {
  categories: string[] = [];
  sales: number[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getSales().subscribe(sales => {
      const categoryMap: { [key: string]: number } = {};
      sales.forEach(sale => {
        categoryMap[sale.category] = (categoryMap[sale.category] || 0) + (sale.amount || 0);
      });
      this.categories = Object.keys(categoryMap);
      this.sales = Object.values(categoryMap);
    });
  }
}
