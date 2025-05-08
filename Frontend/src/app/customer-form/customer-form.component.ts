import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
  customer = {
    id: '',
    name: '',
    age: '',
    nic: '',
    address: ''
  };

  onSubmit() {
    console.log('Customer Data:', this.customer);
    alert('Customer submitted successfully!');
  }
}
