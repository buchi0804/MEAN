import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../api';

@Component({
  selector: 'app-summary-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-cards.html',
  styleUrl: './summary-cards.scss'
})
export class SummaryCards implements OnInit {
  totalSales = 0;
  totalOrders = 0;
  totalCategories = 0;
  totalCustomers = 0;

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getSales().subscribe(sales => {
      this.totalOrders = sales.length;
      this.totalSales = sales.reduce((sum, s) => sum + (s.amount || 0), 0);
    });
    this.api.getCategories().subscribe(categories => {
      this.totalCategories = categories.length;
    });
    this.api.getCustomers().subscribe(customers => {
      this.totalCustomers = customers.length;
    });
  }
}
