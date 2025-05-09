import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private selectedCustomer: any;
  // private apiUrl = 'http://localhost:3000/api/customers';

  // constructor(private http: HttpClient) { }

  // getCustomers(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  // addCustomer(customer: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, customer);
  // }

  // updateCustomer(customer: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${customer.id}`, customer);
  // }

  // deleteCustomer(customerId: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${customerId}`);
  // }

  setCustomer(customer: any) {
    this.selectedCustomer = customer;
  }

  getCustomer() {
    return this.selectedCustomer;
  }
}