import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../api';

@Component({
  selector: 'app-sales-by-region-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-by-region-chart.html',
  styleUrl: './sales-by-region-chart.scss'
})
export class SalesByRegionChart implements OnInit {
  regions: { name: string; percent: number; color: string }[] = [];
  regionColors = ['#4f46e5', '#a21caf', '#f59e42', '#10b981', '#f43f5e'];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getSales().subscribe(sales => {
      const regionMap: { [key: string]: number } = {};
      let total = 0;
      sales.forEach(sale => {
        regionMap[sale.region] = (regionMap[sale.region] || 0) + (sale.amount || 0);
        total += sale.amount || 0;
      });
      const regionNames = Object.keys(regionMap);
      this.regions = regionNames.map((name, i) => ({
        name,
        percent: total ? Math.round((regionMap[name] / total) * 100) : 0,
        color: this.regionColors[i % this.regionColors.length]
      }));
    });
  }

  getStrokeDasharray(percent: number): string {
    const circumference = 2 * Math.PI * 50;
    return `${(percent / 100) * circumference} ${circumference}`;
  }

  getStrokeDashoffset(index: number): number {
    const circumference = 2 * Math.PI * 50;
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += (this.regions[i].percent / 100) * circumference;
    }
    return -offset;
  }
}
