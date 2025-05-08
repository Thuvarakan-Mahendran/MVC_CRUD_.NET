import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  constructor(private router: Router) {}
  customer = [
    { id: 1, name: 'John Doe', age: '10', nic: '123456789V', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: '20', nic: '987654321V', address: '456 Elm St' },
    { id: 3, name: 'Alice Johnson', age: '30', nic: '456789123V', address: '789 Oak St' },
    { id: 4, name: 'Bob Brown', age: '40', nic: '321654987V', address: '101 Pine St' },
    { id: 5, name: 'Charlie Davis', age: '50', nic: '654321789V', address: '202 Maple St' },
    { id: 6, name: 'Diana Prince', age: '60', nic: '789123456V', address: '303 Birch St' },
    { id: 7, name: 'Ethan Hunt', age: '70', nic: '159753486V', address: '404 Cedar St' },
    { id: 8, name: 'Fiona Green', age: '80', nic: '753159852V', address: '505 Spruce St' },
    { id: 9, name: 'George White', age: '90', nic: '951753486V', address: '606 Fir St' },
    { id: 10, name: 'Hannah Black', age: '100', nic: '852963741V', address: '707 Willow St' },
    { id: 11, name: 'Ian Gray', age: '110', nic: '369258147V', address: '808 Cherry St' },
    { id: 12, name: 'Jack Blue', age: '120', nic: '147258369V', address: '909 Ash St' },
    { id: 13, name: 'Kathy Red', age: '130', nic: '258369147V', address: '1010 Walnut St' },
    { id: 14, name: 'Liam Yellow', age: '140', nic: '369147258V', address: '1111 Chestnut St' },
    { id: 15, name: 'Mia Purple', age: '150', nic: '741852963V', address: '1212 Poplar St' },
    { id: 16, name: 'Noah Orange', age: '160', nic: '852741963V', address: '1313 Hickory St' },
    { id: 17, name: 'Olivia Pink', age: '170', nic: '963852741V', address: '1414 Sycamore St' },
    { id: 18, name: 'Paul Cyan', age: '180', nic: '159753258V', address: '1515 Redwood St' },
    { id: 19, name: 'Quinn Magenta', age: '190', nic: '753159456V', address: '1616 Fir St' },
    { id: 20, name: 'Ryan Indigo', age: '200', nic: '951357852V', address: '1717 Cedar St' }
  ];

  customerList: { id: number; name: string; age: string; nic: string; address: string; }[] = [];
  itemsPerPage: number | 'all' = 5;
  searchTerm: string = '';

  ngOnInit() {
    this.onItemsPerPageChange();
  }

  onItemsPerPageChange() {
    if(this.itemsPerPage === 'all') {
      this.customerList = this.customer;
    }else{
      this.customerList = this.customer.slice(0, Number(this.itemsPerPage));
    }    
  }

  onSearch() {
    if (this.searchTerm) {
      this.customerList = this.customer.filter(customer => 
        customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.onItemsPerPageChange();
    }
  }

  editCustomer(customer: any) {
    // Example: open a modal or navigate to edit form
    console.log('Edit customer:', customer);
    // You can use Angular Router for navigation:
    this.router.navigate(['/edit', customer.id]);
  }
}
