import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Api } from '../api';

@Component({
  selector: 'app-add-sale-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-sale-form.html',
  styleUrl: './add-sale-form.scss'
})
export class AddSaleForm {
  sale = {
    product: '',
    category: '',
    customer: '',
    region: '',
    quantity: 1,
    amount: 0,
    date: ''
  };
  categories: string[] = [];
  regions: string[] = [];
  customers: string[] = [];

  constructor(private api: Api) {
    this.api.getCategories().subscribe(cats => this.categories = cats.map(c => c.name));
    this.api.getCustomers().subscribe(custs => {
      this.customers = custs.map(c => c.name);
      this.regions = Array.from(new Set(custs.map(c => c.region)));
    });
  }

  submit() {
    this.api.addSale(this.sale).subscribe(() => {
      alert('Sale added!');
      this.sale = { product: '', category: '', customer: '', region: '', quantity: 1, amount: 0, date: '' };
    });
  }
}
