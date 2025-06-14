import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../api';

@Component({
  selector: 'app-recent-sales-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-sales-table.html',
  styleUrl: './recent-sales-table.scss'
})
export class RecentSalesTable implements OnInit {
  sales: any[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getSales().subscribe(sales => {
      // Sort by date descending
      this.sales = sales.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }
}
