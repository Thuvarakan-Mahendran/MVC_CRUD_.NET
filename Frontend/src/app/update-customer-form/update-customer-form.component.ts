import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { CustomerService } from '../Services/customer.service';

@Component({
  selector: 'app-update-customer-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-customer-form.component.html',
  styleUrl: './update-customer-form.component.css'
})
export class UpdateCustomerFormComponent {
  constructor(private customerService: CustomerService) {}
  customer = {
      id: '',
      name: '',
      age: '',
      nic: '',
      address: ''
    };
  
    formSubmitted = false;
    successMessage = '';

    ngOnInit() {
      const selected = this.customerService.getCustomer();
      if (selected) {
        this.customer = { ...selected };
      }
    }
  
    onSubmit(form: NgForm) {
      this.formSubmitted = true;
  
      if (form.invalid) return;
  
      console.log('Form submitted:', this.customer);
  
       alert('Customer Updated successfully');
  
      form.resetForm();
      this.formSubmitted = false;
    }
}
