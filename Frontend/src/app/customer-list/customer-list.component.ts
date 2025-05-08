import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customerList = [
    { id: 1, name: 'John Doe', age: '10', nic: '123456789V', address: '123 Main St', gender: 'male' },
    { id: 2, name: 'Jane Smith', age: '20', nic: '987654321V', address: '456 Elm St', gender: 'female' },
  ];
}
