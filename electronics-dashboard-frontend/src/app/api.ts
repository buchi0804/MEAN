import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/sales`);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customers`);
  }

  addSale(sale: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/sales`, sale);
  }
}
